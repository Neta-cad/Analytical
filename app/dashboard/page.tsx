"use client";
import Link from "next/link";
import { useState } from "react";

export default function Dashboard() {
  const [user] = useState({
    name: "John Doe",
    role: "Full Stack Developer",
    plan: "pro",
    avatar: "JD",
    xp: 1250,
    level: "Senior",
    profileViews: 48,
    connections: 124,
    jobsApplied: 7,
    trialDaysLeft: 24,
  });

  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen flex">

      {/* SIDEBAR */}
      <aside className="w-64 border-r border-white/10 min-h-screen p-6 hidden md:flex flex-col gap-2 sticky top-0">
        <Link href="/">
          <h1 className="text-xl font-black mb-8">
            Analytical<span className="text-violet-500">.</span>
          </h1>
        </Link>

        {[
          { icon: "🏠", label: "Dashboard", href: "/dashboard" },
          { icon: "👤", label: "My Profile", href: "/profile" },
          { icon: "💼", label: "Jobs", href: "/jobs" },
          { icon: "📦", label: "Datasets", href: "/datasets" },
          { icon: "🤖", label: "AI CV Builder", href: "/ai/cv-builder" },
          { icon: "🎯", label: "AI Career Coach", href: "/ai/career-coach" },
          { icon: "💬", label: "Messages", href: "/messages" },
          { icon: "🏘️", label: "Community", href: "/community" },
          { icon: "📊", label: "Analytics", href: "/analytics" },
          { icon: "💎", label: "Upgrade Pro", href: "/pricing" },
        ].map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-white/60 hover:text-white transition text-sm"
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}

        {/* LOGOUT */}
        <div className="mt-auto">
          <button className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-white/40 hover:text-white transition text-sm w-full">
            <span>🚪</span>
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-8">

        {/* TOP BAR */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl font-black">Welcome back, {user.name.split(" ")[0]} 👋</h2>
            <p className="text-white/40 text-sm mt-1">{user.role}</p>
          </div>
          <div className="flex items-center gap-4">
            {user.plan === "pro" && (
              <span className="text-xs bg-violet-600 px-3 py-1 rounded-full font-bold">
                PRO ✨
              </span>
            )}
            <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center font-bold text-sm">
              {user.avatar}
            </div>
          </div>
        </div>

        {/* TRIAL BANNER */}
        {user.plan === "pro" && user.trialDaysLeft > 0 && (
          <div className="bg-violet-600/20 border border-violet-500/50 rounded-2xl p-5 mb-8 flex items-center justify-between">
            <div>
              <p className="font-bold text-violet-300">🎉 Pro Trial Active</p>
              <p className="text-white/40 text-sm mt-1">{user.trialDaysLeft} days left in your free trial</p>
            </div>
            <Link href="/pricing" className="text-sm bg-violet-600 hover:bg-violet-500 px-4 py-2 rounded-xl font-bold transition">
              Upgrade Now
            </Link>
          </div>
        )}

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Profile Views", value: user.profileViews, icon: "👁️" },
            { label: "Connections", value: user.connections, icon: "🤝" },
            { label: "Jobs Applied", value: user.jobsApplied, icon: "💼" },
            { label: "XP Points", value: user.xp, icon: "⚡" },
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <span className="text-2xl">{stat.icon}</span>
              <p className="text-2xl font-black mt-3">{stat.value}</p>
              <p className="text-white/40 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* QUICK ACTIONS */}
        <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { icon: "🤖", label: "Build My CV", href: "/ai/cv-builder" },
            { icon: "💼", label: "Browse Jobs", href: "/jobs" },
            { icon: "📦", label: "Get Datasets", href: "/datasets" },
            { icon: "🏘️", label: "Join Community", href: "/community" },
          ].map((action, i) => (
            <Link
              key={i}
              href={action.href}
              className="bg-white/5 border border-white/10 hover:border-violet-500/50 rounded-2xl p-5 text-center transition"
            >
              <span className="text-3xl">{action.icon}</span>
              <p className="text-sm font-semibold mt-3">{action.label}</p>
            </Link>
          ))}
        </div>

        {/* LEVEL & XP */}
        <h3 className="text-lg font-bold mb-4">Your Level</h3>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-10">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="font-bold text-lg">{user.level} Developer</p>
              <p className="text-white/40 text-sm">{user.xp} XP earned</p>
            </div>
            <span className="text-3xl">🏆</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-2">
            <div
              className="bg-violet-500 h-2 rounded-full"
              style={{ width: `${(user.xp / 2000) * 100}%` }}
            />
          </div>
          <p className="text-white/30 text-xs mt-2">{2000 - user.xp} XP to reach Legend level</p>
        </div>

        {/* RECENT JOBS */}
        <h3 className="text-lg font-bold mb-4">Recommended Jobs</h3>
        <div className="space-y-4">
          {[
            { title: "Senior Data Analyst", company: "TechCorp", location: "Remote", salary: "$80k - $120k", tag: "Data" },
            { title: "Full Stack Developer", company: "StartupXYZ", location: "Lagos, Nigeria", salary: "$60k - $90k", tag: "Dev" },
            { title: "Cybersecurity Engineer", company: "SecureNet", location: "London, UK", salary: "$90k - $130k", tag: "Security" },
          ].map((job, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center justify-between hover:border-violet-500/50 transition">
              <div>
                <p className="font-bold">{job.title}</p>
                <p className="text-white/40 text-sm mt-1">{job.company} • {job.location}</p>
                <p className="text-violet-400 text-sm mt-1">{job.salary}</p>
              </div>
              <div className="flex flex-col items-end gap-3">
                <span className="text-xs bg-white/10 px-3 py-1 rounded-full">{job.tag}</span>
                <Link href="/jobs" className="text-xs bg-violet-600 hover:bg-violet-500 px-4 py-2 rounded-xl font-bold transition">
                  Apply
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}