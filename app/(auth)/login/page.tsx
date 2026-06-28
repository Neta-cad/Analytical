"use client";
import { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Auth logic goes here
    console.log("Logging in:", email);
  };

  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md">

        {/* LOGO */}
        <div className="text-center mb-10">
          <Link href="/">
            <h1 className="text-3xl font-black">
              Analytical<span className="text-violet-500">.</span>
            </h1>
          </Link>
          <p className="text-white/40 mt-2">Welcome back</p>
        </div>

        {/* FORM */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6">Login to your account</h2>

          <div className="space-y-4">
            <div>
              <label className="text-sm text-white/60 mb-2 block">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-violet-500 transition"
              />
            </div>

            <div>
              <label className="text-sm text-white/60 mb-2 block">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-violet-500 transition"
              />
            </div>

            <div className="flex justify-end">
              <Link href="/forgot-password" className="text-sm text-violet-400 hover:text-violet-300 transition">
                Forgot password?
              </Link>
            </div>

            <button
              onClick={handleLogin}
              className="w-full py-3 bg-violet-600 hover:bg-violet-500 rounded-xl font-bold transition mt-2"
            >
              Login
            </button>
          </div>

          <p className="text-center text-white/40 text-sm mt-6">
            Don't have an account?{" "}
            <Link href="/signup" className="text-violet-400 hover:text-violet-300 transition">
              Sign up free
            </Link>
          </p>
        </div>

      </div>
    </main>
  );
}