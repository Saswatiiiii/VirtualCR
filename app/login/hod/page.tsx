"use client";

import { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

type Department = {
  id: string;
  name: string;
  hod: string;
  hodEmail: string;
  courses: number;
  batches: number;
};

const STORAGE_KEY = "hoi_departments";

const defaultDepartments: Department[] = [
  {
    id: "CSE",
    name: "Computer Science & Engineering",
    hod: "Not Assigned",
    hodEmail: "",
    courses: 0,
    batches: 0,
  },
  {
    id: "ECE",
    name: "Electronics & Communication",
    hod: "Not Assigned",
    hodEmail: "",
    courses: 0,
    batches: 0,
  },
];

export default function HODLogin() {
  const [departments, setDepartments] =
    useState<Department[]>(defaultDepartments);

  const [hodName, setHodName] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  // ==================================================
  // LOAD DEPARTMENTS CREATED BY HOI
  // ==================================================
  useEffect(() => {
    const loadDepartments = () => {
      const savedDepartments = localStorage.getItem(STORAGE_KEY);

      if (!savedDepartments) {
        setDepartments(defaultDepartments);
        return;
      }

      try {
        const parsedDepartments: Department[] =
          JSON.parse(savedDepartments);

        if (Array.isArray(parsedDepartments)) {
          setDepartments(parsedDepartments);
        }
      } catch {
        console.error("Could not load departments.");
        setDepartments(defaultDepartments);
      }
    };

    // Load immediately
    loadDepartments();

    // Listen for updates from other parts of the app
    const handleDepartmentsUpdated = () => {
      loadDepartments();
    };

    window.addEventListener(
      "departmentsUpdated",
      handleDepartmentsUpdated
    );

    // Also listen for localStorage changes
    window.addEventListener("storage", loadDepartments);

    return () => {
      window.removeEventListener(
        "departmentsUpdated",
        handleDepartmentsUpdated
      );

      window.removeEventListener("storage", loadDepartments);
    };
  }, []);

  // ==================================================
  // LOGIN
  // ==================================================
  const handleLogin = () => {
    setError("");

    const name = hodName.trim();
    const passwordValue = password.trim();

    if (!name) {
      setError("Please enter your HOD name.");
      return;
    }

    if (!departmentId) {
      setError("Please select your department.");
      return;
    }

    if (!passwordValue) {
      setError("Please enter your password.");
      return;
    }

    const department = departments.find(
      (dept) => dept.id === departmentId
    );

    if (!department) {
      setError("Selected department was not found.");
      return;
    }

    // Check whether an HOD has been assigned
    if (
      !department.hod ||
      department.hod === "Not Assigned"
    ) {
      setError(
        "No HOD has been assigned to this department yet."
      );
      return;
    }

    // Check HOD name
    if (
      department.hod.toLowerCase() !== name.toLowerCase()
    ) {
      setError(
        "The entered HOD name does not match the assigned HOD."
      );
      return;
    }

    /*
      For now we are only using a frontend demo password.
      Later we can connect this to Firebase / MongoDB authentication.
    */

    if (passwordValue !== "123456") {
      setError("Incorrect password.");
      return;
    }

    // Save logged-in HOD information
    const hodUser = {
      name: department.hod,
      email: department.hodEmail,
      departmentId: department.id,
      departmentName: department.name,
    };

    localStorage.setItem(
      "hod_user",
      JSON.stringify(hodUser)
    );

    // Redirect to department dashboard
    window.location.href = `/dashboard/hod/${department.id.toLowerCase()}`;
  };

  return (
    <main className="min-h-screen bg-[#080d1f] text-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-6xl items-center justify-center">

        <div className="w-full max-w-lg">

          {/* Heading */}
          <div className="mb-8 text-center">

            <p className="mb-3 text-sm font-medium text-blue-400 sm:text-base">
              Head of Department
            </p>

            <h1 className="text-3xl font-bold sm:text-4xl">
              HOD Login
            </h1>

            <p className="mt-3 text-sm text-slate-400 sm:text-base">
              Enter your department details to continue.
            </p>

          </div>

          {/* Login Card */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-xl sm:p-8">

            <div className="space-y-5">

              {/* HOD Name */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  HOD Name
                </label>

                <input
                  type="text"
                  value={hodName}
                  onChange={(e) => {
                    setHodName(e.target.value);
                    setError("");
                  }}
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-white/10 bg-white/5
                             px-4 py-3 text-sm text-white outline-none
                             placeholder:text-slate-500
                             focus:border-blue-500 sm:text-base"
                />
              </div>

              {/* Department */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Department
                </label>

                <select
                  value={departmentId}
                  onChange={(e) => {
                    setDepartmentId(e.target.value);
                    setError("");
                  }}
                  className="w-full rounded-lg border border-white/10
                             bg-[#11172d] px-4 py-3 text-sm text-white
                             outline-none focus:border-blue-500
                             sm:text-base"
                >
                  <option value="">
                    Select your department
                  </option>

                  {departments.map((department) => (
                    <option
                      key={department.id}
                      value={department.id}
                    >
                      {department.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Password
                </label>

                <div className="relative">

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError("");
                    }}
                    placeholder="Enter your password"
                    className="w-full rounded-lg border border-white/10
                               bg-white/5 px-4 py-3 pr-12
                               text-sm text-white outline-none
                               placeholder:text-slate-500
                               focus:border-blue-500
                               sm:text-base"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-3 top-1/2
                               -translate-y-1/2
                               text-slate-400
                               transition hover:text-white"
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>

                </div>
              </div>

              {/* Error */}
              {error && (
                <div className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3">
                  <p className="text-sm text-red-400">
                    {error}
                  </p>
                </div>
              )}

              {/* Login Button */}
              <button
                type="button"
                onClick={handleLogin}
                className="w-full rounded-lg bg-blue-600 py-3
                           text-sm font-semibold transition
                           hover:bg-blue-500
                           active:scale-[0.99]
                           sm:text-base"
              >
                Continue
              </button>

            </div>

            {/* Info */}
            <div className="mt-6 border-t border-white/10 pt-5 text-center">

              <p className="text-sm text-slate-400">
                HOD access is assigned by the Head of Institution.
              </p>

            </div>

          </div>

        </div>

      </div>
    </main>
  );
}