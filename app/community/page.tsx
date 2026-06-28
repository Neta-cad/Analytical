"use client";
import { useState } from "react";
import Link from "next/link";

const channels = [
  { id: 1, name: "General", icon: "💬", members: 12400, description: "General tech discussions" },
  { id: 2, name: "Python", icon: "🐍", members: 8900, description: "Python programming" },
  { id: 3, name: "React", icon: "⚛️", members: 7600, description: "React & frontend" },
  { id: 4, name: "Data Science", icon: "📊", members: 6200, description: "Data science & ML" },
  { id: 5, name: "Cybersecurity", icon: "🔒", members: 4800, description: "Security & hacking" },
  { id: 6, name: "DevOps", icon: "⚙️", members: 3900, description: "DevOps & cloud" },
  { id: 7, name: "AI & ML", icon: "🤖", members: 9100, description: "Artificial intelligence" },
  { id: 8, name: "Career", icon: "🎯", members: 11200, description: "Career advice & growth" },
];

const posts = [
  { id: 1, author: "Sarah K.", role: "Data Scientist", avatar: "SK", channel: "Data Science", time: "2 hours ago", title: "How I went from Excel to Python in 3 months", content: "I want to share my journey switching from Excel to Python for data analysis. It was tough but worth it...", likes: 234, comments: 47, tag: "Story" },
  { id: 2, author: "Mike O.", role: "Cybersecurity Expert", avatar: "MO", channel: "Cybersecurity", time: "4 hours ago", title: "Top 5 security mistakes developers make in 2024", content: "After reviewing hundreds of codebases I keep seeing the same security issues come up again and again...", likes: 189, comments: 32, tag: "Tips" },
  { id: 3, author: "Amaka T.", role: "Frontend Developer", avatar: "AT", channel: "React", time: "6 hours ago", title: "React 19 features you need to know about", content: "React 19 just dropped and there are some game changing features that every frontend developer should know...", likes: 312, comments: 58, tag: "News" },
  { id: 4, author: "James L.", role: "ML Engineer", avatar: "JL", channel: "AI & ML", time: "1 day ago", title: "I built an AI model that predicts job salaries", content: "After collecting data from over 10,000 job postings I trained a model to predict tech salaries with 87% accuracy...", likes: 445, comments: 91, tag: "Project" },
  { id: 5, author: "Fatima B.", role: "Full Stack Developer", avatar: "FB", channel: "Career", time: "1 day ago", title: "How I got 3 job offers in one week", content: "Last month I was unemployed and stressed. This week I have 3 job offers. Here is exactly what I did differently...", likes: 678, comments: 134, tag: "Story" },
];

