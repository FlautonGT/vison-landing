"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { label: "Produk", href: "/products" },
    { label: "Solusi", href: "/solutions" },
    { label: "Industri", href: "/industries" },
    { label: "Harga", href: "/pricing" },
    { label: "Tentang", href: "/about" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-strong shadow-lg shadow-black/20" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <a href="/" className="flex items-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/logo.png"
                        alt="Vison"
                        className="h-9 w-auto object-contain"
                    />
                </a>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            className="text-sm text-text-secondary hover:text-primary transition-colors"
                        >
                            {l.label}
                        </a>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-3">
                    <a
                        href="https://dashboard.vison.id/login"
                        className="text-sm text-text-secondary hover:text-primary transition-colors"
                    >
                        Masuk
                    </a>
                    <a
                        href="https://dashboard.vison.id/register"
                        className="px-5 py-2 rounded-lg bg-gradient-to-r from-primary to-primary-light text-white text-sm font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
                    >
                        Mulai Gratis
                    </a>
                </div>

                {/* Mobile toggle */}
                <button
                    className="md:hidden text-text-primary"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass-strong border-t border-black/5"
                    >
                        <div className="px-6 py-4 flex flex-col gap-4">
                            {navLinks.map((l) => (
                                <a
                                    key={l.href}
                                    href={l.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-sm text-text-secondary hover:text-primary transition-colors"
                                >
                                    {l.label}
                                </a>
                            ))}
                            <div className="flex flex-col gap-2 pt-2 border-t border-black/10">
                                <a href="https://dashboard.vison.id/login" className="text-sm text-text-secondary">
                                    Masuk
                                </a>
                                <a
                                    href="https://dashboard.vison.id/register"
                                    className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary to-primary-light text-white text-sm font-semibold text-center"
                                >
                                    Mulai Gratis
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
