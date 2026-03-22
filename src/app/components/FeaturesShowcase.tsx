"use client";

import { motion } from "framer-motion";
import DeviceMockup from "./DeviceMockup";
import {
  DeepfakeScreen,
  EkycFlowScreen,
  FaceMatchScreen,
  LivenessScreen,
  OcrWorkspaceScreen,
  WatchlistScreen,
} from "./ProductScreens";

const features = [
  {
    tag: "01",
    title: "e-KYC",
    desc: "Verifikasi identitas pelanggan end-to-end dalam satu alur terintegrasi: scan dokumen, liveness detection, dan face match lewat satu API sederhana.",
    preview: EkycFlowScreen,
    variant: "phone" as const,
    reverse: false,
  },
  {
    tag: "02",
    title: "OCR",
    desc: "Ekstrak data KTP, NPWP, dan SIM secara otomatis. Hasil terstruktur langsung siap dipakai untuk onboarding dan validasi lanjutan.",
    preview: OcrWorkspaceScreen,
    variant: "laptop" as const,
    reverse: true,
  },
  {
    tag: "03",
    title: "Face Match (1:1)",
    desc: "Bandingkan selfie dengan foto dokumen untuk memastikan identitas yang valid dan menekan fraud di alur onboarding.",
    preview: FaceMatchScreen,
    variant: "laptop" as const,
    reverse: false,
  },
  {
    tag: "04",
    title: "Liveness Detection",
    desc: "Pastikan pengguna adalah orang asli yang hadir secara langsung. Anti-spoofing membantu mencegah replay, photo attack, dan injection.",
    preview: LivenessScreen,
    variant: "phone" as const,
    reverse: true,
  },
  {
    tag: "05",
    title: "Deepfake Detection",
    desc: "Deteksi manipulasi wajah berbasis AI secara real-time untuk memperkuat trust dan meminimalkan risiko identitas sintetis.",
    preview: DeepfakeScreen,
    variant: "laptop" as const,
    reverse: false,
  },
  {
    tag: "06",
    title: "Watchlist Screening",
    desc: "Screening nama terhadap watchlist dan sinyal kepatuhan untuk membantu workflow AML, fraud review, dan audit trail.",
    preview: WatchlistScreen,
    variant: "laptop" as const,
    reverse: true,
  },
];

export default function FeaturesShowcase() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,196,105,0.16),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.14),transparent_24%),linear-gradient(180deg,#020617_0%,#0f172a_100%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:80px_80px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-300">
            Fitur Unggulan
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-5xl">
            Produk verifikasi yang terasa
            <span className="block text-emerald-300">siap dipakai dari hari pertama</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Seluruh preview di bawah sekarang memakai device mockup agar lebih
            profesional, lebih dekat ke produk, dan tidak lagi terasa seperti
            collage AI.
          </p>
        </motion.div>

        <div className="space-y-24">
          {features.map((feature, index) => {
            const Preview = feature.preview;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="grid items-center gap-12 lg:grid-cols-2"
              >
                <div
                  className={`${feature.reverse ? "lg:order-2" : ""} rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_24px_60px_rgba(2,6,23,0.24)] backdrop-blur`}
                >
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
                    {feature.tag}
                  </div>
                  <h3 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
                    {feature.desc}
                  </p>
                </div>

                <div className={feature.reverse ? "lg:order-1" : ""}>
                  <DeviceMockup
                    variant={feature.variant}
                    floatDelay={index * 0.15}
                    className={feature.variant === "phone" ? "max-w-[340px]" : undefined}
                  >
                    <Preview />
                  </DeviceMockup>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
