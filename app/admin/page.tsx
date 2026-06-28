"use client";
import { useState } from "react";
import Link from "next/link";

const allUsers = [
  { id: 1, name: "Sarah K.", email: "sarah@example.com", role: "Data Scientist", plan: "pro", status: "active", joined: "Jan 2024", paymentProof: "TRF20240101123456" },
  { id: 2, name: "Mike O.", email: "mike@example.com", role: "Cybersecurity Expert", plan: "free", status: "active", joined: "Feb 2024", paymentProof: "" },
  { id: 3, name: "Amaka T.", email: "amaka@example.com", role: "Frontend Developer", plan: "pending", status: "pending", joined: "Mar 2024", paymentProof: "TRF20240301789012" },
  { id: 4, name: "James L.", email: "james@example.com", role: "ML Engineer", plan: "pro", status: "active", joined: "Mar 2024", paymentProof: "TRF20240315345678" },
  { id: 5, name: "Fatima B.", email: "fatima@example.com", role: "Full Stack Developer", plan: "pending", status: "pending", joined: "Apr 2024", paymentProof: "TRF20240401901234" },
  { id: 6, name: "John D.", email: "john@example.com", role: "DevOps Engineer", plan: "free", status: "active", joined: "Apr 2024", paymentProof: "" },
  { id: 7, name: "Ada N.", email: "ada@example.com", role: "Data Analyst", plan: "pro", status: "active", joined: "May 2024", paymentProof: "TRF20240501567890" },
  { id: 8, name: "Chidi M.", email: "chidi@example.com", role: "Backend Developer", plan: "pending", status: "pending", joined: "Jun 2024", paymentProof: "TRF20240601234567" },
];

