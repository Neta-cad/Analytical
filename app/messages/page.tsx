"use client";
import { useState } from "react";
import Link from "next/link";

const conversations = [
  { id: 1, name: "Sarah K.", role: "Data Scientist", avatar: "SK", lastMessage: "Thanks for the dataset recommendation!", time: "2m ago", unread: 2, online: true },
  { id: 2, name: "Mike O.", role: "Cybersecurity Expert", avatar: "MO", lastMessage: "Can you review my CV?", time: "1h ago", unread: 0, online: true },
  { id: 3, name: "Amaka T.", role: "Frontend Developer", avatar: "AT", lastMessage: "That React tip was helpful!", time: "3h ago", unread: 1, online: false },
  { id: 4, name: "James L.", role: "ML Engineer", avatar: "JL", lastMessage: "Let's collaborate on the project", time: "1d ago", unread: 0, online: false },
  { id: 5, name: "TechCorp HR", role: "Recruiter", avatar: "TC", lastMessage: "We'd like to schedule an interview", time: "2d ago", unread: 3, online: true },
  { id: 6, name: "Fatima B.", role: "Full Stack Developer", avatar: "FB", lastMessage: "Check out this job posting", time: "3d ago", unread: 0, online: false },
];

const messageHistory: Record<number, { id: number; from: string; text: string; time: string; mine: boolean }[]> = {
  1: [
    { id: 1, from: "Sarah K.", text: "Hey! I saw your profile and I'm impressed with your work.", time: "10:00 AM", mine: false },
    { id: 2, from: "Me", text: "Thank you so much! I checked yours too, amazing projects.", time: "10:05 AM", mine: true },
    { id: 3, from: "Sarah K.", text: "I wanted to ask about the Nigeria salary dataset you uploaded.", time: "10:10 AM", mine: false },
    { id: 4, from: "Me", text: "Sure! It covers over 5000 tech professionals across Nigeria.", time: "10:12 AM", mine: true },
    { id: 5, from: "Sarah K.", text: "Thanks for the dataset recommendation!", time: "10:15 AM", mine: false },
  ],
  2: [
    { id: 1, from: "Mike O.", text: "Hi there! I need some advice on my career transition.", time: "Yesterday", mine: false },
    { id: 2, from: "Me", text: "Of course! What are you transitioning from and to?", time: "Yesterday", mine: true },
    { id: 3, from: "Mike O.", text: "Can you review my CV?", time: "Yesterday", mine: false },
  ],
  5: [
    { id: 1, from: "TechCorp HR", text: "Hello! We came across your profile on Analytical.", time: "2 days ago", mine: false },
    { id: 2, from: "TechCorp HR", text: "We are impressed with your experience and skills.", time: "2 days ago", mine: false },
    { id: 3, from: "TechCorp HR", text: "We'd like to schedule an interview", time: "2 days ago", mine: false },
  ],
};

export default function Messages() {
  const [activeChat, setActiveChat] = useState<number | null>(1);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(messageHistory);

  const handleSend = () => {
    if (!message.trim() || !activeChat) return;
    const newMsg = {
      id: Date.now(),
      from: "Me",
      text: message,
      time: "Just now",
      mine: true,
    };
    setMessages((prev) => ({
      ...prev,
      [activeChat]: [...(prev[activeChat] || []), newMsg],
    }));
    setMessage("");
  };

  const activeConvo = conversations.find((c) => c.id === activeChat);
  const activeMessages = activeChat ? messages[activeChat] || [] : [];

  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen flex flex-col">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-white/10 bg-[#0a0a0a]/90 backdrop-blur-md z-50">
        <Link href="/dashboard">
          <h1 className="text-xl font-black">
            Analytical<span className="text-violet-500">.</span>
          </h1>
        </Link>
        <Link href="/dashboard" className="text-sm px-4 py-2 rounded-xl border border-white/10 hover:border-white/30 transition">
          Dashboard
        </Link>
      </nav>

      <div className="flex flex-1 overflow-hidden" style={{ height: "calc(100vh - 73px)" }}>

        {/* LEFT — CONVERSATIONS */}
        <div className="w-80 border-r border-white/10 flex flex-col">
          <div className="p-4 border-b border-white/10">
            <h2 className="text-lg font-black mb-3">Messages</h2>
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white placeholder-white/20 focus:outline-none focus:border-violet-500 transition text-sm"
            />
          </div>

          <div className="flex-1 overflow-y-auto">
            {conversations.map((convo) => (
              <button
                key={convo.id}
                onClick={() => setActiveChat(convo.id)}
                className={`w-full p-4 flex items-center gap-3 hover:bg-white/5 transition text-left border-b border-white/5 ${
                  activeChat === convo.id ? "bg-white/5 border-l-2 border-l-violet-500" : ""
                }`}
              >
                {/* AVATAR */}
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-violet-600 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {convo.avatar}
                  </div>
                  {convo.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0a0a0a]" />
                  )}
                </div>

                {/* INFO */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-sm truncate">{convo.name}</p>
                    <p className="text-white/30 text-xs flex-shrink-0 ml-2">{convo.time}</p>
                  </div>
                  <p className="text-white/40 text-xs truncate mt-0.5">{convo.role}</p>
                  <p className="text-white/30 text-xs truncate mt-1">{convo.lastMessage}</p>
                </div>

                {/* UNREAD */}
                {convo.unread > 0 && (
                  <div className="w-5 h-5 bg-violet-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {convo.unread}
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT — CHAT */}
        {activeChat && activeConvo ? (
          <div className="flex-1 flex flex-col">

            {/* CHAT HEADER */}
            <div className="p-4 border-b border-white/10 flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center font-bold text-sm">
                  {activeConvo.avatar}
                </div>
                {activeConvo.online && (
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#0a0a0a]" />
                )}
              </div>
              <div>
                <p className="font-bold">{activeConvo.name}</p>
                <p className="text-xs text-white/40">
                  {activeConvo.online ? "🟢 Online" : "⚫ Offline"} • {activeConvo.role}
                </p>
              </div>
              <div className="ml-auto flex gap-3">
                <button className="text-white/40 hover:text-white transition text-lg">📞</button>
                <button className="text-white/40 hover:text-white transition text-lg">📹</button>
                <button className="text-white/40 hover:text-white transition text-lg">⋯</button>
              </div>
            </div>

            {/* MESSAGES */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {activeMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.mine ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                      msg.mine
                        ? "bg-violet-600 text-white rounded-br-sm"
                        : "bg-white/10 text-white rounded-bl-sm"
                    }`}
                  >
                    <p>{msg.text}</p>
                    <p className={`text-xs mt-1 ${msg.mine ? "text-violet-200" : "text-white/30"}`}>
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* MESSAGE INPUT */}
            <div className="p-4 border-t border-white/10">
              <div className="flex items-center gap-3">
                <button className="text-white/40 hover:text-white transition text-xl">📎</button>
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type a message..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-violet-500 transition text-sm"
                />
                <button
                  onClick={handleSend}
                  className="px-4 py-3 bg-violet-600 hover:bg-violet-500 rounded-xl font-bold transition text-sm"
                >
                  Send
                </button>
              </div>
            </div>

          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center text-white/20">
            <div className="text-center">
              <p className="text-5xl mb-4">💬</p>
              <p className="text-lg font-bold">Select a conversation</p>
              <p className="text-sm mt-2">Choose from your messages on the left</p>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}