"use client";
import { useState } from "react";
import Link from "next/link";

export default function Pricing() {
  const [showPayment, setShowPayment] = useState(false);
  const [paymentDone, setPaymentDone] = useState(false);
  const [proof, setProof] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!name || !email || !proof) return;
    setPaymentDone(true);
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

      <div className="max-w-5xl mx-auto px-6 py-16">

        {!showPayment && !paymentDone && (
          <>
            {/* HEADER */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                Simple <span className="text-violet-500">Pricing</span>
              </h2>
              <p className="text-white/40 text-lg">Start free. Upgrade when ready. No hidden fees.</p>
            </div>

            {/* PLANS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

              {/* FREE */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-1">Free</h3>
                  <p className="text-white/40 text-sm">Get started at no cost</p>
                </div>
                <p className="text-5xl font-black mb-8">
                  $0<span className="text-white/30 text-xl font-normal">/mo</span>
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    { text: "Basic profile", included: true },
                    { text: "View 3 jobs per day", included: true },
                    { text: "Read community forums", included: true },
                    { text: "Browse datasets (no download)", included: true },
                    { text: "AI CV Builder", included: false },
                    { text: "Direct messaging", included: false },
                    { text: "Job applications", included: false },
                    { text: "Dataset downloads", included: false },
                    { text: "Profile analytics", included: false },
                    { text: "Verified badge", included: false },
                  ].map((item, i) => (
                    <li key={i} className={`flex items-center gap-3 text-sm ${item.included ? "text-white/70" : "text-white/20"}`}>
                      <span>{item.included ? "✅" : "❌"}</span>
                      {item.text}
                    </li>
                  ))}
                </ul>
                <Link href="/signup" className="block text-center py-3 rounded-xl border border-white/20 hover:border-white/50 transition font-bold">
                  Get Started Free
                </Link>
              </div>

              {/* PRO */}
              <div className="bg-violet-600/10 border-2 border-violet-500 rounded-2xl p-8 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-violet-600 text-white text-xs font-black px-4 py-1.5 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-1">Pro</h3>
                  <p className="text-violet-400 text-sm font-semibold">First month completely FREE</p>
                </div>
                <p className="text-5xl font-black mb-2">
                  $15<span className="text-white/30 text-xl font-normal">/mo</span>
                </p>
                <p className="text-white/30 text-sm mb-8">after free trial ends</p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Everything in Free",
                    "AI CV Builder",
                    "AI Career Coach",
                    "AI Job Matcher",
                    "Unlimited job applications",
                    "Direct messaging",
                    "Upload & download datasets",
                    "Profile analytics",
                    "Verified badge ✅",
                    "Priority in search results",
                    "Post job listings",
                    "Mentorship access",
                    "Community posting",
                    "Early access to features",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                      <span>✅</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setShowPayment(true)}
                  className="w-full py-3 bg-violet-600 hover:bg-violet-500 rounded-xl font-bold transition"
                >
                  Start Free Trial → Upgrade to Pro
                </button>
              </div>

            </div>

            {/* FAQ */}
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-black text-center mb-8">
                Frequently Asked <span className="text-violet-500">Questions</span>
              </h3>
              <div className="space-y-4">
                {[
                  { q: "How does the free trial work?", a: "When you sign up, you get 1 full month of Pro access completely free. No credit card needed. After 30 days you can choose to upgrade and keep all Pro features." },
                  { q: "How do I pay after the trial?", a: "We currently accept bank transfers. After clicking upgrade, you will see our bank details. Transfer the amount and send proof of payment. We will activate your Pro within 24 hours." },
                  { q: "Can I cancel anytime?", a: "Yes. You are never locked in. If you decide not to continue after your free trial, you simply stay on the free plan." },
                  { q: "What happens to my data if I downgrade?", a: "Your profile, posts and connections stay intact. You just lose access to Pro features like AI tools and unlimited applications." },
                ].map((faq, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <p className="font-bold mb-2">{faq.q}</p>
                    <p className="text-white/40 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* PAYMENT PAGE */}
        {showPayment && !paymentDone && (
          <div className="max-w-lg mx-auto">
            <button
              onClick={() => setShowPayment(false)}
              className="text-white/40 hover:text-white text-sm mb-8 flex items-center gap-2 transition"
            >
              ← Back to Pricing
            </button>

            <div className="text-center mb-10">
              <span className="text-5xl">💳</span>
              <h2 className="text-3xl font-black mt-4 mb-2">Upgrade to Pro</h2>
              <p className="text-white/40">Complete your payment to activate Pro</p>
            </div>

            {/* BANK DETAILS */}
            <div className="bg-violet-600/20 border border-violet-500/50 rounded-2xl p-6 mb-8">
              <p className="font-bold text-violet-300 mb-4">💰 Payment Details</p>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/40">Amount</span>
                  <span className="font-bold text-white">$15 / month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">Bank Name</span>
                  <span className="font-bold text-white">Your Bank Name</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">Account Name</span>
                  <span className="font-bold text-white">Analytical Platform</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">Account Number</span>
                  <span className="font-bold text-white">0123456789</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">Reference</span>
                  <span className="font-bold text-violet-400">ANALYTICAL-PRO</span>
                </div>
              </div>
            </div>

            {/* PROOF OF PAYMENT */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="font-bold mb-4">📋 Submit Payment Proof</p>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-white/60 mb-2 block">Your Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-violet-500 transition"
                  />
                </div>
                <div>
                  <label className="text-sm text-white/60 mb-2 block">Your Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-violet-500 transition"
                  />
                </div>
                <div>
                  <label className="text-sm text-white/60 mb-2 block">Transaction Reference / ID</label>
                  <input
                    type="text"
                    value={proof}
                    onChange={(e) => setProof(e.target.value)}
                    placeholder="e.g. TRF20240628123456"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-violet-500 transition"
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full py-3 bg-violet-600 hover:bg-violet-500 rounded-xl font-bold transition"
                >
                  Submit Payment Proof
                </button>
              </div>
            </div>
          </div>
        )}

        {/* SUCCESS PAGE */}
        {paymentDone && (
          <div className="max-w-lg mx-auto text-center">
            <div className="text-8xl mb-6">🎉</div>
            <h2 className="text-3xl font-black mb-4">Payment Submitted!</h2>
            <p className="text-white/40 mb-8 leading-relaxed">
              Thank you! We have received your payment proof.
              Your Pro account will be activated within <span className="text-violet-400 font-bold">24 hours</span>.
              We will send a confirmation to your email.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 text-left">
              <p className="font-bold mb-3 text-violet-400">What happens next?</p>
              <ul className="space-y-2 text-sm text-white/50">
                <li>✅ We verify your payment</li>
                <li>✅ We activate your Pro account manually</li>
                <li>✅ You receive a confirmation email</li>
                <li>✅ All Pro features unlock immediately</li>
              </ul>
            </div>
            <Link href="/dashboard" className="inline-block px-8 py-3 bg-violet-600 hover:bg-violet-500 rounded-xl font-bold transition">
              Back to Dashboard
            </Link>
          </div>
        )}

      </div>
    </main>
  );
}