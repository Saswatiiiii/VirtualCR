"use client";

import { useState } from "react";
import { Menu, Bell, Plus, MoreVertical, BookOpen } from "lucide-react";
import HOISidebar from "../../../../components/dashboard/HOISidebar";



export default function HOICourses() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [showAddCourse, setShowAddCourse] = useState(false);

  const [courses, setCourses] = useState([
  {
      id: "CSE101",
      name: "Computer Science & Engineering",
      hod: "Not Assigned",
      batches: 0,
  },
  {
      id: "ECE101",
      name: "Electronics & Communication",
      hod: "Not Assigned",
      batches: 0,
  },
  ]);

  const [courseName, setCourseName] = useState("");
  const [courseId, setCourseId] = useState("");

  return (
    <div className="min-h-screen bg-[#080d1f] text-white">

      {/* Sidebar */}
      <HOISidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main area */}
      <div className="lg:ml-72">

        {/* Top Navbar */}
        <header
          className="sticky top-0 z-30 flex h-20 items-center
                     justify-between border-b border-white/10
                     bg-[#080d1f]/95 px-4 backdrop-blur
                     sm:px-6 lg:px-8"
        >

          {/* Mobile menu */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="rounded-lg p-2 text-slate-300
                       hover:bg-white/10 lg:hidden"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>

          {/* Desktop title */}
          <div className="hidden lg:block">
            <p className="text-sm text-slate-400">
              Head of Institution
            </p>
          </div>

          {/* Right side */}
          <div className="ml-auto flex items-center gap-3">

            <button
              className="rounded-lg p-2 text-slate-400
                         hover:bg-white/10 hover:text-white"
              aria-label="Notifications"
            >
              <Bell size={21} />
            </button>

            {/* Profile */}
            <div
              className="flex h-9 w-9 items-center justify-center
                         rounded-full bg-blue-600 font-semibold"
            >
              H
            </div>

          </div>
        </header>

        {/* Page content */}
        <main className="p-4 sm:p-6 lg:p-8">

          <div className="mx-auto max-w-7xl">

            {/* Header */}
            <div
              className="mb-8 flex flex-col gap-4
                         sm:flex-row sm:items-center
                         sm:justify-between"
            >

              <div>
                <p className="text-sm font-medium text-blue-400">
                  Institution Management
                </p>

                <h1 className="mt-1 text-2xl font-bold sm:text-3xl">
                  Courses
                </h1>

                <p className="mt-2 text-sm text-slate-400 sm:text-base">
                  Manage the courses and their assigned HODs.
                </p>
              </div>

              {/* Add Course */}
              <button
                type="button"
                onClick={() => setShowAddCourse(true)}
                className="flex w-full items-center
                           justify-center gap-2 rounded-xl
                           bg-blue-600 px-5 py-3
                           text-sm font-semibold
                           transition hover:bg-blue-500
                           sm:w-auto"
              >
                <Plus size={19} />
                Add Course
              </button>

            </div>

            {/* Course Cards */}
            <section
              className="grid grid-cols-1 gap-5
                         md:grid-cols-2 xl:grid-cols-3"
            >

              {courses.map((course) => (
                <div
                  key={course.id}
                  className="rounded-2xl border border-white/10
                             bg-white/5 p-5 transition
                             hover:border-blue-500/30
                             hover:bg-white/[0.07]"
                >

                  {/* Card top */}
                  <div className="flex items-start justify-between">

                    <div
                      className="flex h-11 w-11 items-center
                                 justify-center rounded-xl
                                 bg-blue-600/15 text-blue-400"
                    >
                      <BookOpen size={21} />
                    </div>

                    <button
                      type="button"
                      className="rounded-lg p-2 text-slate-500
                                 transition hover:bg-white/10
                                 hover:text-white"
                      aria-label={`More options for ${course.name}`}
                    >
                      <MoreVertical size={19} />
                    </button>

                  </div>

                  {/* Course information */}
                  <div className="mt-5">

                    <p
                      className="text-xs font-medium uppercase
                                 tracking-wider text-slate-500"
                    >
                      {course.id}
                    </p>

                    <h2 className="mt-2 text-lg font-semibold">
                      {course.name}
                    </h2>

                  </div>

                  {/* Details */}
                  <div
                    className="mt-5 space-y-3
                               border-t border-white/10 pt-4"
                  >

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-400">
                        HOD
                      </span>

                      <span className="text-sm font-medium">
                        {course.hod}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-400">
                        Active Batches
                      </span>

                      <span className="text-sm font-medium">
                        {course.batches}
                      </span>
                    </div>

                  </div>

                  {/* View Course */}
                  <button
                    type="button"
                    className="mt-5 w-full rounded-xl
                               border border-white/10 py-2.5
                               text-sm font-medium text-slate-300
                               transition hover:bg-white/10
                               hover:text-white"
                  >
                    View Course
                  </button>

                </div>
              ))}

            </section>

          </div>
          
          {showAddCourse && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">

                <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#11172b] p-6 shadow-2xl">

                {/* Modal Header */}
                <div className="mb-6 flex items-start justify-between">

                    <div>
                    <h2 className="text-xl font-semibold">
                        Add Course
                    </h2>

                    <p className="mt-1 text-sm text-slate-400">
                        Create a new course for your institution.
                    </p>
                    </div>

                    <button
                    type="button"
                    onClick={() => setShowAddCourse(false)}
                    className="rounded-lg px-3 py-1 text-xl text-slate-400
                                hover:bg-white/10 hover:text-white"
                    >
                    ×
                    </button>

                </div>

                {/* Form */}
                <div className="space-y-5">

                    {/* Course Name */}
                    <div>
                    <label className="mb-2 block text-sm font-medium">
                        Course Name
                    </label>

                    <input
                        type="text"
                        value={courseName}
                        onChange={(e) => setCourseName(e.target.value)}
                        placeholder="e.g. Computer Science & Engineering"
                        className="w-full rounded-lg border border-white/10
                                bg-white/5 px-4 py-3 text-sm text-white
                                outline-none placeholder:text-slate-500
                                focus:border-blue-500"
                    />
                    </div>

                    {/* Course ID */}
                    <div>
                    <label className="mb-2 block text-sm font-medium">
                        Course ID
                    </label>

                    <input
                        type="text"
                        value={courseId}
                        onChange={(e) => setCourseId(e.target.value)}
                        placeholder="e.g. CSE101"
                        className="w-full rounded-lg border border-white/10
                                bg-white/5 px-4 py-3 text-sm text-white
                                outline-none placeholder:text-slate-500
                                focus:border-blue-500"
                    />
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

                    <button
                        type="button"
                        onClick={() => setShowAddCourse(false)}
                        className="rounded-lg border border-white/10
                                px-5 py-3 text-sm font-medium
                                text-slate-300 hover:bg-white/10"
                    >
                        Cancel
                    </button>

                    <button
                        type="button"
                        onClick={() => {
                        if (!courseName.trim() || !courseId.trim()) return;

                        setCourses([
                            ...courses,
                            {
                            id: courseId.trim(),
                            name: courseName.trim(),
                            hod: "Not Assigned",
                            batches: 0,
                            },
                        ]);

                        setCourseName("");
                        setCourseId("");
                        setShowAddCourse(false);
                        }}
                        className="rounded-lg bg-blue-600 px-5 py-3
                                text-sm font-semibold
                                hover:bg-blue-500"
                    >
                        Create Course
                    </button>

                    </div>

                </div>

                </div>

            </div>
            )}
        </main>

      </div>
    </div>
  );
}