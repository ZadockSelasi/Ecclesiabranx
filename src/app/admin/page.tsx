"use client";

import React from "react";
import StatCard from "@/components/admin/StatCard";
import {
    Users,
    Eye,
    MessageSquare,
    Zap,
    TrendingUp,
    ArrowRight,
    Plus,
    User
} from "lucide-react";
import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function AdminDashboard() {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">Dashboard Overview</h1>
                    <p className="text-emerald-500/60 mt-1">Welcome back, Zadock. Here&apos;s what&apos;s happening with Ecclesia today.</p>
                </div>
                <button className="flex items-center justify-center px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-medium transition-all active:scale-95 shadow-lg shadow-emerald-900/20">
                    <Plus size={18} className="mr-2" />
                    Add New Project
                </button>
            </div>

            {/* Stats Grid */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                <motion.div variants={item}>
                    <StatCard
                        title="Total Visitors"
                        value="12,842"
                        icon={Users}
                        trend={{ value: 12, isUp: true }}
                    />
                </motion.div>
                <motion.div variants={item}>
                    <StatCard
                        title="Page Views"
                        value="43,109"
                        icon={Eye}
                        trend={{ value: 8, isUp: true }}
                    />
                </motion.div>
                <motion.div variants={item}>
                    <StatCard
                        title="AI Inquiries"
                        value="892"
                        icon={Zap}
                        trend={{ value: 24, isUp: true }}
                    />
                </motion.div>
                <motion.div variants={item}>
                    <StatCard
                        title="Messages"
                        value="156"
                        icon={MessageSquare}
                        trend={{ value: 3, isUp: false }}
                    />
                </motion.div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Chart Area (Placeholder) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="lg:col-span-2 p-8 rounded-3xl bg-emerald-900/20 border border-emerald-800/50 backdrop-blur-sm min-h-[400px] flex flex-col"
                >
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-xl font-bold text-white">Performance Analytics</h2>
                            <p className="text-sm text-emerald-500/60">Interaction trends over the last 30 days</p>
                        </div>
                        <select className="bg-emerald-900/40 border border-emerald-800 border-none text-emerald-300 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block p-2.5">
                            <option>Last 30 Days</option>
                            <option>Last 7 Days</option>
                            <option>Last Year</option>
                        </select>
                    </div>

                    <div className="flex-1 flex items-center justify-center border-2 border-dashed border-emerald-800/50 rounded-2xl">
                        <div className="text-center space-y-2">
                            <TrendingUp size={48} className="mx-auto text-emerald-800" />
                            <p className="text-emerald-700 font-medium">Chart Visualization Placeholder</p>
                            <p className="text-emerald-800 text-xs">Analytics data being processed</p>
                        </div>
                    </div>
                </motion.div>

                {/* Recent Activity */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="p-8 rounded-3xl bg-emerald-900/20 border border-emerald-800/50 backdrop-blur-sm flex flex-col"
                >
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-white">Recent Activity</h2>
                        <button className="text-emerald-500 text-sm hover:text-emerald-400 transition-colors flex items-center">
                            View All <ArrowRight size={14} className="ml-1" />
                        </button>
                    </div>

                    <div className="space-y-6">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex items-start space-x-4 group cursor-pointer">
                                <div className="size-10 rounded-full bg-emerald-800/50 border border-emerald-700/50 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                                    <User size={18} />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-white group-hover:text-emerald-400 transition-colors">New Inquiry from John Doe</p>
                                    <p className="text-xs text-emerald-500/60 mt-0.5">2 hours ago • Project Request</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
