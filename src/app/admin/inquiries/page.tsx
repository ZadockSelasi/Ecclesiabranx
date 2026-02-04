"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    MessageSquare,
    Search,
    Filter,
    MoreVertical,
    Send,
    Paperclip,
    Clock,
    CheckCircle2,
    User,
    Reply,
    Trash2,
    Archive
} from "lucide-react";
import { cn } from "@/lib/utils";

const initialInquiries = [
    {
        id: "1",
        name: "Thomas Miller",
        email: "tm@startup.co",
        subject: "Branding Inquiry",
        preview: "We're looking to refresh our tech startup branding...",
        status: "new",
        time: "42m ago",
        messages: [
            { sender: "user", text: "Hi, we're looking to refresh our tech startup branding. We need a modern, emerald-themed logo and a landing page design. Do you provide ongoing AI support?", time: "10:30 AM" },
        ]
    },
    {
        id: "2",
        name: "Sarah Jenkins",
        email: "sarah@flow.com",
        subject: "Gallery Question",
        preview: "I saw your latest work in the gallery and...",
        status: "replied",
        time: "2h ago",
        messages: [
            { sender: "user", text: "I saw your latest work in the gallery and absolutely love the animations. Which library do you use for the mountain scene?", time: "08:15 AM" },
            { sender: "admin", text: "Hi Sarah! Glad you liked it. We use a combination of Three.js and Framer Motion for that specific scene.", time: "08:45 AM" },
        ]
    },
    {
        id: "3",
        name: "David Chen",
        email: "david@davidchen.com",
        subject: "Feedback on services",
        preview: "The AI assistant was very helpful with my...",
        status: "read",
        time: "5h ago",
        messages: [
            { sender: "user", text: "The AI assistant was very helpful with my color palette selection. I'd like to book a consultation to discuss the full brand rollout.", time: "05:22 AM" },
        ]
    }
];

