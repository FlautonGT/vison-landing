"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const trustPoints = [
  {
    title: "Self-service onboarding",
    description: "Daftar, uji di sandbox, lalu lanjut ke production tanpa proses yang bertele-tele.",
  },
  {
    title: "Pay-as-you-go",
    description: "Mulai dari kebutuhan kecil, bayar sesuai pemakaian, dan naikkan volume saat siap.",
  },
  {
    title: "No photo retention",
    description: "Foto dan dokumen customer tidak disimpan, hanya hasil verifikasi yang dibutuhkan.",
  },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-black/5 bg-white/70 py-8 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid gap-4 lg:grid-cols-3"
        >
          {trustPoints.map((point) => (
            <div
              key={point.title}
              className="rounded-3xl border border-slate-200/80 bg-white/80 px-5 py-5 shadow-[0_18px_40px_rgba(15,23,42,0.05)]"
            >
              <div className="flex items-center gap-2 text-sm font-semibold text-text-primary">
                <CheckCircle2 size={18} className="text-primary" />
                {point.title}
              </div>
              <p className="mt-2 text-sm leading-6 text-text-secondary">
                {point.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
