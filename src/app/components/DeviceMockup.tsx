"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type DeviceMockupProps = {
  variant: "phone" | "laptop";
  children: ReactNode;
  className?: string;
  screenClassName?: string;
  floatDelay?: number;
};

function joinClasses(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function DeviceMockup({
  variant,
  children,
  className,
  screenClassName,
  floatDelay = 0,
}: DeviceMockupProps) {
  if (variant === "phone") {
    return (
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 6,
          delay: floatDelay,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className={joinClasses("relative mx-auto w-full max-w-[360px]", className)}
      >
        <div className="rounded-[2.8rem] bg-slate-950 p-[10px] shadow-[0_36px_90px_rgba(15,23,42,0.35)]">
          <div className="pointer-events-none absolute left-1/2 top-5 z-20 h-6 w-28 -translate-x-1/2 rounded-full border border-white/5 bg-slate-900/95" />
          <div
            className={joinClasses(
              "relative aspect-[9/19.5] overflow-hidden rounded-[2.2rem] border border-white/5 bg-slate-950",
              screenClassName
            )}
          >
            {children}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 7,
        delay: floatDelay,
        ease: "easeInOut",
        repeat: Infinity,
      }}
      className={joinClasses("relative mx-auto w-full max-w-[640px]", className)}
    >
      <div className="rounded-[1.9rem] bg-gradient-to-b from-slate-700 to-slate-950 p-3 shadow-[0_36px_90px_rgba(15,23,42,0.32)]">
        <div className="overflow-hidden rounded-[1.2rem] border border-white/10 bg-slate-950">
          <div className="flex items-center gap-1.5 border-b border-white/10 bg-slate-900/90 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400/85" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300/85" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/85" />
          </div>
          <div
            className={joinClasses(
              "relative aspect-[16/10] overflow-hidden bg-slate-950",
              screenClassName
            )}
          >
            {children}
          </div>
        </div>
      </div>
      <div className="mx-auto h-3 w-[94%] rounded-b-[1.4rem] bg-gradient-to-b from-slate-600 to-slate-950 shadow-[0_10px_18px_rgba(15,23,42,0.18)]" />
      <div className="mx-auto -mt-1 h-1.5 w-28 rounded-full bg-slate-700/90" />
    </motion.div>
  );
}
