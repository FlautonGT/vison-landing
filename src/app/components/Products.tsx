"use client";
import { motion } from "framer-motion";
import {
    FileText, ScanFace, Eye, ShieldAlert, Search, UserCheck,
} from "lucide-react";

const products = [
    {
        icon: UserCheck,
        title: "e-KYC",
        desc: "Verifikasi identitas pelanggan end-to-end: OCR dokumen, liveness detection, dan face match dalam satu alur terintegrasi.",
        price: "Rp 3.500",
        tag: "Paling Populer",
    },
    {
        icon: Eye,
        title: "Liveness Detection",
        desc: "Pastikan pengguna adalah orang asli. Anti-spoofing detection mencegah serangan foto cetak, video replay, dan deepfake.",
        price: "Rp 2.500",
        tag: null,
    },
    {
        icon: ShieldAlert,
        title: "Deepfake Detection",
        desc: "Deteksi manipulasi wajah berbasis AI — swap face, synthetic face, dan serangan injection secara real-time.",
        price: "Rp 2.500",
        tag: null,
    },
    {
        icon: ScanFace,
        title: "Face Match (1:1)",
        desc: "Bandingkan dua wajah dengan akurasi biometrik hingga 99.9%. Cocok untuk verifikasi selfie vs foto KTP.",
        price: "Rp 1.000",
        tag: null,
    },
    {
        icon: FileText,
        title: "OCR",
        desc: "Ekstrak data dari KTP, NPWP, SIM, dan paspor secara otomatis. Hasilkan data terstruktur dalam hitungan detik.",
        price: "Rp 1.500",
        tag: null,
    },
    {
        icon: Search,
        title: "Watchlist Screening",
        desc: "Screening nama terhadap daftar PPATK, DTTOT, dan database global untuk kepatuhan AML/CFT.",
        price: "Rp 1.000",
        tag: null,
    },
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
                        6 layanan API terintegrasi untuk kebutuhan e-KYC, biometrik, dan compliance bisnis Anda.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                    {products.map((p) => (
                        <motion.div
                            key={p.title}
                            variants={cardVariants}
                            className="group relative rounded-2xl glass p-6 hover:bg-black/[0.02] transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                        >
                            {p.tag && (
                                <span className="absolute top-4 right-4 text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary text-white">
                                    {p.tag}
                                </span>
                            )}
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
