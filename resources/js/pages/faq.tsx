import React, { useState } from "react";
import PublicLayout from "@/layouts/public-layout";
import { Head } from "@inertiajs/react";
import {
    ChevronDown,
    Search,
    CreditCard,
    FileText,
    Truck,
    ShieldCheck,
    UserCheck,
    HelpCircle,
    CheckCircle2,
    Calendar,
    AlertCircle,
    Calculator,
    IdCard,
    Info,
} from "lucide-react";

interface FAQItem {
    id: string;
    category: string;
    question: string;
    answer: React.ReactNode;
}

const faqData: FAQItem[] = [
    {
        id: "faq-rates",
        category: "Pricing & Fees",
        question: "What are the rental rates and security deposit terms?",
        answer: (
            <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-rose-50 text-[#c90001] shrink-0">
                            <Calendar className="w-4 h-4" />
                        </div>
                        <div>
                            <span className="text-[11px] font-bold  uppercase text-slate-400 block mb-0.5">
                                Booking Confirmation
                            </span>
                            <p className="text-base font-extrabold text-slate-900">
                                RM20 <span className="text-xs font-normal text-slate-500">/ day</span>
                            </p>
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-rose-600 mt-1">
                                <AlertCircle className="w-3 h-3" /> Non-refundable
                            </span>
                        </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 shrink-0">
                            <ShieldCheck className="w-4 h-4" />
                        </div>
                        <div>
                            <span className="text-[11px] font-bold  uppercase text-slate-400 block mb-0.5">
                                Security Deposit
                            </span>
                            <p className="text-base font-extrabold text-slate-900">RM100</p>
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 mt-1">
                                <CheckCircle2 className="w-3 h-3" /> Refundable upon camera return
                            </span>
                        </div>
                    </div>
                </div>

                <p className="text-xs text-slate-500 flex items-center gap-1.5 pt-1">
                    <Info className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    The Booking Confirmation Fee will be fully deducted from your Total Rental Fee.
                </p>
            </div>
        ),
    },
    {
        id: "faq-payment",
        category: "Pricing & Fees",
        question: "When and how is the rental payment calculated?",
        answer: (
            <div className="space-y-3.5">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The remaining balance payment must be settled strictly <strong className="text-slate-900 font-semibold">prior to equipment pickup</strong>.
                </p>

                <div className="p-4 rounded-xl bg-slate-900 text-slate-100 text-xs sm:text-sm font-medium tracking-wide space-y-2 shadow-inner">
                    <div className="flex items-center gap-2 text-slate-400 text-[11px] font-mono uppercase ">
                        <Calculator className="w-3.5 h-3.5 text-[#c90001]" />
                        <span>Balance Payment Breakdown</span>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/60 font-mono text-xs text-slate-200 overflow-x-auto">
                        <span className="text-rose-400 font-semibold">Balance</span> = (Daily Rate × Days) - Booking Fee + Security Deposit + Delivery Charges
                    </div>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed">
                    Your reservation slot is officially guaranteed only upon receipt of the Booking Confirmation Fee.
                </p>
            </div>
        ),
    },
    {
        id: "faq-delivery",
        category: "Delivery & Pickup",
        question: "What are the delivery charges and pickup locations?",
        answer: (
            <div className="grid grid-cols-1 gap-2.5">
                <div className="p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/60 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-rose-50 text-[#c90001] shrink-0 mt-0.5">
                        <Truck className="w-4 h-4" />
                    </div>
                    <div>
                        <strong className="text-xs font-bold text-slate-900 block mb-0.5">
                            Delivery Service (optional)
                        </strong>
                        <p className="text-xs text-slate-600">
                            RM0.70 per KM distance <span className="text-slate-400">(calculated per individual trip)</span>
                        </p>
                    </div>
                </div>

                <div className="p-3.5 rounded-xl border border-emerald-200/80 bg-emerald-50/30 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-emerald-100/60 text-emerald-700 shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                        <strong className="text-xs font-bold text-emerald-950 block mb-0.5">
                            Complimentary Self Pickup & Return
                        </strong>
                        <p className="text-xs text-emerald-900/80">
                            Free self-collection available exclusively at <span className="font-semibold underline underline-offset-2">Bandar Serenia, Sepang</span>.
                        </p>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "faq-documents",
        category: "Requirements & Verification",
        question: "What documents are required to rent equipment?",
        answer: (
            <div className="space-y-3">
                <span className="text-[11px] font-bold  uppercase text-slate-400 block">
                    Compulsory Documentation
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/60">
                        <FileText className="w-4 h-4 text-[#c90001] shrink-0" />
                        <span className="text-xs font-semibold text-slate-800">1. Rental Agreement Form</span>
                    </div>
                    <div className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/60">
                        <IdCard className="w-4 h-4 text-[#c90001] shrink-0" />
                        <span className="text-xs font-semibold text-slate-800">2. Copy of Identification Card (IC)</span>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "faq-verification",
        category: "Requirements & Verification",
        question: "What are the identity verification rules at pickup?",
        answer: (
            <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
                <p className="font-medium text-slate-700">
                    To prevent fraudulent rentals and ensure equipment security, the following conditions are strictly enforced:
                </p>
                <div className="space-y-2">
                    <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/70">
                        <UserCheck className="w-4 h-4 text-[#c90001] shrink-0 mt-0.5" />
                        <span>Self-collection is compulsory. Only the individual registered on the agreement may collect the equipment.</span>
                    </div>
                    <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/70">
                        <IdCard className="w-4 h-4 text-[#c90001] shrink-0 mt-0.5" />
                        <span>Physical IC presentation is mandatory upon pickup for identity matching.</span>
                    </div>
                    <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/70">
                        <ShieldCheck className="w-4 h-4 text-[#c90001] shrink-0 mt-0.5" />
                        <span>A photo verification holding your physical IC will be conducted on-site.</span>
                    </div>
                </div>
            </div>
        ),
    },
];

const categories = ["All", "Pricing & Fees", "Delivery & Pickup", "Requirements & Verification"];

export default function FAQ() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [openId, setOpenId] = useState<string | null>("faq-rates");

    const filteredFaqs = faqData.filter((item) => {
        const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
        const matchesSearch =
            item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.category.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const toggleFaq = (id: string) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    return (
        <PublicLayout>
            <Head title="Rental Terms & FAQ - SewaLensaMY" />

            <div className="max-w-3xl mx-auto px-4 py-12 sm:py-16">
                
                {/* Header Section */}
                <div className="text-center max-w-xl mx-auto mb-10">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#c90001] uppercase bg-[#c90001]/10 px-3.5 py-1 rounded-full border border-[#c90001]/15">
                        Rental Policy & FAQ
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-4">
                        Frequently Asked Questions
                    </h1>
                    <p className="mt-3 text-slate-500 text-sm sm:text-base leading-relaxed">
                        Everything you need to know about booking fees, security deposits, pickup procedures, and verification rules.
                    </p>
                </div>

                {/* Search & Category Filter Controls */}
                {/* <div className="space-y-3.5 mb-8"> */}
                    {/* <div className="relative">
                        <Search className="absolute left-4 top-3.5 h-4 w-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search keywords, pricing, or pickup..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#c90001]/20 focus:border-[#c90001] transition-all shadow-sm"
                        />
                    </div> */}

                    {/* Category Chips */}
                    {/* <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                                    selectedCategory === category
                                        ? "bg-slate-900 text-white shadow-sm"
                                        : "bg-slate-100 text-slate-600 hover:bg-slate-200/80"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div> */}
                {/* </div> */}

                {/* FAQ Accordion List */}
                <div className="space-y-3">
                    {filteredFaqs.length > 0 ? (
                        filteredFaqs.map((faq) => {
                            const isOpen = openId === faq.id;
                            return (
                                <div
                                    key={faq.id}
                                    className={`border rounded-xl transition-all duration-200 overflow-hidden ${
                                        isOpen
                                            ? "border-slate-300 bg-white shadow-sm ring-1 ring-slate-900/5"
                                            : "border-slate-200/90 bg-white hover:border-slate-300"
                                    }`}
                                >
                                    <button
                                        onClick={() => toggleFaq(faq.id)}
                                        aria-expanded={isOpen}
                                        className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 focus:outline-none group"
                                    >
                                        <div className="flex items-center gap-3">
                                            {/* <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hidden sm:inline-block">
                                                {faq.category}
                                            </span> */}
                                            <span className="font-semibold text-slate-900 text-sm sm:text-base group-hover:text-[#c90001] transition-colors">
                                                {faq.question}
                                            </span>
                                        </div>
                                        <ChevronDown
                                            className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                                                isOpen ? "rotate-180 text-[#c90001]" : ""
                                            }`}
                                        />
                                    </button>

                                    {isOpen && (
                                        <div className="px-5 pb-5 pt-0 border-t border-slate-100">
                                            <div className="pt-4">{faq.answer}</div>
                                        </div>
                                    )}
                                </div>
                            );
                        })
                    ) : (
                        <div className="text-center py-12 bg-white rounded-xl border border-slate-200/80">
                            <HelpCircle className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                            <p className="text-slate-700 text-sm font-semibold">No questions found</p>
                            <p className="text-slate-400 text-xs mt-1">
                                Try searching with a different term or clear the category filter.
                            </p>
                        </div>
                    )}
                </div>

                {/* Important Policy Banner */}
                <div className="mt-10 p-5 rounded-xl bg-slate-900 text-white flex items-start gap-4 shadow-md">
                    <div className="p-2 rounded-lg bg-white/10 text-[#c90001] shrink-0 mt-0.5">
                        <UserCheck className="w-5 h-5" />
                    </div>
                    <div className="text-xs leading-relaxed text-slate-300">
                        <strong className="text-white font-semibold text-sm block mb-1">
                            Important Pickup Policy Notice
                        </strong>
                        Only the individual named in the registered rental agreement may collect equipment. Bringing a physical IC and completing photo-holding-IC verification are <strong>mandatory</strong> upon pickup.
                    </div>
                </div>

            </div>
        </PublicLayout>
    );
}