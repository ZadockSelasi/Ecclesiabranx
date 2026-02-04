"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    BarChart3,
    TrendingUp,
    Target,
    Zap,
    Sparkles,
    ArrowUpRight,
    ChevronRight,
    PieChart,
    LineChart,
    BrainCircuit
} from "lucide-react";
import { cn } from "@/lib/utils";

const marketingData = [
    { channel: "Social Media", spend: "$4,200", reach: "125k", conversion: "3.2%" },
    { channel: "Google Ads", spend: "$2,800", reach: "89k", conversion: "4.5%" },
    { channel: "Email Marketing", spend: "$500", reach: "12k", conversion: "8.1%" },
    { channel: "Organic Search", spend: "$1,200", reach: "45k", conversion: "2.8%" },
];

const aiInsights = [
    {
        title: "Campaign Optimization",
        description: "The 'Emerald Vision' campaign is showing high engagement on Instagram but low conversion. AI suggests refining the CTA placement.",
        impact: "High",
        icon: Sparkles,
    },
    {
        title: "Audience Shift",
        description: "New traffic spike detected in the 18-24 demographic. AI recommends adjusting visual assets to a more Gen-Z friendly aesthetic.",
        impact: "Medium",
        icon: Zap,
    },
    {
        title: "Ad Spend Efficiency",
        description: "Google Ads CPC is rising. Shifting $500 to Email Marketing could yield 15% better ROI based on current trends.",
        impact: "High",
        icon: BrainCircuit,
    }
];

export default function MarketingAnalytics() {
    const [activeTab, setActiveTab] = useState("overview");

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight flex items-center">
                        <BarChart3 className="mr-3 text-emerald-500" />
                        Marketing AI Analytics
                    </h1>
                    <p className="text-emerald-500/60 mt-1">Real-time performance tracking with AI-driven growth strategies.</p>
                </div>
                <button className="flex items-center justify-center px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-medium transition-all shadow-lg shadow-emerald-900/40 group overflow-hidden relative">
                    <Sparkles size={18} className="mr-2 group-hover:animate-pulse" />
                    Generate AI Report
                    <motion.div
                        className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    />
                </button>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
                {/* Main Analytics View */}
                <div className="xl:col-span-3 space-y-8">
                    {/* Quick Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 rounded-2xl bg-emerald-900/20 border border-emerald-800/50 backdrop-blur-sm">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-emerald-500/60 font-medium text-sm">Ad ROI</p>
                                <TrendingUp size={16} className="text-emerald-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">4.2x</h3>
                            <p className="text-xs text-emerald-400 mt-2 flex items-center">
                                <ArrowUpRight size={12} className="mr-1" /> +15% from last month
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-emerald-900/20 border border-emerald-800/50 backdrop-blur-sm">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-emerald-500/60 font-medium text-sm">Total Conversion</p>
                                <Target size={16} className="text-emerald-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">8.4%</h3>
                            <p className="text-xs text-emerald-400 mt-2 flex items-center">
                                <ArrowUpRight size={12} className="mr-1" /> +2.1% improvement
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-emerald-900/20 border border-emerald-800/50 backdrop-blur-sm">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-emerald-500/60 font-medium text-sm">Customer Acquisition</p>
                                <Zap size={16} className="text-emerald-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">$42.50</h3>
                            <p className="text-xs text-emerald-400 mt-2 flex items-center">
                                <ArrowUpRight size={12} className="mr-1" /> Optimized via AI
                            </p>
                        </div>
                    </div>

                    {/* Detailed Table */}
                    <div className="rounded-3xl bg-emerald-900/20 border border-emerald-800/50 overflow-hidden">
                        <div className="p-6 border-b border-emerald-800/50 flex items-center justify-between">
                            <h2 className="text-xl font-bold text-white">Channel Performance</h2>
                            <div className="flex space-x-2">
                                {["Table", "Chart"].map((t) => (
                                    <button
                                        key={t}
                                        onClick={() => setActiveTab(t.toLocaleLowerCase())}
                                        className={cn(
                                            "px-3 py-1 rounded-md text-xs font-medium transition-all",
                                            activeTab === t.toLocaleLowerCase() ? "bg-emerald-600 text-white" : "text-emerald-500 hover:bg-emerald-800/50"
                                        )}
                                    >
                                        {t}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="p-0">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-emerald-900/40 text-emerald-500 uppercase text-[10px] tracking-wider font-bold">
                                    <tr>
                                        <th className="p-4">Marketing Channel</th>
                                        <th className="p-4">Spend</th>
                                        <th className="p-4">Total Reach</th>
                                        <th className="p-4">Conversion Rate</th>
                                        <th className="p-4 text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-emerald-800/30">
                                    {marketingData.map((item, idx) => (
                                        <tr key={idx} className="hover:bg-emerald-800/20 transition-colors group">
                                            <td className="p-4 font-medium text-white">{item.channel}</td>
                                            <td className="p-4 text-emerald-300">{item.spend}</td>
                                            <td className="p-4 text-emerald-300">{item.reach}</td>
                                            <td className="p-4">
                                                <div className="flex items-center">
                                                    <span className="text-emerald-400 mr-2">{item.conversion}</span>
                                                    <div className="w-16 h-1 bg-emerald-800 rounded-full overflow-hidden">
                                                        <div className="h-full bg-emerald-500" style={{ width: item.conversion }}></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-4 text-right">
                                                <button className="text-emerald-600 hover:text-emerald-400 transition-colors">
                                                    <ChevronRight size={18} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* AI Insight Sidebar */}
                <div className="space-y-6">
                    <div className="p-6 rounded-3xl bg-emerald-600 text-white shadow-xl shadow-emerald-950/50 relative overflow-hidden group">
                        <BrainCircuit className="absolute -right-4 -bottom-4 size-24 text-emerald-500/20 group-hover:scale-110 transition-transform duration-500" />
                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold text-lg">AI Assistant</h3>
                                <div className="px-2 py-0.5 rounded bg-white/20 text-[10px] font-bold uppercase tracking-wider">Live</div>
                            </div>
                            <p className="text-emerald-50/80 text-sm leading-relaxed mb-6">
                                "I've analyzed your current marketing spend. You could increase conversion by 12% by shifting resources to organic search."
                            </p>
                            <button className="w-full py-2 bg-white text-emerald-600 rounded-lg text-sm font-bold shadow-sm hover:bg-emerald-50 transition-colors">
                                Apply AI Suggestions
                            </button>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-emerald-500 text-xs font-bold uppercase tracking-widest pl-2">Critical Insights</h3>
                        {aiInsights.map((insight, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ x: 5 }}
                                className="p-5 rounded-2xl bg-emerald-900/20 border border-emerald-800/50 backdrop-blur-sm group cursor-pointer"
                            >
                                <div className="flex items-start space-x-3">
                                    <div className="p-2 rounded-lg bg-emerald-800/50 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                                        <insight.icon size={18} />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-white mb-1">{insight.title}</h4>
                                        <p className="text-xs text-emerald-500/80 leading-relaxed">{insight.description}</p>
                                        <div className={cn(
                                            "mt-3 text-[10px] font-bold px-2 py-0.5 rounded inline-block uppercase",
                                            insight.impact === "High" ? "bg-emerald-500/20 text-emerald-400" : "bg-emerald-900 text-emerald-600"
                                        )}>
                                            Impact: {insight.impact}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
