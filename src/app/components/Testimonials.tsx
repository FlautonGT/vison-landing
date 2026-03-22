"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote } from "lucide-react";
import { marketingVisibility, testimonials } from "../lib/marketing-content";

export default function Testimonials() {
  const shouldShowTestimonials =
    marketingVisibility.showTestimonials && testimonials.length > 0;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!shouldShowTestimonials || testimonials.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setCurrent((value) => (value + 1) % testimonials.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [shouldShowTestimonials]);

  if (!shouldShowTestimonials) {
    return null;
  }

  const testimonial = testimonials[current];

  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-radial-blue" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-dark">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Cerita dari tim yang memakai Vison
          </h2>
        </motion.div>

        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl border border-slate-200/70 bg-white/85 p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur sm:p-12">
            <Quote size={36} className="mb-4 text-primary/25" />

            <AnimatePresence mode="wait">
              <motion.div
                key={`${testimonial.company}-${current}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
              >
                <p className="text-lg font-medium leading-relaxed text-text-primary sm:text-xl">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-8">
                  <div className="font-semibold text-text-primary">{testimonial.name}</div>
                  <div className="text-sm text-text-muted">
                    {testimonial.title} - {testimonial.company}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
