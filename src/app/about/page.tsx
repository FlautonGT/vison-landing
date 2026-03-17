"use client";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, MapPin, Linkedin, Instagram, Shield, Users, Globe } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-surface text-text-primary selection:bg-primary/20">
            <Navbar />

            <section className="relative pt-32 pb-20 px-6">
                <div className="relative max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-8">
                            Membangun Kepercayaan <br />
                            <span className="gradient-text">Ekonomi Digital</span>
                        </h1>
                        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                            Vison hadir untuk membantu bisnis memverifikasi identitas pengguna
                            secara cepat, akurat, dan aman melalui teknologi AI terkini.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission / Values */}
            <section className="py-20 px-6 bg-surface-light border-y border-black/5">
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
                    {[
                        { icon: Shield, title: "Keamanan Utama", desc: "Keamanan data dan privasi adalah prioritas tertinggi dalam setiap baris kode kami." },
                        { icon: Users, title: "Fokus Pengguna", desc: "Kami merancang solusi yang tidak hanya canggih, tapi juga mudah digunakan oleh developer dan end-user." },
                        { icon: Globe, title: "Skalabilitas", desc: "Infrastruktur kami siap menangani jutaan request per hari untuk mendukung pertumbuhan bisnis Anda." }
                    ].map((val, i) => (
                        <div key={val.title} className="text-center p-6">
                            <div className="w-16 h-16 rounded-2xl bg-white border border-black/5 shadow-sm flex items-center justify-center mx-auto mb-6 text-primary">
                                <val.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{val.title}</h3>
                            <p className="text-text-secondary leading-relaxed">{val.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact */}
            <section className="py-32 px-6">
                <div className="max-w-5xl mx-auto glass rounded-3xl p-8 md:p-16 border border-black/5 shadow-2xl shadow-black/5">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Hubungi Kami</h2>
                            <p className="text-text-secondary mb-8">
                                Punya pertanyaan tentang integrasi, harga, atau kemitraan?
                                Tim kami siap membantu Anda.
                            </p>

                            <div className="space-y-6">
                                <a href="mailto:hello@vison.id" className="flex items-center gap-4 text-text-primary hover:text-primary transition-colors group">
                                    <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                        <Mail size={24} className="text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-text-muted font-bold uppercase tracking-wider">Email</p>
                                        <p className="font-medium">hello@vison.id</p>
                                    </div>
                                </a>
                                <div className="flex items-center gap-4 text-text-primary">
                                    <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center">
                                        <MapPin size={24} className="text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-text-muted font-bold uppercase tracking-wider">Kantor</p>
                                        <p className="font-medium">Jakarta Selatan, DKI Jakarta</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 pt-10 border-t border-black/5">
                                <p className="text-sm text-text-muted mb-4">Ikuti kami:</p>
                                <div className="flex gap-4">
                                    <a href="#" className="p-2 rounded-lg hover:bg-black/5 transition-colors text-text-secondary hover:text-primary">
                                        <Linkedin size={24} />
                                    </a>
                                    <a href="#" className="p-2 rounded-lg hover:bg-black/5 transition-colors text-text-secondary hover:text-primary">
                                        <Instagram size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary to-accent opacity-10 absolute inset-0 transform rotate-6 scale-95" />
                            <div className="aspect-square rounded-2xl bg-white border border-black/5 relative shadow-xl flex items-center justify-center p-10 text-center">
                                <div>
                                    <span className="text-6xl mb-4 block">👋</span>
                                    <h3 className="text-xl font-bold mb-2">Mari Berdiskusi</h3>
                                    <p className="text-text-secondary text-sm">
                                        Jadwalkan demo atau konsultasi teknis gratis dengan tim kami.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
