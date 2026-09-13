import Image from "next/image";
import { Menu } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="fixed top-0 lg:top-5 left-0 lg:left-1/2 lg:-translate-x-1/2 py-4 px-5 lg:rounded-xl lg:border lg:border-b-white/30 lg:border-l-white/30 lg:border-t-transparent lg:border-r-transparent w-full lg:w-4/5 bg-white/20 backdrop-blur-md">
            <div className="grid grid-cols-2 lg:grid-cols-3 items-center justify-between gap-5">
                <div className="col-span-1">
                    <Image
                        loading="eager"
                        src="/vercel.svg"
                        alt="Logo"
                        width={60}
                        height={60}
                        className="w-10 h-10 lg:w-14 lg:h-14 object-contain"
                    />
                </div>

                <div className="col-span-1">
                    <ul className="hidden lg:flex items-center justify-center gap-5">
                        <li>
                            <a
                                href="#"
                                className="text-sm font-medium text-white hover:text-gray-900"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-sm font-medium text-white hover:text-gray-900"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-sm font-medium text-white hover:text-gray-900"
                            >
                                Beauty
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-sm font-medium text-white hover:text-gray-900"
                            >
                                Products
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="hidden lg:block col-span-1">
                    <button className="bg-primary text-white hover:text-accent hover:bg-primary/90 py-2 px-4 rounded-full text-sm font-medium transition-all cursor-pointer">
                        Contact Service
                    </button>
                </div>

                <div className="block lg:hidden col-span-1">
                    <button className="bg-transparent text-white hover:cursor-pointer">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </nav>
    );
}