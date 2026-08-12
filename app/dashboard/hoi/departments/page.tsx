"use client";

import { useEffect, useState } from "react";
import {
  Plus,
  Building2,
  MoreVertical,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import HOISidebar from "../../../../components/dashboard/HOISidebar";

type Department = {
  id: string;
  name: string;
  hod: string;
  hodEmail: string;
  courses: number;
  batches: number;
};

const initialDepartments: Department[] = [
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

const STORAGE_KEY = "hoi_departments";

export default function DepartmentsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [departmentData, setDepartmentData] =
    useState<Department[]>(initialDepartments);

  const [isLoaded, setIsLoaded] = useState(false);

  // -----------------------------
  // ADD DEPARTMENT MODAL
  // -----------------------------
  const [showAddModal, setShowAddModal] = useState(false);

  const [newDepartmentId, setNewDepartmentId] = useState("");
  const [newDepartmentName, setNewDepartmentName] = useState("");
  const [addError, setAddError] = useState("");

  // -----------------------------
  // HOD MODAL
  // -----------------------------
  const [assigningDepartment, setAssigningDepartment] =
    useState<string | null>(null);

  const [hodName, setHodName] = useState("");
  const [hodEmail, setHodEmail] = useState("");
  const [hodError, setHodError] = useState("");

  // ==================================================
  // LOAD DEPARTMENTS FROM LOCAL STORAGE
  // ==================================================
  useEffect(() => {
    const savedDepartments = localStorage.getItem(STORAGE_KEY);

    if (savedDepartments) {
      try {
        const parsedDepartments: Department[] =
          JSON.parse(savedDepartments);

        setDepartmentData(parsedDepartments);
      } catch {
        console.error("Could not load department data.");
      }
    }

    setIsLoaded(true);
  }, []);

  // ==================================================
  // SAVE DEPARTMENTS
  // ==================================================
  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(departmentData)
    );
  }, [departmentData, isLoaded]);

  // ==================================================
  // ADD DEPARTMENT
  // ==================================================
  const handleAddDepartment = () => {
    setAddError("");

    const id = newDepartmentId.trim().toUpperCase();
    const name = newDepartmentName.trim();

    if (!id) {
      setAddError("Please enter a department code.");
      return;
    }

    if (!name) {
      setAddError("Please enter the department name.");
      return;
    }

    if (!/^[A-Z0-9_-]+$/.test(id)) {
      setAddError(
        "Department code can only contain letters, numbers, - or _."
      );
      return;
    }

    const alreadyExists = departmentData.some(
      (department) => department.id.toLowerCase() === id.toLowerCase()
    );

    if (alreadyExists) {
      setAddError(
        `Department "${id}" already exists.`
      );
      return;
    }

    const newDepartment: Department = {
      id,
      name,
      hod: "Not Assigned",
      hodEmail: "",
      courses: 0,
      batches: 0,
    };

    setDepartmentData((currentDepartments) => [
      ...currentDepartments,
      newDepartment,
    ]);

    // Reset
    setNewDepartmentId("");
    setNewDepartmentName("");
    setAddError("");
    setShowAddModal(false);
  };

  // ==================================================
  // OPEN ADD DEPARTMENT MODAL
  // ==================================================
  const openAddDepartmentModal = () => {
    setNewDepartmentId("");
    setNewDepartmentName("");
    setAddError("");
    setShowAddModal(true);
  };

  // ==================================================
  // CLOSE ADD DEPARTMENT MODAL
  // ==================================================
  const closeAddDepartmentModal = () => {
    setNewDepartmentId("");
    setNewDepartmentName("");
    setAddError("");
    setShowAddModal(false);
  };

  // ==================================================
  // ASSIGN / CHANGE HOD
  // ==================================================
  const handleAssignHOD = () => {
    setHodError("");

    if (!assigningDepartment) return;

    const name = hodName.trim();
    const email = hodEmail.trim().toLowerCase();

    if (!name) {
      setHodError("Please enter the HOD's name.");
      return;
    }

    if (!email) {
      setHodError("Please enter the HOD's email.");
      return;
    }

    if (!email.includes("@")) {
      setHodError("Please enter a valid email address.");
      return;
    }

    setDepartmentData((currentDepartments) =>
      currentDepartments.map((department) =>
        department.id === assigningDepartment
          ? {
              ...department,
              hod: name,
              hodEmail: email,
            }
          : department
      )
    );

    setHodName("");
    setHodEmail("");
    setHodError("");
    setAssigningDepartment(null);
  };

  // ==================================================
  // OPEN HOD MODAL
  // ==================================================
  const openHODModal = (department: Department) => {
    setAssigningDepartment(department.id);
    setHodError("");

    if (department.hod !== "Not Assigned") {
      setHodName(department.hod);
      setHodEmail(department.hodEmail);
    } else {
      setHodName("");
      setHodEmail("");
    }
  };

  // ==================================================
  // CLOSE HOD MODAL
  // ==================================================
  const closeHODModal = () => {
    setAssigningDepartment(null);
    setHodName("");
    setHodEmail("");
    setHodError("");
  };

  return (
    <div className="min-h-screen bg-[#080d1f] text-white">

      {/* ================= SIDEBAR ================= */}
      <HOISidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* ================= MAIN ================= */}
      <div className="lg:ml-72">

        {/* ================= TOP BAR ================= */}
        <header
          className="sticky top-0 z-30 flex h-20
                     items-center justify-between
                     border-b border-white/10
                     bg-[#080d1f]/95 px-4
                     backdrop-blur sm:px-6 lg:px-8"
        >
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="rounded-lg p-2 text-slate-300
                       hover:bg-white/10 lg:hidden"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>

          <div className="hidden lg:block">
            <p className="text-sm text-slate-400">
              Head of Institution
            </p>
          </div>
        </header>

        {/* ================= CONTENT ================= */}
        <main className="p-4 sm:p-6 lg:p-8">

          <div className="mx-auto max-w-7xl">

            {/* ================= HEADER ================= */}
            <div
              className="mb-8 flex flex-col gap-4
                         sm:flex-row sm:items-center
                         sm:justify-between"
            >
              <div>
                <p className="text-sm font-medium text-blue-400">
                  Institution Management
                </p>

                <h1 className="mt-1 text-3xl font-bold sm:text-4xl">
                  Departments
                </h1>

                <p className="mt-2 text-sm text-slate-400 sm:text-base">
                  Create and manage departments and their assigned HODs.
                </p>
              </div>

              {/* ADD DEPARTMENT */}
              <button
                type="button"
                onClick={openAddDepartmentModal}
                className="flex items-center justify-center
                           gap-2 rounded-xl bg-blue-600
                           px-5 py-3 font-semibold
                           transition hover:bg-blue-500"
              >
                <Plus size={20} />
                Add Department
              </button>
            </div>

            {/* ================= DEPARTMENT CARDS ================= */}
            <section
              className="grid grid-cols-1 gap-5
                         md:grid-cols-2 xl:grid-cols-3"
            >

              {departmentData.map((department) => (
                <div
                  key={department.id}
                  className="rounded-2xl border
                             border-white/10 bg-white/5
                             p-5 transition
                             hover:border-blue-500/40"
                >

                  {/* Card Header */}
                  <div className="flex items-start justify-between">

                    <div
                      className="flex h-12 w-12 items-center
                                 justify-center rounded-xl
                                 bg-blue-600/15"
                    >
                      <Building2
                        size={24}
                        className="text-blue-400"
                      />
                    </div>

                    <button
                      type="button"
                      className="rounded-lg p-2
                                 text-slate-400
                                 transition
                                 hover:bg-white/10
                                 hover:text-white"
                      aria-label="Department options"
                    >
                      <MoreVertical size={20} />
                    </button>

                  </div>

                  {/* Department Code */}
                  <p className="mt-5 text-sm font-medium text-blue-400">
                    {department.id}
                  </p>

                  {/* Department Name */}
                  <h2 className="mt-1 text-xl font-semibold">
                    {department.name}
                  </h2>

                  <div className="my-5 border-t border-white/10" />

                  {/* HOD */}
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm text-slate-400">
                      HOD
                    </span>

                    <span className="text-right text-sm font-medium">
                      {department.hod}
                    </span>
                  </div>

                  {/* HOD Email */}
                  {department.hodEmail && (
                    <p className="mt-1 text-right text-xs text-slate-500">
                      {department.hodEmail}
                    </p>
                  )}

                  {/* Assign / Change HOD */}
                  <button
                    type="button"
                    onClick={() => openHODModal(department)}
                    className="mt-3 w-full rounded-lg
                               border border-blue-500/30
                               px-3 py-2 text-sm font-medium
                               text-blue-400 transition
                               hover:bg-blue-500/10"
                  >
                    {department.hod === "Not Assigned"
                      ? "Assign HOD"
                      : "Change HOD"}
                  </button>

                  {/* Courses */}
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-sm text-slate-400">
                      Courses
                    </span>

                    <span className="text-sm font-medium">
                      {department.courses}
                    </span>
                  </div>

                  {/* Batches */}
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-sm text-slate-400">
                      Active Batches
                    </span>

                    <span className="text-sm font-medium">
                      {department.batches}
                    </span>
                  </div>

                  {/* View Department */}
                  <Link
                    href={`/dashboard/hoi/departments/${department.id.toLowerCase()}`}
                    className="mt-5 flex w-full
                               items-center justify-center
                               rounded-xl border border-white/10
                               py-3 text-sm font-semibold
                               transition hover:bg-white/5"
                  >
                    View Department
                  </Link>

                </div>
              ))}

            </section>

          </div>

        </main>
      </div>

      {/* =====================================================
          ADD DEPARTMENT MODAL
      ===================================================== */}
      {showAddModal && (
        <div
          className="fixed inset-0 z-[100]
                     flex items-center justify-center
                     bg-black/70 px-4
                     backdrop-blur-sm"
        >

          <div
            className="w-full max-w-md rounded-2xl
                       border border-white/10
                       bg-[#11172d] p-6 shadow-2xl"
          >

            {/* Modal Header */}
            <div className="mb-6 flex items-start justify-between">

              <div>
                <h2 className="text-xl font-bold">
                  Add Department
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                  Create a new academic department.
                </p>
              </div>

              <button
                type="button"
                onClick={closeAddDepartmentModal}
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

            {/* Department Code */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Department Code
              </label>

              <input
                type="text"
                value={newDepartmentId}
                onChange={(e) =>
                  setNewDepartmentId(
                    e.target.value.toUpperCase()
                  )
                }
                placeholder="e.g. IT"
                className="w-full rounded-lg
                           border border-white/10
                           bg-white/5 px-4 py-3
                           text-sm text-white
                           outline-none
                           placeholder:text-slate-500
                           focus:border-blue-500"
              />
            </div>

            {/* Department Name */}
            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium">
                Department Name
              </label>

              <input
                type="text"
                value={newDepartmentName}
                onChange={(e) =>
                  setNewDepartmentName(e.target.value)
                }
                placeholder="e.g. Information Technology"
                className="w-full rounded-lg
                           border border-white/10
                           bg-white/5 px-4 py-3
                           text-sm text-white
                           outline-none
                           placeholder:text-slate-500
                           focus:border-blue-500"
              />
            </div>

            {/* Error */}
            {addError && (
              <div
                className="mt-4 rounded-lg
                           border border-red-500/20
                           bg-red-500/10
                           px-4 py-3"
              >
                <p className="text-sm text-red-400">
                  {addError}
                </p>
              </div>
            )}

            {/* Buttons */}
            <div className="mt-6 flex gap-3">

              <button
                type="button"
                onClick={closeAddDepartmentModal}
                className="flex-1 rounded-lg
                           border border-white/10
                           py-3 text-sm font-semibold
                           transition hover:bg-white/5"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleAddDepartment}
                className="flex-1 rounded-lg
                           bg-blue-600 py-3
                           text-sm font-semibold
                           transition hover:bg-blue-500"
              >
                Add Department
              </button>

            </div>

          </div>

        </div>
      )}

      {/* =====================================================
          ASSIGN HOD MODAL
      ===================================================== */}
      {assigningDepartment && (
        <div
          className="fixed inset-0 z-[100]
                     flex items-center justify-center
                     bg-black/70 px-4
                     backdrop-blur-sm"
        >

          <div
            className="w-full max-w-md rounded-2xl
                       border border-white/10
                       bg-[#11172d] p-6 shadow-2xl"
          >

            {/* Modal Header */}
            <div className="mb-6 flex items-start justify-between">

              <div>
                <h2 className="text-xl font-bold">
                  {departmentData.find(
                    (department) =>
                      department.id === assigningDepartment
                  )?.hod === "Not Assigned"
                    ? "Assign HOD"
                    : "Change HOD"}
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                  Assign a Head of Department to{" "}
                  <span className="text-blue-400">
                    {assigningDepartment}
                  </span>
                </p>
              </div>

              <button
                type="button"
                onClick={closeHODModal}
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

            {/* HOD Name */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                HOD Name
              </label>

              <input
                type="text"
                value={hodName}
                onChange={(e) => setHodName(e.target.value)}
                placeholder="Enter HOD name"
                className="w-full rounded-lg
                           border border-white/10
                           bg-white/5 px-4 py-3
                           text-sm text-white
                           outline-none
                           placeholder:text-slate-500
                           focus:border-blue-500"
              />
            </div>

            {/* HOD Email */}
            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium">
                HOD Email
              </label>

              <input
                type="email"
                value={hodEmail}
                onChange={(e) => setHodEmail(e.target.value)}
                placeholder="Enter HOD email"
                className="w-full rounded-lg
                           border border-white/10
                           bg-white/5 px-4 py-3
                           text-sm text-white
                           outline-none
                           placeholder:text-slate-500
                           focus:border-blue-500"
              />
            </div>

            {/* Error */}
            {hodError && (
              <div
                className="mt-4 rounded-lg
                           border border-red-500/20
                           bg-red-500/10
                           px-4 py-3"
              >
                <p className="text-sm text-red-400">
                  {hodError}
                </p>
              </div>
            )}

            {/* Buttons */}
            <div className="mt-6 flex gap-3">

              <button
                type="button"
                onClick={closeHODModal}
                className="flex-1 rounded-lg
                           border border-white/10
                           py-3 text-sm font-semibold
                           transition hover:bg-white/5"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleAssignHOD}
                disabled={
                  !hodName.trim() ||
                  !hodEmail.trim()
                }
                className="flex-1 rounded-lg
                           bg-blue-600 py-3
                           text-sm font-semibold
                           transition hover:bg-blue-500
                           disabled:cursor-not-allowed
                           disabled:opacity-50"
              >
                {departmentData.find(
                  (department) =>
                    department.id === assigningDepartment
                )?.hod === "Not Assigned"
                  ? "Assign HOD"
                  : "Save Changes"}
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}