export default function AdminDashboard() {
  const [users, setUsers] = useState(allUsers);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selectedUser, setSelectedUser] = useState<typeof allUsers[0] | null>(null);

  const stats = {
    total: users.length,
    pro: users.filter((u) => u.plan === "pro").length,
    free: users.filter((u) => u.plan === "free").length,
    pending: users.filter((u) => u.plan === "pending").length,
  };

  const filtered = users.filter((u) => {
    const matchSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.role.toLowerCase().includes(search.toLowerCase());
    const matchFilter =
      filter === "All" ||
      (filter === "Pro" && u.plan === "pro") ||
      (filter === "Free" && u.plan === "free") ||
      (filter === "Pending" && u.plan === "pending");
    return matchSearch && matchFilter;
  });

  const activatePro = (id: number) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id ? { ...u, plan: "pro", status: "active" } : u
      )
    );
    setSelectedUser(null);
  };

  const deactivatePro = (id: number) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id ? { ...u, plan: "free", status: "active" } : u
      )
    );
    setSelectedUser(null);
  };

  const deleteUser = (id: number) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
    setSelectedUser(null);
  };

  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-white/10 sticky top-0 bg-[#0a0a0a]/90 backdrop-blur-md z-50">
        <h1 className="text-xl font-black">
          Analytical<span className="text-violet-500">.</span>
          <span className="text-xs bg-red-600 px-2 py-0.5 rounded-full ml-2 font-normal">ADMIN</span>
        </h1>
        <div className="flex gap-4">
          <Link href="/dashboard" className="text-sm px-4 py-2 rounded-xl border border-white/10 hover:border-white/30 transition">
            Back to Site
          </Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* HEADER */}
        <div className="mb-10">
          <h2 className="text-4xl font-black mb-2">Admin Dashboard</h2>
          <p className="text-white/40">Manage users, activate Pro accounts and monitor the platform</p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Total Users", value: stats.total, icon: "👥", color: "text-white" },
            { label: "Pro Users", value: stats.pro, icon: "💎", color: "text-violet-400" },
            { label: "Free Users", value: stats.free, icon: "🆓", color: "text-blue-400" },
            { label: "Pending Activation", value: stats.pending, icon: "⏳", color: "text-orange-400" },
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <span className="text-2xl">{stat.icon}</span>
              <p className={`text-3xl font-black mt-3 ${stat.color}`}>{stat.value}</p>
              <p className="text-white/40 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* PENDING ALERT */}
        {stats.pending > 0 && (
          <div className="bg-orange-600/20 border border-orange-500/50 rounded-2xl p-5 mb-8 flex items-center justify-between">
            <div>
              <p className="font-bold text-orange-300">⏳ {stats.pending} users waiting for Pro activation</p>
              <p className="text-white/40 text-sm mt-1">Review their payment proofs and activate manually</p>
            </div>
            <button
              onClick={() => setFilter("Pending")}
              className="text-sm bg-orange-600 hover:bg-orange-500 px-4 py-2 rounded-xl font-bold transition"
            >
              Review Now
            </button>
          </div>
        )}

        {/* SEARCH & FILTER */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search users by name, email or role..."
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white placeholder-white/20 focus:outline-none focus:border-violet-500 transition"
          />
          <div className="flex gap-2">
            {["All", "Pro", "Free", "Pending"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-3 rounded-xl text-sm font-semibold transition ${
                  filter === f
                    ? "bg-violet-600 text-white"
                    : "bg-white/5 text-white/50 hover:text-white border border-white/10"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* USERS TABLE */}
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left px-6 py-4 text-sm font-bold text-white/40">User</th>
                  <th className="text-left px-6 py-4 text-sm font-bold text-white/40">Role</th>
                  <th className="text-left px-6 py-4 text-sm font-bold text-white/40">Plan</th>
                  <th className="text-left px-6 py-4 text-sm font-bold text-white/40">Joined</th>
                  <th className="text-left px-6 py-4 text-sm font-bold text-white/40">Payment Ref</th>
                  <th className="text-left px-6 py-4 text-sm font-bold text-white/40">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((user) => (
                  <tr key={user.id} className="border-b border-white/5 hover:bg-white/5 transition">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-violet-600 flex items-center justify-center text-xs font-bold">
                          {user.name.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{user.name}</p>
                          <p className="text-white/30 text-xs">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-white/50">{user.role}</td>
                    <td className="px-6 py-4">
                      <span className={`text-xs px-3 py-1 rounded-full font-bold ${
                        user.plan === "pro"
                          ? "bg-violet-600/30 text-violet-300"
                          : user.plan === "pending"
                          ? "bg-orange-600/30 text-orange-300"
                          : "bg-white/10 text-white/40"
                      }`}>
                        {user.plan.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-white/40">{user.joined}</td>
                    <td className="px-6 py-4 text-sm text-white/40 font-mono">
                      {user.paymentProof || "—"}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        {user.plan === "pending" && (
                          <button
                            onClick={() => activatePro(user.id)}
                            className="text-xs bg-violet-600 hover:bg-violet-500 px-3 py-1.5 rounded-lg font-bold transition"
                          >
                            Activate Pro
                          </button>
                        )}
                        {user.plan === "pro" && (
                          <button
                            onClick={() => deactivatePro(user.id)}
                            className="text-xs bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg transition"
                          >
                            Deactivate
                          </button>
                        )}
                        <button
                          onClick={() => setSelectedUser(user)}
                          className="text-xs border border-white/10 hover:border-white/30 px-3 py-1.5 rounded-lg transition"
                        >
                          View
                        </button>
                        <button
                          onClick={() => deleteUser(user.id)}
                          className="text-xs bg-red-600/20 hover:bg-red-600/40 text-red-400 px-3 py-1.5 rounded-lg transition"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* USER DETAIL MODAL */}
        {selectedUser && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center px-6">
            <div className="bg-[#111] border border-white/10 rounded-2xl p-8 w-full max-w-md">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-black">User Details</h3>
                <button
                  onClick={() => setSelectedUser(null)}
                  className="text-white/40 hover:text-white transition text-xl"
                >
                  ✕
                </button>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-violet-600 flex items-center justify-center text-xl font-black">
                  {selectedUser.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-xl font-black">{selectedUser.name}</p>
                  <p className="text-white/40 text-sm">{selectedUser.email}</p>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {[
                  { label: "Role", value: selectedUser.role },
                  { label: "Plan", value: selectedUser.plan.toUpperCase() },
                  { label: "Status", value: selectedUser.status.toUpperCase() },
                  { label: "Joined", value: selectedUser.joined },
                  { label: "Payment Ref", value: selectedUser.paymentProof || "None" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between text-sm">
                    <span className="text-white/40">{item.label}</span>
                    <span className="font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                {selectedUser.plan === "pending" && (
                  <button
                    onClick={() => activatePro(selectedUser.id)}
                    className="flex-1 py-3 bg-violet-600 hover:bg-violet-500 rounded-xl font-bold transition"
                  >
                    ✅ Activate Pro
                  </button>
                )}
                {selectedUser.plan === "pro" && (
                  <button
                    onClick={() => deactivatePro(selectedUser.id)}
                    className="flex-1 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-bold transition"
                  >
                    Deactivate Pro
                  </button>
                )}
                <button
                  onClick={() => deleteUser(selectedUser.id)}
                  className="flex-1 py-3 bg-red-600/20 hover:bg-red-600/40 text-red-400 rounded-xl font-bold transition"
                >
                  🗑️ Delete User
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}