export default function Community() {
  const [activeChannel, setActiveChannel] = useState("All");
  const [search, setSearch] = useState("");
  const [showPostForm, setShowPostForm] = useState(false);
  const [newPost, setNewPost] = useState({ title: "", content: "", channel: "General" });
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  const filteredPosts = posts.filter((post) => {
    const matchChannel = activeChannel === "All" || post.channel === activeChannel;
    const matchSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.content.toLowerCase().includes(search.toLowerCase()) ||
      post.author.toLowerCase().includes(search.toLowerCase());
    return matchChannel && matchSearch;
  });

  const handleLike = (id: number) => {
    setLikedPosts((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
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
        <div className="flex gap-4">
          <button
            onClick={() => setShowPostForm(!showPostForm)}
            className="text-sm px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 font-bold transition"
          >
            + New Post
          </button>
          <Link href="/dashboard" className="text-sm px-4 py-2 rounded-xl border border-white/10 hover:border-white/30 transition">
            Dashboard
          </Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* HEADER */}
        <div className="mb-10">
          <h2 className="text-4xl font-black mb-2">Community</h2>
          <p className="text-white/40">Connect, share and grow with thousands of tech professionals</p>
        </div>

        {/* NEW POST FORM */}
        {showPostForm && (
          <div className="bg-white/5 border border-violet-500/50 rounded-2xl p-6 mb-10">
            <h3 className="text-lg font-bold mb-4">Create a Post</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Post title..."
                value={newPost.title}
                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-violet-500 transition"
              />
              <textarea
                placeholder="Share your thoughts, questions or insights..."
                value={newPost.content}
                onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-violet-500 transition resize-none"
              />
              <div className="flex items-center justify-between">
                <select
                  value={newPost.channel}
                  onChange={(e) => setNewPost({ ...newPost, channel: e.target.value })}
                  className="bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-violet-500 transition text-sm"
                >
                  {channels.map((c) => (
                    <option key={c.id} value={c.name}>{c.icon} {c.name}</option>
                  ))}
                </select>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowPostForm(false)}
                    className="text-sm px-4 py-2 border border-white/10 hover:border-white/30 rounded-xl transition"
                  >
                    Cancel
                  </button>
                  <button className="text-sm px-4 py-2 bg-violet-600 hover:bg-violet-500 rounded-xl font-bold transition">
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-8">

          {/* LEFT — CHANNELS */}
          <div className="w-64 hidden md:block">
            <h3 className="text-sm font-bold text-white/40 uppercase tracking-wider mb-4">Channels</h3>
            <div className="space-y-1">
              <button
                onClick={() => setActiveChannel("All")}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm transition ${
                  activeChannel === "All"
                    ? "bg-violet-600 text-white font-bold"
                    : "text-white/50 hover:text-white hover:bg-white/5"
                }`}
              >
                🌐 All Channels
              </button>
              {channels.map((channel) => (
                <button
                  key={channel.id}
                  onClick={() => setActiveChannel(channel.name)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm transition ${
                    activeChannel === channel.name
                      ? "bg-violet-600 text-white font-bold"
                      : "text-white/50 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>{channel.icon} {channel.name}</span>
                  <span className="float-right text-white/30 text-xs">{(channel.members / 1000).toFixed(1)}k</span>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT — POSTS */}
          <div className="flex-1">

            {/* SEARCH */}
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search posts..."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white placeholder-white/20 focus:outline-none focus:border-violet-500 transition mb-6 text-sm"
            />

            {/* POSTS */}
            <div className="space-y-4">
              {filteredPosts.length === 0 ? (
                <div className="text-center py-20 text-white/30">
                  <p className="text-4xl mb-4">💬</p>
                  <p className="text-lg font-bold">No posts found</p>
                  <p className="text-sm mt-2">Be the first to post in this channel</p>
                </div>
              ) : (
                filteredPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-violet-500/30 transition"
                  >
                    {/* POST HEADER */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center text-sm font-bold">
                        {post.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className="font-bold text-sm">{post.author}</p>
                          <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full text-white/40">{post.role}</span>
                        </div>
                        <p className="text-white/30 text-xs">{post.channel} • {post.time}</p>
                      </div>
                      <span className={`text-xs px-3 py-1 rounded-full font-bold ${
                        post.tag === "Story" ? "bg-green-600/30 text-green-400" :
                        post.tag === "Tips" ? "bg-blue-600/30 text-blue-400" :
                        post.tag === "News" ? "bg-orange-600/30 text-orange-400" :
                        "bg-violet-600/30 text-violet-400"
                      }`}>
                        {post.tag}
                      </span>
                    </div>

                    {/* POST CONTENT */}
                    <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-4">{post.content}</p>

                    {/* POST ACTIONS */}
                    <div className="flex items-center gap-6 text-sm">
                      <button
                        onClick={() => handleLike(post.id)}
                        className={`flex items-center gap-2 transition ${
                          likedPosts.includes(post.id)
                            ? "text-violet-400"
                            : "text-white/40 hover:text-violet-400"
                        }`}
                      >
                        <span>👍</span>
                        <span>{likedPosts.includes(post.id) ? post.likes + 1 : post.likes}</span>
                      </button>
                      <button className="flex items-center gap-2 text-white/40 hover:text-white transition">
                        <span>💬</span>
                        <span>{post.comments}</span>
                      </button>
                      <button className="flex items-center gap-2 text-white/40 hover:text-white transition">
                        <span>🔗</span>
                        <span>Share</span>
                      </button>
                      <button className="flex items-center gap-2 text-white/40 hover:text-white transition ml-auto">
                        <span>🔖</span>
                        <span>Save</span>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}