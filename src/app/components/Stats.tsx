"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
    { value: 10_000_000, suffix: "+", label: "API Request Diproses", prefix: "" },
    { value: 99.9, suffix: "%", label: "Akurasi Face Verification", prefix: "" },
    { value: 500, suffix: "+", label: "Perusahaan Menggunakan", prefix: "" },
    { value: 10, suffix: "+", label: "Layanan API Tersedia", prefix: "" },
];

function useCounter(target: number, duration: number, active: boolean) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!active) return;
        let startTime: number | null = null;
        const isDecimal = target % 1 !== 0;

        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            const current = eased * target;
            setCount(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current));
            if (progress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
    }, [active, target, duration]);

    return count;
}

function StatCard({ value, suffix, label, prefix, index }: typeof stats[0] & { index: number }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    const count = useCounter(value, 1800, inView);

    const formatted = value >= 1_000_000
        ? (count / 1_000_000).toFixed(1).replace(/\.0$/, "") + "Jt"
        : value >= 1_000
        ? (count / 1_000).toFixed(0) + "K"
        : count % 1 !== 0 || value % 1 !== 0
        ? count.toFixed(1)
        : count.toString();

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center text-center px-6 py-8 rounded-2xl glass hover:-translate-y-1 transition-transform duration-300"
        >
            <div className="text-4xl sm:text-5xl font-extrabold gradient-text mb-2 tabular-nums">
                {prefix}{formatted}{suffix}
            </div>
            <div className="text-sm text-text-secondary font-medium">{label}</div>
        </motion.div>
    );
}

export default function Stats() {
    return (
        <section className="relative py-16 bg-radial-cyan">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {stats.map((s, i) => (
                        <StatCard key={s.label} {...s} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
