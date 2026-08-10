import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-white/10 bg-[#080d1f]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/logo-iconn.png"
            alt="Virtual CR"
            width={45}
            height={45}
          />

          <span className="ml-3 text-xl font-semibold text-white">
            Virtual <span className="text-blue-400">CR</span>
          </span>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#home"
            className="text-white hover:text-blue-400 transition"
          >
            Home
          </a>

          <a
            href="#features"
            className="text-gray-300 hover:text-blue-400 transition"
          >
            Features
          </a>

          <a
            href="#about"
            className="text-gray-300 hover:text-blue-400 transition"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-gray-300 hover:text-blue-400 transition"
          >
            Contact
          </a>
        </div>

      </div>
    </nav>
  );
}