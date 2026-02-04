"use client"

import { MagnetizeButton } from "@/components/ui/magnetize-button";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";
import { motion } from "framer-motion";
import { Rocket, Target, Users, Zap } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AboutPage() {
    const router = useRouter();

    const stats = [
        { label: "Projects Completed", value: "150+" },
        { label: "Happy Clients", value: "80+" },
        { label: "Team Members", value: "12" },
        { label: "Awards Won", value: "5" },
    ];

    const values = [
        {
            icon: Rocket,
            title: "Innovation First",
            description: "We constantly push boundaries, integrating the latest AI technologies to give your brand a competitive edge."
        },
        {
            icon: Target,
            title: "Precision Design",
            description: "Every pixel matters. We craft user experiences that are not only beautiful but also intuitive and conversion-focused."
        },
        {
            icon: Users,
            title: "Client-Centric",
            description: "Your vision is our blueprint. We collaborate closely with you to ensure the final product exceeds your expectations."
        },
        {
            icon: Zap,
            title: "Speed & Efficiency",
            description: "Leveraging AI allow us to deliver high-quality results faster than traditional agencies without compromising on quality."
        }
    ];

    const testimonials = [
        {
            quote:
                "Ecclesiabranx completely transformed our digital presence. Their AI-driven approach to branding gave us a unique identity that we couldn't have achieved with a traditional agency.",
            name: "Sarah Jenkins",
            designation: "CEO, TechFlow",
            src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1368&auto=format&fit=crop",
        },
        {
            quote:
                "The speed and precision of their work is unmatched. We launched our new platform weeks ahead of schedule thanks to their efficient workflows.",
            name: "Michael Chen",
            designation: "Founder, StartUp Inc",
            src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1368&auto=format&fit=crop",
        },
        {
            quote:
                "A true partner in innovation. They didn't just design a logo; they built a comprehensive brand system that scales with our rapid growth.",
            name: "Emily Rodriguez",
            designation: "Marketing Director, FutureScale",
            src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1368&auto=format&fit=crop",
        },
        {
            quote:
                "The team at Ecclesiabranx is visionary. They understood our abstract concepts and turned them into a stunning visual reality.",
            name: "David Kim",
            designation: "Creative Lead, Artistry",
            src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1368&auto=format&fit=crop",
        }
    ];

    return (
        <div className="bg-emerald-950 min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 px-6 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-30">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
                </div>

                <div className="container mx-auto relative z-10 max-w-5xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold text-emerald-50 tracking-tight mb-6">
                            Redefining Digital Identity with <span className="text-emerald-400">Intelligence</span>
                        </h1>
                        <p className="text-lg md:text-xl text-emerald-200/80 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Ecclesiabranx is a new-age digital agency operating at the intersection of aesthetic excellence and artificial intelligence. We build brands that don't just look good—they think, adapt, and perform.
                        </p>
                        <div className="flex justify-center">
                            <MagnetizeButton
                                mainText="Work With Us"
                                hoverText="Get Started"
                                onClick={() => router.push('/contact')}
                                className="bg-emerald-600 text-white hover:bg-emerald-700 border-none shadow-lg shadow-emerald-600/20 px-8 py-6 text-lg"
                                particleCount={15}
                                attractRadius={60}
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-emerald-900/30 border-y border-emerald-800/50">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <div className="text-4xl font-bold text-emerald-400 mb-2">{stat.value}</div>
                                <div className="text-emerald-300/80 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Story Section */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl font-bold text-emerald-50 mb-6">Our Mission</h2>
                            <p className="text-emerald-200/80 mb-6 leading-relaxed">
                                We believe that the future of branding lies in the harmony between human creativity and machine intelligence. Our mission is to democratize access to premium, high-tech brand identities for businesses of all sizes.
                            </p>
                            <p className="text-emerald-200/80 mb-6 leading-relaxed">
                                Standard templates are no longer enough. In a crowded digital marketplace, your brand needs to be dynamic, responsive, and uniquely yours. That's where we come in.
                            </p>
                            <div className="h-1 w-20 bg-emerald-500 rounded-full" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-square md:aspect-video rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <div
                                className="absolute inset-0 bg-emerald-900"
                                style={{
                                    backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center"
                                }}
                            />
                            <div className="absolute inset-0 bg-emerald-900/30 mix-blend-overlay" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 px-6 bg-emerald-950 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#10b981 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>

                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Ecclesiabranx?</h2>
                        <p className="text-emerald-300 max-w-2xl mx-auto">
                            We bring more than just design skills. We bring a philosophy of growth, innovation, and partnership.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="bg-emerald-900/50 backdrop-blur-sm p-8 rounded-xl border border-emerald-800 hover:border-emerald-600 group"
                            >
                                <div className="w-12 h-12 bg-emerald-800 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <item.icon className="text-emerald-300 w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-emerald-300/80 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 px-6 bg-emerald-950/50">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-emerald-50 mb-12 text-center">What Our Clients Say</h2>
                    <div className="flex justify-center">
                        <CircularTestimonials
                            testimonials={testimonials}
                            autoplay={true}
                            colors={{
                                name: "#ecfdf5",
                                designation: "#ecfdf5",
                                testimony: "#ecfdf5",
                                arrowBackground: "#10b981", // Emerald 500
                                arrowForeground: "#ffffff",
                                arrowHoverBackground: "#059669", // Emerald 600
                            }}
                            fontSizes={{
                                name: "1.5rem",
                                designation: "1rem",
                                quote: "1.125rem",
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-20 px-6 text-center">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="text-3xl font-bold text-emerald-50 mb-6">Ready to Elevate Your Brand?</h2>
                    <p className="text-emerald-200/80 mb-10 text-lg">
                        Ready to transform your brand&apos;s digital presence? Let&apos;s build something extraordinary together.
                    </p>
                    <MagnetizeButton
                        mainText="Start Your Project"
                        hoverText="Let's Talk"
                        onClick={() => router.push('/contact')}
                        className="bg-emerald-800 text-white hover:bg-emerald-700 border-none px-10 py-6 text-lg"
                        particleCount={20}
                        attractRadius={80}
                    />
                </div>
            </section>
        </div>
    );
}
