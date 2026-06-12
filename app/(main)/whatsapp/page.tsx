"use client";

import { FormEvent, KeyboardEvent, useMemo, useState } from "react";
import { Download, FileText, MoreVertical, Paperclip, Phone, Search, Send, Smile, Video } from "lucide-react";

type Message = {
  id: string;
  text: string;
  time: string;
  mine?: boolean;
  file?: string;
};

type Chat = {
  id: string;
  name: string;
  avatar: string;
  online?: boolean;
  preview: string;
  date: string;
  messages: Message[];
};

const initialChats: Chat[] = [
  {
    id: "jane",
    name: "Jane Smith",
    avatar: "JS",
    online: true,
    preview: "Sounds good. Let's proceed.",
    date: "10:30 AM",
    messages: [
      { id: "1", text: "Hi Jane, how are you?", time: "10:28 AM", mine: true },
      { id: "2", text: "Hi! I'm good, thanks. How about you?", time: "10:29 AM" },
      { id: "3", text: "I'm doing great. Just sharing the project update.", time: "10:29 AM", mine: true },
      { id: "4", text: "project-update.pdf", time: "10:29 AM", mine: true, file: "2.4 MB - PDF" },
      { id: "5", text: "Thanks! I'll review it and get back to you.", time: "10:30 AM" },
      { id: "6", text: "Sounds good. Let's proceed.", time: "10:30 AM", mine: true },
    ],
  },
  {
    id: "john",
    name: "John Doe",
    avatar: "JD",
    preview: "Please share the requirements.",
    date: "10:12 AM",
    messages: [
      { id: "1", text: "Can you send the scope for the dashboard?", time: "10:08 AM" },
      { id: "2", text: "Yes, I will send it today.", time: "10:12 AM", mine: true },
    ],
  },
  {
    id: "robert",
    name: "Robert Brown",
    avatar: "RB",
    preview: "Thanks for the update!",
    date: "Yesterday",
    messages: [{ id: "1", text: "Thanks for the update!", time: "Yesterday" }],
  },
  {
    id: "emily",
    name: "Emily Davis",
    avatar: "ED",
    preview: "Can we schedule a call?",
    date: "Yesterday",
    messages: [{ id: "1", text: "Can we schedule a call?", time: "Yesterday" }],
  },
  {
    id: "michael",
    name: "Michael Wilson",
    avatar: "MW",
    preview: "Got it, I'll review it.",
    date: "May 24",
    messages: [{ id: "1", text: "Got it, I'll review it.", time: "May 24" }],
  },
  {
    id: "sarah",
    name: "Sarah Johnson",
    avatar: "SJ",
    preview: "Please check the attachment.",
    date: "May 23",
    messages: [{ id: "1", text: "Please check the attachment.", time: "May 23" }],
  },
];

