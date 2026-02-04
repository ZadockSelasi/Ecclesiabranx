"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, Moon, Send, Sun, Twitter } from "lucide-react"

export function FooterSection() {
    return (
        <footer className="relative border-t border-emerald-800 bg-emerald-950 text-emerald-50">
            <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    <div className="relative">
                        <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">Stay Connected</h2>
                        <p className="mb-6 text-emerald-200">
                            Join our newsletter for the latest updates and exclusive offers.
                        </p>
                        <form className="relative">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="pr-12 backdrop-blur-sm bg-white/10 border-emerald-800 text-emerald-50 placeholder:text-emerald-400/50"
                            />
                            <Button
                                type="submit"
                                size="icon"
                                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white transition-transform hover:scale-105"
                            >
                                <Send className="h-4 w-4" />
                                <span className="sr-only">Subscribe</span>
                            </Button>
                        </form>
                        <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-emerald-400/10 blur-2xl" />
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
                        <nav className="space-y-2 text-sm">
                            <a href="#" className="block transition-colors hover:text-emerald-400">
                                Home
                            </a>
                            <a href="#" className="block transition-colors hover:text-emerald-400">
                                About Us
                            </a>
                            <a href="#" className="block transition-colors hover:text-emerald-400">
                                Services
                            </a>
                            <a href="#" className="block transition-colors hover:text-emerald-400">
                                Products
                            </a>
                            <a href="#" className="block transition-colors hover:text-emerald-400">
                                Contact
                            </a>
                        </nav>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-white">Contact Us</h3>
                        <address className="space-y-2 text-sm not-italic opacity-90">
                            <p>123 Innovation Street</p>
                            <p>Tech City, TC 12345</p>
                            <p>Phone: (123) 456-7890</p>
                            <p>Email: hello@example.com</p>
                        </address>
                    </div>
                    <div className="relative">
                        <h3 className="mb-4 text-lg font-semibold text-white">Follow Us</h3>
                        <div className="mb-6 flex space-x-4">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="outline" size="icon" className="rounded-full border-emerald-800 text-emerald-100 hover:bg-emerald-900/50 hover:text-emerald-400">
                                            <Facebook className="h-4 w-4" />
                                            <span className="sr-only">Facebook</span>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Follow us on Facebook</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="outline" size="icon" className="rounded-full border-emerald-800 text-emerald-100 hover:bg-emerald-900/50 hover:text-emerald-400">
                                            <Twitter className="h-4 w-4" />
                                            <span className="sr-only">Twitter</span>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Follow us on Twitter</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="outline" size="icon" className="rounded-full border-emerald-800 text-emerald-100 hover:bg-emerald-900/50 hover:text-emerald-400">
                                            <Instagram className="h-4 w-4" />
                                            <span className="sr-only">Instagram</span>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Follow us on Instagram</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="outline" size="icon" className="rounded-full border-emerald-800 text-emerald-100 hover:bg-emerald-900/50 hover:text-emerald-400">
                                            <Linkedin className="h-4 w-4" />
                                            <span className="sr-only">LinkedIn</span>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Connect with us on LinkedIn</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </div>
                </div>
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-emerald-800/50 pt-8 text-center md:flex-row">
                    <p className="text-sm text-emerald-400/60">
                        © 2024 Ecclesia Brand. All rights reserved.
                    </p>
                    <nav className="flex gap-4 text-sm text-emerald-400/80">
                        <a href="#" className="transition-colors hover:text-emerald-400">
                            Privacy Policy
                        </a>
                        <a href="#" className="transition-colors hover:text-emerald-400">
                            Terms of Service
                        </a>
                        <a href="#" className="transition-colors hover:text-emerald-400">
                            Cookie Settings
                        </a>
                    </nav>
                </div>
            </div>
        </footer>
    )
}
