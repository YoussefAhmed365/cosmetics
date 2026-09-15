import Image from "next/image";
import { Menu, User2 } from "lucide-react";
import Button from "../ui/Button";

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
                                <a
                                    href={link.href}
                                    className="font-medium text-lg text-secondary hover:text-secondary/80"
                                >
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="hidden lg:block lg:col-span-1 justify-self-end">
                    <Button href="#" type="secondary" children="Contact Service" />
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