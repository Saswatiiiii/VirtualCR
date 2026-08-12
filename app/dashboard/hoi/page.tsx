"use client";

import { useEffect, useState } from "react";
import { Menu, Bell } from "lucide-react";
import HOISidebar from "../../../components/dashboard/HOISidebar";

export default function HOIDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [user, setUser] = useState<{
    name: string;
    image: string | null;
    }>({
    name: "Head of Institution",
    image: null,
    });

    useEffect(() => {
        const savedUser = localStorage.getItem("hoi_user");

        if (savedUser) {
            try {
            setUser(JSON.parse(savedUser));
            } catch {
            console.error("Could not load user profile");
            }
        }
        }, []);
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
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-white/10 bg-[#080d1f]/95 px-4 backdrop-blur sm:px-6 lg:px-8">

          {/* Mobile menu button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="rounded-lg p-2 text-slate-300 hover:bg-white/10 lg:hidden"
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
              className="rounded-lg p-2 text-slate-400 hover:bg-white/10 hover:text-white"
              aria-label="Notifications"
            >
              <Bell size={21} />
            </button>

            <div className="hidden h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-blue-600 font-semibold sm:flex">
            {user.image ? (
                <img
                src={user.image}
                alt={user.name}
                className="h-full w-full object-cover"
                />
            ) : (
                user.name.charAt(0).toUpperCase()
            )}
            </div>

          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-4 sm:p-6 lg:p-8">

          <div className="mx-auto max-w-7xl">

            {/* Heading */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold sm:text-3xl">
                Institution Dashboard
              </h1>

              <p className="mt-2 text-sm text-slate-400 sm:text-base">
                Manage your institution from one place.
              </p>
            </div>

            {/* Overview Cards */}
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-slate-400">
                  Departments
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  0
                </h2>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-slate-400">
                  Teachers
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  0
                </h2>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-slate-400">
                  Students
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  0
                </h2>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-slate-400">
                  Active Courses
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  0
                </h2>
              </div>

            </section>

            {/* Quick Actions */}
            <section className="mt-8">

              <h2 className="mb-4 text-xl font-semibold">
                Quick Actions
              </h2>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                <button className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left transition hover:bg-white/10">
                  <h3 className="font-semibold">
                    Manage Departments
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">
                    Add and manage institution departments.
                  </p>
                </button>

                <button className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left transition hover:bg-white/10">
                  <h3 className="font-semibold">
                    Post Notice
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">
                    Publish notices for the institution.
                  </p>
                </button>

              </div>

            </section>

          </div>

        </main>

      </div>
    </div>
  );
}