import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vison — Easily Secure Your Business | Platform e-KYC & Identity Verification Indonesia",
  description:
    "Vison adalah platform e-KYC & identity verification Indonesia. Verifikasi identitas pelanggan dengan OCR, Face Compare, Liveness Detection, dan lebih banyak lagi. Self-service, pay-as-you-go, developer-friendly.",
  keywords: [
    "e-KYC",
    "identity verification",
    "OCR KTP",
    "face compare",
    "liveness detection",
    "verifikasi identitas",
    "Indonesia",
    "API",
    "Vison",
  ],
  openGraph: {
    title: "Vison — Easily Secure Your Business",
    description:
      "Platform e-KYC & identity verification Indonesia. Self-service, pay-as-you-go, developer-friendly.",
    url: "https://vison.id",
    siteName: "Vison",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
