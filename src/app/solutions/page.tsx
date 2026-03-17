"use client";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { UserPlus, ShieldAlert, CreditCard, Building2, Smartphone, ArrowRight } from "lucide-react";

const solutions = [
    {
        id: "onboarding",
        icon: UserPlus,
        title: "Digital Onboarding",
        subtitle: "Customer Acquisition",
        desc: "Percepat proses pendaftaran pengguna baru dengan pengalaman yang mulus dan aman. Hapus form manual yang panjang.",
        features: ["OCR KTP Otomatis", "Liveness Detection", "Validasi Dukcapil"],
        benefits: ["Konversi naik 40%", "Waktu onboarding < 30 detik"]
    },
    {
        id: "fraud",
        icon: ShieldAlert,
        title: "Fraud Prevention",
        subtitle: "Risk Management",
        desc: "Deteksi dan cegah upaya penipuan identitas seperti deepfake, foto editan, dan identitas palsu sebelum merugikan bisnis.",
        features: ["Passive Liveness", "Document Authenticity", "Face Search"],
        benefits: ["0% Identity Fraud", "Real-time Prevention"]
    },
    {
        id: "kyc",
        icon: CreditCard,
        title: "e-KYC & AML",
        subtitle: "Regulatory Compliance",
        desc: "Penuhi standar kepatuhan regulasi OJK dan BI untuk sektor finansial. Screening terhadap daftar hitam pencucian uang.",
        features: ["Watchlist Screening", "PEP Check", "Audit Log Lengkap"],
        benefits: ["OJK Compliant", "Audit Trail Ready"]
    },
    {
        id: "rekyc",
        icon: Smartphone,
        title: "Re-Verification",
        subtitle: "Account Security",
        desc: "Verifikasi ulang identitas pengguna saat melakukan transaksi berisiko tinggi atau pemulihan akun.",
        features: ["Face Compare 1:1", "Active Liveness", "OTP Alternative"],
        benefits: ["Secure Transactions", "Account Recovery"]
    },
];

export default function SolutionsPage() {
    return (
        <main className="min-h-screen bg-surface text-text-primary selection:bg-primary/20">
            <Navbar />

            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-primary/5 to-transparent blur-3xl" />
                <div className="relative max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                            Solusi <span className="gradient-text">End-to-End</span>
                        </h1>
                        <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-10">
                            Kami merancang alur verifikasi yang spesifik untuk tantangan bisnis Anda.
                            Dari onboarding hingga pencegahan fraud.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="relative pb-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid gap-12">
                        {solutions.map((sol, idx) => (
                            <motion.div
                                key={sol.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className={`flex flex-col lg:flex-row gap-10 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                            >
                                <div className="flex-1">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary-dark text-xs font-bold mb-4 uppercase tracking-wider">
                                        {sol.subtitle}
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{sol.title}</h2>
                                    <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                                        {sol.desc}
                                    </p>

                                    <div className="grid sm:grid-cols-2 gap-6 mb-8">
                                        <div className="bg-surface-light rounded-xl p-5 border border-black/5">
                                            <h4 className="font-bold mb-3 flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Fitur Utama
                                            </h4>
                                            <ul className="space-y-2">
                                                {sol.features.map(f => (
                                                    <li key={f} className="text-sm text-text-secondary flex items-start gap-2">
                                                        <span className="text-primary mt-0.5">•</span> {f}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="bg-surface-light rounded-xl p-5 border border-black/5">
                                            <h4 className="font-bold mb-3 flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-accent" /> Benefit
                                            </h4>
                                            <ul className="space-y-2">
                                                {sol.benefits.map(b => (
                                                    <li key={b} className="text-sm text-text-secondary flex items-start gap-2">
                                                        <span className="text-accent mt-0.5">•</span> {b}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <a href="#" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors group">
                                        Pelajari lebih lanjut <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>

                                <div className="flex-1 w-full">
                                    <div className="aspect-video rounded-2xl bg-gradient-to-br from-surface-light to-white border border-black/5 shadow-2xl shadow-primary/5 flex items-center justify-center relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-grid opacity-50" />
                                        <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-500">
                                            <sol.icon size={48} />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
