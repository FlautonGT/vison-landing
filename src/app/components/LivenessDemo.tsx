"use client";
import { motion } from "framer-motion";

const phones = [
    {
        label: "Biometric Detection",
        status: "Scanning...",
        statusColor: "text-blue-400",
        barColor: "bg-blue-400",
        barPct: 60,
        faceColor: "from-blue-400/30 to-blue-600/10",
        borderColor: "border-blue-400",
        scanLines: true,
        badge: null,
    },
    {
        label: "Liveness Detection",
        status: "Real Face ✓",
        statusColor: "text-green-400",
        barColor: "bg-green-400",
        barPct: 100,
        faceColor: "from-green-400/20 to-emerald-600/10",
        borderColor: "border-green-400",
        scanLines: false,
        badge: { text: "Real Face ✓", color: "bg-green-500" },
    },
    {
        label: "Deepfake Detection",
        status: "Hacking Detected ✕",
        statusColor: "text-red-400",
        barColor: "bg-red-400",
        barPct: 85,
        faceColor: "from-red-500/30 to-red-800/10",
        borderColor: "border-red-500",
        scanLines: false,
        badge: { text: "Hacking Detected", color: "bg-red-500" },
    },
    {
        label: "Attribute Detection",
        status: "Remove Mask ⚠",
        statusColor: "text-orange-400",
        barColor: "bg-orange-400",
        barPct: 50,
        faceColor: "from-orange-400/20 to-orange-600/10",
        borderColor: "border-orange-400",
        scanLines: false,
        badge: { text: "Remove Mask/Hat", color: "bg-orange-500" },
    },
    {
        label: "Image Quality",
        status: "Image Too Blurry ✕",
        statusColor: "text-red-300",
        barColor: "bg-red-300",
        barPct: 30,
        faceColor: "from-gray-500/20 to-gray-700/10",
        borderColor: "border-red-300",
        scanLines: false,
        badge: { text: "Image Too Blurry", color: "bg-red-400" },
    },
];

