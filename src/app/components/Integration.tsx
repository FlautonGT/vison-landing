"use client";
import { motion } from "framer-motion";
import { Terminal, BookOpen, Puzzle } from "lucide-react";

const codeSnippet = `// Contoh: OCR KTP
const response = await fetch(
  "https://api.vison.id/v1/ocr/ktp",
  {
    method: "POST",
    headers: {
      "Authorization": "Bearer vs_prod_xxxxx",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      image: base64Image
    })
  }
);

const result = await response.json();
// { success: true, data: { nik, name, ... } }`;

export default function Integration() {
    return (
        <section id="integrasi" className="relative py-24">
            <div className="absolute inset-0 bg-radial-blue" />
            <div className="relative max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-xs font-semibold tracking-widest uppercase text-accent-dark">
                        Integrasi
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
                        Integrasi{" "}
                        <span className="gradient-text">Semudah Copy-Paste</span>
                    </h2>
                    <p className="text-text-secondary max-w-2xl mx-auto">
                        REST API sederhana yang bisa diintegrasikan ke bahasa pemrograman apapun.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-10 items-start">
                    {/* Code example */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="rounded-2xl glass overflow-hidden"
                    >
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-black/5">
                            <div className="w-3 h-3 rounded-full bg-red-500/60" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                            <div className="w-3 h-3 rounded-full bg-green-500/60" />
                            <span className="ml-2 text-xs text-text-muted">api-example.js</span>
                        </div>
                        <pre className="p-6 text-sm text-text-secondary overflow-x-auto leading-relaxed">
                            <code>{codeSnippet}</code>
                        </pre>
                    </motion.div>

                    {/* Integration features */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {[
                            {
                                icon: Terminal,
                                title: "REST API",
                                desc: "API standar HTTP/JSON yang bisa diakses dari bahasa pemrograman apapun — JavaScript, Python, Go, PHP, Java, dan lainnya.",
                            },
                            {
                                icon: BookOpen,
                                title: "Dokumentasi Lengkap",
                                desc: "Dokumentasi interaktif di docs.vison.id dengan fitur \"Try it\" untuk testing langsung dari browser.",
                            },
                            {
                                icon: Puzzle,
                                title: "SDK & Liveness",
                                desc: "Custom Liveness SDK untuk web dan Android. Integrasi biometrik tanpa library pihak ketiga.",
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="rounded-xl glass p-6 hover:bg-black/[0.02] transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-primary/10 to-accent/20 flex items-center justify-center">
                                        <item.icon size={22} className="text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">{item.title}</h3>
                                        <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
