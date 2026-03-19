"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Award, Lock, CheckCircle2 } from "lucide-react";

const certs = [
    {
        icon: ShieldCheck,
        label: "ISO 27001",
        sub: "Information Security",
        color: "text-blue-600",
        bg: "bg-blue-50",
    },
    {
        icon: Award,
        label: "OJK Compliant",
        sub: "Otoritas Jasa Keuangan",
        color: "text-green-600",
        bg: "bg-green-50",
    },
    {
        icon: Lock,
        label: "KOMINFO",
        sub: "Terdaftar & Tersertifikasi",
        color: "text-primary-dark",
        bg: "bg-emerald-50",
    },
    {
        icon: CheckCircle2,
        label: "PDPA Ready",
        sub: "Data Protection Compliant",
        color: "text-violet-600",
        bg: "bg-violet-50",
    },
    {
        icon: ShieldCheck,
        label: "SOC 2 Type II",
        sub: "Security & Availability",
        color: "text-orange-600",
        bg: "bg-orange-50",
    },
];

export default function Certifications() {
    return (
        <section className="py-14 border-y border-black/5 bg-white/60">
            <div className="max-w-7xl mx-auto px-6">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-xs font-semibold tracking-widest uppercase text-text-muted mb-8"
                >
                    Sertifikasi & Kepatuhan
                </motion.p>

                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                    {certs.map((c, i) => {
                        const Icon = c.icon;
                        return (
                            <motion.div
                                key={c.label}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.4 }}
                                className="flex items-center gap-3 px-5 py-3 rounded-2xl glass hover:shadow-md transition-all duration-200 cursor-default"
                            >
                                <div className={`w-9 h-9 rounded-xl ${c.bg} flex items-center justify-center shrink-0`}>
                                    <Icon size={18} className={c.color} />
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-text-primary leading-tight">{c.label}</div>
                                    <div className="text-xs text-text-muted leading-tight">{c.sub}</div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
