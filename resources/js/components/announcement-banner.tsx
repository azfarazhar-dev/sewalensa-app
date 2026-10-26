import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const BRAND = "#c90001";

interface AnnouncementBannerProps {
    onClick?: () => void;
}

export default function AnnouncementBanner({
    onClick,
}: AnnouncementBannerProps) {
    return (
        <div className="w-full px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-xl">
                <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 w-full"
                >
                    <button
                        onClick={onClick}
                        className="group flex w-full items-center justify-center gap-2 rounded-2xl border border-neutral-200/80 bg-white/85 px-4 py-2.5 shadow-[0_2px_15px_rgba(0,0,0,0.02)] backdrop-blur-md transition-all hover:bg-white"
                    >
                        <span
                            className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-white"
                            style={{ backgroundColor: BRAND }}
                        >
                            <Sparkles size={9} />
                        </span>

                        <span className="text-[10px] font-semibold text-neutral-600 sm:text-xs">
                            <span className="hidden sm:inline">
                                Rental slots are open ·{" "}
                            </span>

                            <span className="font-bold text-[#141414]">
                                RM40/day
                            </span>

                            <span className="mx-1 text-neutral-300">
                                ·
                            </span>

                            <span>RM35/day for 2 days+</span>
                        </span>

                        <ArrowRight
                            size={11}
                            className="shrink-0 text-neutral-400 transition-transform group-hover:translate-x-0.5"
                        />
                    </button>
                </motion.div>
            </div>
        </div>
    );
}