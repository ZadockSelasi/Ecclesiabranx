"use client";

import { useRouter } from "next/navigation";
import { Suspense } from "react";
import GenerativeMountainScene from "@/components/ui/mountain-scene";
import { MagnetizeButton } from "@/components/ui/magnetize-button";

export default function Hero() {
    const router = useRouter();
    return (
        <div className="relative bg-emerald-950 h-[85vh] flex items-center justify-center overflow-hidden">
            <Suspense fallback={<div className="absolute inset-0 bg-emerald-950" />}>
                <GenerativeMountainScene />
            </Suspense>

            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/30 pointer-events-none z-10"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20 pointer-events-none">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    <span className="block">We Build Brands</span>
                    <span className="block text-sky-200">That Speak</span>
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-slate-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                    Ecclesiabranx combines cutting-edge design with AI innovation to create powerful, future-ready brand identities that resonate and convert.
                </p>
                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center pointer-events-auto">
                    <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                        <MagnetizeButton
                            mainText="Explore Our Work"
                            hoverText="View Gallery"
                            onClick={() => router.push('/gallery')}
                            className="bg-white text-emerald-900 border-white hover:bg-emerald-50"
                        />
                        <MagnetizeButton
                            mainText="Get in Touch"
                            hoverText="Contact Us"
                            onClick={() => router.push('/contact')}
                            className="bg-emerald-600/90 text-white border-transparent hover:bg-emerald-600"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
