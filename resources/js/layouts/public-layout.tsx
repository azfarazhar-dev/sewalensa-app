import React, { PropsWithChildren } from "react";
import Header from "@/components/header";

export default function PublicLayout({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen flex flex-col bg-slate-100 text-slate-900 antialiased">
            <Header />
            <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {children}
            </main>
            <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
                <div className="max-w-7xl mx-auto px-4">
                    &copy; {new Date().getFullYear()} SewaLensaMY. All rights reserved.
                </div>
            </footer>
        </div>
    );
}