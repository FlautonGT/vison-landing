"use client";
import { motion } from "framer-motion";
import { OcrIllustration, FaceCompareIllustration, LivenessIllustration } from "./Illustrations";

const features = [
    {
        title: "OCR Dokumen Identitas",
        desc: "Ekstrak data dari KTP, NPWP, dan SIM secara otomatis menggunakan AI. Data terstruktur siap digunakan dalam hitungan detik — NIK, nama, alamat, dan seluruh field lainnya.",
        illustration: OcrIllustration,
        reverse: false,
    },
    {
        title: "Face Comparison",
        desc: "Bandingkan wajah selfie dengan foto di dokumen identitas. Teknologi AI mencocokkan biometrik wajah dengan akurasi hingga 99.9% untuk mencegah fraud identitas.",
        illustration: FaceCompareIllustration,
        reverse: true,
    },
    {
        title: "Liveness Detection",
        desc: "Pastikan pengguna adalah orang asli yang hadir secara langsung. Anti-spoofing detection mencegah serangan deepfake, foto cetak, dan video replay.",
        illustration: LivenessIllustration,
        reverse: false,
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

                <div className="space-y-24">
                    {features.map((f, i) => (
                        <motion.div
                            key={f.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className={`grid lg:grid-cols-2 gap-12 items-center ${f.reverse ? "lg:direction-rtl" : ""
                                }`}
                        >
                            {/* Text */}
                            <div className={f.reverse ? "lg:order-2" : ""}>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary-dark text-xs font-medium mb-4">
                                    0{i + 1}
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                                    {f.title}
                                </h3>
                                <p className="text-text-secondary leading-relaxed text-lg">
                                    {f.desc}
                                </p>
                            </div>
                            {/* Illustration */}
                            <div
                                className={`rounded-2xl glass p-6 sm:p-8 ${f.reverse ? "lg:order-1" : ""
                                    }`}
                            >
                                <f.illustration />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
