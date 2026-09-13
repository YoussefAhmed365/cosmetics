import type { Metadata } from "next";
import { Google_Sans_Flex, Montserrat, Outfit } from "next/font/google";
import "./globals.css";

const googleSans = Google_Sans_Flex({
  variable: "--font-google-sans",
  subsets: ["latin"],
});
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
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
      className={`${googleSans.variable} ${montserrat.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
