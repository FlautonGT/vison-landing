"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Shield } from "lucide-react";
import DeviceMockup from "./DeviceMockup";
import { EkycFlowScreen } from "./ProductScreens";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#f6fbf8_100%)]" />
      <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.05)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,196,105,0.18),transparent_36%),radial-gradient(circle_at_82%_18%,rgba(15,23,42,0.08),transparent_24%),radial-gradient(circle_at_70%_80%,rgba(52,211,153,0.16),transparent_22%)]" />
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-primary/15 blur-[110px]" />
      <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-primary/10 blur-[110px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-[4.5rem] pt-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-[4.5rem] lg:pb-24 lg:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/85 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-dark shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur">
            <Shield size={14} />
            e-KYC self-service untuk bisnis Indonesia
          </div>

          <h1 className="mt-6 max-w-5xl text-6xl font-black leading-[0.94] tracking-[-0.05em] text-text-primary sm:text-7xl lg:text-8xl">
            Dari{" "}
            <span className="gradient-text">scan KTP sampai verified</span>,
            semua alur e-KYC ada di satu API.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-text-secondary sm:text-xl">
            Bangun onboarding identitas yang cepat dengan OCR KTP, liveness,
            face match, dan workflow yang siap dipakai dari sandbox ke
            production.
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(14px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.85, delay: 0.12, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[620px]"
        >
          <div className="absolute left-1/2 top-14 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-primary/18 blur-[110px]" />

          <div className="relative overflow-hidden rounded-[2.4rem] border border-white/70 bg-white/60 p-5 shadow-[0_32px_90px_rgba(15,23,42,0.14)] backdrop-blur-xl">
            <div className="absolute inset-0 z-0">
              <Image 
                src="/hero_lifestyle_background.png" 
                alt="Background" 
                fill 
                className="object-cover opacity-60 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(255,255,255,0.6)_100%)]" />
            </div>

            <div className="relative z-10 flex items-center justify-between rounded-[1.4rem] border border-white/70 bg-white/90 px-4 py-3 shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-text-muted">
                  Product preview
                </div>
                <div className="mt-1 text-base font-semibold text-text-primary">
                  Alur e-KYC siap pakai
                </div>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-semibold text-emerald-700">
                <CheckCircle2 size={16} />
                Review passed
              </div>
            </div>

            <div className="relative mt-6 min-h-[560px]">
              <motion.div
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.45, duration: 0.45 }}
                className="absolute left-0 top-[4.5rem] z-20 w-[240px] rounded-[1.6rem] border border-slate-200/80 bg-white/95 px-4 py-4 shadow-[0_24px_60px_rgba(15,23,42,0.12)] backdrop-blur"
              >
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-text-muted">
                  OCR status
                </div>
                <div className="relative mt-3 h-[90px] w-full overflow-hidden rounded-xl border border-slate-100">
                  <Image 
                    src="/ktp_extraction_card.png" 
                    alt="KTP Extraction" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="mt-3 text-lg font-semibold text-text-primary">
                  KTP extracted
                </div>
                <div className="mt-1 text-sm text-text-secondary">
                  NIK, nama, dan alamat siap divalidasi
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.58, duration: 0.45 }}
                className="absolute right-0 top-8 z-20 rounded-[1.6rem] border border-slate-200/80 bg-white/95 px-4 py-4 shadow-[0_24px_60px_rgba(15,23,42,0.12)] backdrop-blur"
              >
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-text-muted">
                  Face match
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-emerald-500/20">
                    <Image 
                      src="/face_match_avatar.png" 
                      alt="Face Match" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-2xl font-black tracking-[-0.04em] text-text-primary">
                      99.98%
                    </div>
                    <div className="text-sm text-text-secondary">Ready for decision</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.72, duration: 0.45 }}
                className="absolute bottom-10 left-1/2 z-20 w-[240px] -translate-x-1/2 rounded-[1.6rem] border border-slate-200/80 bg-white/95 px-4 py-4 shadow-[0_24px_60px_rgba(15,23,42,0.12)] backdrop-blur"
              >
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-text-muted">
                  Liveness
                </div>
                <div className="mt-2 flex items-center justify-between text-sm font-semibold text-text-primary">
                  <span>Passive session active</span>
                  <span className="rounded-full bg-emerald-50 px-2 py-1 text-emerald-700">
                    Live
                  </span>
                </div>
              </motion.div>

              <div className="relative z-10 mx-auto max-w-[320px] pt-8">
                <DeviceMockup variant="phone" floatDelay={0.2}>
                  <EkycFlowScreen />
                </DeviceMockup>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
