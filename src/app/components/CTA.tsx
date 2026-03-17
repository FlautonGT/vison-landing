"use client";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
    return (
        <section className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary-dark/5 to-accent/5" />
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />

            <div className="relative max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs text-accent-dark mb-6">
                        <Sparkles size={14} /> Mulai Gratis Sekarang
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-extrabold mb-6">
                        Siap Mengamankan{" "}
                        <span className="gradient-text">Bisnis Anda?</span>
                    </h2>
                    <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
                        Bergabung dengan Vison dan mulai verifikasi identitas pelanggan Anda
                        dalam hitungan menit. Tidak perlu kontak sales — daftar, top-up, dan
                        langsung pakai.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="https://dashboard.vison.id/register"
                            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-primary-light text-white font-semibold text-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5"
                        >
                            Buat Akun Gratis
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="https://docs.vison.id"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass text-text-primary font-semibold text-lg hover:bg-black/5 transition-all duration-300"
                        >
                            Baca Dokumentasi
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
