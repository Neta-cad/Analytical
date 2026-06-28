"use client";
import { useState } from "react";
import Link from "next/link";

export default function CVBuilder() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [cvGenerated, setCvGenerated] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    role: "",
    summary: "",
    skills: "",
    experience: "",
    education: "",
    projects: "",
    certifications: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleGenerate = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setCvGenerated(true);
    }, 3000);
  };

  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-white/10 sticky top-0 bg-[#0a0a0a]/90 backdrop-blur-md z-50">
        <Link href="/dashboard">
          <h1 className="text-xl font-black">
            Analytical<span className="text-violet-500">.</span>
          </h1>
        </Link>
        <Link href="/dashboard" className="text-sm px-4 py-2 rounded-xl border border-white/10 hover:border-white/30 transition">
          Dashboard
        </Link>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12">

        {/* HEADER */}
        <div className="text-center mb-12">
          <span className="text-5xl">🤖</span>
          <h2 className="text-4xl font-black mt-4 mb-2">AI CV Builder</h2>
          <p className="text-white/40">Fill in your details and our AI will generate a professional CV for you</p>
        </div>

        {/* PROGRESS */}
        <div className="flex gap-2 mb-12">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`h-1 flex-1 rounded-full transition ${
                s <= step ? "bg-violet-500" : "bg-white/10"
              }`}
            />
          ))}
        </div>

        {!cvGenerated ? (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">

            {/* STEP 1 — Personal Info */}
            {step === 1 && (
              <div>
                <h3 className="text-2xl font-bold mb-6">Personal Information</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      <label className="text-sm text-white/60 mb-2 block">Phone</label>
                      <input
                        type="text"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 234 567 8900"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-violet-500 transition"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-white/60 mb-2 block">Location</label>
                      <input
                        type="text"
                        name="location"
                        value={form.location}
                        onChange={handleChange}
                        placeholder="Lagos, Nigeria"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-violet-500 transition"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-white/60 mb-2 block">Target Role</label>
                    <select
                      name="role"
                      value={form.role}
                      onChange={handleChange}
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition"
                    >
                      <option value="">Select your role</option>
                      <option value="Frontend Developer">Frontend Developer</option>
                      <option value="Backend Developer">Backend Developer</option>
                      <option value="Full Stack Developer">Full Stack Developer</option>
                      <option value="Data Analyst">Data Analyst</option>
                      <option value="Data Scientist">Data Scientist</option>
                      <option value="Cybersecurity Engineer">Cybersecurity Engineer</option>
                      <option value="DevOps Engineer">DevOps Engineer</option>
                      <option value="ML Engineer">ML Engineer</option>
                      <option value="UI/UX Designer">UI/UX Designer</option>
                    </select>
                  </div>
                  <button
                    onClick={() => setStep(2)}
                    className="w-full py-3 bg-violet-600 hover:bg-violet-500 rounded-xl font-bold transition"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2 — Skills & Summary */}
            {step === 2 && (
              <div>
                <h3 className="text-2xl font-bold mb-6">Skills & Summary</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-white/60 mb-2 block">Professional Summary</label>
                    <textarea
                      name="summary"
                      value={form.summary}
                      onChange={handleChange}
                      placeholder="Brief overview of your experience and goals..."
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-violet-500 transition resize-none"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-white/60 mb-2 block">Skills (comma separated)</label>
                    <input
                      type="text"
                      name="skills"
                      value={form.skills}
                      onChange={handleChange}
                      placeholder="Python, React, SQL, Docker, AWS..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-violet-500 transition"
                    />
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setStep(1)}
                      className="flex-1 py-3 border border-white/20 hover:border-white/50 rounded-xl font-bold transition"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      className="flex-1 py-3 bg-violet-600 hover:bg-violet-500 rounded-xl font-bold transition"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3 — Experience & Education */}
            {step === 3 && (
              <div>
                <h3 className="text-2xl font-bold mb-6">Experience & Education</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-white/60 mb-2 block">Work Experience</label>
                    <textarea
                      name="experience"
                      value={form.experience}
                      onChange={handleChange}
                      placeholder="Company Name — Role — Year&#10;What you did and achieved..."
                      rows={5}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-violet-500 transition resize-none"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-white/60 mb-2 block">Education</label>
                    <textarea
                      name="education"
                      value={form.education}
                      onChange={handleChange}
                      placeholder="University Name — Degree — Year"
                      rows={3}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-violet-500 transition resize-none"
                    />
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setStep(2)}
                      className="flex-1 py-3 border border-white/20 hover:border-white/50 rounded-xl font-bold transition"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setStep(4)}
                      className="flex-1 py-3 bg-violet-600 hover:bg-violet-500 rounded-xl font-bold transition"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4 — Projects & Certifications */}
            {step === 4 && (
              <div>
                <h3 className="text-2xl font-bold mb-6">Projects & Certifications</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-white/60 mb-2 block">Projects</label>
                    <textarea
                      name="projects"
                      value={form.projects}
                      onChange={handleChange}
                      placeholder="Project Name — Description — Tech used&#10;Link (optional)"
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-violet-500 transition resize-none"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-white/60 mb-2 block">Certifications</label>
                    <textarea
                      name="certifications"
                      value={form.certifications}
                      onChange={handleChange}
                      placeholder="AWS Certified Developer — 2024&#10;Google Data Analytics — 2023"
                      rows={3}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-violet-500 transition resize-none"
                    />
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setStep(3)}
                      className="flex-1 py-3 border border-white/20 hover:border-white/50 rounded-xl font-bold transition"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleGenerate}
                      disabled={loading}
                      className="flex-1 py-3 bg-violet-600 hover:bg-violet-500 rounded-xl font-bold transition disabled:opacity-50"
                    >
                      {loading ? "Generating CV..." : "🤖 Generate My CV"}
                    </button>
                  </div>

                  {/* LOADING STATE */}
                  {loading && (
                    <div className="text-center py-8">
                      <div className="w-12 h-12 border-4 border-violet-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                      <p className="text-white/40">AI is building your CV...</p>
                    </div>
                  )}
                </div>
              </div>
            )}

          </div>
        ) : (

          /* CV PREVIEW */
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Your CV is Ready! 🎉</h3>
              <div className="flex gap-3">
                <button
                  onClick={() => { setCvGenerated(false); setStep(1); }}
                  className="text-sm px-4 py-2 border border-white/10 hover:border-white/30 rounded-xl transition"
                >
                  Edit
                </button>
                <button className="text-sm px-4 py-2 bg-violet-600 hover:bg-violet-500 rounded-xl font-bold transition">
                  ⬇️ Download PDF
                </button>
              </div>
            </div>

            {/* CV DOCUMENT */}
            <div className="bg-white text-black rounded-2xl p-10 shadow-2xl">
              <div className="border-b-2 border-violet-600 pb-6 mb-6">
                <h1 className="text-3xl font-black text-gray-900">{form.fullName || "Your Name"}</h1>
                <p className="text-violet-600 font-bold text-lg mt-1">{form.role || "Your Role"}</p>
                <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-500">
                  {form.email && <span>📧 {form.email}</span>}
                  {form.phone && <span>📞 {form.phone}</span>}
                  {form.location && <span>📍 {form.location}</span>}
                </div>
              </div>

              {form.summary && (
                <div className="mb-6">
                  <h2 className="text-lg font-black text-gray-900 mb-2 uppercase tracking-wide">Summary</h2>
                  <p className="text-gray-600 leading-relaxed">{form.summary}</p>
                </div>
              )}

              {form.skills && (
                <div className="mb-6">
                  <h2 className="text-lg font-black text-gray-900 mb-3 uppercase tracking-wide">Skills</h2>
                  <div className="flex flex-wrap gap-2">
                    {form.skills.split(",").map((skill, i) => (
                      <span key={i} className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {skill.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {form.experience && (
                <div className="mb-6">
                  <h2 className="text-lg font-black text-gray-900 mb-2 uppercase tracking-wide">Experience</h2>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">{form.experience}</p>
                </div>
              )}

              {form.education && (
                <div className="mb-6">
                  <h2 className="text-lg font-black text-gray-900 mb-2 uppercase tracking-wide">Education</h2>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">{form.education}</p>
                </div>
              )}

              {form.projects && (
                <div className="mb-6">
                  <h2 className="text-lg font-black text-gray-900 mb-2 uppercase tracking-wide">Projects</h2>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">{form.projects}</p>
                </div>
              )}

              {form.certifications && (
                <div className="mb-6">
                  <h2 className="text-lg font-black text-gray-900 mb-2 uppercase tracking-wide">Certifications</h2>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">{form.certifications}</p>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </main>
  );
}