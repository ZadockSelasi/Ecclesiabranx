"use client"

import { MagnetizeButton } from "@/components/ui/magnetize-button";
// Removed unused imports: Button, Input, Label, Textarea -> they are in OnboardingForm now
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

import OnboardingForm from "@/components/ui/multistep-form";
import { LocationMap } from "@/components/ui/expand-map";
import { Globe } from "@/components/ui/globe";

export default function ContactPage() {
    // isLoading state removed as it is handled in OnboardingForm


    return (
        <div className="bg-emerald-950 min-h-screen">
            <div className="container mx-auto px-6 py-20 lg:py-32 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-50 mb-6 tracking-tight">
                            Let&apos;s Build Something <br />
                            <span className="text-emerald-400">Extraordinary</span>
                        </h1>
                        <p className="text-lg text-emerald-200/80 mb-12 leading-relaxed max-w-lg">
                            Whether you need a complete brand overhaul or a custom AI solution, we are ready to help. Reach out to us today.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-emerald-900/50 rounded-full shadow-md flex items-center justify-center mr-6 border border-emerald-800 flex-shrink-0">
                                    <Mail className="w-5 h-5 text-emerald-400" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-emerald-50">Email Us</h3>
                                    <p className="text-emerald-300/80">hello@ecclesiabranx.com</p>
                                    <p className="text-emerald-300/80">support@ecclesiabranx.com</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-emerald-900/50 rounded-full shadow-md flex items-center justify-center mr-6 border border-emerald-800 flex-shrink-0">
                                    <Phone className="w-5 h-5 text-emerald-400" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-emerald-50">Call Us</h3>
                                    <p className="text-emerald-300/80">+1 (555) 123-4567</p>
                                    <p className="text-emerald-400/60 text-sm mt-1">Mon-Fri from 9am to 6pm EST</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-emerald-900/50 rounded-full shadow-md flex items-center justify-center mr-6 border border-emerald-800 flex-shrink-0">
                                    <MapPin className="w-5 h-5 text-emerald-400" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-emerald-50">Visit Us</h3>
                                    <p className="text-emerald-300/80">123 Innovation Street</p>
                                    <p className="text-emerald-300/80">Tech City, TC 12345</p>
                                </div>
                            </div>
                        </div>

                        {/* Map & Globe */}
                        <div className="mt-12 relative">
                            <h3 className="text-lg font-bold text-emerald-50 mb-4 relative z-10">Our Studio</h3>
                            <div className="relative z-10">
                                <LocationMap location="Tech City, TC" coordinates="37.7749° N, 122.4194° W" className="brightness-90" />
                            </div>
                            {/* Globe Decoration - positioned absolutely to be close to the map but behind */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-40 pointer-events-none z-0">
                                <Globe className="w-full h-full" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full relative"
                    >
                        {/* Blob decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                        <OnboardingForm />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
