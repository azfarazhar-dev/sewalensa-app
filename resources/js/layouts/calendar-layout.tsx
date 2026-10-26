import { useState } from "react";
import Footer from "@/components/footer";
import { ArrowRight, MessageCircle, Menu, X } from "lucide-react";
import AnnouncementBanner from "@/components/announcement-banner";

const BRAND = "#c90001";

export default function CalendarLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Moved inside the component body!
    const [mobileMenu, setMobileMenu] = useState(false);

    const handleWhatsApp = () => {
        const text = encodeURIComponent(
            "Hi SewaLensaMY! I would like to check availability for renting the Canon EOS R50.",
        );
        window.open(`https://wa.me/60146308200?text=${text}`, "_blank");
    };

    return (
        <div className="min-h-screen bg-[#faf9f6] font-['Plus_Jakarta_Sans',_'Manrope',_sans-serif] text-[#141414] antialiased selection:bg-[#c90001] selection:text-white">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
            `}</style>

            <header className="fixed inset-x-0 top-0 z-50 pt-4 px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-6xl">
                    <nav className="border border-neutral-200/80 bg-white/85 px-5 py-3 shadow-[0_2px_15px_rgba(0,0,0,0.02)] backdrop-blur-md rounded-2xl flex items-center justify-between">
                        {/* Logo */}
                        <a href="/" className="flex items-center gap-2.5 group">
                            <div className="flex flex-col">
                                <span className="text-xl font-extrabold tracking-tight leading-none text-[#141414]">
                                    SewaLensa
                                    <span style={{ color: BRAND }}>MY</span>
                                </span>
                            </div>
                        </a>

                        {/* Desktop Action */}
                        <div className="hidden md:flex items-center gap-3">
                            <a
                                href="/"
                                className="text-xs font-semibold text-neutral-600 hover:text-black transition-colors mr-3"
                            >
                                Back to Home
                            </a>
                            <button
                                onClick={handleWhatsApp}
                                className="inline-flex items-center gap-2 px-4.5 py-2 text-xs font-bold text-white transition-all rounded-full shadow-2xs active:scale-95 hover:opacity-90"
                                style={{ backgroundColor: BRAND }}
                            >
                                Book via WhatsApp
                                <ArrowRight size={13} />
                            </button>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setMobileMenu(!mobileMenu)}
                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-200 bg-white md:hidden text-neutral-800"
                        >
                            {mobileMenu ? <X size={16} /> : <Menu size={16} />}
                        </button>
                    </nav>

                    {/* Mobile Dropdown */}
                    {mobileMenu && (
                        <div className="mt-2 border border-neutral-200 bg-white p-4 shadow-xl rounded-2xl md:hidden">
                            <div className="flex flex-col gap-2.5">
                                <a
                                    href="/"
                                    className="text-xs font-semibold text-neutral-700 py-1"
                                >
                                    Home
                                </a>
                                <button
                                    onClick={handleWhatsApp}
                                    className="flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-white rounded-xl shadow-2xs"
                                    style={{ backgroundColor: BRAND }}
                                >
                                    <MessageCircle size={15} />
                                    Book via WhatsApp
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                <AnnouncementBanner />
            </header>

            {/* Main Page Content */}
            <main>{children}</main>

            {/* Reusable Footer */}
            <Footer />
        </div>
    );
}
