import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import { Camera, Calendar, HelpCircle, LogIn, User, Menu, X } from "lucide-react";

export default function Header() {
    const { auth } = usePage().props as any;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-40 w-full bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Brand Logo */}
                <Link href="/" className="flex items-center gap-2 font-bold text-2xl text-slate-900 tracking-tight">
                    <span>SewaLensa<span className="text-[#c90001]">MY</span></span>
                </Link>

                {/* Desktop Navigation Links */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
                    <Link
                        href="/calendar"
                        className="flex items-center gap-1.5 transition-colors hover:text-[#c90001]"
                    >
                        <Calendar className="w-4 h-4" />
                        <span>Availability Calendar</span>
                    </Link>
                    <Link
                        href="/faq"
                        className="flex items-center gap-1.5 transition-colors hover:text-[#c90001]"
                    >
                        <HelpCircle className="w-4 h-4" />
                        <span>FAQ</span>
                    </Link>
                </nav>

                {/* Mobile Hamburger Button */}
                <button
                    type="button"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    {mobileMenuOpen ? (
                        <X className="w-6 h-6 text-[#c90001]" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-slate-100 bg-white px-4 py-4 space-y-3 shadow-md">
                    <Link
                        href="/"
                        className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#c90001] transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <Calendar className="w-4 h-4 text-slate-500" />
                        <span>Availability Calendar</span>
                    </Link>

                    <Link
                        href="/faq"
                        className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#c90001] transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <HelpCircle className="w-4 h-4 text-slate-500" />
                        <span>FAQ</span>
                    </Link>
                </div>
            )}
        </header>
    );
}