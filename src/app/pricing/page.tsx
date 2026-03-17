"use client";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Check, HelpCircle } from "lucide-react";

const pricingItems = [
    { name: "OCR KTP", price: "1.500" },
    { name: "OCR NPWP", price: "1.500" },
    { name: "OCR SIM", price: "1.500" },
    { name: "OCR Passport", price: "2.000" },
    { name: "Face Compare", price: "1.000" },
    { name: "Liveness Detection", price: "2.500" },
    { name: "Data NIK Check", price: "2.000" },
    { name: "Validasi NIK", price: "2.000" },
    { name: "Watchlist Screening", price: "1.000" },
    { name: "Document Authenticity", price: "1.500" },
    { name: "Territory Data", price: "Gratis" },
    { name: "Phone Verification", price: "500" },
];

const faqs = [
    { q: "Apakah ada biaya bulanan?", a: "Tidak ada. Vison menggunakan model pay-as-you-go. Anda hanya membayar untuk request yang berhasil." },
    { q: "Berapa minimum top-up?", a: "Mulai dari Rp 50.000. Saldo Anda tidak akan pernah hangus (no expiry)." },
    { q: "Apakah ada environment Sandbox?", a: "Ya, kami menyediakan sandbox gratis unlimited untuk pengembangan dan testing." },
    { q: "Bagaimana jika request gagal?", a: "Kami tidak memotong saldo untuk request yang gagal karena kesalahan sistem (5xx) atau validation error yang bukan user error." },
];

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-surface text-text-primary selection:bg-primary/20">
            <Navbar />

            <section className="relative pt-32 pb-20 px-6">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-3xl" />
                <div className="relative max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                            Harga <span className="gradient-text">Transparan</span>
                        </h1>
                        <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-10">
                            Tanpa biaya tersembunyi. Tanpa komitmen kontrak.
                            Mulai kecil, tumbuh sesuai kebutuhan bisnis Anda.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="relative pb-32 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Pricing Table */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-3xl glass border border-black/5 overflow-hidden shadow-xl shadow-black/5 mb-20"
                    >
                        <div className="bg-gradient-to-r from-primary to-primary-dark p-8 text-white text-center">
                            <h2 className="text-2xl font-bold mb-2">Self-Service Pricing</h2>
                            <p className="opacity-90">Harga per request (IDR)</p>
                        </div>
                        <div className="p-8 md:p-12 bg-white">
                            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
                                {pricingItems.map((item, i) => (
                                    <div key={item.name} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                                        <span className="font-medium text-gray-700">{item.name}</span>
                                        <span className="font-bold text-gray-900">
                                            {item.price === 'Gratis' ? <span className="text-primary">Gratis</span> : `Rp ${item.price}`}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-6 bg-surface-light rounded-xl border border-black/5">
                                <h3 className="font-bold mb-4 flex items-center gap-2">
                                    <Check size={20} className="text-primary" /> Apa yang Anda dapatkan?
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-4 text-sm text-text-secondary">
                                    {[
                                        "99.9% Uptime SLA",
                                        "Dashboard Analytics Real-time",
                                        "Unlimited Sandbox",
                                        "Dokumentasi Lengkap",
                                        "Email Support",
                                        "Team Management"
                                    ].map(feat => (
                                        <div key={feat} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary/40" /> {feat}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-10 text-center">
                                <a href="https://dashboard.vison.id/register" className="inline-block px-10 py-4 rounded-xl bg-primary text-white font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 hover:-translate-y-0.5">
                                    Buat Akun Gratis
                                </a>
                                <p className="mt-4 text-xs text-text-muted">
                                    Butuh volume besar (&gt;100k request)? <a href="mailto:sales@vison.id" className="text-primary hover:underline">Hubungi Sales</a> untuk harga enterprise.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* FAQ */}
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-2xl font-bold mb-8 text-center">Sering Ditanyakan</h2>
                        <div className="space-y-6">
                            {faqs.map((faq, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-6 rounded-2xl glass border border-black/5"
                                >
                                    <h3 className="font-bold text-lg mb-2 flex gap-3">
                                        <HelpCircle size={24} className="text-accent shrink-0" />
                                        {faq.q}
                                    </h3>
                                    <p className="text-text-secondary pl-9 leading-relaxed">
                                        {faq.a}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
