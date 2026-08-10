"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function HOILogin() {
    const [isRegistering, setIsRegistering] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [hoiName, setHoiName] = useState("");
    const [collegeName, setCollegeName] = useState("");
    const [collegeId, setCollegeId] = useState("");
    const [collegeEmail, setCollegeEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleCreateAccount = () => {
        if (!hoiName.trim()) {
            alert("Please enter your H.O.I name.");
            return;
        }

        const user = {
            name: hoiName.trim(),
            image: null,
        };

        localStorage.setItem("hoi_user", JSON.stringify(user));

        window.location.href = "/dashboard/hoi";
        };

  return (
    <main className="min-h-screen bg-[#080d1f] text-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-6xl items-center justify-center">

        <div className="w-full max-w-lg">

          {/* Heading */}
          <div className="mb-8 text-center">
            <p className="mb-3 text-sm font-medium text-blue-400 sm:text-base">
              Head of Institution
            </p>

            <h1 className="text-3xl font-bold sm:text-4xl">
              {isRegistering
                ? "Register Your Institution"
                : "Institution Login"}
            </h1>

            <p className="mt-3 text-sm text-slate-400 sm:text-base">
              {isRegistering
                ? "Create your institution account to get started."
                : "Enter your institution details to continue."}
            </p>
          </div>

          {/* Form Card */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-xl sm:p-8">

            <div className="space-y-5">

              {/* College Name */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  College Name
                </label>

                <input
                  type="text"
                  placeholder="Enter college name"
                  className="w-full rounded-lg border border-white/10 bg-white/5
                             px-4 py-3 text-sm text-white outline-none
                             placeholder:text-slate-500
                             focus:border-blue-500 sm:text-base"
                />
              </div>

              {/* H.O.I Name */}
                <div>
                <label className="mb-2 block text-sm font-medium">
                    H.O.I Name
                </label>

                <input
                    type="text"
                    placeholder="Enter your full name"
                    value={hoiName}
                    onChange={(e) => setHoiName(e.target.value)}
                    className="w-full rounded-lg border border-white/10 bg-white/5
                                px-4 py-3 text-sm text-white outline-none
                                placeholder:text-slate-500
                                focus:border-blue-500 sm:text-base"
                />
                </div>

              {/* College ID */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Unique College ID
                </label>

                <input
                  type="text"
                  placeholder="Enter college ID"
                  className="w-full rounded-lg border border-white/10 bg-white/5
                             px-4 py-3 text-sm text-white outline-none
                             placeholder:text-slate-500
                             focus:border-blue-500 sm:text-base"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  College Email
                </label>

                <input
                  type="email"
                  placeholder="Enter college email"
                  className="w-full rounded-lg border border-white/10 bg-white/5
                             px-4 py-3 text-sm text-white outline-none
                             placeholder:text-slate-500
                             focus:border-blue-500 sm:text-base"
                />
              </div>

              {/* Password — only during registration */}
              {isRegistering && (
                <>
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                        Password
                    </label>

                    <div className="relative">
                        <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        className="w-full rounded-lg border border-white/10 bg-white/5
                                    px-4 py-3 pr-12 text-sm text-white outline-none
                                    placeholder:text-slate-500
                                    focus:border-blue-500 sm:text-base"
                        />

                        <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2
                                    text-slate-400 transition hover:text-white"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                        {showPassword ? (
                            <EyeOff size={20} />
                        ) : (
                            <Eye size={20} />
                        )}
                        </button>
                    </div>
                    </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                        Confirm Password
                    </label>

                    <div className="relative">
                        <input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        className="w-full rounded-lg border border-white/10 bg-white/5
                                    px-4 py-3 pr-12 text-sm text-white outline-none
                                    placeholder:text-slate-500
                                    focus:border-blue-500 sm:text-base"
                        />

                        <button
                        type="button"
                        onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2
                                    text-slate-400 transition hover:text-white"
                        aria-label={
                            showConfirmPassword
                            ? "Hide confirm password"
                            : "Show confirm password"
                        }
                        >
                        {showConfirmPassword ? (
                            <EyeOff size={20} />
                        ) : (
                            <Eye size={20} />
                        )}
                        </button>
                    </div>
                    </div>
                </>
              )}

              {/* Main Button */}
              <button
                type="button"
                onClick={isRegistering ? handleCreateAccount : undefined}
                className="w-full rounded-lg bg-blue-600 py-3
                           text-sm font-semibold transition
                           hover:bg-blue-500
                           active:scale-[0.99]
                           sm:text-base"
              >
                {isRegistering ? "Create Institution Account" : "Continue"}
              </button>

            </div>

            {/* Login / Register Switch */}
            <div className="mt-6 border-t border-white/10 pt-5 text-center">

              <p className="text-sm text-slate-400">
                {isRegistering
                  ? "Already have an institution account?"
                  : "First time using Virtual CR?"}
              </p>

              <button
                type="button"
                onClick={() => setIsRegistering(!isRegistering)}
                className="mt-2 text-sm font-semibold text-blue-400
                           transition hover:text-blue-300"
              >
                {isRegistering
                  ? "Login instead"
                  : "Register your institution"}
              </button>

            </div>

          </div>

        </div>
      </div>
    </main>
  );
}