"use client";

import React, { useState } from "react";
import Sidebar from "@/components/admin/Sidebar";
import { Bell, Search, User } from "lucide-react";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="flex min-h-screen bg-emerald-950 text-emerald-100 selection:bg-emerald-500/30">
            <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

            <div className="flex-1 flex flex-col min-w-0">
                <header className="h-16 border-b border-emerald-800/50 flex items-center justify-between px-8 bg-emerald-950/50 backdrop-blur-sm sticky top-0 z-40">
                    <div className="flex items-center flex-1">
                        <div className="relative w-full max-w-md group">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-600 size-4 group-focus-within:text-emerald-400 transition-colors" />
                            <input
                                type="text"
                                placeholder="Search analytics..."
                                className="w-full bg-emerald-900/30 border border-emerald-800/50 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all placeholder:text-emerald-700"
                            />
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="p-2 rounded-full hover:bg-emerald-900/50 text-emerald-400 hover:text-white transition-all relative">
                            <Bell size={20} />
                            <span className="absolute top-2 right-2 size-2 bg-emerald-500 rounded-full border-2 border-emerald-950"></span>
                        </button>
                        <div className="h-8 w-px bg-emerald-800/50"></div>
                        <div className="flex items-center space-x-3 pl-2">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-medium text-white">Zadock Admin</p>
                                <p className="text-xs text-emerald-500">Super Admin</p>
                            </div>
                            <div className="size-10 rounded-full bg-emerald-800 border border-emerald-700 flex items-center justify-center text-emerald-300">
                                <User size={20} />
                            </div>
                        </div>
                    </div>
                </header>

                <main className="flex-1 p-8 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
