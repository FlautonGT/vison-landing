"use client";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FileText, ScanFace, Database, CheckCircle, Eye, ShieldCheck, Search, MapPin, ArrowRight } from "lucide-react";

const productCategories = [
    {
        title: "OCR & Data Extraction",
        description: "Ekstraksi data otomatis dari dokumen identitas dengan akurasi tinggi.",
        items: [
            { icon: FileText, name: "OCR KTP", desc: "Ekstrak NIK, Nama, Alamat, dan data lainnya dari KTP.", price: "Rp 1.500" },
            { icon: FileText, name: "OCR NPWP", desc: "Digitalisasi data NPWP untuk verifikasi pajak.", price: "Rp 1.500" },
            { icon: FileText, name: "OCR SIM", desc: "Ekstraksi data Surat Izin Mengemudi Indonesia.", price: "Rp 1.500" },
            { icon: FileText, name: "OCR Passport", desc: "Mendukung paspor Indonesia dan internasional (MRZ).", price: "Rp 2.000" },
        ]
    },
    {
        title: "Biometrics & Liveness",
        description: "Verifikasi keaslian pengguna dengan teknologi pengenalan wajah.",
        items: [
            { icon: ScanFace, name: "Face Compare", desc: "Bandingkan wajah selfie dengan foto ID.", price: "Rp 1.000" },
            { icon: Eye, name: "Liveness Detection", desc: "Cegah spoofing dengan tes wajah hidup (Active/Passive).", price: "Rp 2.500" },
        ]
    },
    {
        title: "Identity Data Verification",
        description: "Validasi data langsung ke sumber terpercaya (Dukcapil / Government).",
        items: [
            { icon: Database, name: "Data NIK", desc: "Cek data kependudukan berdasarkan NIK.", price: "Rp 2.000" },
            { icon: CheckCircle, name: "Validasi NIK", desc: "Verifikasi kesesuaian Nama, NIK, dan Tgl Lahir.", price: "Rp 2.000" },
            { icon: Database, name: "Data NPWP", desc: "Validasi status wajib pajak.", price: "Rp 1.500" },
        ]
    },
    {
        title: "Fraud & Compliance",
        description: "Layanan tambahan untuk keamanan dan kepatuhan regulasi.",
        items: [
            { icon: ShieldCheck, name: "Document Authenticity", desc: "Deteksi rekayasa digital pada foto dokumen.", price: "Rp 1.500" },
            { icon: Search, name: "Watchlist Screening", desc: "Cek daftar teroris, PEP, dan pencucian uang.", price: "Rp 1.000" },
            { icon: MapPin, name: "Territory Data", desc: "Database wilayah administratif lengkap.", price: "Gratis" },
        ]
    }
];

export default function ProductsPage() {
    return (
        <main className="min-h-screen bg-surface text-text-primary selection:bg-primary/20">
            <Navbar />

            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-radial-blue opacity-50" />
                <div className="relative max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                            Produk & <span className="gradient-text">Layanan API</span>
                        </h1>
                        <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-10">
                            Katalog lengkap API verifikasi identitas Vison.
                            Pilih solusi yang sesuai dengan kebutuhan bisnis Anda.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="relative pb-32 px-6">
                <div className="max-w-7xl mx-auto space-y-20">
                    {productCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                        >
                            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold mb-2">{category.title}</h2>
                                    <p className="text-text-secondary">{category.description}</p>
                                </div>
                                <div className="h-px flex-1 bg-gradient-to-r from-black/5 to-transparent ml-6 hidden md:block" />
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {category.items.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group rounded-2xl glass p-6 hover:bg-black/[0.02] transition-all duration-300 hover:-translate-y-1 border border-black/5"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/20 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-primary/10 transition-shadow">
                                            <item.icon size={24} className="text-primary" />
                                        </div>
                                        <h3 className="font-bold text-lg mb-2">{item.name}</h3>
                                        <p className="text-sm text-text-secondary mb-4 min-h-[40px]">{item.desc}</p>
                                        <div className="flex items-center justify-between mt-auto">
                                            <span className="text-xs font-semibold text-accent-dark bg-accent/10 px-2 py-1 rounded-md">
                                                {item.price}
                                            </span>
                                            <a href="https://docs.vison.id" className="text-xs font-medium text-text-muted hover:text-primary flex items-center gap-1">
                                                Docs <ArrowRight size={12} />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="py-20 bg-surface-light border-t border-black/5">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-6">Siap untuk Memulai?</h2>
                    <p className="text-text-secondary mb-8">
                        Dapatkan API key sandbox gratis dan mulai integrasi dalam hitungan menit.
                    </p>
                    <div className="flex justify-center gap-4">
                        <a href="https://dashboard.vison.id/register" className="px-8 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary-dark transition-colors">
                            Coba Gratis
                        </a>
                        <a href="mailto:sales@vison.id" className="px-8 py-3 rounded-xl glass border border-black/10 hover:bg-black/5 transition-colors font-semibold">
                            Hubungi Sales
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
