import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex flex-col items-center text-center">
      <Image
        src="/images/logo.png"
        alt="Virtual CR"
        width={500}
        height={500}
        className="w-[300px] h-auto"
      />

      <h1 className="mt-6 text-5xl font-bold text-white">
        Virtual <span className="text-blue-400">CR</span>
      </h1>

      <p className="mt-4 max-w-xl text-lg text-gray-400">
        A modern academic management system designed to make
        learning and administration simpler.
      </p>

      {/* Get Started button */}
        <a
          href="/login"
          className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white
                    transition hover:bg-blue-500"
        >
          Get Started
        </a>
    </div>
  );
}