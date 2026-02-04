"use client"

import { MagnetizeButton } from "@/components/ui/magnetize-button";
import { motion } from "framer-motion";
import { Brain, Code, Layout, Lightbulb, Smartphone, Zap } from "lucide-react";
import { useRouter } from "next/navigation";

const services = [
    {
        icon: Layout,
        title: "Brand Strategy & Identity",
        description: "We craft memorable brand identities that resonate. From logo design to complete visual systems, we ensure your brand tells a compelling story.",
        features: ["Logo Design", "Brand Guidelines", "Visual Identity Systems"]
    },
    {
        icon: Code,
        title: "Web Development",
        description: "High-performance websites built with modern technologies. We prioritize speed, accessibility, and SEO to drive real results.",
        features: ["Next.js & React", "E-commerce Solutions", "Custom Web Apps"]
    },
    {
        icon: Brain,
        title: "AI Integration",
        description: "Future-proof your business with custom AI solutions. We implement chatbots, automation workflows, and predictive analytics.",
        features: ["Custom Chatbots", "Process Automation", "Data Analysis"]
    },
    {
        icon: Smartphone,
        title: "Mobile App Design",
        description: "Intuitive and engaging mobile experiences. We design apps that users love, focusing on seamless navigation and stunning visuals.",
        features: ["iOS & Android Design", "Prototyping", "User Testing"]
    },
    {
        icon: Lightbulb,
        title: "Digital Marketing",
        description: "Data-driven strategies to grow your audience. We optimize your online presence to reach the right people at the right time.",
        features: ["SEO Optimization", "Content Strategy", "Social Media Growth"]
    },
    {
        icon: Zap,
        title: "Performance Optimization",
        description: "Don't let slow speeds kill your conversions. We audit and optimize your digital assets for lightning-fast performance.",
        features: ["Core Web Vitals", "Code Splitting", "Server Optimization"]
    }
];

export default function ServicesPage() {
    const router = useRouter();

    return (
        <div className="bg-emerald-950 min-h-screen">
            {/* Header */}
            <section className="bg-emerald-950 text-white py-24 px-6 relative overflow-hidden border-b border-emerald-900">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container mx-auto max-w-5xl relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Our Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-emerald-200 text-lg md:text-xl max-w-2xl mx-auto"
                    >
                        Holistic digital solutions tailored to elevate your business in the modern age.
                    </motion.p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="bg-emerald-900/40 p-8 rounded-2xl shadow-sm border border-emerald-800/50 hover:shadow-xl hover:-translate-y-1 hover:border-emerald-700 transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 bg-emerald-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                                    <service.icon className="w-7 h-7 text-emerald-300 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-xl font-bold text-emerald-50 mb-3">{service.title}</h3>
                                <p className="text-emerald-200/80 mb-6 leading-relaxed">
                                    {service.description}
                                </p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-sm text-emerald-300/70">
                                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 bg-emerald-900 text-center">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="text-3xl font-bold text-white mb-6">Need a Custom Solution?</h2>
                    <p className="text-emerald-200/60 mb-10 text-lg">
                        We understand that every business is unique. Contact us to discuss a bespoke strategy tailored to your specific goals.
                    </p>
                    <MagnetizeButton
                        mainText="Get a Quote"
                        hoverText="Contact Us"
                        onClick={() => router.push('/contact')}
                        className="bg-emerald-600 text-white hover:bg-emerald-700 border-none px-10 py-4 text-lg"
                        particleCount={12}
                        attractRadius={50}
                    />
                </div>
            </section>
        </div>
    );
}
