"use client";
import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";
import { HeroIllustration } from "./Illustrations";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-grid" />
            <div className="absolute inset-0 bg-radial-blue" />
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />

            <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
                {/* Left: Text */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs text-accent-dark mb-6">
                        <Zap size={14} /> Platform e-KYC #1 Indonesia
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                        Easily Secure{" "}
                        <span className="gradient-text">Your Business</span>
                    </h1>
                    <p className="text-lg text-text-secondary max-w-lg mb-8 leading-relaxed">
                        Verifikasi identitas pelanggan secara instan dengan teknologi AI.
                        OCR, Face Compare, Liveness Detection, dan lainnya — semua dalam
                        satu API.
                    </p>
                    <div className="flex flex-wrap gap-4 mb-12">
                        <a
                            href="https://dashboard.vison.id/register"
                            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-primary-light text-white font-semibold hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
                        >
                            Mulai Gratis
                            <ArrowRight
                                size={18}
                                className="group-hover:translate-x-1 transition-transform"
                            />
                        </a>
                        <a
                            href="https://docs.vison.id"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-text-primary font-semibold hover:bg-black/5 transition-all duration-300"
                        >
                            Lihat Dokumentasi
                        </a>
                    </div>
                    {/* Stats */}
                    <div className="flex flex-wrap gap-8">
                        {[
                            { value: "99.9%", label: "Akurasi" },
                            { value: "<2 detik", label: "Waktu Proses" },
                            { value: "10+", label: "Layanan API" },
                        ].map((s) => (
                            <div key={s.label}>
                                <div className="text-2xl font-bold gradient-text-blue">{s.value}</div>
                                <div className="text-sm text-text-muted">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Right: Illustration */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="relative hidden lg:block"
                >
                    <div className="relative w-full max-w-lg mx-auto">
                        {/* Outer glow */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-[60px] animate-pulse-glow" />
                        <HeroIllustration />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
