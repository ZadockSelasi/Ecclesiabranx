"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Image as ImageIcon,
    Briefcase,
    MessageSquare,
    Settings,
    LogOut,
    ChevronLeft,
    ChevronRight,
    User,
    BarChart3
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
    { name: "Portfolio", href: "/admin/portfolio", icon: ImageIcon },
    { name: "Services", href: "/admin/services", icon: Briefcase },
    { name: "User Feedback", href: "/admin/inquiries", icon: MessageSquare },
    { name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function Sidebar({ collapsed, setCollapsed }: { collapsed: boolean, setCollapsed: (val: boolean) => void }) {
    const pathname = usePathname();

    return (
        <motion.div
            animate={{ width: collapsed ? 80 : 280 }}
            className="h-screen bg-emerald-950 border-r border-emerald-800/50 flex flex-col transition-all duration-300 relative z-50"
        >
            <div className="p-6 flex items-center justify-between">
                {!collapsed && (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-xl font-bold text-white tracking-wider"
                    >
                        ECCLESIA<span className="text-emerald-500 text-xs ml-1">ADMIN</span>
                    </motion.span>
                )}
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="p-1.5 rounded-lg bg-emerald-900/50 text-emerald-400 hover:text-white transition-colors"
                >
                    {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                </button>
            </div>

            <nav className="flex-1 px-4 space-y-2 mt-4">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center p-3 rounded-xl transition-all duration-200 group relative",
                                isActive
                                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-900/40"
                                    : "text-emerald-300 hover:bg-emerald-900/50 hover:text-white"
                            )}
                        >
                            <item.icon size={20} className={cn(collapsed ? "mx-auto" : "mr-3")} />
                            {!collapsed && (
                                <motion.span
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                >
                                    {item.name}
                                </motion.span>
                            )}
                            {collapsed && (
                                <div className="absolute left-16 bg-emerald-800 text-white px-2 py-1 rounded text-xs invisible group-hover:visible whitespace-nowrap z-50">
                                    {item.name}
                                </div>
                            )}
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-emerald-800/50 space-y-2">
                <div className={cn(
                    "flex items-center p-3 text-emerald-300",
                    collapsed ? "justify-center" : ""
                )}>
                    <User size={20} className={cn(collapsed ? "" : "mr-3")} />
                    {!collapsed && <span className="text-sm font-medium">Admin User</span>}
                </div>
                <button
                    className={cn(
                        "w-full flex items-center p-3 rounded-xl text-red-400 hover:bg-red-950/30 hover:text-red-300 transition-all",
                        collapsed ? "justify-center" : ""
                    )}
                >
                    <LogOut size={20} className={cn(collapsed ? "" : "mr-3")} />
                    {!collapsed && <span className="text-sm font-medium">Logout</span>}
                </button>
            </div>
        </motion.div>
    );
}
