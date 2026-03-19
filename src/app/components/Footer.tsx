"use client";
import { Mail, MapPin, ExternalLink } from "lucide-react";

const footerLinks = {
    Produk: [
        { label: "OCR Identity", href: "/products" },
        { label: "Biometrics", href: "/products" },
        { label: "Data Verification", href: "/products" },
        { label: "Fraud Prevention", href: "/products" },
    ],
    Solusi: [
        { label: "Digital Onboarding", href: "/solutions" },
        { label: "e-KYC & AML", href: "/solutions" },
        { label: "Fraud Detection", href: "/solutions" },
        { label: "Re-Verification", href: "/solutions" },
    ],
    Perusahaan: [
        { label: "Tentang Kami", href: "/about" },
        { label: "Karir", href: "#" },
        { label: "Blog", href: "https://blog.vison.id", ext: true },
        { label: "Kontak", href: "/about" },
    ],
    "Legal & Support": [
        { label: "Kebijakan Privasi", href: "#" },
        { label: "Syarat & Ketentuan", href: "#" },
        { label: "Status Sistem", href: "#" },
        { label: "Dokumentasi API", href: "https://docs.vison.id", ext: true },
    ],
};

export default function Footer() {
    return (
        <footer className="border-t border-black/5 bg-surface-light">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-10">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="mb-4">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/logo.png"
                                alt="Vison"
                                className="h-9 w-auto object-contain"
                            />
                        </div>
                        <p className="text-sm text-text-secondary leading-relaxed mb-4 max-w-xs">
                            Platform e-KYC & identity verification Indonesia. Self-service, pay-as-you-go, developer-friendly.
                        </p>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-text-muted">
                                <Mail size={14} /> hello@vison.id
                            </div>
                            <div className="flex items-center gap-2 text-sm text-text-muted">
                                <MapPin size={14} /> Jakarta, Indonesia
                            </div>
                        </div>
                    </div>

                    {/* Link columns */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="font-semibold text-sm text-text-primary mb-4">{title}</h4>
                            <ul className="space-y-2.5">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            target={"ext" in link ? "_blank" : undefined}
                                            rel={"ext" in link ? "noopener noreferrer" : undefined}
                                            className="text-sm text-text-muted hover:text-primary transition-colors inline-flex items-center gap-1"
                                        >
                                            {link.label}
                                            {"ext" in link && <ExternalLink size={11} />}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-12 pt-8 border-t border-black/5 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-text-muted">
                        © 2026 Vison. All rights reserved.
                    </p>
                    <p className="text-xs text-text-muted">
                        vison.id — Easily Secure Your Business
                    </p>
                </div>
            </div>
        </footer>
    );
}
