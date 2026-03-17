"use client";
import { motion } from "framer-motion";
import {
    Gauge, CreditCard, Lock, Code2, Users, Shield, KeyRound, Server,
} from "lucide-react";

const advantages = [
    { icon: Gauge, title: "Self-Service", desc: "Daftar, KYC, dan langsung pakai API. Tanpa perlu kontak sales atau proses berbelit." },
    { icon: CreditCard, title: "Pay-as-you-go", desc: "Bayar per pemakaian. Minimum top-up hanya Rp 50.000. Saldo tidak pernah expired." },
    { icon: Lock, title: "No Data Retention", desc: "Foto dan dokumen customer tidak disimpan. Hanya hasil (JSON) yang tersimpan." },
    { icon: Code2, title: "Developer-Friendly", desc: "Sandbox & production key terpisah. Dokumentasi lengkap di docs.vison.id." },
    { icon: Users, title: "Team Management", desc: "Multi-user per organization dengan RBAC: Owner, Admin, Developer, Viewer." },
    { icon: Shield, title: "Enterprise Security", desc: "2FA (TOTP), IP whitelist per API key, webhook secret, dan audit log." },
    { icon: KeyRound, title: "Spending Control", desc: "Set spending limit per API key: daily, weekly, atau monthly budget control." },
    { icon: Server, title: "Batch API", desc: "Kirim batch request dengan webhook callback dan signature verification." },
];

export default function Advantages() {
    return (
        <section className="relative py-24">
            <div className="absolute inset-0 bg-radial-blue" />
            <div className="relative max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-xs font-semibold tracking-widest uppercase text-accent-dark">
                        Keunggulan
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
                        Mengapa Memilih{" "}
                        <span className="gradient-text">Vison?</span>
                    </h2>
                    <p className="text-text-secondary max-w-2xl mx-auto">
                        Dibangun untuk developer, dipercaya oleh enterprise.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {advantages.map((a, i) => (
                        <motion.div
                            key={a.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.06, duration: 0.5 }}
                            className="rounded-2xl glass p-6 hover:bg-black/[0.02] transition-all duration-300 hover:-translate-y-1"
                        >
                            <a.icon size={28} className="text-primary mb-4" />
                            <h3 className="font-semibold mb-2">{a.title}</h3>
                            <p className="text-sm text-text-secondary leading-relaxed">{a.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
