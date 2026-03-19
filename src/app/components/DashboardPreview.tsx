"use client";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Clock, TrendingUp, Users, Zap } from "lucide-react";

const recentVerifications = [
    { id: "VRF-8821", type: "KTP + Liveness", status: "success", time: "0.8s", name: "A***o S." },
    { id: "VRF-8820", type: "Face Compare", status: "success", time: "1.2s", name: "B***i R." },
    { id: "VRF-8819", type: "OCR Dokumen", status: "failed",  time: "0.6s", name: "C***a W." },
    { id: "VRF-8818", type: "KTP + Liveness", status: "success", time: "0.9s", name: "D***d P." },
    { id: "VRF-8817", type: "Watchlist",      status: "pending", time: "—",   name: "E***i T." },
];

const barHeights = [40, 65, 50, 80, 60, 90, 75, 95, 70, 85, 55, 100];

export default function DashboardPreview() {
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
                        Dashboard
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
                        Pantau Semua Verifikasi{" "}
                        <span className="gradient-text">dalam Satu Layar</span>
                    </h2>
                    <p className="text-text-secondary max-w-2xl mx-auto">
                        Dashboard real-time yang memberikan visibilitas penuh atas setiap transaksi verifikasi, laporan analitik, dan pengaturan API.
                    </p>
                </motion.div>

                {/* Mock Dashboard */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    {/* Glow */}
                    <div className="absolute -inset-4 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent rounded-3xl blur-2xl" />

                    {/* Browser chrome */}
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-black/10 bg-white">
                        {/* Title bar */}
                        <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 border-b border-gray-200">
                            <span className="w-3 h-3 rounded-full bg-red-400" />
                            <span className="w-3 h-3 rounded-full bg-yellow-400" />
                            <span className="w-3 h-3 rounded-full bg-green-400" />
                            <div className="ml-3 flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-400 font-mono max-w-xs">
                                dashboard.vison.id
                            </div>
                        </div>

                        {/* Dashboard layout */}
                        <div className="flex bg-gray-50 min-h-[500px]">
                            {/* Sidebar */}
                            <aside className="w-48 bg-white border-r border-gray-100 p-4 hidden sm:flex flex-col gap-1 shrink-0">
                                <div className="flex items-center gap-2 mb-6 px-2">
                                    <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
                                        <Zap size={14} className="text-white" />
                                    </div>
                                    <span className="font-bold text-sm text-text-primary">Vison</span>
                                </div>
                                {["Overview", "Verifikasi", "API Keys", "Laporan", "Pengaturan"].map((item, i) => (
                                    <div key={item} className={`px-3 py-2 rounded-lg text-xs font-medium cursor-pointer transition-colors ${i === 0 ? "bg-primary/10 text-primary" : "text-text-muted hover:bg-gray-50"}`}>
                                        {item}
                                    </div>
                                ))}
                            </aside>

                            {/* Main content */}
                            <div className="flex-1 p-5 overflow-hidden">
                                {/* Top stats */}
                                <div className="grid grid-cols-3 gap-3 mb-4">
                                    {[
                                        { icon: Users, label: "Total Hari Ini", value: "1,284", change: "+12%", positive: true },
                                        { icon: CheckCircle2, label: "Berhasil", value: "1,261", change: "98.2%", positive: true },
                                        { icon: TrendingUp, label: "Avg. Waktu", value: "0.94s", change: "-0.1s", positive: true },
                                    ].map(({ icon: Icon, label, value, change, positive }) => (
                                        <div key={label} className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-xs text-text-muted">{label}</span>
                                                <Icon size={14} className="text-primary" />
                                            </div>
                                            <div className="text-lg font-bold text-text-primary">{value}</div>
                                            <div className={`text-xs font-medium mt-0.5 ${positive ? "text-green-600" : "text-red-500"}`}>{change}</div>
                                        </div>
                                    ))}
                                </div>

                                <div className="grid grid-cols-5 gap-3">
                                    {/* Bar chart */}
                                    <div className="col-span-3 bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                                        <div className="text-xs font-semibold text-text-primary mb-3">Verifikasi per Jam</div>
                                        <div className="flex items-end gap-1.5 h-24">
                                            {barHeights.map((h, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ scaleY: 0 }}
                                                    whileInView={{ scaleY: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: i * 0.04, duration: 0.4, ease: "easeOut" }}
                                                    style={{ height: `${h}%` }}
                                                    className="flex-1 rounded-t-sm origin-bottom"
                                                    // Highlight last bar as current
                                                >
                                                    <div
                                                        className={`w-full h-full rounded-t-sm ${i === barHeights.length - 1 ? "bg-primary" : "bg-primary/20"}`}
                                                    />
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Donut-style breakdown */}
                                    <div className="col-span-2 bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex flex-col justify-between">
                                        <div className="text-xs font-semibold text-text-primary mb-3">Distribusi Layanan</div>
                                        <div className="space-y-2">
                                            {[
                                                { label: "KTP + Liveness", pct: 48, color: "bg-primary" },
                                                { label: "Face Compare", pct: 31, color: "bg-blue-400" },
                                                { label: "OCR Dokumen", pct: 14, color: "bg-violet-400" },
                                                { label: "Watchlist", pct: 7, color: "bg-orange-400" },
                                            ].map(({ label, pct, color }) => (
                                                <div key={label}>
                                                    <div className="flex justify-between text-xs mb-0.5">
                                                        <span className="text-text-muted">{label}</span>
                                                        <span className="font-medium text-text-primary">{pct}%</span>
                                                    </div>
                                                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            whileInView={{ width: `${pct}%` }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 0.6, ease: "easeOut" }}
                                                            className={`h-full rounded-full ${color}`}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Recent table */}
                                <div className="mt-3 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                                    <div className="px-4 py-3 border-b border-gray-50">
                                        <span className="text-xs font-semibold text-text-primary">Verifikasi Terbaru</span>
                                    </div>
                                    <div className="divide-y divide-gray-50">
                                        {recentVerifications.map((v) => (
                                            <div key={v.id} className="flex items-center justify-between px-4 py-2.5 text-xs">
                                                <span className="font-mono text-text-muted w-20">{v.id}</span>
                                                <span className="text-text-secondary flex-1">{v.name}</span>
                                                <span className="text-text-muted flex-1 hidden sm:block">{v.type}</span>
                                                <span className="text-text-muted w-12 text-right hidden sm:block">{v.time}</span>
                                                <span className={`ml-3 flex items-center gap-1 font-medium ${v.status === "success" ? "text-green-600" : v.status === "failed" ? "text-red-500" : "text-yellow-600"}`}>
                                                    {v.status === "success" && <CheckCircle2 size={11} />}
                                                    {v.status === "failed" && <XCircle size={11} />}
                                                    {v.status === "pending" && <Clock size={11} />}
                                                    {v.status}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