function PhoneMockup({ phone, index }: { phone: typeof phones[0]; index: number }) {
    const isCenter = index === 1;
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`relative flex-shrink-0 ${isCenter ? "scale-105 z-10" : "opacity-90"}`}
            style={{ width: 140 }}
        >
            {/* Phone shell */}
            <div className={`relative rounded-[24px] border-2 ${phone.borderColor} bg-gray-950 overflow-hidden shadow-2xl`}
                style={{ height: 280 }}>
                {/* Notch */}
                <div className="w-16 h-5 bg-gray-900 rounded-b-xl mx-auto mt-0" />

                {/* Screen */}
                <div className="px-3 pb-3 flex flex-col h-full">
                    {/* Time */}
                    <div className="text-gray-500 text-[9px] text-right py-0.5">13:53</div>

                    {/* Face area */}
                    <div className={`relative flex-1 rounded-xl bg-gradient-to-b ${phone.faceColor} flex flex-col items-center justify-center overflow-hidden border border-white/5`}>
                        {/* Scan lines */}
                        {phone.scanLines && (
                            <motion.div
                                animate={{ y: ["-100%", "200%"] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                                className="absolute inset-x-0 h-6 bg-gradient-to-b from-transparent via-blue-400/30 to-transparent"
                            />
                        )}

                        {/* Face SVG silhouette */}
                        <svg width="56" height="68" viewBox="0 0 56 68" fill="none" className="relative z-10">
                            {/* Head shape */}
                            <ellipse cx="28" cy="28" rx="22" ry="26" fill="none" stroke="currentColor" strokeWidth="1.5"
                                className={phone.statusColor} strokeDasharray={phone.scanLines ? "4 2" : "0"} />
                            {/* Corner brackets */}
                            <path d="M8 8 L8 16 M8 8 L16 8" stroke="currentColor" strokeWidth="1.5" className={phone.statusColor} />
                            <path d="M48 8 L48 16 M48 8 L40 8" stroke="currentColor" strokeWidth="1.5" className={phone.statusColor} />
                            <path d="M8 50 L8 42 M8 50 L16 50" stroke="currentColor" strokeWidth="1.5" className={phone.statusColor} />
                            <path d="M48 50 L48 42 M48 50 L40 50" stroke="currentColor" strokeWidth="1.5" className={phone.statusColor} />
                            {/* Eyes */}
                            <circle cx="21" cy="26" r="3" fill="none" stroke="currentColor" strokeWidth="1" className={phone.statusColor} opacity="0.7" />
                            <circle cx="35" cy="26" r="3" fill="none" stroke="currentColor" strokeWidth="1" className={phone.statusColor} opacity="0.7" />
                            {/* Nose */}
                            <path d="M28 30 L26 36 L30 36" fill="none" stroke="currentColor" strokeWidth="1" className={phone.statusColor} opacity="0.5" />
                            {/* Mouth */}
                            <path d="M22 41 Q28 45 34 41" fill="none" stroke="currentColor" strokeWidth="1" className={phone.statusColor} opacity="0.7" />

                            {/* Mask overlay for attribute detection */}
                            {index === 3 && (
                                <ellipse cx="28" cy="38" rx="12" ry="8" fill="none" stroke="#fb923c" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.8" />
                            )}

                            {/* Blur dots for image quality */}
                            {index === 4 && Array.from({ length: 12 }).map((_, j) => (
                                <circle key={j} cx={10 + j * 4} cy={20 + (j % 3) * 12} r="2" fill="#9ca3af" opacity="0.3" />
                            ))}
                        </svg>

                        {/* Warning triangle for hacking */}
                        {index === 2 && (
                            <div className="absolute top-2 right-2">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" fill="#ef4444" />
                                    <line x1="12" y1="9" x2="12" y2="13" stroke="white" strokeWidth="2" />
                                    <line x1="12" y1="17" x2="12.01" y2="17" stroke="white" strokeWidth="2" />
                                </svg>
                            </div>
                        )}
                    </div>

                    {/* Progress bar */}
                    <div className="mt-2 h-1 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${phone.barPct}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                            className={`h-full rounded-full ${phone.barColor}`}
                        />
                    </div>

                    {/* Badge */}
                    {phone.badge && (
                        <div className={`mt-1.5 text-center text-[9px] font-bold text-white py-1 px-2 rounded-lg ${phone.badge.color}`}>
                            {phone.badge.text}
                        </div>
                    )}
                    {!phone.badge && (
                        <div className={`mt-1.5 text-center text-[9px] font-medium ${phone.statusColor}`}>
                            {phone.status}
                        </div>
                    )}
                </div>
            </div>

            {/* Connector line */}
            <div className="flex flex-col items-center mt-3">
                <div className="w-px h-6 bg-white/20" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
            </div>

            {/* Label below */}
            <div className="text-center text-[10px] font-semibold text-white/70 mt-1 leading-tight">
                {phone.label}
            </div>
        </motion.div>
    );
}

export default function LivenessDemo() {
    return (
        <section className="relative py-24 overflow-hidden bg-gray-950">
            {/* Background grid */}
            <div className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                }} />

            {/* Radial glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.08)_0%,transparent_70%)]" />

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                        Deteksi Multi-Layer
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4 text-white">
                        Verifikasi dengan{" "}
                        <span className="text-primary">Teknologi AI</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Sistem deteksi berlapis yang menangani berbagai skenario ancaman secara real-time — dari deepfake hingga atribut wajah.
                    </p>
                </motion.div>

                {/* Phone mockups row */}
                <div className="flex items-end justify-center gap-3 sm:gap-5 overflow-x-auto pb-4 px-2">
                    {phones.map((phone, i) => (
                        <PhoneMockup key={phone.label} phone={phone} index={i} />
                    ))}
                </div>

                {/* Bottom badges */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap items-center justify-center gap-3 mt-12"
                >
                    {["NIST Certified", "ISO 30107-3", "PAD Level 2", "iBeta Certified"].map((b) => (
                        <div key={b} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-primary shrink-0">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2" />
                                <path d="m9 12 2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            <span className="text-xs font-semibold text-white/80">{b}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
