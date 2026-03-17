"use client";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const services = [
    { name: "OCR KTP / NPWP / SIM", price: "1.500" },
    { name: "Face Compare", price: "1.000" },
    { name: "Data NIK (Dukcapil)", price: "2.000" },
    { name: "Validasi NIK", price: "2.000" },
    { name: "Data & Validasi NPWP", price: "1.500" },
    { name: "Liveness Detection", price: "2.500" },
    { name: "Document Authenticity", price: "1.500" },
    { name: "Watchlist Screening", price: "1.000" },
    { name: "Territory / Wilayah", price: "Gratis" },
];

const features = [
    "Sandbox gratis tanpa batas",
    "Saldo tidak pernah expired",
    "Minimum top-up Rp 50.000",
    "Bayar hanya saat request berhasil",
    "GET result by ID gratis",
    "Dokumentasi API lengkap",
    "Dashboard real-time",
    "Support via email & chat",
];

export default function Pricing() {
    return (
        <section id="harga" className="relative py-24 bg-radial-cyan">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-xs font-semibold tracking-widest uppercase text-accent-dark">
                        Harga
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
                        Harga{" "}
                        <span className="gradient-text">Transparan & Terjangkau</span>
                    </h2>
                    <p className="text-text-secondary max-w-2xl mx-auto">
                        Pay-as-you-go — bayar sesuai pemakaian. Tidak ada biaya bulanan, tidak ada kontrak.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Regular plan */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="rounded-2xl glass p-8"
                    >
                        <h3 className="text-xl font-bold mb-1">Reguler</h3>
                        <p className="text-sm text-text-secondary mb-6">
                            Cocok untuk startup dan bisnis yang baru mulai.
                        </p>
                        <div className="space-y-3 mb-8">
                            {services.map((s) => (
                                <div key={s.name} className="flex justify-between items-center text-sm">
                                    <span className="text-text-secondary">{s.name}</span>
                                    <span className="font-semibold text-text-primary">
                                        {s.price === "Gratis" ? (
                                            <span className="text-primary">{s.price}</span>
                                        ) : (
                                            <>Rp {s.price}</>
                                        )}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className="border-t border-black/5 pt-6 space-y-2">
                            {features.map((f) => (
                                <div key={f} className="flex items-center gap-2 text-sm text-text-secondary">
                                    <Check size={16} className="text-primary shrink-0" />
                                    {f}
                                </div>
                            ))}
                        </div>
                        <a
                            href="https://dashboard.vison.id/register"
                            className="mt-8 block w-full py-3 rounded-xl bg-gradient-to-r from-primary to-primary-light text-white font-semibold text-center hover:shadow-lg hover:shadow-primary/30 transition-all"
                        >
                            Mulai Sekarang
                        </a>
                    </motion.div>

                    {/* Enterprise plan */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative rounded-2xl glass p-8 shadow-xl shadow-primary/5"
                    >
                        <div className="absolute -top-3 right-6 flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-xs font-semibold text-white">
                            <Sparkles size={12} /> Enterprise
                        </div>
                        <h3 className="text-xl font-bold mb-1">Enterprise</h3>
                        <p className="text-sm text-text-secondary mb-6">
                            Diskon custom untuk bisnis dengan volume besar.
                        </p>
                        <div className="rounded-xl bg-primary/5 border border-primary/10 p-6 mb-6">
                            <div className="text-3xl font-extrabold gradient-text mb-1">
                                Custom
                            </div>
                            <div className="text-sm text-text-secondary">
                                Diskon hingga 25% per request
                            </div>
                        </div>
                        <div className="space-y-2 mb-6">
                            {[
                                "Semua fitur Reguler",
                                "Diskon custom per organization",
                                "Komitmen volume",
                                "Dedicated support",
                                "Priority processing",
                                "Custom SLA",
                            ].map((f) => (
                                <div key={f} className="flex items-center gap-2 text-sm text-text-secondary">
                                    <Check size={16} className="text-primary shrink-0" />
                                    {f}
                                </div>
                            ))}
                        </div>
                        <a
                            href="mailto:sales@vison.id"
                            className="mt-4 block w-full py-3 rounded-xl glass text-text-primary font-semibold text-center hover:bg-black/5 transition-all border border-primary/20"
                        >
                            Hubungi Sales
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
