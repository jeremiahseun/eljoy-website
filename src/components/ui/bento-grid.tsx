"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

export interface BentoItem {
    title: string;
    description: string;
    icon?: React.ReactNode;
    image?: string;
    status?: string;
    tags?: string[];
    meta?: string;
    cta?: string;
    colSpan?: number;
    hasPersistentHover?: boolean;
}

interface BentoGridProps {
    items: BentoItem[];
}

function BentoGrid({ items }: BentoGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 max-w-6xl mx-auto">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={cn(
                        "group relative p-4 rounded-2xl overflow-hidden transition-all duration-300",
                        "border border-white/10 bg-black/50 backdrop-blur-sm",
                        "hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]",
                        "hover:-translate-y-1 will-change-transform",
                        item.colSpan === 2 ? "md:col-span-2" : "col-span-1",
                        {
                            "shadow-[0_0_30px_rgba(168,85,247,0.1)] -translate-y-1":
                                item.hasPersistentHover,
                        }
                    )}
                >
                    {/* Background pattern */}
                    <div
                        className={`absolute inset-0 ${item.hasPersistentHover
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                            } transition-opacity duration-300`}
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[length:4px_4px]" />
                    </div>

                    <div className="relative flex flex-col space-y-4">
                        {/* Header with image or icon */}
                        <div className="flex items-start justify-between">
                            {item.image ? (
                                <div className="relative w-full h-32 rounded-xl overflow-hidden mb-2">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                </div>
                            ) : item.icon ? (
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                                    {item.icon}
                                </div>
                            ) : null}
                            {item.status && (
                                <span
                                    className={cn(
                                        "text-xs font-medium px-2.5 py-1 rounded-full",
                                        "bg-purple-500/20 text-purple-300 border border-purple-500/30",
                                        "transition-colors duration-300 group-hover:bg-purple-500/30"
                                    )}
                                >
                                    {item.status}
                                </span>
                            )}
                        </div>

                        {/* Content */}
                        <div className="space-y-2">
                            <h3 className="font-semibold text-white tracking-tight text-lg">
                                {item.title}
                                {item.meta && (
                                    <span className="ml-2 text-xs text-gray-400 font-normal">
                                        {item.meta}
                                    </span>
                                )}
                            </h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                {item.description}
                            </p>
                        </div>

                        {/* Tags and CTA */}
                        <div className="flex items-center justify-between mt-auto pt-2">
                            <div className="flex items-center flex-wrap gap-2 text-xs text-gray-500">
                                {item.tags?.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-2 py-1 rounded-md bg-white/5 border border-white/10 transition-all duration-200 hover:bg-white/10 hover:border-white/20"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <span className="text-xs text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap ml-2">
                                {item.cta || "Learn more →"}
                            </span>
                        </div>
                    </div>

                    {/* Gradient border effect */}
                    <div
                        className={`absolute inset-0 -z-10 rounded-2xl p-px bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20 ${item.hasPersistentHover
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                            } transition-opacity duration-300`}
                    />
                </div>
            ))}
        </div>
    );
}

export { BentoGrid };
