const roles = [
  {
    title: "Head of Institution",
    short: "HOI",
    description: "Manage courses, HODs, notices and institution-wide issues.",
    href: "/login/hoi",
  },
  {
    title: "Head of Department",
    short: "HOD",
    description: "Manage batches, teachers, students and class routines.",
    href: "/login/hod",
  },
  {
    title: "Teacher",
    short: "Teacher",
    description: "View assigned courses, confirm classes and manage notices.",
    href: "/login/teacher",
  },
  {
    title: "Student",
    short: "Student",
    description: "View your routine, notices and report academic issues.",
    href: "/login/student",
  },
];

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#080d1f] text-white px-6 py-12">
      <div className="mx-auto max-w-6xl">

        <div className="text-center mb-12">
          <p className="text-blue-400 font-medium mb-3">
            Welcome to Virtual CR
          </p>

          <h1 className="text-4xl md:text-5xl font-bold">
            Login to your account
          </h1>

          <p className="mt-4 text-slate-400">
            Select your role to continue
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roles.map((role) => (
            <a
              key={role.short}
              href={role.href}
              className="group rounded-2xl border border-white/10 bg-white/5
                         p-7 backdrop-blur-md transition-all duration-300
                         hover:-translate-y-1 hover:border-blue-500/50
                         hover:bg-white/10"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="flex h-14 w-14 items-center justify-center
                                rounded-xl bg-blue-600/20 text-blue-400
                                font-bold text-lg">
                  {role.short}
                </div>

                <h2 className="text-xl font-semibold">
                  {role.title}
                </h2>
              </div>

              <p className="text-slate-400 leading-relaxed">
                {role.description}
              </p>

              <div className="mt-6 text-blue-400 font-medium
                              group-hover:text-blue-300">
                Continue →
              </div>
            </a>
          ))}
        </div>

      </div>
    </main>
  );
}