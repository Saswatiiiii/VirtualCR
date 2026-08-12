"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Building2,
  UserPlus,
  X,
} from "lucide-react";
import HOISidebar from "../../../../../components/dashboard/HOISidebar";

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

export default function DepartmentDetails({
  params,
}: {
  params: Promise<{ departmentId: string }>;
}) {
  const { departmentId } = use(params);

  const departmentKey = departmentId.toLowerCase();

  const [department, setDepartment] =
    useState<Department | null>(null);

  const [showAssignModal, setShowAssignModal] =
    useState(false);

  const [hodName, setHodName] = useState("");
  const [hodEmail, setHodEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  const [error, setError] = useState("");

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  // =====================================================
  // LOAD DEPARTMENT
  // =====================================================
  useEffect(() => {
    const savedDepartments =
      localStorage.getItem(STORAGE_KEY);

    let departments: Department[] = [];

    if (savedDepartments) {
      try {
        departments = JSON.parse(savedDepartments);
      } catch {
        console.error(
          "Could not load department data."
        );
      }
    }

    /*
     * If there is no saved data yet,
     * use the default departments.
     */
    if (departments.length === 0) {
      departments = defaultDepartments;
    }

    const foundDepartment = departments.find(
      (item) =>
        item.id.toLowerCase() === departmentKey
    );

    setDepartment(foundDepartment ?? null);
  }, [departmentKey]);

  // =====================================================
  // DEPARTMENT NOT FOUND
  // =====================================================
  if (!department) {
    return (
      <div className="min-h-screen bg-[#080d1f] text-white">

        <HOISidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <div className="lg:ml-72">

          <main className="p-4 sm:p-6 lg:p-8">

            <div className="mx-auto max-w-7xl">

              <h1 className="text-2xl font-bold">
                Department not found
              </h1>

              <p className="mt-2 text-sm text-slate-400">
                The department you are looking for does
                not exist.
              </p>

              <Link
                href="/dashboard/hoi/departments"
                className="mt-5 inline-flex items-center gap-2
                           text-blue-400 transition
                           hover:text-blue-300"
              >
                <ArrowLeft size={18} />
                Back to Departments
              </Link>

            </div>

          </main>

        </div>

      </div>
    );
  }

  // =====================================================
  // OPEN HOD MODAL
  // =====================================================
  const openAssignModal = () => {
    setError("");

    /*
     * If an HOD already exists,
     * pre-fill the form.
     */
    if (department.hod !== "Not Assigned") {
      setHodName(department.hod);
      setHodEmail(department.hodEmail);
      setConfirmEmail(department.hodEmail);
    } else {
      setHodName("");
      setHodEmail("");
      setConfirmEmail("");
    }

    setShowAssignModal(true);
  };

  // =====================================================
  // CLOSE HOD MODAL
  // =====================================================
  const closeAssignModal = () => {
    setShowAssignModal(false);

    setHodName("");
    setHodEmail("");
    setConfirmEmail("");

    setError("");
  };

  // =====================================================
  // ASSIGN / CHANGE HOD
  // =====================================================
  const handleAssignHOD = () => {
    setError("");

    const name = hodName.trim();
    const email = hodEmail.trim().toLowerCase();
    const confirm = confirmEmail.trim().toLowerCase();

    // -------------------------
    // VALIDATION
    // -------------------------

    if (!name) {
      setError("Please enter the HOD's name.");
      return;
    }

    if (!email) {
      setError("Please enter the HOD's email address.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!confirm) {
      setError("Please confirm the email address.");
      return;
    }

    if (email !== confirm) {
      setError("Email addresses do not match.");
      return;
    }

    // =================================================
    // LOAD CURRENT DEPARTMENTS
    // =================================================

    const savedDepartments =
      localStorage.getItem(STORAGE_KEY);

    let departments: Department[] = [];

    if (savedDepartments) {
      try {
        departments = JSON.parse(savedDepartments);
      } catch {
        departments = defaultDepartments;
      }
    }

    if (departments.length === 0) {
      departments = defaultDepartments;
    }

    // =================================================
    // UPDATE DEPARTMENT
    // =================================================

    const updatedDepartments =
      departments.map((item) =>
        item.id.toLowerCase() === departmentKey
          ? {
              ...item,
              hod: name,
              hodEmail: email,
            }
          : item
      );

    // =================================================
    // SAVE EVERYTHING
    // =================================================

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updatedDepartments)
    );

    // =================================================
    // UPDATE CURRENT PAGE
    // =================================================

    const updatedDepartment =
      updatedDepartments.find(
        (item) =>
          item.id.toLowerCase() === departmentKey
      );

    if (updatedDepartment) {
      setDepartment(updatedDepartment);
    }

    // =================================================
    // CLOSE MODAL
    // =================================================

    setHodName("");
    setHodEmail("");
    setConfirmEmail("");
    setError("");

    setShowAssignModal(false);
  };

  // =====================================================
  // PAGE
  // =====================================================

  return (
    <div className="min-h-screen bg-[#080d1f] text-white">

      {/* =================================================
          SIDEBAR
      ================================================= */}

      <HOISidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <div className="lg:ml-72">

        <main className="p-4 sm:p-6 lg:p-8">

          <div className="mx-auto max-w-7xl">

            {/* =================================================
                BACK
            ================================================= */}

            <Link
              href="/dashboard/hoi/departments"
              className="mb-6 inline-flex items-center
                         gap-2 text-sm text-slate-400
                         transition hover:text-white"
            >
              <ArrowLeft size={18} />
              Back to Departments
            </Link>

            {/* =================================================
                HEADER
            ================================================= */}

            <div className="mb-8 flex items-start gap-4">

              <div
                className="flex h-14 w-14 shrink-0
                           items-center justify-center
                           rounded-xl bg-blue-600/15"
              >
                <Building2
                  size={28}
                  className="text-blue-400"
                />
              </div>

              <div>

                <p className="text-sm font-medium text-blue-400">
                  {department.id}
                </p>

                <h1 className="mt-1 text-2xl font-bold sm:text-3xl">
                  {department.name}
                </h1>

                <p className="mt-2 text-sm text-slate-400">
                  Department management and HOD assignment.
                </p>

              </div>

            </div>

            {/* =================================================
                OVERVIEW
            ================================================= */}

            <section
              className="grid grid-cols-1 gap-4
                         sm:grid-cols-2"
            >

              {/* COURSES */}

              <div
                className="rounded-2xl border
                           border-white/10 bg-white/5
                           p-5"
              >

                <p className="text-sm text-slate-400">
                  Courses
                </p>

                <p className="mt-2 text-3xl font-bold">
                  {department.courses}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Managed by the HOD
                </p>

              </div>

              {/* BATCHES */}

              <div
                className="rounded-2xl border
                           border-white/10 bg-white/5
                           p-5"
              >

                <p className="text-sm text-slate-400">
                  Active Batches
                </p>

                <p className="mt-2 text-3xl font-bold">
                  {department.batches}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Managed under department courses
                </p>

              </div>

            </section>

            {/* =================================================
                HOD
            ================================================= */}

            <section className="mt-8">

              <h2 className="mb-4 text-xl font-semibold">
                Head of Department
              </h2>

              <div
                className="rounded-2xl border
                           border-white/10 bg-white/5
                           p-6"
              >

                {department.hod !== "Not Assigned" ? (

                  /* ===============================
                     HOD ASSIGNED
                  =============================== */

                  <div
                    className="flex flex-col gap-4
                               sm:flex-row
                               sm:items-center
                               sm:justify-between"
                  >

                    <div>

                      <p className="font-semibold text-white">
                        {department.hod}
                      </p>

                      {department.hodEmail && (
                        <p className="mt-1 text-sm text-slate-400">
                          {department.hodEmail}
                        </p>
                      )}

                      <p className="mt-1 text-sm text-slate-500">
                        Head of {department.name}
                      </p>

                    </div>

                    <button
                      type="button"
                      onClick={openAssignModal}
                      className="rounded-lg
                                 border border-white/10
                                 px-4 py-2
                                 text-sm font-medium
                                 transition
                                 hover:bg-white/5"
                    >
                      Change HOD
                    </button>

                  </div>

                ) : (

                  /* ===============================
                     NO HOD
                  =============================== */

                  <div
                    className="flex flex-col gap-4
                               sm:flex-row
                               sm:items-center
                               sm:justify-between"
                  >

                    <div>

                      <p className="font-semibold">
                        No HOD Assigned
                      </p>

                      <p className="mt-1 text-sm text-slate-400">
                        Assign a Head of Department to
                        manage courses and batches.
                      </p>

                    </div>

                    <button
                      type="button"
                      onClick={openAssignModal}
                      className="inline-flex
                                 items-center
                                 justify-center
                                 gap-2 rounded-lg
                                 bg-blue-600
                                 px-4 py-2
                                 text-sm font-semibold
                                 transition
                                 hover:bg-blue-500"
                    >
                      <UserPlus size={18} />
                      Assign HOD
                    </button>

                  </div>

                )}

              </div>

            </section>

            {/* =================================================
                ACADEMIC STRUCTURE
            ================================================= */}

            <section className="mt-8">

              <h2 className="mb-4 text-xl font-semibold">
                Academic Structure
              </h2>

              <div
                className="rounded-2xl border
                           border-white/10 bg-white/5
                           p-6"
              >

                <div
                  className="grid grid-cols-1
                             gap-5 md:grid-cols-2"
                >

                  {/* COURSES */}

                  <div
                    className="rounded-xl border
                               border-white/10
                               bg-white/[0.03]
                               p-5"
                  >

                    <p className="text-sm text-slate-400">
                      Courses
                    </p>

                    <p className="mt-2 text-2xl font-bold">
                      {department.courses}
                    </p>

                    <p className="mt-2 text-sm text-slate-500">
                      Courses are created and managed
                      by the HOD.
                    </p>

                  </div>

                  {/* BATCHES */}

                  <div
                    className="rounded-xl border
                               border-white/10
                               bg-white/[0.03]
                               p-5"
                  >

                    <p className="text-sm text-slate-400">
                      Active Batches
                    </p>

                    <p className="mt-2 text-2xl font-bold">
                      {department.batches}
                    </p>

                    <p className="mt-2 text-sm text-slate-500">
                      Batches are created under courses
                      by the HOD.
                    </p>

                  </div>

                </div>

                {/* PERMISSION NOTICE */}

                <div
                  className="mt-5 rounded-xl
                             border border-blue-500/20
                             bg-blue-500/5 p-4"
                >

                  <p className="text-sm text-blue-300">

                    <span className="font-semibold">
                      HOI access:
                    </span>{" "}

                    You can view the courses and batches
                    assigned to this department, but you
                    cannot create or delete them.

                  </p>

                </div>

              </div>

            </section>

          </div>

        </main>

      </div>

      {/* =====================================================
          ASSIGN / CHANGE HOD MODAL
      ===================================================== */}

      {showAssignModal && (

        <div
          className="fixed inset-0 z-[100]
                     flex items-center justify-center
                     bg-black/70 px-4
                     backdrop-blur-sm"
        >

          <div
            className="w-full max-w-md
                       rounded-2xl
                       border border-white/10
                       bg-[#11172d]
                       p-6 shadow-2xl"
          >

            {/* MODAL HEADER */}

            <div
              className="mb-6 flex items-start
                         justify-between"
            >

              <div>

                <h2 className="text-xl font-bold">
                  {department.hod !== "Not Assigned"
                    ? "Change HOD"
                    : "Assign HOD"}
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                  Assign a Head of Department to{" "}
                  <span className="text-blue-400">
                    {department.id}
                  </span>
                </p>

              </div>

              <button
                type="button"
                onClick={closeAssignModal}
                className="rounded-lg p-2
                           text-slate-400
                           transition
                           hover:bg-white/10
                           hover:text-white"
                aria-label="Close"
              >
                <X size={20} />
              </button>

            </div>

            {/* FORM */}

            <div className="space-y-5">

              {/* NAME */}

              <div>

                <label
                  className="mb-2 block
                             text-sm font-medium"
                >
                  HOD Full Name
                </label>

                <input
                  type="text"
                  value={hodName}
                  onChange={(e) =>
                    setHodName(e.target.value)
                  }
                  placeholder="Enter HOD's full name"
                  className="w-full rounded-lg
                             border border-white/10
                             bg-white/5
                             px-4 py-3
                             text-sm text-white
                             outline-none
                             placeholder:text-slate-500
                             focus:border-blue-500"
                />

              </div>

              {/* EMAIL */}

              <div>

                <label
                  className="mb-2 block
                             text-sm font-medium"
                >
                  HOD Email
                </label>

                <input
                  type="email"
                  value={hodEmail}
                  onChange={(e) =>
                    setHodEmail(e.target.value)
                  }
                  placeholder="Enter HOD's email"
                  className="w-full rounded-lg
                             border border-white/10
                             bg-white/5
                             px-4 py-3
                             text-sm text-white
                             outline-none
                             placeholder:text-slate-500
                             focus:border-blue-500"
                />

              </div>

              {/* CONFIRM EMAIL */}

              <div>

                <label
                  className="mb-2 block
                             text-sm font-medium"
                >
                  Confirm Email
                </label>

                <input
                  type="email"
                  value={confirmEmail}
                  onChange={(e) =>
                    setConfirmEmail(e.target.value)
                  }
                  placeholder="Confirm HOD's email"
                  className="w-full rounded-lg
                             border border-white/10
                             bg-white/5
                             px-4 py-3
                             text-sm text-white
                             outline-none
                             placeholder:text-slate-500
                             focus:border-blue-500"
                />

              </div>

              {/* ERROR */}

              {error && (
                <div
                  className="rounded-lg
                             border border-red-500/20
                             bg-red-500/10
                             px-4 py-3"
                >

                  <p className="text-sm text-red-400">
                    {error}
                  </p>

                </div>
              )}

              {/* BUTTONS */}

              <div className="flex gap-3 pt-2">

                <button
                  type="button"
                  onClick={closeAssignModal}
                  className="flex-1 rounded-lg
                             border border-white/10
                             px-4 py-3
                             text-sm font-semibold
                             transition
                             hover:bg-white/5"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={handleAssignHOD}
                  disabled={
                    !hodName.trim() ||
                    !hodEmail.trim() ||
                    !confirmEmail.trim()
                  }
                  className="flex-1 rounded-lg
                             bg-blue-600
                             px-4 py-3
                             text-sm font-semibold
                             transition
                             hover:bg-blue-500
                             disabled:cursor-not-allowed
                             disabled:opacity-50"
                >
                  {department.hod !== "Not Assigned"
                    ? "Update HOD"
                    : "Assign HOD"}
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}