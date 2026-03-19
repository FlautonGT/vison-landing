"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, Terminal } from "lucide-react";

const langs = ["Node.js", "Python", "PHP", "Go", "cURL"];

const snippets: Record<string, string> = {
    "Node.js": `import Vison from "@vison/sdk";

const client = new Vison({ apiKey: process.env.VISON_API_KEY });

const result = await client.kyc.verify({
  document_type: "KTP",
  document_image: imageBase64,
  selfie_image: selfieBase64,
  liveness: true,
});

console.log(result.status);   // "verified"
console.log(result.score);    // 0.987`,

    Python: `from vison import Vison

client = Vison(api_key=os.environ["VISON_API_KEY"])

result = client.kyc.verify(
    document_type="KTP",
    document_image=image_base64,
    selfie_image=selfie_base64,
    liveness=True,
)

print(result.status)   # "verified"
print(result.score)    # 0.987`,

    PHP: `<?php
use Vison\\Client;

$client = new Client($_ENV["VISON_API_KEY"]);

$result = $client->kyc->verify([
    "document_type"  => "KTP",
    "document_image" => $imageBase64,
    "selfie_image"   => $selfieBase64,
    "liveness"       => true,
]);

echo $result->status;   // "verified"
echo $result->score;    // 0.987`,

    Go: `package main

import "github.com/vison-ai/vison-go"

func main() {
    client := vison.NewClient(os.Getenv("VISON_API_KEY"))

    result, _ := client.KYC.Verify(vison.VerifyParams{
        DocumentType:  "KTP",
        DocumentImage: imageBase64,
        SelfieImage:   selfieBase64,
        Liveness:      true,
    })

    fmt.Println(result.Status) // "verified"
    fmt.Println(result.Score)  // 0.987
}`,

    cURL: `curl -X POST https://api.vison.id/v1/kyc/verify \\
  -H "Authorization: Bearer $VISON_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "document_type":  "KTP",
    "document_image": "'$IMAGE_BASE64'",
    "selfie_image":   "'$SELFIE_BASE64'",
    "liveness":       true
  }'

# Response
# { "status": "verified", "score": 0.987, "latency_ms": 820 }`,
};

function highlight(code: string) {
    return code
        .replace(/(".*?")/g, '<span class="text-amber-300">$1</span>')
        .replace(/(\/\/.*)/g, '<span class="text-gray-500">$1</span>')
        .replace(/(#.*)/g, '<span class="text-gray-500">$1</span>')
        .replace(/\b(import|from|const|await|new|print|echo|fmt\.Println|func|package|main|true|false)\b/g, '<span class="text-violet-400">$1</span>')
        .replace(/\b(client|result)\b/g, '<span class="text-blue-300">$1</span>');
}

export default function CodeSnippet() {
    const [active, setActive] = useState("Node.js");
    const [copied, setCopied] = useState(false);

    const copy = () => {
        navigator.clipboard.writeText(snippets[active]);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left — text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-xs font-semibold tracking-widest uppercase text-primary-dark">
                            Developer-First
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-5">
                            Integrasi dalam{" "}
                            <span className="gradient-text">Hitungan Menit</span>
                        </h2>
                        <p className="text-text-secondary leading-relaxed mb-8">
                            API yang bersih dan intuitif dengan SDK resmi untuk semua bahasa populer. Dokumentasi lengkap, sandbox gratis, dan dukungan teknis 24/7 siap membantu tim Anda.
                        </p>

                        <ul className="space-y-3 mb-8">
                            {[
                                "SDK untuk Node.js, Python, PHP, Go, dan Ruby",
                                "Sandbox & test environment gratis",
                                "Dokumentasi interaktif dengan live demo",
                                "Response time < 1 detik, uptime 99.9%",
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-3 text-text-secondary text-sm">
                                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <Check size={11} className="text-primary" />
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <a
                            href="#"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                        >
                            <Terminal size={15} />
                            Lihat Dokumentasi Lengkap →
                        </a>
                    </motion.div>

                    {/* Right — code block */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        {/* Glow */}
                        <div className="absolute -inset-4 bg-primary/8 rounded-3xl blur-2xl" />

                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#0d1117]">
                            {/* Tab bar */}
                            <div className="flex items-center gap-1 px-4 pt-3 pb-0 border-b border-white/5">
                                {langs.map((lang) => (
                                    <button
                                        key={lang}
                                        onClick={() => setActive(lang)}
                                        className={`px-3 py-2 text-xs font-medium rounded-t-lg transition-all duration-200 border-b-2 ${
                                            active === lang
                                                ? "text-white border-primary bg-white/5"
                                                : "text-gray-500 border-transparent hover:text-gray-300"
                                        }`}
                                    >
                                        {lang}
                                    </button>
                                ))}

                                {/* Copy button */}
                                <button
                                    onClick={copy}
                                    className="ml-auto flex items-center gap-1.5 px-3 py-1.5 mb-1 rounded-lg text-xs text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                                >
                                    {copied ? <Check size={12} className="text-green-400" /> : <Copy size={12} />}
                                    {copied ? "Copied!" : "Copy"}
                                </button>
                            </div>

                            {/* Code */}
                            <div className="p-5 overflow-auto max-h-80">
                                <AnimatePresence mode="wait">
                                    <motion.pre
                                        key={active}
                                        initial={{ opacity: 0, y: 6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -6 }}
                                        transition={{ duration: 0.2 }}
                                        className="text-xs sm:text-sm font-mono text-gray-300 leading-relaxed whitespace-pre"
                                        dangerouslySetInnerHTML={{ __html: highlight(snippets[active]) }}
                                    />
                                </AnimatePresence>
                            </div>

                            {/* Footer bar */}
                            <div className="flex items-center gap-2 px-5 py-3 border-t border-white/5 bg-white/2">
                                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                <span className="text-xs text-gray-500 font-mono">API v2.1 · sandbox.vison.id</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