export default function WhatsAppPage() {
  const [chats, setChats] = useState(initialChats);
  const [activeId, setActiveId] = useState(initialChats[0].id);
  const [query, setQuery] = useState("");
  const [draft, setDraft] = useState("");

  const activeChat = chats.find((chat) => chat.id === activeId) || chats[0];
  const filteredChats = useMemo(
    () => chats.filter((chat) => chat.name.toLowerCase().includes(query.toLowerCase())),
    [chats, query],
  );

  function addMessage(message: Omit<Message, "id" | "time" | "mine"> & { mine?: boolean }) {
    const time = new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date());

    setChats((current) =>
      current.map((chat) =>
        chat.id === activeId
          ? {
            ...chat,
            preview: message.text,
            date: time,
            messages: [
              ...chat.messages,
              {
                ...message,
                id: crypto.randomUUID(),
                time,
                mine: true,
              },
            ],
          }
          : chat,
      ),
    );
  }

  function handleSend(event?: FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    const text = draft.trim();
    if (!text) return;
    addMessage({ text });
    setDraft("");
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  }

  return (
    <div className="min-h-[calc(100vh-6rem)]">
      <section className="grid h-[calc(100vh-7.5rem)] overflow-hidden rounded-lg border border-white/10 bg-[#0d1828]/90 shadow-2xl shadow-black/20 lg:grid-cols-[350px_1fr]">
        <aside className="min-h-0 border-r border-white/10 bg-[#101b2c]">
          <div className="flex h-16 items-center justify-between border-b border-white/10 px-4">
            <h1 className="text-2xl font-semibold text-white">Chats</h1>
            <div className="flex gap-2 text-slate-400">
              <Phone size={17} />
              <MoreVertical size={18} />
            </div>
          </div>
          <div className="p-4">
            <label className="flex h-10 items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 text-sm text-slate-500">
              <Search size={15} />
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search or start new chat" className="min-w-0 flex-1 bg-transparent text-slate-200 outline-none placeholder:text-slate-500" />
            </label>
          </div>
          <div className="h-[calc(100%-8.5rem)] overflow-y-auto px-2 pb-4">
            {filteredChats.map((chat) => (
              <button
                key={chat.id}
                onClick={() => setActiveId(chat.id)}
                className={`flex w-full items-center gap-3 rounded-md p-3 text-left transition ${activeId === chat.id ? "bg-teal-500/15" : "hover:bg-white/5"}`}
              >
                <Avatar initials={chat.avatar} online={chat.online} />
                <span className="min-w-0 flex-1">
                  <span className="flex items-center justify-between gap-2">
                    <span className="truncate text-sm font-semibold text-white">{chat.name}</span>
                    <span className="text-xs text-slate-500">{chat.date}</span>
                  </span>
                  <span className="mt-1 block truncate text-xs text-slate-400">{chat.preview}</span>
                </span>
              </button>
            ))}
          </div>
        </aside>

        <main className="grid min-h-0 grid-rows-[64px_1fr_64px] bg-[#07151a]">
          <header className="flex items-center justify-between border-b border-white/10 bg-[#101b2c] px-4">
            <div className="flex items-center gap-3">
              <Avatar initials={activeChat.avatar} online={activeChat.online} />
              <div>
                <h2 className="font-semibold text-white">{activeChat.name}</h2>
                <p className="text-xs text-slate-400">{activeChat.online ? "online" : "last seen recently"}</p>
              </div>
            </div>
            <div className="flex gap-4 text-slate-400">
              <Search size={18} />
              <Phone size={18} />
              <Video size={18} />
              <MoreVertical size={18} />
            </div>
          </header>

          <div className="min-h-0 space-y-4 overflow-y-auto bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.05),transparent_35%),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:auto,34px_34px,34px_34px] p-5">
            {activeChat.messages.map((message) => (
              <div key={message.id} className={`flex ${message.mine ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[78%] rounded-lg px-4 py-3 text-sm shadow-lg ${message.mine ? "bg-teal-700 text-white" : "bg-[#162338] text-slate-100"}`}>
                  {message.file ? (
                    <div className="flex min-w-72 items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-md bg-white/10">
                        <FileText size={20} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate font-medium">{message.text}</span>
                        <span className="text-xs text-slate-300">{message.file}</span>
                      </span>
                      <Download size={20} />
                    </div>
                  ) : (
                    <p>{message.text}</p>
                  )}
                  <p className="mt-1 text-right text-[10px] text-slate-300">{message.time}</p>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="flex items-center gap-3 border-t border-white/10 bg-[#101b2c] px-4">
            <button type="button" aria-label="Emoji" className="text-slate-400 hover:text-white">
              <Smile size={20} />
            </button>
            <button type="button" onClick={() => addMessage({ text: "project-brief.pdf", file: "1.8 MB - PDF" })} aria-label="Attach file" className="text-slate-400 hover:text-white">
              <Paperclip size={20} />
            </button>
            <input value={draft} onChange={(event) => setDraft(event.target.value)} onKeyDown={handleKeyDown} placeholder="Type a message" className="h-11 min-w-0 flex-1 rounded-full border border-white/10 bg-white/5 px-5 text-sm outline-none placeholder:text-slate-500 focus:border-teal-300/50" />
            <button className="grid h-11 w-11 place-items-center rounded-full bg-[#132033] text-slate-300 transition hover:bg-teal-700 hover:text-white" aria-label="Send message">
              <Send size={19} />
            </button>
          </form>
        </main>
      </section>
    </div>
  );
}

function Avatar({ initials, online }: { initials: string; online?: boolean }) {
  return (
    <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-rose-200 via-cyan-200 to-emerald-300 text-xs font-bold text-slate-950">
      {initials}
      {online && <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#101b2c] bg-emerald-400" />}
    </span>
  );
}
