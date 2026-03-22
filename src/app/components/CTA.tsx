"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,196,105,0.22),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.18),transparent_24%),linear-gradient(135deg,#020617_0%,#0f172a_100%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:88px_88px]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1.5 text-xs text-emerald-200">
            <Sparkles size={14} /> Mulai Gratis Sekarang
          </div>
          <h2 className="text-3xl font-extrabold sm:text-5xl">
            Siap bikin onboarding identitas yang lebih cepat dan lebih rapi?
          </h2>
          <p className="mx-auto mb-10 mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Mulai dari sandbox, uji flow e-KYC, lalu scale ke production tanpa
            perlu pitch deck, sales call, atau setup yang berlarut.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://dashboard.vison.id/register"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-light px-8 py-4 text-lg font-semibold text-white shadow-[0_20px_45px_rgba(16,196,105,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_54px_rgba(16,196,105,0.28)]"
            >
              Buat Akun Gratis
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="https://docs.vison.id"
              className="inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/[0.05] px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08]"
            >
              Baca Dokumentasi
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
