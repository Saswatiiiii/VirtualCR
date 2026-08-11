import Image from "next/image";

export default function Logo() {
  return (
    <div className="relative flex items-center justify-center">

      {/* Glow */}
      <div className="absolute h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

      {/* Brand card */}
      <div className="relative flex w-[360px] flex-col items-center rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur-sm">

        {/* Logo */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#10172d] p-3">
          <Image
            src="/images/logooo.png"
            alt="Virtual CR"
            width={500}
            height={500}
            className="h-auto w-[250px] rounded-xl"
          />
        </div>

        {/* Small label */}
        <div className="mt-6 flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-blue-400" />
          <span className="text-sm text-blue-300">
            Academic Management Platform
          </span>
        </div>

        {/* Mini feature row */}
        <div className="mt-7 grid w-full grid-cols-3 gap-3">

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center">
            <p className="text-lg">🎓</p>
            <p className="mt-1 text-xs text-slate-400">
              Students
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center">
            <p className="text-lg">👨‍🏫</p>
            <p className="mt-1 text-xs text-slate-400">
              Teachers
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center">
            <p className="text-lg">🏢</p>
            <p className="mt-1 text-xs text-slate-400">
              Institutions
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}