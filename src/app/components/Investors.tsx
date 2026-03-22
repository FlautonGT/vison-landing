"use client";

import { motion } from "framer-motion";
import { investors, marketingVisibility } from "../lib/marketing-content";

export default function Investors() {
  if (!marketingVisibility.showInvestors || investors.length === 0) {
    return null;
  }

  return (
    <section className="overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-dark">
            Backed by
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Investor & Strategic Support
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {investors.map((investor, index) => (
            <motion.div
              key={investor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="rounded-3xl border border-slate-200 bg-white/80 px-6 py-6 text-center shadow-[0_18px_40px_rgba(15,23,42,0.06)]"
            >
              <div className="text-sm font-semibold text-text-primary">{investor.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
