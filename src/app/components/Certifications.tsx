"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import {
  certifications,
  marketingVisibility,
} from "../lib/marketing-content";

export default function Certifications() {
  const shouldShowCertifications =
    marketingVisibility.showCertifications && certifications.length > 0;

  if (!shouldShowCertifications) {
    return null;
  }

  return (
    <section className="border-y border-black/5 bg-white/60 py-14">
      <div className="mx-auto max-w-7xl px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-text-muted"
        >
          Sertifikasi & Kepatuhan
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {certifications.map((certification, index) => (
            <motion.div
              key={certification.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 px-5 py-3 shadow-sm"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50">
                <ShieldCheck size={18} className="text-primary-dark" />
              </div>
              <div>
                <div className="text-sm font-semibold text-text-primary">
                  {certification.label}
                </div>
                <div className="text-xs text-text-muted">{certification.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
