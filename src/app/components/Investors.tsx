"use client";
import { motion } from "framer-motion";

const investors = [
    { name: "Sequoia Capital", abbr: "SEQ", color: "from-orange-500 to-red-500" },
    { name: "East Ventures", abbr: "EV", color: "from-blue-500 to-blue-700" },
    { name: "Accel Partners", abbr: "ACC", color: "from-violet-500 to-violet-700" },
    { name: "Y Combinator", abbr: "YC", color: "from-orange-400 to-orange-600" },
    { name: "Alpha JWC", abbr: "AJW", color: "from-teal-500 to-teal-700" },
    { name: "MDI Ventures", abbr: "MDI", color: "from-green-500 to-green-700" },
];

const awards = [
    { label: "Startup of the Year", body: "Tech in Asia 2024" },
    { label: "Best Fintech API", body: "Indonesia Fintech Summit" },
    { label: "Top 10 AI Startup", body: "Forbes Indonesia 2024" },
];

export default function Investors() {
    return (
        <section className="py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-xs font-semibold tracking-widest uppercase text-primary-dark">
                        Didukung Oleh
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
                        Dipercaya Investor &{" "}
                        <span className="gradient-text">Diakui Industri</span>
                    </h2>
                    <p className="text-text-secondary max-w-xl mx-auto">
                        Vison didukung oleh investor kelas dunia dan telah menerima pengakuan dari berbagai lembaga industri terkemuka.
                    </p>
                </motion.div>

                {/* Investor logos grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
                    {investors.map((inv, i) => (
                        <motion.div
                            key={inv.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.07, duration: 0.4 }}
                            className="group glass rounded-2xl p-5 flex flex-col items-center gap-3 hover:shadow-lg transition-all duration-300 cursor-default"
                        >
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${inv.color} flex items-center justify-center shadow-sm`}>
                                <span className="text-white font-bold text-xs tracking-wide">{inv.abbr}</span>
                            </div>
                            <span className="text-xs font-medium text-text-secondary text-center leading-tight group-hover:text-text-primary transition-colors">
                                {inv.name}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4 mb-12">
                    <div className="flex-1 h-px bg-black/5" />
                    <span className="text-xs font-semibold tracking-widest uppercase text-text-muted px-2">Penghargaan</span>
                    <div className="flex-1 h-px bg-black/5" />
                </div>

                {/* Awards */}
                <div className="grid sm:grid-cols-3 gap-4">
                    {awards.map((award, i) => (
                        <motion.div
                            key={award.label}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.4 }}
                            className="flex items-center gap-4 glass rounded-2xl px-6 py-5"
                        >
                            {/* Trophy icon */}
                            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500">
                                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                                    <path d="M4 22h16" />
                                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                                </svg>
                            </div>
                            <div>
                                <div className="font-semibold text-sm text-text-primary">{award.label}</div>
                                <div className="text-xs text-text-muted mt-0.5">{award.body}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
