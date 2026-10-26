import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Camera, Menu, X, MessageCircle } from "lucide-react";
import AnnouncementBanner from "./announcement-banner";

const BRAND = "#c90001";

export default function Header() {
    const [mobileMenu, setMobileMenu] = useState(false);

    const handleWhatsApp = () => {
        const text = encodeURIComponent(
            "Hi SewaLensaMY! I would like to check availability for renting the Canon EOS R50.",
        );
        window.open(`https://wa.me/60195371747?text=${text}`, "_blank");
    };

    return (
        <header className="fixed inset-x-0 top-0 z-50 pt-4 px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-6xl">
                <nav className="border border-neutral-200/80 bg-white/85 px-5 py-3 shadow-[0_2px_15px_rgba(0,0,0,0.02)] backdrop-blur-md rounded-2xl flex items-center justify-between">
                    {/* Logo */}
                    <a href="" className="flex items-center gap-2.5 group">
                        <div className="flex flex-col">
                            <span className="text-xl font-extrabold tracking-tight leading-none text-[#141414]">
                                SewaLensa
                                <span style={{ color: BRAND }}>MY</span>
                            </span>
                        </div>
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden items-center gap-8 md:flex">
                        {[
                            // ["Availability", "/availability"],
                            ["Highlights", "#highlights"],
                            ["Add-ons", "#addons"],
                            ["Process", "#process"],
                            ["Reviews", "#reviews"],
                            ["FAQ", "#faq"],
                        ].map(([label, href]) => (
                            <a
                                key={label}
                                href={href}
                                className="text-xs font-semibold text-neutral-600 transition-colors hover:text-black"
                            >
                                {label}
                            </a>
                        ))}
                    </div>

                    {/* Desktop Action Button */}
                    <div className="hidden md:flex items-center gap-3">
                        <button
                            onClick={handleWhatsApp}
                            className="inline-flex items-center gap-2 px-4.5 py-2 text-xs font-bold text-white transition-all rounded-full shadow-2xs active:scale-95 hover:opacity-90"
                            style={{ backgroundColor: BRAND }}
                        >
                            Book via WhatsApp
                            <ArrowRight size={13} />
                        </button>
                    </div>

                    {/* Mobile Toggle Button */}
                    <button
                        onClick={() => setMobileMenu(!mobileMenu)}
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-200 bg-white md:hidden text-neutral-800"
                        aria-label="Toggle Navigation"
                    >
                        {mobileMenu ? <X size={16} /> : <Menu size={16} />}
                    </button>
                </nav>

                {/* Mobile Navigation Dropdown */}
                {mobileMenu && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 border border-neutral-200 bg-white p-5 shadow-xl rounded-2xl md:hidden"
                    >
                        <div className="flex flex-col gap-3">
                            {[
                                // ["Availability", "/availability"],
                                ["Highlights", "#highlights"],
                                ["Add-ons", "#addons"],
                                ["Process", "#process"],
                                ["Reviews", "#reviews"],
                                ["FAQ", "#faq"],
                            ].map(([label, href]) => (
                                <a
                                    key={label}
                                    href={href}
                                    onClick={() => setMobileMenu(false)}
                                    className="text-xs font-semibold text-neutral-700 py-1 border-b border-neutral-100"
                                >
                                    {label}
                                </a>
                            ))}

                            <button
                                onClick={handleWhatsApp}
                                className="mt-2 flex items-center justify-center gap-2 py-3 text-xs font-bold text-white rounded-xl shadow-2xs"
                                style={{ backgroundColor: BRAND }}
                            >
                                <MessageCircle size={15} />
                                Book via WhatsApp Now
                            </button>
                        </div>
                    </motion.div>
                )}
            </div>

            <AnnouncementBanner />
        </header>
    );
}
