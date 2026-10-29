
'use client'

import Link from "next/link";
import logo from '../../assets/logo.png';
import search from '../../assets/search.png';
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavBar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Courses", href: "/courses" },
        { name: "Blog", href: "/Blog" },
        { name: "Page", href: "/Page" },
        { name: "Premium Theme", href: "/PremiumTheme" },
    ];

    return (
        <nav className="relative z-50 flex min-h-[72px] w-full items-center justify-between bg-white px-4 py-3 md:h-[72px] md:px-10 md:py-0">

            {/* Logo */}
            <div className="flex shrink-0 items-center gap-2">
                <Image
                    src={logo}
                    alt="Logo"
                    width={39}
                    height={30}
                />

                <Link href="/" className="hidden font-semibold md:block">
                    EduPress
                </Link>
            </div>

            {/* Mobile menu button */}
            <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className="cursor-pointer text-2xl md:hidden"
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
            >
                {menuOpen ? "✕" : "☰"}
            </button>

            {/* Navigation menu */}
            <div
                className={`${
                    menuOpen ? "flex" : "hidden"
                } absolute right-0 top-full z-50 w-full max-w-[320px] flex-col gap-6 overflow-x-hidden rounded-xl border border-gray-100 bg-white p-5 shadow-lg md:static md:flex md:w-auto md:max-w-none md:flex-row md:items-center md:gap-6 md:overflow-visible md:rounded-none md:border-0 md:p-0 md:shadow-none`}
            >

                {/* Navigation links */}
                <ul className="flex min-w-0 flex-col gap-4 md:flex-row md:items-center md:gap-6">
                    {navLinks.map((link) => {
                        const isActive =
                            link.href === "/"
                                ? pathname === "/"
                                : pathname === link.href ||
                                  pathname.startsWith(link.href + "/");

                        return (
                            <li key={link.href} className="min-w-0">
                                <Link
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className={`block whitespace-nowrap transition-colors duration-200 ${
                                        isActive
                                            ? "text-[#FF782D]"
                                            : "text-[#222222] hover:text-[#FF782D]"
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* Desktop: Login / Register + Search icon */}
                <div className="hidden shrink-0 items-center md:flex">
                    <Link
                        href="/account"
                        className="whitespace-nowrap hover:text-[#FF782D]"
                    >
                        Login /
                    </Link>

                    <Link
                        href="/account"
                        className="whitespace-nowrap hover:text-[#FF782D]"
                    >
                        Register
                    </Link>

                    <div className="ml-[20px] flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[24px] border-2 border-[#FF782D]">
                        <Link href="/courses">
                            <Image
                                src={search}
                                alt="Search"
                                className="h-[20px] w-[20px]"
                            />
                        </Link>
                    </div>
                </div>

                {/* Mobile: Search input + Login button */}
                <div className="flex w-full min-w-0 flex-col items-start gap-4 md:hidden">
                    <input
                        type="search"
                        placeholder="Search courses..."
                        className="h-[48px] w-full min-w-0 rounded-full border border-[#9D9D9D] px-4 text-sm outline-none focus:border-[#FF782D]"
                    />

                    <Link
                        href="/account"
                        onClick={() => setMenuOpen(false)}
                        className="mx-auto mt-2 flex h-[48px] w-[170px] shrink-0 items-center justify-center rounded-full bg-[#FF782D] px-8 font-medium text-white transition-colors duration-200 hover:bg-[#e96520]"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    );
}


