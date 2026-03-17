"use client";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Building2, ShoppingBag, Heart, Wifi, Truck, LayoutDashboard, Coins, Key } from "lucide-react";

const industries = [
    {
        id: "fintech",
        icon: Coins,
        name: "Fintech & P2P Lending",
        desc: "Amankan penyaluran dana dan penuhi regulasi OJK dengan e-KYC yang ketat namun cepat.",
        recommended: ["OCR KTP", "Liveness Detection", "Validasi NIK", "Watchlist Screening"]
    },
    {
        id: "banking",
        icon: Building2,
        name: "Perbankan Digital",
        desc: "Pembukaan rekening 100% online tanpa tatap muka fisik (Video KYC / Biometric KYC).",
        recommended: ["OCR KTP & NPWP", "Facial Verification", "Dukcapil Check", "Anti-Money Laundering"]
    },
    {
        id: "ecommerce",
        icon: ShoppingBag,
        name: "E-Commerce & Retail",
        desc: "Verifikasi merchant dan pembeli untuk mencegah penipuan jual-beli dan transaksi kartu kredit.",
        recommended: ["OCR KTP", "Face Compare", "Phone Verification", "Address Check"]
    },
    {
        id: "insurance",
        icon: Heart,
        name: "Asuransi (Insurtech)",
        desc: "Percepat proses klaim dan onboarding nasabah baru dengan validasi dokumen otomatis.",
        recommended: ["OCR KTP", "Document Authenticity", "Hospital Data", "Biometrics"]
    },
    {
        id: "telecom",
        icon: Wifi,
        name: "Telekomunikasi",
        desc: "Registrasi kartu SIM prabayar dan pascabayar sesuai peraturan pemerintah.",
        recommended: ["OCR KTP & KK", "NIK Validation", "Biometric Check"]
    },
    {
        id: "logistics",
        icon: Truck,
        name: "Logistik & Transportasi",
        desc: "Verifikasi identitas pengemudi dan kurir untuk keamanan aset dan pelanggan.",
        recommended: ["OCR SIM", "OCR KTP", "Background Check", "Face Verification"]
    },
    {
        id: "gov",
        icon: LayoutDashboard,
        name: "Pemerintahan (GovTech)",
        desc: "Digitalisasi layanan publik dan penyaluran bantuan sosial tepat sasaran.",
        recommended: ["Dukcapil Validation", "Biometric Auth", "Family Card OCR"]
    },
    {
        id: "proptech",
        icon: Key,
        name: "Properti & Hospitality",
        desc: "Check-in hotel tanpa kontak dan verifikasi penyewa properti.",
        recommended: ["Passport OCR", "KTP OCR", "Face Recognition Access"]
    }
];

export default function IndustriesPage() {
    return (
        <main className="min-h-screen bg-surface text-text-primary selection:bg-primary/20">
            <Navbar />

            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="relative max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                            Sektor <span className="gradient-text">Industri</span>
                        </h1>
                        <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-10">
                            Dipercaya oleh perusahaan terkemuka dari berbagai sektor untuk mengamankan
                            transaksi dan mematuhi regulasi.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="relative pb-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {industries.map((ind, idx) => (
                            <motion.div
                                key={ind.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.05 }}
                                className="group rounded-2xl glass p-8 hover:bg-black/[0.02] transition-all duration-300 border border-black/5 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 cursor-default"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/20 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                                    <ind.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{ind.name}</h3>
                                <p className="text-text-secondary mb-6 leading-relaxed">
                                    {ind.desc}
                                </p>
                                <div>
                                    <h4 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-3">Produk Rekomendasi:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {ind.recommended.map(rec => (
                                            <span key={rec} className="text-xs px-2.5 py-1 rounded-md bg-surface-light border border-black/10 text-text-secondary">
                                                {rec}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-primary text-white text-center px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Tidak Menemukan Industri Anda?</h2>
                    <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                        Teknologi Vison fleksibel untuk berbagai kebutuhan.
                        Konsultasikan alur verifikasi unik bisnis Anda dengan tim ahli kami.
                    </p>
                    <a href="mailto:sales@vison.id" className="inline-block px-8 py-3 rounded-xl bg-white text-primary font-bold hover:bg-white/90 transition-colors shadow-lg shadow-black/10">
                        Hubungi Tim Ahli
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}