export default function UserInquiries() {
    const [selectedId, setSelectedId] = useState(initialInquiries[0].id);
    const [inquiries, setInquiries] = useState(initialInquiries);
    const [replyText, setReplyText] = useState("");

    const selectedInquiry = inquiries.find(i => i.id === selectedId) || inquiries[0];

    const handleSendReply = () => {
        if (!replyText.trim()) return;

        const newInquiries = inquiries.map(inq => {
            if (inq.id === selectedId) {
                return {
                    ...inq,
                    status: "replied",
                    messages: [...inq.messages, { sender: "admin", text: replyText, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]
                };
            }
            return inq;
        });

        setInquiries(newInquiries);
        setReplyText("");
    };

    return (
        <div className="h-[calc(100vh-140px)] flex gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Sidebar List */}
            <div className="w-1/3 flex flex-col space-y-4">
                <div className="flex items-center justify-between mb-2">
                    <h1 className="text-2xl font-bold text-white flex items-center">
                        <MessageSquare className="mr-3 text-emerald-500" />
                        User Feedback
                    </h1>
                    <div className="flex items-center space-x-2">
                        <button className="p-2 rounded-lg bg-emerald-900/30 text-emerald-500 hover:text-emerald-400 transition-all border border-emerald-800/50">
                            <Filter size={18} />
                        </button>
                    </div>
                </div>

                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-700 size-4" />
                    <input
                        type="text"
                        placeholder="Search inquiries..."
                        className="w-full bg-emerald-900/20 border border-emerald-800/50 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                    />
                </div>

                <div className="flex-1 overflow-y-auto pr-2 space-y-3 custom-scrollbar">
                    {inquiries.map((inq) => (
                        <motion.div
                            key={inq.id}
                            whileHover={{ x: 4 }}
                            onClick={() => setSelectedId(inq.id)}
                            className={cn(
                                "p-4 rounded-2xl cursor-pointer transition-all border group",
                                selectedId === inq.id
                                    ? "bg-emerald-600 border-white text-white shadow-xl shadow-emerald-900/40"
                                    : "bg-emerald-900/20 border-emerald-800/50 text-emerald-300 hover:bg-emerald-900/40 hover:border-emerald-700"
                            )}
                        >
                            <div className="flex justify-between items-start mb-1">
                                <span className="font-bold text-sm">{inq.name}</span>
                                <span className={cn(
                                    "text-[10px] uppercase tracking-wider font-bold",
                                    selectedId === inq.id ? "text-emerald-200" : "text-emerald-500"
                                )}>{inq.time}</span>
                            </div>
                            <p className={cn(
                                "text-xs font-bold truncate",
                                selectedId === inq.id ? "text-white" : "text-emerald-500"
                            )}>{inq.subject}</p>
                            <p className={cn(
                                "text-xs mt-1 truncate",
                                selectedId === inq.id ? "text-emerald-100" : "text-emerald-500/60"
                            )}>{inq.preview}</p>

                            <div className="mt-3 flex items-center justify-between">
                                <div className={cn(
                                    "px-2 py-0.5 rounded text-[10px] font-bold uppercase",
                                    inq.status === 'new'
                                        ? "bg-emerald-500 text-white"
                                        : inq.status === 'replied' ? "bg-emerald-800/80 text-emerald-400" : "bg-emerald-900/50 text-emerald-700"
                                )}>
                                    {inq.status}
                                </div>
                                {inq.status === 'new' && (
                                    <div className="size-2 bg-white rounded-full animate-pulse"></div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Content View */}
            <div className="flex-1 bg-emerald-900/20 border border-emerald-800/50 rounded-3xl flex flex-col backdrop-blur-md overflow-hidden shadow-2xl">
                {/* Header */}
                <div className="p-6 border-b border-emerald-800/50 flex items-center justify-between bg-emerald-950/30">
                    <div className="flex items-center space-x-4">
                        <div className="size-12 rounded-full bg-emerald-800 border-2 border-emerald-700 flex items-center justify-center text-emerald-400">
                            <User size={24} />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-white leading-tight">{selectedInquiry.name}</h2>
                            <p className="text-xs text-emerald-500">{selectedInquiry.email} • {selectedInquiry.status === 'replied' ? 'Replied' : 'Pending response'}</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        {[Archive, Trash2, MoreVertical].map((Icon, idx) => (
                            <button key={idx} className="p-2 rounded-lg text-emerald-600 hover:text-emerald-400 hover:bg-emerald-900/50 transition-all">
                                <Icon size={18} />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Conversation Area */}
                <div className="flex-1 overflow-y-auto p-8 space-y-8 scroll-smooth">
                    {selectedInquiry.messages.map((msg, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            key={idx}
                            className={cn(
                                "flex flex-col max-w-[80%]",
                                msg.sender === 'admin' ? "ml-auto items-end" : "items-start"
                            )}
                        >
                            <div className={cn(
                                "p-4 rounded-2xl shadow-sm relative group",
                                msg.sender === 'admin'
                                    ? "bg-emerald-600 text-white rounded-tr-none"
                                    : "bg-emerald-900/50 text-emerald-100 border border-emerald-800/50 rounded-tl-none"
                            )}>
                                <p className="text-sm leading-relaxed">{msg.text}</p>
                                <div className={cn(
                                    "absolute -bottom-6 flex items-center space-x-2 text-[10px] text-emerald-700 font-bold uppercase tracking-wider",
                                    msg.sender === 'admin' ? "right-0" : "left-0"
                                )}>
                                    <span>{msg.sender === 'admin' ? 'Ecclesia Bot / Me' : selectedInquiry.name}</span>
                                    <span>•</span>
                                    <span>{msg.time}</span>
                                    {msg.sender === 'admin' && <CheckCircle2 size={12} className="text-emerald-500" />}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Reply Area */}
                <div className="p-6 bg-emerald-950/40 border-t border-emerald-800/50">
                    <div className="flex items-center space-x-4">
                        <button className="text-emerald-500 hover:text-emerald-300 transition-colors">
                            <Paperclip size={20} />
                        </button>
                        <div className="flex-1 relative">
                            <textarea
                                value={replyText}
                                onChange={(e) => setReplyText(e.target.value)}
                                placeholder={`Reply to ${selectedInquiry.name.split(' ')[0]}...`}
                                className="w-full bg-emerald-900/30 border border-emerald-800/50 rounded-2xl py-3 px-5 pr-12 text-sm text-white placeholder:text-emerald-700 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500/50 min-h-[50px] max-h-[150px]"
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && !e.shiftKey) {
                                        e.preventDefault();
                                        handleSendReply();
                                    }
                                }}
                            />
                            <button
                                onClick={handleSendReply}
                                disabled={!replyText.trim()}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-500 hover:text-emerald-300 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                            >
                                <Send size={20} />
                            </button>
                        </div>
                        <button className="p-3 bg-emerald-600 text-white rounded-2xl hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-900/20 active:scale-95">
                            <Reply size={20} />
                        </button>
                    </div>
                    <div className="flex items-center space-x-4 mt-3 pl-10 text-[10px] text-emerald-700 font-bold uppercase tracking-widest">
                        <button className="hover:text-emerald-500 transition-colors">Use AI Template</button>
                        <span>•</span>
                        <button className="hover:text-emerald-500 transition-colors flex items-center">
                            <Clock size={10} className="mr-1" /> Schedule Reply
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
