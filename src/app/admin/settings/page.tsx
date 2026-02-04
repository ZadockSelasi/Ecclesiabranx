"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    User,
    Bot,
    Shield,
    Palette,
    Save,
    RefreshCw,
    Globe,
    Sparkles,
    Eye,
    EyeOff
} from "lucide-react";
import { cn } from "@/lib/utils";

type TabType = "general" | "account" | "ai" | "security" | "appearance";

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState<TabType>("general");
    const [saving, setSaving] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const tabs = [
        { id: "general", label: "General", icon: Globe },
        { id: "account", label: "Account", icon: User },
        { id: "ai", label: "AI & Automation", icon: Bot },
        { id: "security", label: "Security", icon: Shield },
        { id: "appearance", label: "Appearance", icon: Palette },
    ];

    const handleSave = () => {
        setSaving(true);
        setTimeout(() => setSaving(false), 1500);
    };

    return (
        <div className="max-w-6xl mx-auto space-y-8 pb-12">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
                <p className="text-emerald-400/60">Manage your administrative preferences and system configurations.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar Navigation */}
                <div className="lg:w-64 flex flex-col gap-1">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as TabType)}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group text-sm font-medium",
                                activeTab === tab.id
                                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-900/20"
                                    : "text-emerald-300/70 hover:bg-emerald-900/30 hover:text-emerald-200"
                            )}
                        >
                            <tab.icon size={18} className={cn(
                                activeTab === tab.id ? "text-white" : "text-emerald-500 group-hover:text-emerald-400"
                            )} />
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="flex-1">
                    <div className="bg-emerald-950/40 backdrop-blur-md border border-emerald-800/50 rounded-2xl p-6 lg:p-8 relative overflow-hidden">
                        {/* Decorative Background Glow */}
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="space-y-8"
                            >
                                {activeTab === "general" && (
                                    <div className="space-y-6">
                                        <div className="border-b border-emerald-800/50 pb-4">
                                            <h2 className="text-xl font-semibold text-white">General Information</h2>
                                            <p className="text-emerald-400/60 text-sm">Update your public brand identity and SEO settings.</p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-emerald-500 uppercase tracking-widest">Site Name</label>
                                                <input
                                                    type="text"
                                                    defaultValue="Ecclesia Brand"
                                                    className="w-full bg-emerald-900/20 border border-emerald-800/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all placeholder:text-emerald-700/50"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-emerald-500 uppercase tracking-widest">Support Email</label>
                                                <input
                                                    type="email"
                                                    defaultValue="hi@ecclesiabranx.com"
                                                    className="w-full bg-emerald-900/20 border border-emerald-800/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-emerald-500 uppercase tracking-widest">Site Description (SEO)</label>
                                            <textarea
                                                rows={4}
                                                defaultValue="Leading the future of brand identity and strategic design through AI-driven innovation."
                                                className="w-full bg-emerald-900/20 border border-emerald-800/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all resize-none"
                                            />
                                        </div>
                                    </div>
                                )}

                                {activeTab === "account" && (
                                    <div className="space-y-6">
                                        <div className="border-b border-emerald-800/50 pb-4">
                                            <h2 className="text-xl font-semibold text-white">Admin Profile</h2>
                                            <p className="text-emerald-400/60 text-sm">Manage your administrative identification and access.</p>
                                        </div>

                                        <div className="flex items-center gap-6 pb-6">
                                            <div className="w-20 h-20 rounded-full bg-emerald-800/30 border-2 border-emerald-500/30 flex items-center justify-center text-emerald-500 overflow-hidden group relative cursor-pointer shadow-lg shadow-emerald-950">
                                                <User size={40} />
                                                <div className="absolute inset-0 bg-emerald-600/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                                    <Palette size={20} className="text-white" />
                                                </div>
                                            </div>
                                            <div className="space-y-1">
                                                <h3 className="text-white font-medium">Head Administrator</h3>
                                                <button className="text-emerald-500 text-xs font-bold uppercase tracking-widest hover:text-emerald-400 transition-colors">Change Photo</button>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-emerald-500 uppercase tracking-widest">Display Name</label>
                                                <input
                                                    type="text"
                                                    defaultValue="Zadock Admin"
                                                    className="w-full bg-emerald-900/20 border border-emerald-800/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-emerald-500 uppercase tracking-widest">Employee ID</label>
                                                <input
                                                    type="text"
                                                    readOnly
                                                    defaultValue="EB-2025-001"
                                                    className="w-full bg-emerald-950/40 border border-emerald-800/50 rounded-xl px-4 py-3 text-emerald-400/50 cursor-not-allowed"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === "ai" && (
                                    <div className="space-y-6">
                                        <div className="border-b border-emerald-800/50 pb-4">
                                            <div className="flex items-center gap-2">
                                                <h2 className="text-xl font-semibold text-white">AI Assistant Tuning</h2>
                                                <Sparkles size={18} className="text-emerald-400 animate-pulse" />
                                            </div>
                                            <p className="text-emerald-400/60 text-sm">Configure the personality and behavior of the floating AI assistant.</p>
                                        </div>

                                        <div className="space-y-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold text-emerald-500 uppercase tracking-widest">AI Personality Model</label>
                                                    <select className="w-full bg-emerald-900/20 border border-emerald-800/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all appearance-none cursor-pointer">
                                                        <option value="professional">Professional & Technical</option>
                                                        <option value="creative">Creative & Enthusiastic</option>
                                                        <option value="minimalist">Minimalist & Direct</option>
                                                        <option value="warm">Warm & Helpful</option>
                                                    </select>
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold text-emerald-500 uppercase tracking-widest">Response Length</label>
                                                    <input type="range" className="w-full h-2 bg-emerald-900/50 rounded-lg appearance-none cursor-pointer accent-emerald-500 mt-4" />
                                                    <div className="flex justify-between text-[10px] text-emerald-700 font-bold uppercase tracking-wider px-1">
                                                        <span>Concise</span>
                                                        <span>Balanced</span>
                                                        <span>Detailed</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-emerald-500 uppercase tracking-widest">Core Instruction Override</label>
                                                <textarea
                                                    rows={3}
                                                    placeholder="Add specific rules for the AI (e.g., 'Always mention our upcoming portfolio launch')"
                                                    className="w-full bg-emerald-900/20 border border-emerald-800/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all resize-none"
                                                />
                                            </div>

                                            <div className="flex items-center justify-between p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                                                        <Bot size={20} />
                                                    </div>
                                                    <div>
                                                        <p className="text-white text-sm font-medium">Auto-Engagement Mode</p>
                                                        <p className="text-emerald-400/40 text-xs text-xs">AI will proactively greeting users after 15 seconds.</p>
                                                    </div>
                                                </div>
                                                <label className="relative inline-flex items-center cursor-pointer">
                                                    <input type="checkbox" className="sr-only peer" defaultChecked />
                                                    <div className="w-11 h-6 bg-emerald-900/50 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-emerald-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === "security" && (
                                    <div className="space-y-6">
                                        <div className="border-b border-emerald-800/50 pb-4">
                                            <h2 className="text-xl font-semibold text-white">Security & Auth</h2>
                                            <p className="text-emerald-400/60 text-sm">Protect your administrative access with advanced security measures.</p>
                                        </div>

                                        <div className="space-y-6">
                                            <div className="space-y-4">
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold text-emerald-500 uppercase tracking-widest">New Password</label>
                                                    <div className="relative">
                                                        <input
                                                            type={showPassword ? "text" : "password"}
                                                            placeholder="••••••••••••"
                                                            className="w-full bg-emerald-900/20 border border-emerald-800/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
                                                        />
                                                        <button
                                                            onClick={() => setShowPassword(!showPassword)}
                                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-600 hover:text-emerald-400 transition-colors"
                                                        >
                                                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="pt-4 space-y-4">
                                                <div className="flex items-center justify-between p-4 bg-emerald-900/20 border border-emerald-800/50 rounded-xl">
                                                    <div className="flex items-center gap-3">
                                                        <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                                                            <Shield size={20} />
                                                        </div>
                                                        <div>
                                                            <p className="text-white text-sm font-medium">Two-Factor Authentication</p>
                                                            <p className="text-emerald-400/40 text-xs">Add an extra layer of security to your account.</p>
                                                        </div>
                                                    </div>
                                                    <button className="px-4 py-2 bg-emerald-800/50 text-emerald-400 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-emerald-700 transition-all border border-emerald-700/50">Enable</button>
                                                </div>

                                                <div className="flex items-center justify-between p-4 bg-emerald-900/20 border border-emerald-800/50 rounded-xl">
                                                    <div className="flex items-center gap-3">
                                                        <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                                                            <Eye size={20} />
                                                        </div>
                                                        <div>
                                                            <p className="text-white text-sm font-medium">Active Sessions</p>
                                                            <p className="text-emerald-400/40 text-xs">Log out of all other devices.</p>
                                                        </div>
                                                    </div>
                                                    <button className="text-emerald-500 text-xs font-bold uppercase tracking-widest hover:text-red-400 transition-colors flex items-center gap-2">
                                                        <RefreshCw size={14} /> Close All
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === "appearance" && (
                                    <div className="space-y-6">
                                        <div className="border-b border-emerald-800/50 pb-4">
                                            <h2 className="text-xl font-semibold text-white">Appearance</h2>
                                            <p className="text-emerald-400/60 text-sm">Customize your administrative experience and visual theme.</p>
                                        </div>

                                        <div className="space-y-8">
                                            <div className="space-y-4">
                                                <label className="text-xs font-bold text-emerald-500 uppercase tracking-widest">Theme Mode</label>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="border-2 border-emerald-500 bg-emerald-900/20 p-4 rounded-xl flex flex-col items-center gap-3">
                                                        <div className="w-full h-24 bg-[#022c22] rounded-lg border border-emerald-800/50 relative overflow-hidden ring-4 ring-emerald-500/20">
                                                            <div className="absolute top-2 left-2 w-8 h-2 bg-emerald-500/40 rounded shadow-sm" />
                                                            <div className="absolute top-6 left-2 w-12 h-2 bg-emerald-500/20 rounded shadow-sm" />
                                                            <div className="absolute bottom-2 right-2 w-4 h-4 bg-emerald-600 rounded-full shadow-lg" />
                                                        </div>
                                                        <span className="text-white text-xs font-bold tracking-widest uppercase">Dark Emerald</span>
                                                    </div>
                                                    <div className="border border-emerald-800/50 bg-emerald-900/5 p-4 rounded-xl flex flex-col items-center gap-3 opacity-40 cursor-not-allowed grayscale">
                                                        <div className="w-full h-24 bg-white rounded-lg border border-gray-200 relative overflow-hidden">
                                                            <div className="absolute top-2 left-2 w-8 h-2 bg-gray-200 rounded" />
                                                            <div className="absolute bottom-2 right-2 w-4 h-4 bg-gray-300 rounded-full" />
                                                        </div>
                                                        <span className="text-emerald-900/50 text-xs font-bold tracking-widest uppercase">Classic Light</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <label className="text-xs font-bold text-emerald-500 uppercase tracking-widest">Accent Color Intensity</label>
                                                <div className="flex gap-4">
                                                    {[1, 2, 3, 4, 5].map((i) => (
                                                        <button
                                                            key={i}
                                                            className={cn(
                                                                "w-10 h-10 rounded-full border-2 transition-all flex items-center justify-center",
                                                                i === 4 ? "border-white bg-emerald-500 shadow-lg shadow-emerald-500/20 scale-110" : "border-emerald-800 bg-emerald-900/40 hover:scale-105"
                                                            )}
                                                        >
                                                            {i === 4 && <div className="w-2 h-2 bg-white rounded-full" />}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>

                        {/* Footer Actions */}
                        <div className="mt-12 pt-8 border-t border-emerald-800/30 flex justify-end gap-4">
                            <button
                                className="px-6 py-2.5 text-emerald-400 font-bold text-xs uppercase tracking-widest hover:text-emerald-200 transition-colors"
                            >
                                Reset Changes
                            </button>
                            <button
                                onClick={handleSave}
                                disabled={saving}
                                className="px-8 py-2.5 bg-emerald-600 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-emerald-500 transition-all flex items-center gap-2 shadow-lg shadow-emerald-950/40 disabled:opacity-50 disabled:cursor-wait"
                            >
                                {saving ? (
                                    <>
                                        <RefreshCw size={14} className="animate-spin" />
                                        Saving...
                                    </>
                                ) : (
                                    <>
                                        <Save size={14} />
                                        Save Changes
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
