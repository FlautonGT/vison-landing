"use client";

import { motion } from "framer-motion";
import {
  Code2,
  CreditCard,
  Gauge,
  KeyRound,
  Lock,
  Server,
  Shield,
  Users,
} from "lucide-react";

const advantages = [
  {
    icon: Gauge,
    title: "Self-Service",
    desc: "Daftar, setup sandbox, dan lanjut ke production tanpa workflow sales yang lambat.",
  },
  {
    icon: CreditCard,
    title: "Pay-as-you-go",
    desc: "Bayar sesuai pemakaian agar eksperimen produk dan scale-up lebih fleksibel.",
  },
  {
    icon: Lock,
    title: "No Data Retention",
    desc: "Foto dan dokumen customer tidak disimpan. Fokus hanya pada hasil verifikasi yang dibutuhkan.",
  },
  {
    icon: Code2,
    title: "Developer-Friendly",
    desc: "Alur integrasi dibuat rapi untuk tim produk dan engineering, dari docs sampai environment key.",
  },
  {
    icon: Users,
    title: "Team Management",
    desc: "Multi-user per organization untuk kolaborasi owner, admin, developer, dan viewer.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    desc: "Kontrol akses, IP restriction, webhook secret, dan audit trail untuk operasional yang lebih aman.",
  },
  {
    icon: KeyRound,
    title: "Spending Control",
    desc: "Atur limit per API key untuk menjaga budget dan eksposur usage tetap terkendali.",
  },
  {
    icon: Server,
    title: "Batch API",
    desc: "Proses volume besar dengan webhook callback yang cocok untuk alur verifikasi skala enterprise.",
  },
];

export default function Advantages() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,196,105,0.16),transparent_24%),linear-gradient(180deg,#0f172a_0%,#020617_100%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-300">
            Keunggulan
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-5xl">
            Dibuat untuk tim yang ingin
            <span className="block text-emerald-300">go-live lebih cepat</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Bukan hanya akurat secara teknis, tapi juga ringan dipakai untuk
            tim produk, ops, risk, dan engineering.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.45 }}
              className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_40px_rgba(2,6,23,0.24)] transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.06]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
                <advantage.icon size={24} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{advantage.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{advantage.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
