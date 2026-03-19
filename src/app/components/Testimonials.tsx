"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
    {
        company: "BCA Finance",
        abbr: "BCA",
        color: "from-blue-500 to-blue-600",
        quote: "Vison sangat membantu proses onboarding nasabah kami. Verifikasi KTP dan liveness detection yang akurat membuat proses digital onboarding kami lebih cepat dan aman.",
        name: "Andi Pratama",
        title: "Head of Digital Innovation",
    },
    {
        company: "Kredivo",
        abbr: "KRV",
        color: "from-violet-500 to-violet-600",
        quote: "Integrasi API Vison sangat mudah dan dokumentasinya lengkap. Tim developer kami bisa integrate dalam waktu kurang dari satu hari kerja. Akurasi OCR-nya luar biasa.",
        name: "Sari Dewi",
        title: "CTO",
    },
    {
        company: "Tokopedia",
        abbr: "TKP",
        color: "from-green-500 to-green-600",
        quote: "Sejak menggunakan Vison untuk verifikasi seller, tingkat fraud di marketplace kami turun drastis. Watchlist screening dan face compare bekerja sangat baik.",
        name: "Budi Santoso",
        title: "VP of Trust & Safety",
    },
    {
        company: "Akulaku",
        abbr: "AKL",
        color: "from-orange-500 to-orange-600",
        quote: "Pay-as-you-go model Vison sangat cocok untuk bisnis kami yang terus berkembang. Tidak perlu komitmen kontrak panjang, kami bayar sesuai kebutuhan.",
        name: "Maya Wijaya",
        title: "Product Manager",
    },
    {
        company: "Alodokter",
        abbr: "ALO",
        color: "from-teal-500 to-teal-600",
        quote: "Verifikasi identitas dokter dan tenaga medis kini jauh lebih mudah. Liveness detection Vison memastikan hanya tenaga medis asli yang bisa bergabung di platform kami.",
        name: "dr. Rizky Hendra",
        title: "Co-Founder & CEO",
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);

    const prev = useCallback(() => {
        setDirection(-1);
        setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
    }, []);

    const next = useCallback(() => {
        setDirection(1);
        setCurrent((c) => (c + 1) % testimonials.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, [next]);

    const t = testimonials[current];

    return (
        <section className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-radial-blue" />
            <div className="relative max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-xs font-semibold tracking-widest uppercase text-primary-dark">
                        Testimoni
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
                        Dipercaya oleh{" "}
                        <span className="gradient-text">Pemimpin Industri</span>
                    </h2>
                    <p className="text-text-secondary max-w-2xl mx-auto">
                        Ribuan bisnis di Indonesia telah menggunakan Vison untuk membangun kepercayaan pelanggan mereka.
                    </p>
                </motion.div>

                {/* Carousel */}
                <div className="max-w-3xl mx-auto">
                    <div className="relative rounded-3xl glass p-8 sm:p-12 min-h-[280px] flex flex-col justify-between">
                        {/* Quote icon */}
                        <Quote size={36} className="text-primary/20 mb-4 shrink-0" />

                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={current}
                                custom={direction}
                                initial={{ opacity: 0, x: direction * 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: direction * -40 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="flex-1"
                            >
                                <p className="text-lg sm:text-xl text-text-primary leading-relaxed mb-8 font-medium">
                                    &ldquo;{t.quote}&rdquo;
                                </p>

                                <div className="flex items-center gap-4">
                                    {/* Avatar */}
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center shrink-0`}>
                                        <span className="text-white font-bold text-xs">{t.abbr}</span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-text-primary">{t.name}</div>
                                        <div className="text-sm text-text-muted">{t.title} · {t.company}</div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center justify-between mt-6">
                        {/* Dots */}
                        <div className="flex gap-2">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                                    className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-primary" : "w-2 bg-black/10 hover:bg-primary/40"}`}
                                    aria-label={`Go to testimonial ${i + 1}`}
                                />
                            ))}
                        </div>

                        {/* Arrows */}
                        <div className="flex gap-2">
                            <button
                                onClick={prev}
                                className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-primary/10 hover:border-primary/20 transition-all duration-200"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft size={18} className="text-text-secondary" />
                            </button>
                            <button
                                onClick={next}
                                className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-primary/10 hover:border-primary/20 transition-all duration-200"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight size={18} className="text-text-secondary" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
