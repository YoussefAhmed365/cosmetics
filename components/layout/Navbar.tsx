"use client";

import Image from "next/image";
import { Menu } from "lucide-react";
import Button from "../ui/Button";
import { useEffect, useState } from "react";
import { match } from "assert";

const navLinks = [
    {
        title: "Home",
        href: "#",
    },
    {
        title: "About",
        href: "#",
    },
    {
        title: "Beauty",
        href: "#",
    },
    {
        title: "Products",
        href: "#",
    },
];

export default function Navbar() {
    const [isPastMarquee, setIsPastMarquee] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 1024px)");
        const marquee = document.getElementById("marquee");
        if (!marquee) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (!mediaQuery.matches) {
                setIsPastMarquee(false);
                return;
            }

            // If marquee is no longer intersecting and has scrolled above the navbar
            setIsPastMarquee(!entry.isIntersecting && entry.boundingClientRect.top < 0);
        },
        {
            threshold: 0,
            // Negative top rootMargin triggers the change right when the marquee slides under the fixed navbar (~80px tall)
            rootMargin: "-80px 0px 0px 0px",
        }
    );

    observer.observe(marquee);

    // Reset if the viewport is resized below lg
    const handleResize = () => {
        if (!mediaQuery.matches) setIsPastMarquee(false);
    };
    mediaQuery.addEventListener("change", handleResize);

    return () => {
        observer.disconnect();
        mediaQuery.removeEventListener("change", handleResize);
    };
    }, []);

    return (
        <nav className="fixed z-50 top-0 lg:top-5 left-0 lg:left-1/2 lg:-translate-x-1/2 py-3 px-6 sm:px-10 lg:px-16 lg:rounded-xl lg:border lg:border-white/20 w-full lg:w-4/5 bg-white/10 backdrop-blur-sm">
            <div className="grid grid-cols-2 lg:grid-cols-3 items-center justify-between gap-5">
                <div className="col-span-1">
                    <Image
                        loading="eager"
                        src="/next.svg"
                        alt="Logo"
                        width={60}
                        height={60}
                        className="w-10 h-10 lg:w-14 lg:h-14 object-contain"
                    />
                </div>

                <div className="hidden lg:block lg:col-span-1">
                    <ul className="flex items-center justify-center gap-x-8">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Button href={link.href} type={isPastMarquee ? "text-dark" : "text-light"} children={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="hidden lg:block lg:col-span-1 justify-self-end">
                    <Button href="#" type={isPastMarquee ? "primary" : "secondary"} children="Contact Service" />
                </div>

                <div className="col-span-1 lg:hidden justify-self-end">
                    <button className="bg-transparent text-primary hover:cursor-pointer">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </nav>
    );
}