import type { Metadata } from "next";
import { Montserrat, Dancing_Script } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
    display: "swap",
});

const dancingScript = Dancing_Script({
    variable: "--font-dancing-script",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Cosmetics .inc",
    description: "Cosmetics .inc for women's beauty and cosmetics products made with love for the world.",
    keywords: ["cosmetics", "beauty", "makeup", "skincare", "haircare", "fragrance", "perfume", "nails", "body care", "bath and body", "bath", "body", "care", "fragrances", "nails", "body care", "bath and body", "bath", "body", "care"],
    authors: [{ name: "Cosmetics .inc", url: "https://cosmetics.inc", },
    { name: "Codev", url: "https://codev.sa" },
    { name: "Youssef", url: "https://youssef-ahmed365.com" },
    ],
    robots: "index, follow",
    icons: {
        icon: "/logo.png",
        apple: "/logo.png",
    },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="en"
            className={`${montserrat.variable} ${dancingScript.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col" suppressHydrationWarning>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
