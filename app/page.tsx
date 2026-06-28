import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">
      <nav className="flex items-center justify-between px-8 py-5 border-b border-white/10 sticky top-0 bg-[#0a0a0a]/90 backdrop-blur-md z-50">
        <h1 className="text-2xl font-black tracking-tight">
          Analytical<span className="text-violet-500">.</span>
        </h1>
        <div className="flex gap-3">
          <Link href="/login" className="text-sm px-4 py-2 rounded-lg text-white/70 hover:text-white transition">Login</Link>
          <Link href="/signup" className="text-sm px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 font-semibold transition">Get Started Free</Link>
        </div>
      </nav>

      <section className="flex flex-col items-center text-center px-6 py-32 max-w-5xl mx-auto">
        <span className="text-xs font-semibold tracking-widest text-violet-400 uppercase mb-6 border border-violet-500/30 px-4 py-1 rounded-full">
          The #1 Platform for Tech Professionals
        </span>
        <h2 className="text-5xl md:text-7xl font-black leading-tight mb-6">
          Where Tech Talent<br />
          <span className="text-violet-500">Meets Opportunity</span>
        </h2>
        <p className="text-white/50 text-lg max-w-2xl mb-10">
          Connect with data analysts, developers, cybersecurity experts and more. Find jobs, share datasets, build your career.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/signup" className="px-8 py-4 bg-violet-600 hover:bg-violet-500 rounded-xl font-bold text-lg transition">
            Start Free — 1 Month Pro Trial
          </Link>
          <Link href="#features" className="px-8 py-4 border border-white/20 hover:border-white/50 rounded-xl font-bold text-lg transition">
            See Features
          </Link>
        </div>
        <p className="text-white/30 text-sm mt-4">No credit card required • 1 month free Pro access</p>
        <div className="grid grid-cols-3 gap-12 mt-24 border-t border-white/10 pt-12 w-full">
          <div>
            <p className="text-4xl font-black text-violet-400">50K+</p>
            <p className="text-white/40 text-sm mt-1">Tech Professionals</p>
          </div>
          <div>
            <p className="text-4xl font-black text-violet-400">12K+</p>
            <p className="text-white/40 text-sm mt-1">Jobs Posted</p>
          </div>
          <div>
            <p className="text-4xl font-black text-violet-400">8K+</p>
            <p className="text-white/40 text-sm mt-1">Datasets Shared</p>
          </div>
        </div>
      </section>

      <section id="features" className="px-6 py-24 max-w-6xl mx-auto">
        <h3 className="text-3xl md:text-5xl font-black text-center mb-4">
          Everything You Need to <span className="text-violet-500">Grow</span>
        </h3>
        <p className="text-white/40 text-center mb-16 text-lg">Built for serious tech professionals</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: "🤖", title: "AI CV Builder", desc: "Generate a world-class CV in seconds. Tailored to your skills automatically." },
            { icon: "💼", title: "Two-Way Job Board", desc: "Companies find you. You find companies. Both sides post and connect." },
            { icon: "📦", title: "Dataset Library", desc: "Upload, download and share real datasets. CSV, JSON, Excel supported." },
            { icon: "🏘️", title: "Community Forums", desc: "Join tech-specific channels. Ask questions and grow together." },
            { icon: "📊", title: "Profile Analytics", desc: "See who viewed your profile and track your market value." },
            { icon: "🎯", title: "AI Career Coach", desc: "Get AI-powered career advice and personalized roadmaps." },
            { icon: "🏆", title: "Gamification", desc: "Earn XP, unlock badges, climb leaderboards." },
            { icon: "💬", title: "Direct Messaging", desc: "Connect directly with recruiters and mentors." },
            { icon: "🔒", title: "Verified Profiles", desc: "Stand out with a verified badge. Build trust with recruiters." },
          ].map((f, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-violet-500/50 transition">
              <span className="text-4xl">{f.icon}</span>
              <h4 className="text-xl font-bold mt-4 mb-2">{f.title}</h4>
              <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="px-6 py-24 bg-white/[0.02] border-y border-white/10">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-5xl font-black text-center mb-4">
            Simple <span className="text-violet-500">Pricing</span>
          </h3>
          <p className="text-white/40 text-center mb-16 text-lg">Start free. Upgrade when ready.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h4 className="text-xl font-bold mb-2">Free</h4>
              <p className="text-4xl font-black mb-6">$0<span className="text-white/40 text-lg font-normal">/mo</span></p>
              <ul className="space-y-3 text-sm mb-8">
                <li className="text-white/60">✅ Basic profile</li>
                <li className="text-white/60">✅ View 3 jobs per day</li>
                <li className="text-white/60">✅ Read community forums</li>
                <li className="text-white/60">✅ Browse datasets</li>
                <li className="text-white/20">❌ AI features</li>
                <li className="text-white/20">❌ Direct messaging</li>
                <li className="text-white/20">❌ Job applications</li>
                <li className="text-white/20">❌ Dataset downloads</li>
              </ul>
              <Link href="/signup" className="block text-center py-3 rounded-xl border border-white/20 hover:border-white/50 transition font-bold">
                Get Started
              </Link>
            </div>
            <div className="bg-violet-600/20 border border-violet-500 rounded-2xl p-8 relative">
              <span className="absolute top-4 right-4 text-xs bg-violet-500 px-3 py-1 rounded-full font-bold">MOST POPULAR</span>
              <h4 className="text-xl font-bold mb-2">Pro</h4>
              <p className="text-4xl font-black mb-1">$15<span className="text-white/40 text-lg font-normal">/mo</span></p>
              <p className="text-violet-400 text-sm mb-6">First month FREE</p>
              <ul className="space-y-3 text-sm mb-8">
                <li className="text-white/70">✅ Everything in Free</li>
                <li className="text-white/70">✅ All AI features</li>
                <li className="text-white/70">✅ Unlimited job applications</li>
                <li className="text-white/70">✅ Direct messaging</li>
                <li className="text-white/70">✅ Upload & download datasets</li>
                <li className="text-white/70">✅ Profile analytics</li>
                <li className="text-white/70">✅ Verified badge</li>
                <li className="text-white/70">✅ Priority in search results</li>
              </ul>
              <Link href="/signup" className="block text-center py-3 rounded-xl bg-violet-600 hover:bg-violet-500 transition font-bold">
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-8 py-12 border-t border-white/10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <h1 className="text-2xl font-black">
            Analytical<span className="text-violet-500">.</span>
          </h1>
          <div className="flex gap-8 text-sm text-white/40">
            <Link href="#" className="hover:text-white transition">Privacy</Link>
            <Link href="#" className="hover:text-white transition">Terms</Link>
            <Link href="#" className="hover:text-white transition">Contact</Link>
          </div>
          <p className="text-white/30 text-sm">© 2026 Analytical. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
