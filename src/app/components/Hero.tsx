"use client";
import { motion } from "framer-motion";
import { Zap, ArrowRight, CheckCircle2, ScanLine } from "lucide-react";
import Image from "next/image";

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

                {/* Right: Hero Image */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="relative hidden lg:flex items-center justify-center"
                >
                    {/* Glow blob */}
                    <div className="absolute w-[480px] h-[480px] rounded-full bg-primary/10 blur-[80px]" />

                    {/* Person image */}
                    <div className="relative">
                        <Image
                            src="/hero.png"
                            alt="Face verification demo"
                            width={420}
                            height={520}
                            className="relative z-10 object-contain drop-shadow-2xl"
                            priority
                        />

                        {/* Floating: Match score card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="absolute top-8 -right-6 z-20 bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-3 flex items-center gap-3 min-w-[170px]"
                        >
                            <div className="w-9 h-9 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                                <CheckCircle2 size={18} className="text-green-600" />
                            </div>
                            <div>
                                <div className="text-xs text-gray-400 font-medium">Face Match</div>
                                <div className="text-base font-bold text-gray-800">99.98%</div>
                            </div>
                        </motion.div>

                        {/* Floating: Scan label */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.0, duration: 0.5 }}
                            className="absolute bottom-20 -left-8 z-20 bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-3 flex items-center gap-3"
                        >
                            <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                <ScanLine size={18} className="text-primary" />
                            </div>
                            <div>
                                <div className="text-xs text-gray-400 font-medium">OCR + Liveness</div>
                                <div className="text-sm font-bold text-gray-800">Verified ✓</div>
                            </div>
                        </motion.div>

                        {/* Scan line animation */}
                        <motion.div
                            animate={{ y: [0, 480, 0] }}
                            transition={{ repeat: Infinity, duration: 3.5, ease: "linear" }}
                            className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-primary/60 to-transparent z-20 pointer-events-none"
                            style={{ top: 0 }}
                        />

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
