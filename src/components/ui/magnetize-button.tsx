"use client"

import * as React from "react"
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import { Magnet } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";

interface MagnetizeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    particleCount?: number;
    attractRadius?: number;
    mainText?: string;
    hoverText?: string;
}

interface Particle {
    id: number;
    x: number;
    y: number;
}

function MagnetizeButton({
    className,
    particleCount = 12,
    attractRadius = 50,
    mainText,
    hoverText,
    children,
    ...props
}: MagnetizeButtonProps) {
    const [isAttracting, setIsAttracting] = useState(false);
    const [particles, setParticles] = useState<Particle[]>([]);
    const particlesControl = useAnimation();

    useEffect(() => {
        const newParticles = Array.from({ length: particleCount }, (_, i) => ({
            id: i,
            x: Math.random() * 360 - 180,
            y: Math.random() * 360 - 180,
        }));
        setParticles(newParticles);
    }, [particleCount]);

    const handleInteractionStart = useCallback(async () => {
        setIsAttracting(true);
        await particlesControl.start({
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 10,
            },
        });
    }, [particlesControl]);

    const handleInteractionEnd = useCallback(async () => {
        setIsAttracting(false);
        await particlesControl.start((i) => ({
            x: particles[i].x,
            y: particles[i].y,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        }));
    }, [particlesControl, particles]);

    // Determine what text to show
    // If children are provided, always show children (unless we want to swap text on hover)
    // The original component swapped text. Let's support that if mainText/hoverText are provided.
    // If standard children are passed, we just render them, but adding the magnet icon might be nice?
    // Let's stick to the user's design but make it flexible.

    const content = (
        <span className="relative w-full flex items-center justify-center gap-2">
            {/* Only show magnet if we are doing the attract animation logic with text swapping, 
               OR if the user specifically wanted this exact style. 
               The user said "edit existing buttons with *this*", implying this exact style.
           */}
            <Magnet
                className={cn(
                    "w-4 h-4 transition-transform duration-300",
                    isAttracting && "scale-110"
                )}
            />
            {mainText ? (
                isAttracting ? (hoverText || "Attracting") : mainText
            ) : (
                children || "Hover me"
            )}
        </span>
    );

    return (
        <Button
            className={cn(
                "min-w-40 relative touch-none overflow-hidden",
                // Adapting to Emerald Green theme
                "bg-emerald-900/30",
                "hover:bg-emerald-800/50",
                "text-emerald-300",
                "border border-emerald-700",
                "transition-all duration-300",
                className
            )}
            onMouseEnter={handleInteractionStart}
            onMouseLeave={handleInteractionEnd}
            onTouchStart={handleInteractionStart}
            onTouchEnd={handleInteractionEnd}
            {...props}
        >
            {particles.map((_, index) => (
                <motion.div
                    key={index}
                    custom={index}
                    initial={{ x: particles[index].x, y: particles[index].y }}
                    animate={particlesControl}
                    className={cn(
                        "absolute w-1.5 h-1.5 rounded-full",
                        "bg-emerald-300",
                        "transition-opacity duration-300",
                        isAttracting ? "opacity-100" : "opacity-40"
                    )}
                />
            ))}
            {content}
        </Button>
    );
}

export { MagnetizeButton }
