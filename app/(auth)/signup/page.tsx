"use client";
import { useState } from "react";
import Link from "next/link";

export default function Signup() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    country: "",
    skills: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleSubmit = () => {
    // Auth + DB logic goes here
    console.log("Signing up:", form);
    window.location.href = "/dashboard";
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
          <p className="text-white/40 mt-2">Create your account — first month Pro is FREE</p>
        </div>

        {/* PROGRESS */}
        <div className="flex gap-2 mb-8">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-1 flex-1 rounded-full transition ${
                s <= step ? "bg-violet-500" : "bg-white/10"
              }`}
            />
          ))}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">

          {/* STEP 1 — Basic Info */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Basic Info</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-white/60 mb-2 block">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-violet-500 transition"
                  />
                </div>
                <div>
                  <label className="text-sm text-white/60 mb-2 block">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-violet-500 transition"
                  />
                </div>
                <div>
                  <label className="text-sm text-white/60 mb-2 block">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-violet-500 transition"
                  />
                </div>
                <div>
                  <label className="text-sm text-white/60 mb-2 block">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-violet-500 transition"
                  />
                </div>
                <button
                  onClick={handleNext}
                  className="w-full py-3 bg-violet-600 hover:bg-violet-500 rounded-xl font-bold transition"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* STEP 2 — Your Role */}
          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Your Role</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-white/60 mb-2 block">I am a...</label>
                  <select
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition"
                  >
                    <option value="">Select your role</option>
                    <option value="frontend">Frontend Developer</option>
                    <option value="backend">Backend Developer</option>
                    <option value="fullstack">Full Stack Developer</option>
                    <option value="data-analyst">Data Analyst</option>
                    <option value="data-scientist">Data Scientist</option>
                    <option value="cybersecurity">Cybersecurity Expert</option>
                    <option value="devops">DevOps Engineer</option>
                    <option value="ml-engineer">ML Engineer</option>
                    <option value="ui-ux">UI/UX Designer</option>
                    <option value="recruiter">Recruiter / Company</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-white/60 mb-2 block">Country</label>
                  <input
                    type="text"
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    placeholder="e.g. Nigeria, USA, UK"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-violet-500 transition"
                  />
                </div>
                <div>
                  <label className="text-sm text-white/60 mb-2 block">Top Skills</label>
                  <input
                    type="text"
                    name="skills"
                    value={form.skills}
                    onChange={handleChange}
                    placeholder="e.g. Python, React, SQL"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-violet-500 transition"
                  />
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={handleBack}
                    className="flex-1 py-3 border border-white/20 hover:border-white/50 rounded-xl font-bold transition"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleNext}
                    className="flex-1 py-3 bg-violet-600 hover:bg-violet-500 rounded-xl font-bold transition"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3 — Free Trial */}
          {step === 3 && (
            <div className="text-center">
              <div className="text-6xl mb-6">🎉</div>
              <h2 className="text-2xl font-bold mb-3">You're almost in!</h2>
              <p className="text-white/40 mb-8">
                Your first month of Pro is completely FREE. No credit card needed.
                After 30 days, upgrade to keep access.
              </p>
              <div className="bg-violet-600/20 border border-violet-500/50 rounded-xl p-6 mb-8 text-left">
                <p className="text-violet-400 font-bold mb-3">Your Pro Trial Includes:</p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>✓ AI CV Builder</li>
                  <li>✓ Unlimited job applications</li>
                  <li>✓ Dataset uploads & downloads</li>
                  <li>✓ Direct messaging</li>
                  <li>✓ Profile analytics</li>
                  <li>✓ Community posting</li>
                </ul>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleBack}
                  className="flex-1 py-3 border border-white/20 hover:border-white/50 rounded-xl font-bold transition"
                >
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  className="flex-1 py-3 bg-violet-600 hover:bg-violet-500 rounded-xl font-bold transition"
                >
                  Create Account
                </button>
              </div>
            </div>
          )}

        </div>

        <p className="text-center text-white/30 text-sm mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-violet-400 hover:text-violet-300 transition">
            Login
          </Link>
        </p>

      </div>
    </main>
  );
}