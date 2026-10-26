import React from "react";
// Assuming you extracted Header.tsx and Footer.tsx into a components or layouts folder:
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-[#faf9f6] font-['Plus_Jakarta_Sans',_'Manrope',_sans-serif] text-[#141414] antialiased selection:bg-[#c90001] selection:text-white">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
            `}</style>

            {/* Reusable Header */}
            <Header />

            {/* Main Page Content */}
            <main>{children}</main>

            {/* Reusable Footer */}
            <Footer />
        </div>
    );
}
