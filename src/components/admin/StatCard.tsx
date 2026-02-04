"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
    title: string;
    value: string | number;
    icon: LucideIcon;
    trend?: {
        value: number;
        isUp: boolean;
    };
    className?: string;
}

export default function StatCard({ title, value, icon: Icon, trend, className }: StatCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className={cn(
                "p-6 rounded-2xl bg-emerald-900/20 border border-emerald-800/50 backdrop-blur-sm flex flex-col justify-between group transition-all duration-300",
                className
            )}
        >
            <div className="flex items-start justify-between">
                <div className="p-3 rounded-xl bg-emerald-900/50 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                    <Icon size={24} />
                </div>
                {trend && (
                    <div className={cn(
                        "flex items-center text-xs font-medium px-2 py-1 rounded-full",
                        trend.isUp ? "bg-emerald-500/10 text-emerald-400" : "bg-red-500/10 text-red-400"
                    )}>
                        {trend.isUp ? <ArrowUpRight size={14} className="mr-1" /> : <ArrowDownRight size={14} className="mr-1" />}
                        {trend.value}%
                    </div>
                )}
            </div>

            <div className="mt-4">
                <p className="text-emerald-500/60 text-sm font-medium uppercase tracking-wider">{title}</p>
                <h3 className="text-3xl font-bold text-white mt-1">{value}</h3>
            </div>
        </motion.div>
    );
}
