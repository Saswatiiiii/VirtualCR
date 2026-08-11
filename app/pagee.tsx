import Navbar from "../components/landing/Navbar";
import Logo from "../components/landing/Logo";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080d1f] text-white">
      <Navbar />

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative overflow-hidden px-6 py-20 sm:px-10 lg:px-20"
      >
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 lg:grid-cols-2">

          {/* LEFT */}
          <div className="text-center lg:text-left">

            <div className="mb-5 inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
              ✦ Smart Academic Management Platform
            </div>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Manage your institution.
              <span className="block text-blue-500">
                Smarter.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg lg:mx-0">
              Virtual CR brings students, teachers, HODs and institutions
              together on one modern academic management platform.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">

              <a
                href="/login"
                className="rounded-xl bg-blue-600 px-7 py-3.5 font-semibold transition hover:bg-blue-500"
              >
                Get Started →
              </a>

              <a
                href="#features"
                className="rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 font-semibold text-slate-200 transition hover:bg-white/10"
              >
                Explore Features ↓
              </a>

            </div>

            {/* Small stats */}
            <div className="mt-12 flex justify-center gap-10 border-t border-white/10 pt-8 lg:justify-start">

              <div>
                <p className="text-2xl font-bold">4+</p>
                <p className="mt-1 text-xs text-slate-500">
                  User Roles
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold">1</p>
                <p className="mt-1 text-xs text-slate-500">
                  Unified Platform
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold">24/7</p>
                <p className="mt-1 text-xs text-slate-500">
                  Accessibility
                </p>
              </div>

            </div>

          </div>

         
          {/* RIGHT — BRAND VISUAL */}
          <div className="flex justify-center lg:justify-end">
            <Logo />
          </div>

        </div>
      </section>

      {/* ROLES SECTION */}
      <section className="border-t border-white/10 px-6 py-24 sm:px-10 lg:px-20">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
              One platform
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Built for everyone
            </h2>

            <p className="mt-4 text-slate-400">
              Virtual CR connects every important role in an institution.
            </p>

          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10">
              <div className="mb-5 text-3xl">🎓</div>

              <h3 className="text-lg font-semibold">
                Students
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Access courses, notices and academic information from one place.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10">
              <div className="mb-5 text-3xl">👨‍🏫</div>

              <h3 className="text-lg font-semibold">
                Teachers
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Manage classes, students and academic activities efficiently.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10">
              <div className="mb-5 text-3xl">🏢</div>

              <h3 className="text-lg font-semibold">
                HODs
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Manage departments, faculty and academic operations.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10">
              <div className="mb-5 text-3xl">🏫</div>

              <h3 className="text-lg font-semibold">
                Institutions
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Get a centralized view of your entire institution.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="border-t border-white/10 px-6 py-24 sm:px-10 lg:px-20"
      >

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
              Powerful features
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Everything in one place.
            </h2>

            <p className="mt-4 text-slate-400">
              Designed to simplify everyday academic management.
            </p>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {[
              ["📊", "Academic Dashboard", "Get a clear overview of your institution."],
              ["👥", "People Management", "Manage students, teachers and HODs."],
              ["🏢", "Department Management", "Organize and manage institution departments."],
              ["📚", "Course Management", "Create and manage academic courses."],
              ["📢", "Notices", "Publish important announcements instantly."],
              ["⚙️", "Centralized Control", "Manage your institution from one platform."],
            ].map(([icon, title, description]) => (

              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-blue-500/30 hover:bg-white/10"
              >
                <div className="text-2xl">{icon}</div>

                <h3 className="mt-5 font-semibold">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {description}
                </p>
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section
        id="about"
        className="px-6 py-24 sm:px-10 lg:px-20"
      >

        <div className="mx-auto max-w-5xl rounded-3xl border border-blue-500/20 bg-blue-600/10 px-6 py-16 text-center sm:px-12">

          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to simplify academic management?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Bring your institution together with Virtual CR.
          </p>

          <button className="mt-8 rounded-xl bg-blue-600 px-8 py-3.5 font-semibold transition hover:bg-blue-500">
            Get Started →
          </button>

        </div>

      </section>

      {/* FOOTER */}
      <footer
        id="contact"
        className="border-t border-white/10 px-6 py-10 sm:px-10 lg:px-20"
      >

        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">

          <div>
            <p className="font-semibold">
              Virtual <span className="text-blue-500">CR</span>
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Smart academic management for modern institutions.
            </p>
          </div>

          <p className="text-xs text-slate-600">
            © 2026 Virtual CR. All rights reserved.
          </p>

        </div>

      </footer>

    </main>
  );
}