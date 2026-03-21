"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Fingerprint,
  ScanLine,
  Shield,
} from "lucide-react";
import Image from "next/image";

const proofPoints = [
  "Self-service dari signup sampai go-live",
  "Pay-as-you-go tanpa deposit besar",
  "Foto customer tidak disimpan",
];

const valueCards = [
  {
    title: "Alur e-KYC lengkap",
    description: "OCR KTP, liveness, face match, dan validasi identitas dalam satu integrasi.",
    icon: FileText,
  },
  {
    title: "Siap scale lebih cepat",
    description: "Mulai dari sandbox, pindah ke production, lalu monitor semuanya dari dashboard.",
    icon: ScanLine,
  },
  {
    title: "Dibangun untuk trust",
    description: "Fokus pada onboarding yang aman, cepat, dan rapi untuk tim produk dan compliance.",
    icon: Shield,
  },
];

const workflowSteps = [
  "Scan KTP",
  "Liveness",
  "Face Match",
  "Verified",
];

const ocrRows = [
  "NIK terbaca otomatis",
  "Nama sesuai dokumen",
  "Alamat siap divalidasi",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#f6fbf8_100%)]" />
      <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.05)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,196,105,0.18),transparent_36%),radial-gradient(circle_at_82%_18%,rgba(15,23,42,0.08),transparent_24%),radial-gradient(circle_at_70%_80%,rgba(52,211,153,0.16),transparent_22%)]" />
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-primary/15 blur-[110px]" />
      <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-primary/10 blur-[110px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 pb-20 pt-10 lg:grid-cols-[1.02fr_0.98fr] lg:pb-28 lg:pt-16">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/85 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-dark shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur">
            <Shield size={14} />
            e-KYC self-service untuk bisnis Indonesia
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.04em] text-text-primary sm:text-5xl lg:text-7xl">
            Bangun alur e-KYC dari{" "}
            <span className="gradient-text">scan KTP sampai face match</span>{" "}
            dalam satu API.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-text-secondary sm:text-xl">
            Vison membantu bisnis memverifikasi identitas pelanggan lebih cepat
            dengan OCR KTP, liveness detection, face compare, dan hasil yang
            siap dipakai dari sandbox ke production.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://dashboard.vison.id/register"
              className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-primary-light px-6 py-3.5 text-base font-semibold text-white shadow-[0_18px_40px_rgba(16,196,105,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_50px_rgba(16,196,105,0.34)]"
            >
              Mulai Gratis
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href="https://docs.vison.id"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-6 py-3.5 text-base font-semibold text-text-primary shadow-[0_12px_30px_rgba(15,23,42,0.06)] backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              Lihat Dokumentasi
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {proofPoints.map((point) => (
              <div
                key={point}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/75 px-3.5 py-2 text-sm text-text-secondary shadow-sm backdrop-blur"
              >
                <CheckCircle2 size={16} className="text-primary" />
                {point}
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {valueCards.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.06)] backdrop-blur"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon size={20} />
                </div>
                <h2 className="mt-4 text-lg font-semibold text-text-primary">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-text-secondary">{description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[620px]"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/78 p-5 shadow-[0_32px_90px_rgba(15,23,42,0.14)] backdrop-blur-xl sm:p-6">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(16,196,105,0.08),transparent_40%,rgba(15,23,42,0.04)_100%)]" />

            <div className="relative flex flex-wrap items-center justify-between gap-3 rounded-[1.4rem] border border-white/70 bg-white/90 px-4 py-3 shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-text-muted">
                  Product preview
                </div>
                <div className="mt-1 text-base font-semibold text-text-primary">
                  Flow e-KYC untuk onboarding pelanggan
                </div>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-semibold text-emerald-700">
                <CheckCircle2 size={16} />
                Auto decision ready
              </div>
            </div>

            <div className="relative mt-5 min-h-[540px] sm:min-h-[620px]">
              <div className="absolute inset-x-6 top-8 bottom-20 rounded-[2rem] border border-emerald-100/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.9)_0%,rgba(241,250,245,0.95)_100%)]" />
              <div className="absolute inset-x-10 top-14 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
              <div className="absolute inset-x-10 bottom-28 h-px bg-gradient-to-r from-transparent via-slate-300/80 to-transparent" />

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.45 }}
                className="absolute left-0 top-20 z-20 w-[190px] rounded-[1.6rem] border border-slate-200/80 bg-white/95 p-4 shadow-[0_24px_60px_rgba(15,23,42,0.12)] backdrop-blur sm:left-2 sm:w-[220px]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <FileText size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-text-muted">
                      OCR KTP
                    </div>
                    <div className="text-sm font-semibold text-text-primary">
                      Data extraction
                    </div>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  {ocrRows.map((row) => (
                    <div key={row} className="flex items-center gap-2 text-sm text-text-secondary">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      {row}
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.45 }}
                className="absolute right-0 top-4 z-20 w-[200px] rounded-[1.6rem] border border-slate-200/80 bg-white/95 p-4 shadow-[0_24px_60px_rgba(15,23,42,0.12)] backdrop-blur sm:right-2 sm:w-[220px]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-text-muted">
                      Face match
                    </div>
                    <div className="text-2xl font-black tracking-[-0.03em] text-text-primary">
                      99.98%
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-6 text-text-secondary">
                  Wajah selfie cocok dengan foto dokumen dan siap dipakai untuk
                  verifikasi lanjutan.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.45 }}
                className="absolute bottom-28 left-1 z-20 w-[220px] rounded-[1.6rem] border border-slate-200/80 bg-white/95 p-4 shadow-[0_24px_60px_rgba(15,23,42,0.12)] backdrop-blur sm:bottom-32 sm:left-4 sm:w-[250px]"
              >
                <div className="flex items-center gap-3">
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <span className="absolute h-8 w-8 rounded-xl border border-primary/30" />
                    <Fingerprint size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-text-muted">
                      Liveness
                    </div>
                    <div className="text-sm font-semibold text-text-primary">
                      Passive session active
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2 text-sm text-text-secondary">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_18px_rgba(16,196,105,0.55)]" />
                  Kamera dan deteksi wajah berjalan real-time
                </div>
              </motion.div>

              <div className="absolute left-1/2 top-12 z-10 w-[270px] -translate-x-1/2 sm:top-10 sm:w-[330px] lg:w-[360px]">
                <div className="absolute inset-8 rounded-[2.5rem] bg-primary/15 blur-[60px]" />
                <div className="relative">
                  <Image
                    src="/hero.png"
                    alt="Preview flow e-KYC Vison"
                    width={420}
                    height={520}
                    className="relative z-10 h-auto w-full drop-shadow-[0_24px_60px_rgba(15,23,42,0.22)]"
                    priority
                  />

                  <div className="pointer-events-none absolute inset-[15%_14%_15%_14%] z-20 rounded-[2.4rem] border border-white/30">
                    <div className="absolute left-4 top-4 h-7 w-7 rounded-tl-2xl border-l-2 border-t-2 border-primary/65" />
                    <div className="absolute right-4 top-4 h-7 w-7 rounded-tr-2xl border-r-2 border-t-2 border-primary/65" />
                    <div className="absolute bottom-4 left-4 h-7 w-7 rounded-bl-2xl border-b-2 border-l-2 border-primary/65" />
                    <div className="absolute bottom-4 right-4 h-7 w-7 rounded-br-2xl border-b-2 border-r-2 border-primary/65" />
                  </div>

                  <div className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2 rounded-full border border-white/60 bg-slate-950/78 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-[0_14px_30px_rgba(15,23,42,0.25)] backdrop-blur">
                    Live selfie capture
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.95, duration: 0.45 }}
                className="absolute bottom-0 left-0 right-0 z-20 grid gap-3 sm:grid-cols-4"
              >
                {workflowSteps.map((step, index) => (
                  <div
                    key={step}
                    className="rounded-[1.4rem] border border-white/70 bg-white/88 px-4 py-3 shadow-[0_14px_32px_rgba(15,23,42,0.08)] backdrop-blur"
                  >
                    <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-text-muted">
                      Step 0{index + 1}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-text-primary">{step}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
