"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 1, suffix: "", label: "API untuk alur e-KYC" },
  { value: 3, suffix: "", label: "Langkah onboarding utama" },
  { value: 10, suffix: "+", label: "Layanan verifikasi & compliance" },
  { value: 0, suffix: "", label: "Foto customer disimpan" },
];

function getStartingValue(target: number) {
  if (target === 0) {
    return 2;
  }

  if (target <= 3) {
    return Math.max(target - 1, 0);
  }

  if (target <= 10) {
    return Math.max(target - 2, 0);
  }

  if (target < 100) {
    return Number((target * 0.92).toFixed(1));
  }

  return Math.max(Math.floor(target * 0.9), 0);
}

function formatValue(value: number) {
  return value % 1 !== 0 ? value.toFixed(1) : value.toString();
}

function useCounter(target: number, duration: number, active: boolean) {
  const startValue = getStartingValue(target);
  const [count, setCount] = useState(() => startValue);
  const [completed, setCompleted] = useState(false);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!active || startedRef.current) {
      return;
    }

    startedRef.current = true;
    let animationFrame = 0;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const currentValue = startValue + (target - startValue) * eased;
      const nextValue =
        target % 1 !== 0 || startValue % 1 !== 0
          ? Math.round(currentValue * 10) / 10
          : Math.round(currentValue);

      setCount(nextValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
        return;
      }

      setCount(target);
      setCompleted(true);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [active, duration, startValue, target]);

  useEffect(() => {
    if (active || startedRef.current) {
      return;
    }

    const timer = window.setTimeout(() => {
      startedRef.current = true;
      setCount(target);
      setCompleted(true);
    }, 2000);

    return () => window.clearTimeout(timer);
  }, [active, target]);

  return { count, completed };
}

function StatCard({
  value,
  suffix,
  label,
  index,
}: (typeof stats)[number] & { index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { count, completed } = useCounter(value, 1200, inView);
  const visibleSuffix = suffix === "+" && !completed ? "" : suffix;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex flex-col items-center rounded-3xl border border-slate-200/80 bg-white/80 px-6 py-8 text-center shadow-[0_20px_48px_rgba(15,23,42,0.06)] backdrop-blur"
    >
      <div className="mb-2 text-4xl font-extrabold tabular-nums text-text-primary sm:text-5xl">
        <span className="gradient-text">{formatValue(count)}</span>
        <span className="text-text-primary">{visibleSuffix}</span>
      </div>
      <div className="text-sm font-medium text-text-secondary">{label}</div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="relative bg-radial-cyan py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
