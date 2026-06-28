"use client";
import { useState } from "react";
import Link from "next/link";

const allDatasets = [
  { id: 1, title: "Nigeria Tech Salary Survey 2024", author: "DataWorks", category: "Salary", format: "CSV", size: "2.4 MB", downloads: 1240, description: "Comprehensive salary data for tech professionals across Nigeria.", free: true },
  { id: 2, title: "Global Developer Survey Results", author: "TechStats", category: "Survey", format: "JSON", size: "5.1 MB", downloads: 3400, description: "Survey results from 50,000+ developers worldwide covering tools, salaries and more.", free: true },
  { id: 3, title: "Cybersecurity Threat Dataset 2024", author: "SecureLab", category: "Security", format: "CSV", size: "8.7 MB", downloads: 890, description: "Real-world cybersecurity threat data for research and model training.", free: false },
  { id: 4, title: "Machine Learning Benchmark Dataset", author: "AI Labs", category: "AI/ML", format: "CSV", size: "12.3 MB", downloads: 5600, description: "Benchmark dataset for training and testing machine learning models.", free: false },
  { id: 5, title: "African Startup Ecosystem Data", author: "StartupAfrica", category: "Business", format: "Excel", size: "3.2 MB", downloads: 720, description: "Data on African startups, funding rounds and growth metrics.", free: true },
  { id: 6, title: "Remote Jobs Market Analysis", author: "JobMetrics", category: "Jobs", format: "JSON", size: "1.8 MB", downloads: 2100, description: "Analysis of remote job market trends across tech roles globally.", free: true },
  { id: 7, title: "Python Packages Usage Statistics", author: "PyStats", category: "Dev", format: "CSV", size: "4.5 MB", downloads: 3800, description: "Download and usage statistics for top Python packages.", free: false },
  { id: 8, title: "Web Development Trends 2024", author: "WebData", category: "Dev", format: "JSON", size: "2.1 MB", downloads: 1560, description: "Trends in web development frameworks, tools and technologies.", free: true },
];

export default function Datasets() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [formatFilter, setFormatFilter] = useState("All");

  const categories = ["All", "Salary", "Survey", "Security", "AI/ML", "Business", "Jobs", "Dev"];
  const formats = ["All", "CSV", "JSON", "Excel"];

  const filtered = allDatasets.filter((d) => {
    const matchSearch =
      d.title.toLowerCase().includes(search.toLowerCase()) ||
      d.author.toLowerCase().includes(search.toLowerCase()) ||
      d.category.toLowerCase().includes(search.toLowerCase());
    const matchCategory = filter === "All" || d.category === filter;
    const matchFormat = formatFilter === "All" || d.format === formatFilter;
    return matchSearch && matchCategory && matchFormat;
  });

  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-white/10 sticky top-0 bg-[#0a0a0a]/90 backdrop-blur-md z-50">
        <Link href="/dashboard">
          <h1 className="text-xl font-black">
            Analytical<span className="text-violet-500">.</span>
          </h1>
        </Link>
        <div className="flex gap-4">
          <Link href="/datasets/upload" className="text-sm px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 font-bold transition">
            + Upload Dataset
          </Link>
          <Link href="/dashboard" className="text-sm px-4 py-2 rounded-xl border border-white/10 hover:border-white/30 transition">
            Dashboard
          </Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* HEADER */}
        <div className="mb-10">
          <h2 className="text-4xl font-black mb-2">Dataset Library</h2>
          <p className="text-white/40">Download and share real datasets with the tech community</p>
        </div>

        {/* UPLOAD BANNER */}
        <div className="bg-violet-600/20 border border-violet-500/50 rounded-2xl p-6 mb-10 flex items-center justify-between">
          <div>
            <p className="font-bold text-violet-300">📦 Have a dataset to share?</p>
            <p className="text-white/40 text-sm mt-1">Upload your datasets and help the community grow</p>
          </div>
          <Link href="/datasets/upload" className="text-sm bg-violet-600 hover:bg-violet-500 px-4 py-2 rounded-xl font-bold transition">
            Upload Now
          </Link>
        </div>

        {/* SEARCH */}
        <div className="mb-6">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search datasets, authors, categories..."
            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-violet-500 transition"
          />
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap gap-3 mb-10">
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${
                  filter === cat
                    ? "bg-violet-600 text-white"
                    : "bg-white/5 text-white/50 hover:text-white border border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            {formats.map((fmt) => (
              <button
                key={fmt}
                onClick={() => setFormatFilter(fmt)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${
                  formatFilter === fmt
                    ? "bg-white text-black"
                    : "bg-white/5 text-white/50 hover:text-white border border-white/10"
                }`}
              >
                {fmt}
              </button>
            ))}
          </div>
        </div>

        {/* RESULTS COUNT */}
        <p className="text-white/40 text-sm mb-6">{filtered.length} datasets found</p>

        {/* DATASET GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.length === 0 ? (
            <div className="col-span-2 text-center py-20 text-white/30">
              <p className="text-4xl mb-4">📦</p>
              <p className="text-lg font-bold">No datasets found</p>
              <p className="text-sm mt-2">Try a different search or filter</p>
            </div>
          ) : (
            filtered.map((dataset) => (
              <div
                key={dataset.id}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-violet-500/50 transition"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-2">
                    <span className="text-xs bg-white/10 px-3 py-1 rounded-full">{dataset.category}</span>
                    <span className={`text-xs px-3 py-1 rounded-full font-bold ${
                      dataset.format === "CSV"
                        ? "bg-green-600/30 text-green-400"
                        : dataset.format === "JSON"
                        ? "bg-blue-600/30 text-blue-400"
                        : "bg-orange-600/30 text-orange-400"
                    }`}>
                      {dataset.format}
                    </span>
                    {!dataset.free && (
                      <span className="text-xs bg-violet-600/30 text-violet-300 px-3 py-1 rounded-full font-bold">
                        PRO
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-bold mb-2">{dataset.title}</h3>
                <p className="text-white/40 text-sm mb-4 leading-relaxed">{dataset.description}</p>

                <div className="flex items-center gap-4 text-white/30 text-xs mb-5">
                  <span>👤 {dataset.author}</span>
                  <span>📁 {dataset.size}</span>
                  <span>⬇️ {dataset.downloads.toLocaleString()} downloads</span>
                </div>

                <div className="flex gap-3">
                  {dataset.free ? (
                    <button className="flex-1 py-2 bg-violet-600 hover:bg-violet-500 rounded-xl text-sm font-bold transition">
                      ⬇️ Download Free
                    </button>
                  ) : (
                    <Link href="/pricing" className="flex-1 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-bold transition text-center">
                      🔒 Pro Required
                    </Link>
                  )}
                  <button className="px-4 py-2 border border-white/10 hover:border-white/30 rounded-xl text-sm transition">
                    Preview
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </main>
  );
}