"use client";
import { motion } from "framer-motion";
import {
    FileText, Users, ScanFace, ShieldCheck, Database,
    CheckCircle, Eye, Search, MapPin,
} from "lucide-react";

const products = [
    { icon: FileText, title: "OCR Identity", desc: "Ekstraksi data otomatis dari KTP, NPWP, SIM, dan dokumen identitas lainnya dengan akurasi tinggi.", price: "Rp 1.500" },
    { icon: ScanFace, title: "Face Compare", desc: "Bandingkan wajah selfie dengan foto dokumen identitas menggunakan AI.", price: "Rp 1.000" },
    { icon: Database, title: "Data NIK", desc: "Ambil data kependudukan langsung dari database Dukcapil.", price: "Rp 2.000" },
    { icon: CheckCircle, title: "Validasi NIK", desc: "Validasi kecocokan NIK, nama, dan tanggal lahir ke Dukcapil.", price: "Rp 2.000" },
    { icon: Eye, title: "Liveness Detection", desc: "Deteksi wajah hidup anti-spoofing dengan custom SDK.", price: "Rp 2.500" },
    { icon: ShieldCheck, title: "Document Authenticity", desc: "Verifikasi keaslian dokumen identitas dari pemalsuan.", price: "Rp 1.500" },
    { icon: Search, title: "Watchlist Screening", desc: "Screening nama terhadap daftar PPATK/DTTOT untuk AML compliance.", price: "Rp 1.000" },
    { icon: MapPin, title: "Territory / Wilayah", desc: "Data wilayah administratif Indonesia lengkap berdasarkan Kepmendagri 2025.", price: "Gratis" },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } },
};
const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Products() {
    return (
        <section id="produk" className="relative py-24 bg-radial-cyan">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-xs font-semibold tracking-widest uppercase text-accent-dark">
                        Produk & Layanan
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
                        Semua yang Anda Butuhkan untuk{" "}
                        <span className="gradient-text">Verifikasi Identitas</span>
                    </h2>
                    <p className="text-text-secondary max-w-2xl mx-auto">
                        10+ layanan API siap pakai untuk kebutuhan e-KYC dan compliance
                        bisnis Anda.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
                >
                    {products.map((p) => (
                        <motion.div
                            key={p.title}
                            variants={cardVariants}
                            className="group relative rounded-2xl glass p-6 hover:bg-black/[0.02] transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                        >
                            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/10 to-accent/20 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-primary/10 transition-shadow">
                                <p.icon size={22} className="text-primary" />
                            </div>
                            <h3 className="font-semibold text-text-primary mb-2">{p.title}</h3>
                            <p className="text-sm text-text-secondary leading-relaxed mb-4">
                                {p.desc}
                            </p>
                            <div className="text-xs font-medium text-accent-dark">
                                {p.price}
                                <span className="text-text-muted"> / request</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
