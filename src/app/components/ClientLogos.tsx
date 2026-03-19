"use client";
import { motion } from "framer-motion";

const clients = [
    { name: "Bank BCA", abbr: "BCA" },
    { name: "Mandiri", abbr: "MANDIRI" },
    { name: "Bank BRI", abbr: "BRI" },
    { name: "Bank BNI", abbr: "BNI" },
    { name: "GoPay", abbr: "GOPAY" },
    { name: "OVO", abbr: "OVO" },
    { name: "Dana", abbr: "DANA" },
    { name: "Tokopedia", abbr: "TOKOPEDIA" },
    { name: "Shopee", abbr: "SHOPEE" },
    { name: "Traveloka", abbr: "TRAVELOKA" },
    { name: "Gojek", abbr: "GOJEK" },
    { name: "Grab", abbr: "GRAB" },
    { name: "Kredivo", abbr: "KREDIVO" },
    { name: "Akulaku", abbr: "AKULAKU" },
    { name: "Pinhome", abbr: "PINHOME" },
    { name: "Alodokter", abbr: "ALODOKTER" },
];

// Duplicate for seamless infinite scroll
const doubled = [...clients, ...clients];

export default function ClientLogos() {
    return (
        <section className="relative py-14 overflow-hidden border-y border-black/5 bg-surface-light">
            <div className="max-w-7xl mx-auto px-6 mb-8">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center text-sm font-medium text-text-muted tracking-widest uppercase"
                >
                    Dipercaya oleh 500+ perusahaan di Indonesia
                </motion.p>
            </div>

            {/* Scrolling track */}
            <div className="relative">
                {/* Left fade */}
                <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-surface-light to-transparent pointer-events-none" />
                {/* Right fade */}
                <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-surface-light to-transparent pointer-events-none" />

                <div className="flex overflow-hidden">
                    <div className="flex animate-marquee gap-8 items-center">
                        {doubled.map((client, i) => (
                            <div
                                key={`${client.abbr}-${i}`}
                                className="flex-shrink-0 group flex items-center justify-center px-6 py-3 rounded-xl glass hover:border-primary/20 hover:shadow-md transition-all duration-300 cursor-default min-w-[130px]"
                            >
                                <span className="text-sm font-bold tracking-wide text-text-muted group-hover:text-primary transition-colors duration-300 whitespace-nowrap">
                                    {client.abbr}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
