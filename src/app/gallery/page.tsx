"use client"

import { MagnetizeButton } from "@/components/ui/magnetize-button";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const projects = [
    {
        id: 1,
        title: "Neon Horizon",
        category: "Brand Identity",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "EcoSphere",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Quantum Leap",
        category: "AI Integration",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Urban Pulse",
        category: "Mobile App",
        image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 5,
        title: "Aero Dynamics",
        category: "Industrial Design",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 6,
        title: "Zenith Financial",
        category: "Corporate Branding",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 7,
        title: "Cyber Nexus",
        category: "Digital Art",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 8,
        title: "Flow State",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
    }
];

const categories = ["All", "Brand Identity", "Web Development", "AI Integration", "Mobile App"];

export default function GalleryPage() {
    const router = useRouter();
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <div className="bg-emerald-950 min-h-screen">
            {/* Header */}
            <section className="bg-emerald-950/80 py-24 px-6 border-b border-emerald-900/50">
                <div className="container mx-auto max-w-5xl text-center">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-5xl md:text-7xl font-extrabold text-emerald-50 mb-6 tracking-tight"
                    >
                        Success Stories
                    </motion.h1>
                    <p className="text-xl text-emerald-200/70 max-w-2xl mx-auto">
                        A curated selection of our most impactful work.
                    </p>
                </div>
            </section>

            {/* Filter */}
            <section className="py-10 px-6 sticky top-0 z-40 bg-emerald-950/90 backdrop-blur-md border-b border-emerald-800/50">
                <div className="container mx-auto max-w-7xl overflow-x-auto">
                    <div className="flex justify-center space-x-2 md:space-x-4 min-w-max">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/20"
                                    : "bg-emerald-900/50 text-emerald-300 hover:bg-emerald-800 border border-emerald-800"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Grid */}
            <section className="py-12 px-6">
                <div className="container mx-auto max-w-7xl">
                    <motion.div
                        layout
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 border border-emerald-800"
                            >
                                {/* Image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${project.image})` }}
                                />
                                <div className="absolute inset-0 bg-emerald-950/20 group-hover:bg-emerald-950/80 transition-colors duration-300" />

                                {/* Content Overlay */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <div className="text-emerald-400 text-sm font-bold uppercase tracking-wider mb-2">
                                            {project.category}
                                        </div>
                                        <h3 className="text-white text-2xl font-bold mb-4">
                                            {project.title}
                                        </h3>
                                        <button className="flex items-center text-white font-medium hover:underline">
                                            View Case Study <ArrowUpRight className="ml-1 w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20 text-emerald-300/50">
                            No projects found in this category.
                        </div>
                    )}
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-20 text-center">
                <div className="inline-block relative">
                    <MagnetizeButton
                        mainText="Start Your Project"
                        hoverText="Get in Touch"
                        onClick={() => router.push('/contact')}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white border-transparent px-8 py-4 shadow-xl"
                        particleCount={15}
                        attractRadius={60}
                    />
                </div>
            </section>
        </div>
    );
}
