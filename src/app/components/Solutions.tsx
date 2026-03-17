"use client";
import { motion } from "framer-motion";
import { Building2, CreditCard, ShoppingBag, Heart, Wifi, Truck } from "lucide-react";

const industries = [
    {
        icon: CreditCard,
        name: "Fintech & Lending",
        desc: "e-KYC untuk onboarding peminjam, verifikasi identitas nasabah, dan compliance AML/KYC.",
        useCases: ["Verifikasi peminjam", "Scoring identitas", "AML screening"],
    },
    {
        icon: Building2,
        name: "Perbankan",
        desc: "Pembukaan rekening digital, verifikasi nasabah, dan pencegahan fraud identitas.",
        useCases: ["Digital onboarding", "Re-KYC nasabah", "Fraud prevention"],
    },
    {
        icon: ShoppingBag,
        name: "E-Commerce",
        desc: "Verifikasi penjual dan pembeli untuk marketplace yang lebih aman dan terpercaya.",
        useCases: ["Verifikasi seller", "COD verification", "Age verification"],
    },
    {
        icon: Heart,
        name: "Asuransi",
        desc: "Proses klaim lebih cepat dengan verifikasi identitas otomatis dan document check.",
        useCases: ["Polis digital", "Klaim otomatis", "Validasi dokumen"],
    },
    {
        icon: Wifi,
        name: "Telekomunikasi",
        desc: "Registrasi SIM card sesuai regulasi dengan verifikasi NIK dan biometrik.",
        useCases: ["Registrasi SIM", "Validasi NIK", "Aktivasi digital"],
    },
    {
        icon: Truck,
        name: "Logistik",
        desc: "Verifikasi driver dan mitra pengiriman untuk keamanan operasional.",
        useCases: ["Driver onboarding", "Mitra verification", "ID check"],
    },
];

export default function Solutions() {
    return (
        <section id="solusi" className="relative py-24">
            <div className="absolute inset-0 bg-radial-blue" />
            <div className="relative max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-xs font-semibold tracking-widest uppercase text-accent-dark">
                        Solusi Industri
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
                        Solusi untuk{" "}
                        <span className="gradient-text">Setiap Industri</span>
                    </h2>
                    <p className="text-text-secondary max-w-2xl mx-auto">
                        Vison melayani berbagai sektor industri dengan solusi verifikasi identitas yang disesuaikan.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((ind, i) => (
                        <motion.div
                            key={ind.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.5 }}
                            className="group rounded-2xl glass p-6 hover:bg-black/[0.02] transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/20 flex items-center justify-center mb-4">
                                <ind.icon size={24} className="text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{ind.name}</h3>
                            <p className="text-sm text-text-secondary leading-relaxed mb-4">{ind.desc}</p>
                            <div className="flex flex-wrap gap-2">
                                {ind.useCases.map((uc) => (
                                    <span
                                        key={uc}
                                        className="text-xs px-2.5 py-1 rounded-full bg-primary/5 text-primary-dark border border-primary/10"
                                    >
                                        {uc}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
