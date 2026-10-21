import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Camera,
    Check,
    ChevronRight,
    Clock3,
    Menu,
    MapPin,
    ShieldCheck,
    Star,
    X,
    MessageCircle,
    Sparkles,
    Zap,
    Calendar,
    Layers,
    HelpCircle,
    Sliders,
    Battery,
    Lightbulb,
    Disc,
} from "lucide-react";

const BRAND = "#c90001";

const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
};

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } },
};

export default function SewaLensaRedMinimalLanding() {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [activeFaq, setActiveFaq] = useState<number | null>(0);

    const handleWhatsApp = () => {
        const text = encodeURIComponent(
            "Hi SewaLensaMY! I would like to check availability for renting the Canon EOS R50.",
        );
        window.open(`https://wa.me/60146308200?text=${text}`, "_blank");
    };

    const faqs = [
        {
            q: "Where is the pickup and return location?",
            a: "Pickup and return are conveniently located at Bandar Serenia, Sepang — just 10-15 minutes away from KLIA 1/2, Cyberjaya, and Nilai.",
        },
        {
            q: "Are there any hidden security deposits required?",
            a: "No hidden deposit fees! Booking verification is handled straight through a quick IC/ID verification step on WhatsApp.",
        },
        {
            q: "What is included in the basic Canon EOS R50 kit?",
            a: "The standard package includes the Canon EOS R50 body, 15-45mm STM kit lens, 1x high-speed SD card, 1x original battery, battery charger, and a protective camera bag.",
        },
        {
            q: "Can I transfer photos directly to my smartphone?",
            a: "Yes! The camera features built-in Wi-Fi and Bluetooth. Simply download the Canon Camera Connect app on iOS or Android for instant wireless photo transfer.",
        },
    ];

    return (
        <main className="min-h-screen bg-[#faf9f6] font-['Plus_Jakarta_Sans',_'Manrope',_sans-serif] text-[#141414] antialiased selection:bg-[#c90001] selection:text-white">
            {/* Import Plus Jakarta Sans Font */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
      `}</style>

            {/* =========================================================
          NAVBAR
      ========================================================== */}
            <header className="fixed inset-x-0 top-0 z-50 pt-4 px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-6xl">
                    <nav className="border border-neutral-200/80 bg-white/85 px-5 py-3 shadow-[0_2px_15px_rgba(0,0,0,0.02)] backdrop-blur-md rounded-2xl flex items-center justify-between">
                        {/* Logo */}
                        <a href="#" className="flex items-center gap-2.5 group">
                            {/* <div
                                className="flex h-8 w-8 items-center justify-center rounded-xl transition-transform group-hover:scale-105"
                                style={{ backgroundColor: BRAND }}
                            >
                                <Camera size={16} className="text-white" />
                            </div> */}
                            <div className="flex flex-col">
                                <span className="text-xl font-extrabold tracking-tight leading-none text-[#141414]">
                                    SewaLensa
                                    <span style={{ color: BRAND }}>MY</span>
                                </span>
                                {/* <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-neutral-400 mt-0.5">
                                    Camera Rental · Sepang
                                </span> */}
                            </div>
                        </a>

                        {/* Desktop Links */}
                        <div className="hidden items-center gap-8 md:flex">
                            {[
                                ["Availability", "#availability"],
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
                                    ["Availability", "#availability"],
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
            </header>

            {/* =========================================================
          HERO SECTION (CLEAN & MINIMAL TYPOGRAPHY)
      ========================================================== */}
            <section className="relative pt-36 pb-16 md:pt-44 md:pb-20 text-center px-5">
                <div className="mx-auto max-w-3xl">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={stagger}
                    >
                        {/* Clean, Non-Bold Headline */}
                        <motion.h1
                            variants={fadeUp}
                            className="text-3xl font-semibold tracking-[-0.03em] text-[#141414] sm:text-5xl lg:text-[54px] leading-[1.15]"
                        >
                            Rent the{" "}
                            <span className="text-[#c90001] font-semibold tracking-tight">
                                Canon EOS R50
                            </span>
                            <br />
                            without the complexity.
                        </motion.h1>

                        {/* Subtext */}
                        <motion.p
                            variants={fadeUp}
                            className="mt-5 max-w-lg mx-auto text-sm sm:text-base leading-relaxed text-neutral-500 font-normal"
                        >
                            Planning a trip, graduation shoot, vlog, or event?
                            Collect a fully charged camera kit ready to shoot,
                            straight from Bandar Serenia.
                        </motion.p>

                        {/* Feature Pills */}
                        <motion.div
                            variants={fadeUp}
                            className="mt-7 flex flex-wrap justify-center items-center gap-2 sm:gap-2.5 text-xs font-medium text-neutral-600"
                        >
                            <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-neutral-200/80 shadow-2xs">
                                <MapPin size={13} style={{ color: BRAND }} />{" "}
                                Self-Pickup / Delivery Options
                            </span>
                            <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-neutral-200/80 shadow-2xs">
                                <ShieldCheck
                                    size={13}
                                    style={{ color: BRAND }}
                                />{" "}
                                Low Deposits
                            </span>
                            <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-neutral-200/80 shadow-2xs">
                                <Zap size={13} style={{ color: BRAND }} /> Fast
                                Booking Arrangement
                            </span>
                        </motion.div>

                        {/* Action Buttons */}
                        <motion.div
                            variants={fadeUp}
                            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
                        >
                            <button
                                onClick={handleWhatsApp}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-semibold text-white transition-all rounded-full shadow-2xs active:scale-95 hover:opacity-90"
                                style={{ backgroundColor: BRAND }}
                            >
                                Reserve Your Dates
                                <ArrowRight size={14} />
                            </button>

                            <a
                                href="#process"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border border-neutral-200 hover:border-neutral-300 px-6 py-3.5 text-xs sm:text-sm font-semibold text-neutral-700 transition-all rounded-full"
                            >
                                How It Works
                                <ArrowRight
                                    size={14}
                                    className="text-neutral-400"
                                />
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* =========================================================
    STATISTICS & SELLING POINTS BAR (CLEAN & COMPACT)
========================================================== */}
            <section
                id="highlights"
                className="bg-white border-y border-neutral-200/80 py-8 shadow-2xs"
            >
                <div className="mx-auto max-w-4xl px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 md:divide-x divide-neutral-200">
                        {/* Stat 1 */}
                        <div className="text-center md:px-6 pt-2 md:pt-0">
                            <p
                                className="text-2xl sm:text-2xl font-bold tracking-tight"
                                style={{ color: BRAND }}
                            >
                                RM40
                            </p>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-400 mt-1.5">
                                Starting Rate / Day
                            </p>
                            {/* <p className="text-xs text-neutral-500 mt-1 font-normal max-w-[200px] mx-auto leading-relaxed">
                    Budget-friendly camera rentals with zero hidden extra costs.
                </p> */}
                        </div>

                        {/* Stat 2 */}
                        <div className="text-center md:px-6 pt-5 md:pt-0">
                            <p className="text-xl sm:text-xl font-bold tracking-tight text-[#141414] flex items-center justify-center gap-1.5">
                                <MapPin size={20} style={{ color: BRAND }} />
                                Bandar Serenia
                            </p>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-400 mt-1.5">
                                Pickup Location
                            </p>
                            {/* <p className="text-xs text-neutral-500 mt-1 font-normal max-w-[200px] mx-auto leading-relaxed">
                    Convenient pickup point close to KLIA, Cyberjaya & Nilai.
                </p> */}
                        </div>

                        {/* Stat 3 */}
                        <div className="text-center md:px-6 pt-5 md:pt-0">
                            <p className="text-xl sm:text-xl font-bold tracking-tight text-[#141414] flex items-center justify-center gap-1.5">
                                <Zap size={20} style={{ color: BRAND }} />
                                100% Seamless
                            </p>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-400 mt-1.5">
                                Direct WhatsApp Booking
                            </p>
                            {/* <p className="text-xs text-neutral-500 mt-1 font-normal max-w-[200px] mx-auto leading-relaxed">
                    Direct booking confirmation handled via WhatsApp chat.
                </p> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
          CAMERA SPECS SECTION
      ========================================================== */}
            <section id="specs" className="py-20 px-5 bg-[#faf9f6]">
                <div className="mx-auto max-w-5xl">
                    <div className="text-center max-w-xl mx-auto">
                        <span
                            className="text-[10px] font-bold uppercase tracking-[0.2em]"
                            style={{ color: BRAND }}
                        >
                            Featured Gear
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#141414] mt-1.5">
                            Canon EOS R50 Kit
                        </h2>
                        <p className="mt-2.5 text-neutral-500 text-xs sm:text-sm leading-relaxed font-normal">
                            Ultra-lightweight mirrorless camera featuring Dual
                            Pixel CMOS AF II for effortless focus tracking and
                            vibrant colors out of the box.
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5">
                        <div className="bg-white p-7 border border-neutral-200/80 rounded-2xl text-center shadow-2xs">
                            <p
                                className="text-3xl sm:text-4xl font-bold tracking-tight"
                                style={{ color: BRAND }}
                            >
                                24.2 MP
                            </p>
                            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-800 mt-2">
                                APS-C CMOS Sensor
                            </p>
                            <p className="text-xs text-neutral-500 mt-1.5 font-normal leading-relaxed">
                                Crisp high-detail image capture for portraits
                                and events.
                            </p>
                        </div>

                        <div className="bg-white p-7 border border-neutral-200/80 rounded-2xl text-center shadow-2xs">
                            <p
                                className="text-3xl sm:text-4xl font-bold tracking-tight"
                                style={{ color: BRAND }}
                            >
                                4K 30p
                            </p>
                            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-800 mt-2">
                                Uncropped Video
                            </p>
                            <p className="text-xs text-neutral-500 mt-1.5 font-normal leading-relaxed">
                                Smooth 6K oversampled footage ideal for vlogs
                                and reels.
                            </p>
                        </div>

                        <div className="bg-white p-7 border border-neutral-200/80 rounded-2xl text-center shadow-2xs">
                            <p
                                className="text-3xl sm:text-4xl font-bold tracking-tight"
                                style={{ color: BRAND }}
                            >
                                375g
                            </p>
                            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-800 mt-2">
                                Featherlight Body
                            </p>
                            <p className="text-xs text-neutral-500 mt-1.5 font-normal leading-relaxed">
                                Comfortable for all-day handheld shoot on trips.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
          ADDONS & ACCESSORIES SECTION
      ========================================================== */}
            <section
                id="addons"
                className="py-20 px-5 bg-white border-t border-neutral-200/80"
            >
                <div className="mx-auto max-w-5xl">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 mb-10">
                        <div>
                            <span
                                className="text-[10px] font-bold uppercase tracking-[0.2em]"
                                style={{ color: BRAND }}
                            >
                                Optional Extras
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#141414] mt-1">
                                Rental Add-ons
                            </h2>
                        </div>
                        <p className="text-xs text-neutral-500 max-w-xs font-normal">
                            Enhance your gear setup. Select extra accessories
                            directly during your WhatsApp inquiry.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        <div className="bg-[#faf9f6] p-6 border border-neutral-200/80 rounded-2xl flex justify-between items-center shadow-2xs">
                            <div>
                                <p className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider">
                                    Stability
                                </p>
                                <p className="text-sm font-bold text-neutral-900 mt-0.5">
                                    Ulanzi TT39 Tripod
                                </p>
                                <p className="text-[11px] text-neutral-500 mt-0.5">
                                    Sturdy compact travel tripod
                                </p>
                            </div>
                            <span className="text-xs font-bold bg-white border border-neutral-200 text-neutral-900 px-3 py-1.5 rounded-xl shadow-2xs">
                                +RM10
                            </span>
                        </div>

                        <div className="bg-[#faf9f6] p-6 border border-neutral-200/80 rounded-2xl flex justify-between items-center shadow-2xs">
                            <div>
                                <p className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider">
                                    Lighting
                                </p>
                                <p className="text-sm font-bold text-neutral-900 mt-0.5">
                                    VL-49 Mini LED Light
                                </p>
                                <p className="text-[11px] text-neutral-500 mt-0.5">
                                    Rechargeable soft fill light
                                </p>
                            </div>
                            <span className="text-xs font-bold bg-white border border-neutral-200 text-neutral-900 px-3 py-1.5 rounded-xl shadow-2xs">
                                +RM5
                            </span>
                        </div>

                        <div className="bg-[#faf9f6] p-6 border border-neutral-200/80 rounded-2xl flex justify-between items-center shadow-2xs">
                            <div>
                                <p className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider">
                                    Power
                                </p>
                                <p className="text-sm font-bold text-neutral-900 mt-0.5">
                                    Kingma Extra Battery
                                </p>
                                <p className="text-[11px] text-neutral-500 mt-0.5">
                                    LP-E17 spare battery set
                                </p>
                            </div>
                            <span className="text-xs font-bold bg-white border border-neutral-200 text-neutral-900 px-3 py-1.5 rounded-xl shadow-2xs">
                                +RM8
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
          RENTAL PROCESS (HOW IT WORKS)
      ========================================================== */}
            <section
                id="process"
                className="py-20 px-5 bg-[#faf9f6] border-t border-neutral-200/80"
            >
                <div className="mx-auto max-w-5xl">
                    <div className="text-center max-w-xl mx-auto">
                        <span
                            className="text-[10px] font-bold uppercase tracking-[0.2em]"
                            style={{ color: BRAND }}
                        >
                            How It Works
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#141414] mt-1.5">
                            3 steps to rent your camera
                        </h2>
                    </div>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-7 border border-neutral-200/80 bg-white rounded-2xl relative shadow-2xs">
                            <span className="text-[11px] font-mono font-semibold text-neutral-400 uppercase tracking-widest">
                                STEP 01
                            </span>
                            <h3 className="text-base font-bold text-neutral-900 mt-3">
                                Choose Dates & WhatsApp
                            </h3>
                            <p className="text-xs text-neutral-600 mt-2 leading-relaxed font-normal">
                                Tap the booking button to send your required
                                rental dates directly to our team.
                            </p>
                        </div>

                        <div className="p-7 border border-neutral-200/80 bg-white rounded-2xl relative shadow-2xs">
                            <span className="text-[11px] font-mono font-semibold text-neutral-400 uppercase tracking-widest">
                                STEP 02
                            </span>
                            <h3 className="text-base font-bold text-neutral-900 mt-3">
                                Pickup in Sepang
                            </h3>
                            <p className="text-xs text-neutral-600 mt-2 leading-relaxed font-normal">
                                Meet at Bandar Serenia, Sepang to inspect your
                                camera setup and quick tutorial.
                            </p>
                        </div>

                        <div className="p-7 border border-neutral-200/80 bg-white rounded-2xl relative shadow-2xs">
                            <span className="text-[11px] font-mono font-semibold text-neutral-400 uppercase tracking-widest">
                                STEP 03
                            </span>
                            <h3 className="text-base font-bold text-neutral-900 mt-3">
                                Shoot & Return
                            </h3>
                            <p className="text-xs text-neutral-600 mt-2 leading-relaxed font-normal">
                                Enjoy capturing your memories and return the
                                gear at the scheduled slot.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
          REVIEWS & TESTIMONIALS
      ========================================================== */}
            <section
                id="reviews"
                className="py-20 px-5 bg-white border-t border-neutral-200/80"
            >
                <div className="mx-auto max-w-5xl">
                    <div className="text-center max-w-xl mx-auto mb-12">
                        <span
                            className="text-[10px] font-bold uppercase tracking-[0.2em]"
                            style={{ color: BRAND }}
                        >
                            Customer Experience
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#141414] mt-1">
                            Trusted by creators & travelers
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            "Extremely smooth booking! The Canon R50 was in pristine condition with a fully charged battery and memory card included.",
                            "The pickup location in Sepang was super convenient before our flight out of KLIA. Crisp photo quality!",
                            "Super polite owner with quick WhatsApp replies. No tedious forms or hidden deposits. Definitely renting again!",
                        ].map((review, i) => (
                            <div
                                key={i}
                                className="bg-[#faf9f6] p-7 border border-neutral-200/80 rounded-2xl flex flex-col justify-between shadow-2xs"
                            >
                                <div>
                                    <div className="flex gap-1 text-[#c90001] mb-3">
                                        {[...Array(5)].map((_, s) => (
                                            <Star
                                                key={s}
                                                size={14}
                                                fill="currentColor"
                                            />
                                        ))}
                                    </div>
                                    <p className="text-xs sm:text-sm leading-relaxed text-neutral-600 font-normal">
                                        “{review}”
                                    </p>
                                </div>
                                <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mt-6">
                                    Verified Renter
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =========================================================
          FAQ SECTION
      ========================================================== */}
            <section
                id="faq"
                className="py-20 px-5 bg-[#faf9f6] border-t border-neutral-200/80"
            >
                <div className="mx-auto max-w-3xl">
                    <div className="text-center max-w-xl mx-auto mb-12">
                        <span
                            className="text-[10px] font-bold uppercase tracking-[0.2em]"
                            style={{ color: BRAND }}
                        >
                            Got Questions?
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#141414] mt-1">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="space-y-3">
                        {faqs.map((faq, idx) => {
                            const isOpen = activeFaq === idx;
                            return (
                                <div
                                    key={idx}
                                    className="bg-white border border-neutral-200/80 rounded-2xl overflow-hidden transition-all shadow-2xs"
                                >
                                    <button
                                        onClick={() =>
                                            setActiveFaq(isOpen ? null : idx)
                                        }
                                        className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-[#141414]"
                                    >
                                        <span>{faq.q}</span>
                                        <span
                                            className={`transition-transform duration-300 ${
                                                isOpen ? "rotate-180" : ""
                                            }`}
                                        >
                                            <ChevronRight
                                                size={16}
                                                className="text-neutral-400"
                                            />
                                        </span>
                                    </button>
                                    {isOpen && (
                                        <div className="px-5 pb-5 text-xs text-neutral-500 leading-relaxed font-normal border-t border-neutral-100 pt-3">
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* =========================================================
          BOTTOM CALL TO ACTION (RED ACCENT)
      ========================================================== */}
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

                    <button
                        onClick={handleWhatsApp}
                        className="mt-8 inline-flex items-center gap-2.5 px-8 py-4 text-xs sm:text-sm font-semibold text-white transition-all rounded-full shadow-lg active:scale-95 hover:opacity-90"
                        style={{ backgroundColor: BRAND }}
                    >
                        <MessageCircle size={18} />
                        Chat via WhatsApp Now
                    </button>
                </div>
            </section>

            {/* =========================================================
          FOOTER
      ========================================================== */}
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
        </main>
    );
}
