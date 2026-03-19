"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

/* ── e-KYC Card ───────────────────────────────────────────── */
function EkycCard() {
    return (
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 lg:-mr-16 xl:-mr-24">
            <img
                src="/EKYC.jpg"
                alt="e-KYC"
                className="w-full h-auto object-contain"
            />
        </div>
    );
}

/* ── OCR Product Card ─────────────────────────────────────── */
function OcrCard() {
    return (
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 lg:-mr-16 xl:-mr-24">
            <img
                src="/ocr.png"
                alt="OCR Identity"
                className="w-full h-auto object-contain scale-110 origin-center"
            />
        </div>
    );
}

/* ── Deepfake Card ────────────────────────────────────────── */
function DeepfakeCard() {
    return (
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 lg:-mr-16 xl:-mr-24">
            <div className="grid grid-cols-2">
                {/* Real face */}
                <div className="relative">
                    <img
                        src="/deepfake1.jpg"
                        alt="Real Face"
                        className="w-full h-auto object-cover"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent px-3 py-2">
                        <span className="text-[11px] font-semibold text-green-400">✓ Real Face</span>
                    </div>
                </div>
                {/* Deepfake detected */}
                <div className="relative">
                    <img
                        src="/deepfake2.jpg"
                        alt="Deepfake Detected"
                        className="w-full h-auto object-cover"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent px-3 py-2">
                        <span className="text-[11px] font-semibold text-red-400">✗ Deepfake</span>
                    </div>
                </div>
            </div>
            {/* Status bar */}
            <div className="px-5 py-3 bg-gray-950 flex items-center justify-between">
                <span className="text-xs font-semibold text-white">Deepfake Detection</span>
                <div className="flex gap-3 text-[10px] text-white/50">
                    <span>Swap Face ✓</span>
                    <span>Synthetic ✓</span>
                    <span>Injection ✓</span>
                </div>
            </div>
        </div>
    );
}

/* ── Face Comparison Card ─────────────────────────────────── */
function FaceCompareCard() {
    return (
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 lg:-ml-16 xl:-ml-24">
            <img
                src="/facematch.jpg"
                alt="Face Match"
                className="w-full h-auto object-contain"
            />
        </div>
    );
}

/* ── Liveness Card ────────────────────────────────────────── */
function LivenessCard() {
    return (
        <div className="relative rounded-2xl overflow-hidden bg-gray-950 shadow-2xl border border-white/10">
            {/* Header bar */}
            <div className="absolute top-0 inset-x-0 z-10 px-5 py-3 flex items-center justify-between bg-gradient-to-b from-black/60 to-transparent">
                <span className="text-white text-xs font-bold tracking-wide uppercase">Liveness Detection</span>
                <span className="flex items-center gap-1.5 text-white/90 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Live
                </span>
            </div>

            {/* Real photo */}
            <div className="relative overflow-hidden">
                <img
                    src="/liveness.png"
                    alt="Liveness Detection"
                    className="w-full h-auto object-contain"
                />

                {/* Scan line */}
                <motion.div
                    animate={{ y: ["-10%", "110%"] }}
                    transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }}
                    className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-green-400/80 to-transparent pointer-events-none"
                />

                {/* Corner brackets */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-green-400 rounded-tl" />
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-green-400 rounded-tr" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-green-400 rounded-bl" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-green-400 rounded-br" />
            </div>

            {/* Status bar */}
            <div className="px-5 py-4 flex items-center justify-between bg-black/80">
                <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-green-400" />
                    <span className="text-xs font-semibold text-white">Liveness Verified</span>
                </div>
                <div className="flex gap-3 text-[10px] text-white/50">
                    <span>Anti-Spoof ✓</span>
                    <span>Deepfake ✓</span>
                    <span>Replay ✓</span>
                </div>
            </div>
        </div>
    );
}

/* ── Watchlist Card ───────────────────────────────────────── */
function WatchlistCard() {
    return (
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <img
                src="/watchlist.png"
                alt="Watchlist Screening"
                className="w-full h-auto object-contain"
            />
        </div>
    );
}

/* ── Main Component ───────────────────────────────────────── */
const features = [
    {
        tag: "01",
        title: "e-KYC",
        desc: "Verifikasi identitas pelanggan end-to-end dalam satu alur terintegrasi: scan dokumen, liveness detection, dan face match — semua lewat satu API sederhana.",
        card: EkycCard,
        reverse: false,
    },
    {
        tag: "02",
        title: "OCR",
        desc: "Ekstrak data dari KTP, NPWP, SIM, dan paspor secara otomatis menggunakan AI. Hasilkan data terstruktur — NIK, nama, alamat — dalam hitungan detik, siap diproses tanpa input manual.",
        card: OcrCard,
        reverse: true,
    },
    {
        tag: "03",
        title: "Face Match (1:1)",
        desc: "Bandingkan dua wajah dengan akurasi biometrik hingga 99.9%. Cocokkan selfie pengguna dengan foto KTP untuk memastikan identitas yang valid dan mencegah fraud.",
        card: FaceCompareCard,
        reverse: false,
    },
    {
        tag: "04",
        title: "Liveness Detection",
        desc: "Pastikan pengguna adalah orang asli yang hadir secara langsung. Anti-spoofing berlapis mencegah serangan foto cetak, video replay, deepfake, dan mask injection.",
        card: LivenessCard,
        reverse: true,
    },
    {
        tag: "05",
        title: "Deepfake Detection",
        desc: "Deteksi manipulasi wajah berbasis AI secara real-time — swap face, synthetic face, dan serangan injection sebelum menjadi ancaman bagi bisnis Anda.",
        card: DeepfakeCard,
        reverse: false,
    },
    {
        tag: "06",
        title: "Watchlist Screening",
        desc: "Screening nama terhadap daftar PPATK, DTTOT, UN Sanctions, dan database global lainnya secara real-time untuk kepatuhan AML/CFT bisnis Anda.",
        card: WatchlistCard,
        reverse: true,
    },
];

export default function FeaturesShowcase() {
    return (
        <section className="relative py-24">
            <div className="absolute inset-0 bg-radial-blue" />
            <div className="relative max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-xs font-semibold tracking-widest uppercase text-accent-dark">
                        Fitur Unggulan
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
                        Teknologi AI untuk{" "}
                        <span className="gradient-text">Verifikasi yang Akurat</span>
                    </h2>
                    <p className="text-text-secondary max-w-2xl mx-auto">
                        Lihat bagaimana Vison memproses dokumen dan biometrik untuk
                        menghasilkan verifikasi identitas yang cepat dan terpercaya.
                    </p>
                </motion.div>

                <div className="space-y-28">
                    {features.map((f) => (
                        <motion.div
                            key={f.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.6 }}
                            className={`grid lg:grid-cols-2 gap-12 items-center`}
                        >
                            {/* Text */}
                            <div className={f.reverse ? "lg:order-2" : ""}>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary-dark text-xs font-medium mb-4">
                                    {f.tag}
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-bold mb-4">{f.title}</h3>
                                <p className="text-text-secondary leading-relaxed text-lg">{f.desc}</p>
                            </div>

                            {/* Product card */}
                            <div className={f.reverse ? "lg:order-1" : ""}>
                                <f.card />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
