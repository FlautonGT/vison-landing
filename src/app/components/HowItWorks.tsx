"use client";
import { motion } from "framer-motion";
import { UserPlus, Wallet, Code2, ShieldCheck } from "lucide-react";

const steps = [
    {
        icon: UserPlus,
        step: "01",
        title: "Daftar & Verifikasi",
        desc: "Buat akun, verifikasi email, lalu selesaikan KYC — upload KTP, verifikasi data, dan liveness check.",
    },
    {
        icon: Wallet,
        step: "02",
        title: "Top-up Saldo",
        desc: "Top-up mulai dari Rp 50.000. Bayar sesuai pemakaian, saldo tidak pernah expired.",
    },
    {
        icon: Code2,
        step: "03",
        title: "Integrasi API",
        desc: "Dapatkan API key sandbox untuk testing, lalu production key. Integrasi dengan dokumentasi lengkap.",
    },
    {
        icon: ShieldCheck,
        step: "04",
        title: "Mulai Verifikasi",
        desc: "Panggil API untuk OCR, Face Compare, Liveness — semua otomatis, real-time, dan aman.",
    },
];

export default function HowItWorks() {
    return (
        <section id="cara-kerja" className="relative py-24 bg-radial-cyan">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-xs font-semibold tracking-widest uppercase text-accent-dark">
                        Cara Kerja
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
                        Mulai dalam{" "}
                        <span className="gradient-text">4 Langkah Mudah</span>
                    </h2>
                    <p className="text-text-secondary max-w-2xl mx-auto">
                        Tidak perlu kontak sales. Daftar, top-up, dan langsung gunakan API.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Connector line */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2" />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((s, i) => (
                            <motion.div
                                key={s.step}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, duration: 0.5 }}
                                className="relative text-center"
                            >
                                <div className="relative mx-auto w-20 h-20 rounded-2xl glass shadow-lg shadow-primary/20 flex items-center justify-center mb-6">
                                    <s.icon size={32} className="text-primary" />
                                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-br from-primary to-primary-light text-xs font-bold text-white flex items-center justify-center">
                                        {s.step}
                                    </span>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                                <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
