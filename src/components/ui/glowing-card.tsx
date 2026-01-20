"use client";

import React from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

interface GlowingCardProps {
    children?: React.ReactNode;
    icon?: React.ReactNode;
    title?: string;
    description?: React.ReactNode;
    className?: string;
    glowConfig?: {
        blur?: number;
        inactiveZone?: number;
        proximity?: number;
        spread?: number;
        variant?: "default" | "white";
        borderWidth?: number;
        glow?: boolean;
    }
}

export const GlowingCard = ({
    children,
    icon,
    title,
    description,
    className,
    glowConfig = {
        spread: 40,
        glow: true,
        proximity: 64,
        inactiveZone: 0.01,
        borderWidth: 3,
    }
}: GlowingCardProps) => {
    return (
        <div className={cn("relative h-full rounded-[1.25rem] border-[0.75px] border-white/10 p-2 md:rounded-[1.5rem] md:p-3", className)}>
            <GlowingEffect
                spread={glowConfig.spread}
                glow={glowConfig.glow}
                disabled={false}
                proximity={glowConfig.proximity}
                inactiveZone={glowConfig.inactiveZone}
                borderWidth={glowConfig.borderWidth}
                variant={glowConfig.variant}
            />
            <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-black/50 backdrop-blur-sm p-6 shadow-sm border-white/5 md:p-6">
                <div className="relative flex flex-1 flex-col justify-between gap-3">
                    {icon && (
                        <div className="w-fit rounded-lg border-[0.75px] border-white/10 bg-white/5 p-2 text-white">
                            {icon}
                        </div>
                    )}
                    <div className="space-y-3">
                        {title && (
                            <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-white">
                                {title}
                            </h3>
                        )}
                        {description && (
                            <div className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-gray-400">
                                {description}
                            </div>
                        )}
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};
