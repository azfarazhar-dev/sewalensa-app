import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import PublicLayout from "@/layouts/public-layout";
import {
    ArrowRight,
    ChevronRight,
    MapPin,
    ShieldCheck,
    Calendar,
    Star,
    Zap,
    Truck,
    FileText,
    IdCard,
    UserCheck,
    CheckCircle2,
    AlertCircle,
    Calculator,
    Info,
    Minus,
    Plus,
} from "lucide-react";

const BRAND = "#c90001";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
};

const stagger: Variants = {
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
            q: "What are the booking rates and security deposit terms?",
            a: (
                <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="p-3.5 rounded-xl bg-neutral-50/80 border border-neutral-200/80 flex items-start gap-3">
                            <div className="p-2 rounded-lg bg-rose-50 text-[#c90001] shrink-0">
                                <Calendar className="w-4 h-4" />
                            </div>

                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-wide text-neutral-400 block mb-0.5">
                                    Booking Fee
                                </span>

                                <p className="text-sm font-extrabold text-[#141414]">
                                    RM20{" "}
                                    <span className="text-xs font-normal text-neutral-500">
                                        / day
                                    </span>
                                </p>

                                <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-rose-600 mt-1">
                                    <AlertCircle className="w-3 h-3" />
                                    Based on rental days
                                </span>
                            </div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-neutral-50/80 border border-neutral-200/80 flex items-start gap-3">
                            <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 shrink-0">
                                <ShieldCheck className="w-4 h-4" />
                            </div>

                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-wide text-neutral-400 block mb-0.5">
                                    Security Deposit
                                </span>

                                <p className="text-sm font-extrabold text-[#141414]">
                                    RM100
                                </p>

                                <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600 mt-1">
                                    <CheckCircle2 className="w-3 h-3" />
                                    Fully refundable
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl bg-neutral-50 border border-neutral-200 px-3.5 py-3">
                        <div className="flex items-start gap-2.5">
                            <Info className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />

                            <p className="text-xs text-neutral-500 leading-relaxed">
                                A booking fee of{" "}
                                <strong className="text-[#141414]">
                                    RM20 per rental day
                                </strong>{" "}
                                is required to lock your date. This fee will be
                                deducted from your total rental fee. The
                                remaining balance and{" "}
                                <strong className="text-[#141414]">
                                    RM100 security deposit
                                </strong>{" "}
                                are paid upon camera pickup.
                            </p>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            q: "When and how is the rental payment calculated?",
            a: (
                <div className="space-y-3">
                    <p className="text-xs text-neutral-600 leading-relaxed">
                        Your booking fee is calculated based on the number of
                        rental days. The amount paid to secure your booking is
                        then{" "}
                        <strong className="text-[#141414]">
                            deducted from the total rental fee
                        </strong>
                        .
                    </p>

                    <div className="p-3.5 rounded-xl bg-neutral-900 text-neutral-100 space-y-3">
                        <div className="flex items-center gap-2">
                            <div className="p-1.5 rounded-md bg-neutral-800">
                                <Calculator className="w-3.5 h-3.5 text-[#c90001]" />
                            </div>

                            <span className="text-[10px] font-semibold tracking-wide uppercase text-neutral-400">
                                Payment Breakdown
                            </span>
                        </div>

                        <div className="space-y-2 text-[11px]">
                            <div className="flex items-center justify-between gap-3">
                                <span className="text-neutral-400">
                                    Booking fee
                                </span>
                                <span className="font-semibold text-white">
                                    RM20 × Days
                                </span>
                            </div>

                            <div className="flex items-center justify-between gap-3">
                                <span className="text-neutral-400">
                                    Total rental
                                </span>
                                <span className="font-semibold text-white">
                                    Daily Rate × Days
                                </span>
                            </div>

                            <div className="h-px bg-neutral-800" />

                            <div className="flex items-center justify-between gap-3">
                                <span className="text-neutral-300 font-medium">
                                    Balance at pickup
                                </span>
                                <span className="font-bold text-white">
                                    Rental Total − Booking Fee
                                </span>
                            </div>

                            <div className="flex items-center justify-between gap-3 pt-1">
                                <span className="text-neutral-400">
                                    Security deposit
                                </span>
                                <span className="font-semibold text-emerald-400">
                                    + RM100 refundable
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg bg-neutral-50 border border-neutral-200 px-3 py-2.5">
                        <p className="text-[11px] text-neutral-500 leading-relaxed">
                            <strong className="text-[#141414]">Example:</strong>{" "}
                            For a 2-day rental, the booking fee is RM40 (RM20 ×
                            2 days). The RM40 is deducted from your total rental
                            fee, while the RM100 security deposit is paid
                            separately at pickup.
                        </p>
                    </div>
                </div>
            ),
        },
        {
            q: "What are the delivery charges and pickup locations?",
            a: (
                <div className="grid grid-cols-1 gap-2">
                    <div className="p-3 rounded-xl border border-neutral-200/80 bg-neutral-50/60 flex items-start gap-3">
                        <div className="p-1.5 rounded-lg bg-rose-50 text-[#c90001] shrink-0 mt-0.5">
                            <Truck className="w-4 h-4" />
                        </div>
                        <div>
                            <strong className="text-xs font-bold text-[#141414] block mb-0.5">
                                Delivery Service (optional)
                            </strong>
                            <p className="text-xs text-neutral-600">
                                RM0.70 per KM distance{" "}
                                <span className="text-neutral-400">
                                    (calculated per individual trip)
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="p-3 rounded-xl border border-emerald-200/80 bg-emerald-50/30 flex items-start gap-3">
                        <div className="p-1.5 rounded-lg bg-emerald-100/60 text-emerald-700 shrink-0 mt-0.5">
                            <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <div>
                            <strong className="text-xs font-bold text-emerald-950 block mb-0.5">
                                Complimentary Self Pickup & Return
                            </strong>
                            <p className="text-xs text-emerald-900/80">
                                Free self-collection available exclusively at{" "}
                                <span className="font-semibold underline underline-offset-2">
                                    Bandar Serenia, Sepang
                                </span>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            q: "Where is the pickup and return location?",
            a: "Pickup and return are conveniently located at Bandar Serenia, Sepang — just 10-15 minutes away from KLIA 1/2, Cyberjaya, and Nilai.",
        },
        {
            q: "What is included in the basic Canon EOS R50 kit?",
            a: (
                <div className="space-y-2.5">
                    <p className="text-xs text-neutral-600">
                        Every standard camera rental package comes fully loaded:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div className="flex items-center gap-2 p-2.5 rounded-lg border border-neutral-200 bg-neutral-50 text-xs font-semibold text-neutral-800">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#c90001]" />{" "}
                            Canon EOS R50 Body
                        </div>
                        <div className="flex items-center gap-2 p-2.5 rounded-lg border border-neutral-200 bg-neutral-50 text-xs font-semibold text-neutral-800">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#c90001]" />{" "}
                            15-45mm STM Kit Lens
                        </div>
                        <div className="flex items-center gap-2 p-2.5 rounded-lg border border-neutral-200 bg-neutral-50 text-xs font-semibold text-neutral-800">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#c90001]" />{" "}
                            1x High-speed SD Card
                        </div>
                        <div className="flex items-center gap-2 p-2.5 rounded-lg border border-neutral-200 bg-neutral-50 text-xs font-semibold text-neutral-800">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#c90001]" />{" "}
                            1x Battery & Charger
                        </div>
                        <div className="flex items-center gap-2 p-2.5 rounded-lg border border-neutral-200 bg-neutral-50 text-xs font-semibold text-neutral-800 sm:col-span-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#c90001]" />{" "}
                            Protective Camera Bag
                        </div>
                    </div>
                </div>
            ),
        },
        {
            q: "Can I transfer photos directly to my smartphone?",
            a: "Yes! The camera features built-in Wi-Fi and Bluetooth. Simply download the Canon Camera Connect app on iOS or Android for instant wireless photo transfer.",
        },
        {
            q: "What documents are required to rent equipment?",
            a: (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="flex items-center gap-2.5 p-3 rounded-xl border border-neutral-200 bg-neutral-50 text-xs font-semibold text-neutral-800">
                        <FileText className="w-4 h-4 text-[#c90001]" /> Rental
                        Agreement Form
                    </div>
                    <div className="flex items-center gap-2.5 p-3 rounded-xl border border-neutral-200 bg-neutral-50 text-xs font-semibold text-neutral-800">
                        <IdCard className="w-4 h-4 text-[#c90001]" /> Copy of
                        Identification Card (IC)
                    </div>
                </div>
            ),
        },
        {
            q: "What are the identity verification rules at pickup?",
            a: (
                <div className="space-y-2 text-xs text-neutral-600">
                    <div className="flex items-start gap-2 p-2.5 rounded-lg bg-neutral-50 border border-neutral-200">
                        <UserCheck className="w-4 h-4 text-[#c90001] shrink-0 mt-0.5" />
                        <span>
                            Self-collection is compulsory. Only the registered
                            individual may collect equipment.
                        </span>
                    </div>
                    <div className="flex items-start gap-2 p-2.5 rounded-lg bg-neutral-50 border border-neutral-200">
                        <IdCard className="w-4 h-4 text-[#c90001] shrink-0 mt-0.5" />
                        <span>
                            Physical IC presentation is mandatory upon pickup
                            for identity matching.
                        </span>
                    </div>
                    <div className="flex items-start gap-2 p-2.5 rounded-lg bg-neutral-50 border border-neutral-200">
                        <ShieldCheck className="w-4 h-4 text-[#c90001] shrink-0 mt-0.5" />
                        <span>
                            A photo verification holding your physical IC will
                            be conducted on-site.
                        </span>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <>
            {/* Hero Section */}
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
                                Book via WhatsApp
                                <ArrowRight size={14} />
                            </button>

                            <a
                                href="/availability"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border border-neutral-200 hover:border-neutral-300 px-6 py-3.5 text-xs sm:text-sm font-semibold text-neutral-700 transition-all rounded-full"
                            >
                                Check Availability
                                <ArrowRight
                                    size={14}
                                    className="text-neutral-400"
                                />
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Key Points Section */}
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

            {/* Highlights Section */}
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

            {/* Add-ons Section */}
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
                                +RM10
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
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

            {/* Reviews Section */}
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

            {/* FAQ Section */}
            <section
                id="faq"
                className="py-24 px-5 bg-[#faf9f6] border-t border-neutral-200/80"
            >
                <div className="mx-auto max-w-2xl">
                    <div className="text-center max-w-xl mx-auto mb-12">
                        <span
                            className="text-[10px] font-bold uppercase tracking-[0.2em]"
                            style={{ color: BRAND }}
                        >
                            FAQ
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#141414] mt-1">
                            Frequently asked questions
                        </h2>
                    </div>

                    <div className="divide-y divide-neutral-200/80 border-t border-b border-neutral-200/80">
                        {faqs.map((faq, idx) => {
                            const isOpen = activeFaq === idx;
                            return (
                                <div key={idx} className="py-5">
                                    <button
                                        onClick={() =>
                                            setActiveFaq(isOpen ? null : idx)
                                        }
                                        className="w-full text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#141414] group"
                                    >
                                        <span className="group-hover:opacity-75 transition-opacity">
                                            {faq.q}
                                        </span>
                                        <span className="p-1 rounded-full bg-neutral-200/60 text-neutral-700 transition-colors">
                                            {isOpen ? (
                                                <Minus size={14} />
                                            ) : (
                                                <Plus size={14} />
                                            )}
                                        </span>
                                    </button>
                                    {isOpen && (
                                        <div className="mt-3 text-xs sm:text-sm text-neutral-500 leading-relaxed font-normal pr-8">
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

// Attach the persistent layout so Header and Footer render automatically
SewaLensaRedMinimalLanding.layout = (page: React.ReactNode) => (
    <PublicLayout>{page}</PublicLayout>
);
