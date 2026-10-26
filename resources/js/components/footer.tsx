import React from "react";
import { MessageCircle } from "lucide-react";

const BRAND = "#c90001";

export default function Footer() {
    const handleWhatsApp = () => {
        const text = encodeURIComponent(
            "Hi SewaLensaMY! I would like to check availability for renting the Canon EOS R50.",
        );
        window.open(`https://wa.me/60146308200?text=${text}`, "_blank");
    };

    return (
        <>
            <section className="py-20 px-5 bg-[#141414] text-white text-center relative overflow-hidden">
                <div className="mx-auto max-w-2xl relative z-10">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                        Limited Weekly Slots
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-bold tracking-tight mt-2">
                        Ready to capture your moment?
                    </h2>
                    <p className="mt-3 text-neutral-400 text-xs sm:text-sm font-normal leading-relaxed max-w-md mx-auto">
                        Check live calendar availability instantly over WhatsApp
                        and lock in your camera kit.
                    </p>

                    {/* Action Buttons Container */}
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                        {/* Primary Action Button */}
                        <button
                            onClick={handleWhatsApp}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs sm:text-sm font-semibold text-white transition-all rounded-full shadow-lg active:scale-95 hover:opacity-90"
                            style={{ backgroundColor: BRAND }}
                        >
                            <MessageCircle size={16} />
                            Book via WhatsApp Now
                        </button>

                        {/* Secondary Action Button (Styled for Dark Background) */}
                        <a
                            href="/availability"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-neutral-300 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 hover:text-white transition-all rounded-full"
                        >
                            Check Availability
                        </a>
                    </div>
                </div>
            </section>

            <footer className="py-8 px-5 bg-white border-t border-neutral-200">
                <div className="mx-auto max-w-5xl flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-neutral-500">
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-[#141414]">
                            SewaLensa<span style={{ color: BRAND }}>MY</span>
                        </span>
                    </div>

                    <p>
                        © {new Date().getFullYear()} SewaLensaMY. All rights
                        reserved.
                    </p>
                </div>
            </footer>
        </>
    );
}
