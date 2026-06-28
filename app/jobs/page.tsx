"use client";
import { useState } from "react";
import Link from "next/link";

const allJobs = [
  { id: 1, title: "Senior Data Analyst", company: "TechCorp", location: "Remote", salary: "$80k - $120k", type: "Full Time", tag: "Data", posted: "2 days ago", description: "We are looking for an experienced data analyst to join our team..." },
  { id: 2, title: "Full Stack Developer", company: "StartupXYZ", location: "Lagos, Nigeria", salary: "$60k - $90k", type: "Full Time", tag: "Dev", posted: "1 day ago", description: "Join our fast growing startup as a full stack developer..." },
  { id: 3, title: "Cybersecurity Engineer", company: "SecureNet", location: "London, UK", salary: "$90k - $130k", type: "Full Time", tag: "Security", posted: "3 days ago", description: "Help us protect our infrastructure and clients..." },
  { id: 4, title: "ML Engineer", company: "AI Labs", location: "Remote", salary: "$100k - $150k", type: "Contract", tag: "AI", posted: "5 hours ago", description: "Build and deploy machine learning models at scale..." },
  { id: 5, title: "Frontend Developer", company: "DesignCo", location: "New York, USA", salary: "$70k - $100k", type: "Full Time", tag: "Dev", posted: "1 week ago", description: "Create beautiful and responsive user interfaces..." },
  { id: 6, title: "Data Scientist", company: "DataWorks", location: "Remote", salary: "$85k - $125k", type: "Full Time", tag: "Data", posted: "2 days ago", description: "Analyze complex datasets and build predictive models..." },
  { id: 7, title: "DevOps Engineer", company: "CloudBase", location: "Berlin, Germany", salary: "$80k - $110k", type: "Full Time", tag: "DevOps", posted: "4 days ago", description: "Manage our cloud infrastructure and CI/CD pipelines..." },
  { id: 8, title: "Backend Developer", company: "APIFirst", location: "Remote", salary: "$75k - $105k", type: "Contract", tag: "Dev", posted: "6 hours ago", description: "Build robust and scalable backend services..." },
];

export default function Jobs() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");

  const tags = ["All", "Data", "Dev", "Security", "AI", "DevOps"];
  const types = ["All", "Full Time", "Contract"];

  const filtered = allJobs.filter((job) => {
    const matchSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase());
    const matchTag = filter === "All" || job.tag === filter;
    const matchType = typeFilter === "All" || job.type === typeFilter;
    return matchSearch && matchTag && matchType;
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
          <Link href="/jobs/post" className="text-sm px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 font-bold transition">
            + Post a Job
          </Link>
          <Link href="/dashboard" className="text-sm px-4 py-2 rounded-xl border border-white/10 hover:border-white/30 transition">
            Dashboard
          </Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* HEADER */}
        <div className="mb-10">
          <h2 className="text-4xl font-black mb-2">Job Board</h2>
          <p className="text-white/40">Find your next opportunity or post your availability</p>
        </div>

        {/* POST AVAILABILITY BANNER */}
        <div className="bg-violet-600/20 border border-violet-500/50 rounded-2xl p-6 mb-10 flex items-center justify-between">
          <div>
            <p className="font-bold text-violet-300">🙋 Are you available for hire?</p>
            <p className="text-white/40 text-sm mt-1">Post your profile so companies can find you directly</p>
          </div>
          <Link href="/jobs/post-availability" className="text-sm bg-violet-600 hover:bg-violet-500 px-4 py-2 rounded-xl font-bold transition">
            Post Availability
          </Link>
        </div>

        {/* SEARCH */}
        <div className="mb-6">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search jobs, companies, locations..."
            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-violet-500 transition"
          />
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap gap-3 mb-10">
          <div className="flex gap-2 flex-wrap">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${
                  filter === tag
                    ? "bg-violet-600 text-white"
                    : "bg-white/5 text-white/50 hover:text-white border border-white/10"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setTypeFilter(type)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${
                  typeFilter === type
                    ? "bg-white text-black"
                    : "bg-white/5 text-white/50 hover:text-white border border-white/10"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* RESULTS COUNT */}
        <p className="text-white/40 text-sm mb-6">{filtered.length} jobs found</p>

        {/* JOB LISTINGS */}
        <div className="space-y-4">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-white/30">
              <p className="text-4xl mb-4">🔍</p>
              <p className="text-lg font-bold">No jobs found</p>
              <p className="text-sm mt-2">Try a different search or filter</p>
            </div>
          ) : (
            filtered.map((job) => (
              <div
                key={job.id}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-violet-500/50 transition"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold">{job.title}</h3>
                      <span className="text-xs bg-white/10 px-3 py-1 rounded-full">{job.tag}</span>
                      <span className="text-xs bg-violet-600/30 text-violet-300 px-3 py-1 rounded-full">{job.type}</span>
                    </div>
                    <p className="text-white/50 text-sm">{job.company} • {job.location}</p>
                    <p className="text-violet-400 font-semibold mt-2">{job.salary}</p>
                    <p className="text-white/30 text-sm mt-3 leading-relaxed">{job.description}</p>
                    <p className="text-white/20 text-xs mt-3">Posted {job.posted}</p>
                  </div>
                  <div className="flex flex-col gap-2 min-w-fit">
                    <button className="text-sm bg-violet-600 hover:bg-violet-500 px-5 py-2 rounded-xl font-bold transition">
                      Apply Now
                    </button>
                    <button className="text-sm border border-white/10 hover:border-white/30 px-5 py-2 rounded-xl transition">
                      Save Job
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </main>
  );
}