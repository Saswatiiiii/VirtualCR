"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50 w-full border-b border-white/10 bg-[#080d1f]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#home"
          className="flex items-center"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/images/logo-iconn.png"
            alt="Virtual CR"
            width={45}
            height={45}
          />

          <span className="ml-3 text-xl font-semibold text-white">
            Virtual <span className="text-blue-400">CR</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#home"
            className="text-white transition hover:text-blue-400"
          >
            Home
          </a>

          <a
            href="#features"
            className="text-gray-300 transition hover:text-blue-400"
          >
            Features
          </a>

          <a
            href="#about"
            className="text-gray-300 transition hover:text-blue-400"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-gray-300 transition hover:text-blue-400"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-200 transition hover:bg-white/10 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <span className="text-2xl">×</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-white/10 bg-[#080d1f] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-1">

            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 text-white transition hover:bg-white/5 hover:text-blue-400"
            >
              Home
            </a>

            <a
              href="#features"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 text-gray-300 transition hover:bg-white/5 hover:text-blue-400"
            >
              Features
            </a>

            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 text-gray-300 transition hover:bg-white/5 hover:text-blue-400"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 text-gray-300 transition hover:bg-white/5 hover:text-blue-400"
            >
              Contact
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}