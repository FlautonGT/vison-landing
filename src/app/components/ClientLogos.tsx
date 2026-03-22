"use client";

import { motion } from "framer-motion";
import {
  clientFallbackCopy,
  clientLogos,
  marketingVisibility,
} from "../lib/marketing-content";

const doubledLogos = [...clientLogos, ...clientLogos];

export default function ClientLogos() {
  const shouldShowLogos =
    marketingVisibility.showClientLogos && clientLogos.length > 0;

  if (!shouldShowLogos) {
    return (
      <section className="border-y border-black/5 bg-surface-light py-14">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium uppercase tracking-[0.24em] text-text-muted"
          >
            {clientFallbackCopy.eyebrow}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="mt-4 text-2xl font-semibold text-text-primary sm:text-3xl"
          >
            Digunakan untuk onboarding, fraud prevention, dan compliance.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="mx-auto mt-4 max-w-3xl text-base leading-7 text-text-secondary"
          >
            {clientFallbackCopy.body}
          </motion.p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden border-y border-black/5 bg-surface-light py-14">
      <div className="mx-auto mb-8 max-w-7xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium uppercase tracking-widest text-text-muted"
        >
          Trusted by Indonesian businesses
        </motion.p>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-24 bg-gradient-to-r from-surface-light to-transparent" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-24 bg-gradient-to-l from-surface-light to-transparent" />

        <div className="flex overflow-hidden">
          <div className="flex animate-marquee items-center gap-8">
            {doubledLogos.map((logo, index) => (
              <div
                key={`${logo.abbr}-${index}`}
                className="flex min-w-[130px] flex-shrink-0 cursor-default items-center justify-center rounded-xl border border-slate-200 bg-white/70 px-6 py-3 shadow-sm transition-all duration-300"
              >
                <span className="whitespace-nowrap text-sm font-bold tracking-wide text-text-muted">
                  {logo.abbr}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
