"use client";

import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

type Logo = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
    logos: Logo[];
};

export function LogoCloud({ logos }: LogoCloudProps) {
    return (
        <div className="relative mx-auto max-w-full bg-emerald-950/30 py-12 md:py-20 overflow-hidden">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-emerald-50">Trusted By Industry Leaders</h2>
            </div>

            <InfiniteSlider gap={42} reverse duration={60} durationOnHover={20}>
                {logos.map((logo) => (
                    <img
                        alt={logo.alt}
                        className="pointer-events-none h-8 select-none md:h-10 invert opacity-50 hover:opacity-100 transition-all duration-300"
                        height="auto"
                        key={`logo-${logo.alt}`}
                        loading="lazy"
                        src={logo.src}
                        width="auto"
                    />
                ))}
            </InfiniteSlider>

            <ProgressiveBlur
                blurIntensity={1}
                className="pointer-events-none absolute top-0 left-0 h-full w-[160px] bg-emerald-950/80"
                direction="left"
            />
            <ProgressiveBlur
                blurIntensity={1}
                className="pointer-events-none absolute top-0 right-0 h-full w-[160px] bg-emerald-950/80"
                direction="right"
            />
        </div>
    );
}
