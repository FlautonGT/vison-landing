"use client";

export function HeroIllustration() {
    return (
        <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
                <linearGradient id="bgGrad" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#10C469" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#34d399" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="cardGrad" x1="100" y1="80" x2="400" y2="420" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#111827" />
                </linearGradient>
                <linearGradient id="blueGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#10C469" />
                    <stop offset="100%" stopColor="#34d399" />
                </linearGradient>
                <linearGradient id="scanLine" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#34d399" stopOpacity="0" />
                    <stop offset="50%" stopColor="#34d399" stopOpacity="1" />
                    <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
                </linearGradient>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <filter id="softGlow">
                    <feGaussianBlur stdDeviation="15" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
            </defs>

            {/* Background circle glow */}
            <circle cx="250" cy="250" r="220" fill="url(#bgGrad)" opacity="0.5" />

            {/* Phone body */}
            <rect x="150" y="60" width="200" height="380" rx="24" fill="url(#cardGrad)" stroke="#e2e8f0" strokeWidth="2" />
            <rect x="150" y="60" width="200" height="380" rx="24" fill="none" stroke="url(#blueGrad)" strokeWidth="1" opacity="0.3" />

            {/* Screen */}
            <rect x="162" y="80" width="176" height="340" rx="12" fill="#f8fafc" />

            {/* Status bar */}
            <rect x="175" y="90" width="40" height="4" rx="2" fill="#e2e8f0" />
            <rect x="290" y="90" width="35" height="4" rx="2" fill="#e2e8f0" />

            {/* Face outline on screen */}
            <ellipse cx="250" cy="210" rx="50" ry="62" fill="none" stroke="#10C469" strokeWidth="2" strokeDasharray="8 4" opacity="0.7">
                <animate attributeName="stroke-dashoffset" values="0;24" dur="3s" repeatCount="indefinite" />
            </ellipse>
            <circle cx="235" cy="198" r="5" fill="#34d399" opacity="0.6" />
            <circle cx="265" cy="198" r="5" fill="#34d399" opacity="0.6" />
            <path d="M238 225 Q250 235 262 225" stroke="#34d399" strokeWidth="2" fill="none" opacity="0.5" />
            <circle cx="250" cy="210" r="3" fill="#34d399" opacity="0.4" />

            {/* Scan tracking dots */}
            <circle cx="205" cy="175" r="3" fill="#34d399" opacity="0.8">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="295" cy="175" r="3" fill="#34d399" opacity="0.8">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="0.3s" repeatCount="indefinite" />
            </circle>
            <circle cx="205" cy="245" r="3" fill="#34d399" opacity="0.8">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="0.6s" repeatCount="indefinite" />
            </circle>
            <circle cx="295" cy="245" r="3" fill="#34d399" opacity="0.8">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="0.9s" repeatCount="indefinite" />
            </circle>

            {/* Scan line moving */}
            <rect x="170" y="200" width="160" height="2" fill="url(#scanLine)" rx="1">
                <animate attributeName="y" values="140;270;140" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
            </rect>

            {/* Corner brackets */}
            <path d="M190 155 L190 145 L200 145" stroke="#34d399" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M310 155 L310 145 L300 145" stroke="#34d399" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M190 265 L190 275 L200 275" stroke="#34d399" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M310 265 L310 275 L300 275" stroke="#34d399" strokeWidth="2.5" fill="none" strokeLinecap="round" />

            {/* Progress text area */}
            <rect x="185" y="300" width="130" height="6" rx="3" fill="#10C469" opacity="0.4" />
            <rect x="185" y="300" width="100" height="6" rx="3" fill="url(#blueGrad)" opacity="0.8">
                <animate attributeName="width" values="20;100;20" dur="4s" repeatCount="indefinite" />
            </rect>
            <rect x="185" y="315" width="80" height="4" rx="2" fill="#e2e8f0" />
            <rect x="185" y="325" width="60" height="4" rx="2" fill="#e2e8f0" />

            {/* Verification badge floating - top right */}
            <g filter="url(#glow)">
                <rect x="340" y="90" width="110" height="40" rx="12" fill="#ffffff" stroke="#22c55e" strokeWidth="1" opacity="0.95" />
                <circle cx="362" cy="110" r="8" fill="#22c55e" opacity="0.2" />
                <path d="M358 110 L361 113 L367 107" stroke="#22c55e" strokeWidth="2" fill="none" strokeLinecap="round" />
                <rect x="375" y="105" width="55" height="4" rx="2" fill="#22c55e" opacity="0.6" />
                <rect x="375" y="113" width="40" height="3" rx="1.5" fill="#64748b" opacity="0.4" />
                <animateTransform attributeName="transform" type="translate" values="0,0;0,-8;0,0" dur="4s" repeatCount="indefinite" />
            </g>

            {/* ID Card floating - bottom left */}
            <g filter="url(#glow)">
                <rect x="50" y="300" width="110" height="75" rx="10" fill="#ffffff" stroke="#10C469" strokeWidth="1" opacity="0.95" />
                <rect x="62" y="312" width="30" height="35" rx="4" fill="#10C469" opacity="0.3" />
                <rect x="100" y="316" width="45" height="4" rx="2" fill="#4ade80" opacity="0.5" />
                <rect x="100" y="325" width="35" height="3" rx="1.5" fill="#64748b" opacity="0.3" />
                <rect x="100" y="333" width="40" height="3" rx="1.5" fill="#64748b" opacity="0.3" />
                <rect x="62" y="356" width="85" height="4" rx="2" fill="#10C469" opacity="0.2" />
                <text x="72" y="335" fill="#4ade80" fontSize="7" fontFamily="monospace" opacity="0.6">KTP</text>
                <animateTransform attributeName="transform" type="translate" values="0,0;0,6;0,0" dur="5s" repeatCount="indefinite" />
            </g>

            {/* Shield badge - top left */}
            <g filter="url(#softGlow)">
                <circle cx="110" cy="140" r="30" fill="#ffffff" stroke="url(#blueGrad)" strokeWidth="1.5" opacity="0.9" />
                <path d="M110 120 L125 127 L125 143 Q125 152 110 158 Q95 152 95 143 L95 127 Z" fill="url(#blueGrad)" opacity="0.3" stroke="#34d399" strokeWidth="1" />
                <path d="M104 140 L108 144 L116 136" stroke="#4ade80" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <animateTransform attributeName="transform" type="translate" values="0,0;0,-6;0,0" dur="6s" repeatCount="indefinite" />
            </g>

            {/* Data stream particles */}
            <circle cx="350" cy="200" r="2" fill="#34d399" opacity="0.6">
                <animate attributeName="cy" values="200;160;200" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;0.8;0" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="360" cy="220" r="1.5" fill="#10C469" opacity="0.6">
                <animate attributeName="cy" values="220;170;220" dur="3.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;0.6;0" dur="3.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="140" cy="230" r="2" fill="#34d399" opacity="0.6">
                <animate attributeName="cy" values="230;280;230" dur="4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;0.7;0" dur="4s" repeatCount="indefinite" />
            </circle>
        </svg>
    );
}

export function OcrIllustration() {
    return (
        <svg viewBox="0 0 400 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <defs>
                <linearGradient id="ocrCard" x1="0" y1="0" x2="400" y2="280">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#111827" />
                </linearGradient>
                <linearGradient id="ocrBlue" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#10C469" />
                    <stop offset="100%" stopColor="#34d399" />
                </linearGradient>
            </defs>
            {/* KTP Card */}
            <rect x="20" y="30" width="220" height="140" rx="12" fill="url(#ocrCard)" stroke="#e2e8f0" strokeWidth="1.5" />
            <rect x="35" y="48" width="50" height="55" rx="6" fill="#10C469" opacity="0.2" />
            <text x="45" y="80" fill="#4ade80" fontSize="8" fontFamily="monospace" opacity="0.5">FOTO</text>
            <rect x="95" y="52" width="120" height="5" rx="2.5" fill="#4ade80" opacity="0.4" />
            <rect x="95" y="63" width="90" height="4" rx="2" fill="#64748b" opacity="0.3" />
            <rect x="95" y="73" width="100" height="4" rx="2" fill="#64748b" opacity="0.3" />
            <rect x="95" y="83" width="75" height="4" rx="2" fill="#64748b" opacity="0.3" />
            <rect x="95" y="93" width="110" height="4" rx="2" fill="#64748b" opacity="0.3" />
            <rect x="35" y="120" width="180" height="8" rx="4" fill="#10C469" opacity="0.15" />
            <rect x="35" y="135" width="140" height="6" rx="3" fill="#10C469" opacity="0.1" />
            <text x="35" y="48" fill="#4ade80" fontSize="7" fontFamily="sans-serif" opacity="0.7" fontWeight="bold">KARTU TANDA PENDUDUK</text>

            {/* Scan beam */}
            <rect x="20" y="80" width="220" height="3" rx="1.5" fill="url(#ocrBlue)" opacity="0.6">
                <animate attributeName="y" values="40;155;40" dur="2.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.5s" repeatCount="indefinite" />
            </rect>

            {/* Arrow */}
            <path d="M260 100 L290 100" stroke="#34d399" strokeWidth="2" strokeDasharray="4 3" opacity="0.5">
                <animate attributeName="opacity" values="0.3;0.8;0.3" dur="1.5s" repeatCount="indefinite" />
            </path>
            <path d="M286 95 L295 100 L286 105" stroke="#34d399" strokeWidth="2" fill="none" opacity="0.6" />

            {/* Extracted data */}
            <rect x="310" y="35" width="75" height="20" rx="6" fill="#10C469" opacity="0.2" stroke="#10C469" strokeWidth="0.5" />
            <text x="322" y="49" fill="#4ade80" fontSize="8" fontFamily="monospace">NIK ✓</text>
            <rect x="310" y="65" width="75" height="20" rx="6" fill="#10C469" opacity="0.2" stroke="#10C469" strokeWidth="0.5" />
            <text x="320" y="79" fill="#4ade80" fontSize="8" fontFamily="monospace">NAMA ✓</text>
            <rect x="310" y="95" width="75" height="20" rx="6" fill="#10C469" opacity="0.2" stroke="#10C469" strokeWidth="0.5" />
            <text x="317" y="109" fill="#4ade80" fontSize="8" fontFamily="monospace">ALAMAT ✓</text>
            <rect x="310" y="125" width="75" height="20" rx="6" fill="#22c55e" opacity="0.15" stroke="#22c55e" strokeWidth="0.5" />
            <text x="316" y="139" fill="#22c55e" fontSize="8" fontFamily="monospace">VALID ✓</text>

            {/* Label */}
            <text x="130" y="210" fill="#64748b" fontSize="11" fontFamily="sans-serif" textAnchor="middle">OCR Extraction</text>
            <text x="347" y="175" fill="#64748b" fontSize="9" fontFamily="sans-serif" textAnchor="middle">Data Terstruktur</text>
        </svg>
    );
}

export function LivenessIllustration() {
    return (
        <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <defs>
                <linearGradient id="lvBlue" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#10C469" />
                    <stop offset="100%" stopColor="#34d399" />
                </linearGradient>
            </defs>
            {/* Camera frame */}
            <rect x="80" y="20" width="240" height="200" rx="16" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
            {/* Face circle */}
            <circle cx="200" cy="110" r="60" fill="none" stroke="#10C469" strokeWidth="2" strokeDasharray="10 5" opacity="0.6">
                <animateTransform attributeName="transform" type="rotate" from="0 200 110" to="360 200 110" dur="10s" repeatCount="indefinite" />
            </circle>
            <circle cx="200" cy="110" r="48" fill="#10C469" opacity="0.08" />
            {/* Face features */}
            <circle cx="185" cy="100" r="4" fill="#34d399" opacity="0.7" />
            <circle cx="215" cy="100" r="4" fill="#34d399" opacity="0.7" />
            <path d="M190 125 Q200 133 210 125" stroke="#34d399" strokeWidth="2" fill="none" opacity="0.5" />
            <ellipse cx="200" cy="105" rx="20" ry="3" fill="none" stroke="#34d399" strokeWidth="0.5" opacity="0.3" />
            {/* Motion arrows */}
            <g opacity="0.6">
                <path d="M140 80 Q130 110 140 140" stroke="#4ade80" strokeWidth="1.5" fill="none" strokeDasharray="4 3">
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
                </path>
                <path d="M260 80 Q270 110 260 140" stroke="#4ade80" strokeWidth="1.5" fill="none" strokeDasharray="4 3">
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" begin="0.5s" repeatCount="indefinite" />
                </path>
            </g>
            {/* Tracking dots */}
            <circle cx="160" cy="85" r="3" fill="#34d399">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="240" cy="85" r="3" fill="#34d399">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" begin="0.4s" repeatCount="indefinite" />
            </circle>
            <circle cx="200" cy="160" r="3" fill="#34d399">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" begin="0.8s" repeatCount="indefinite" />
            </circle>
            {/* Status */}
            <rect x="120" y="235" width="160" height="30" rx="15" fill="#ffffff" stroke="#22c55e" strokeWidth="1" />
            <circle cx="145" cy="250" r="5" fill="#22c55e" opacity="0.3" />
            <path d="M142 250 L144 252 L148 248" stroke="#22c55e" strokeWidth="1.5" fill="none" />
            <text x="158" y="254" fill="#22c55e" fontSize="10" fontFamily="sans-serif" opacity="0.8">Liveness Verified</text>

            <text x="200" y="290" fill="#64748b" fontSize="10" fontFamily="sans-serif" textAnchor="middle">Anti-Spoofing Detection</text>
        </svg>
    );
}

export function FaceCompareIllustration() {
    return (
        <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            {/* Left: Selfie */}
            <rect x="20" y="20" width="140" height="170" rx="14" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
            <circle cx="90" cy="90" r="35" fill="#10C469" opacity="0.15" />
            <circle cx="80" cy="82" r="3.5" fill="#34d399" opacity="0.6" />
            <circle cx="100" cy="82" r="3.5" fill="#34d399" opacity="0.6" />
            <path d="M83 102 Q90 110 97 102" stroke="#34d399" strokeWidth="1.5" fill="none" opacity="0.4" />
            <ellipse cx="90" cy="85" rx="25" ry="30" fill="none" stroke="#10C469" strokeWidth="1.5" strokeDasharray="6 3" opacity="0.5" />
            <text x="90" y="155" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="sans-serif">Selfie</text>
            <rect x="50" y="165" width="80" height="5" rx="2.5" fill="#10C469" opacity="0.2" />

            {/* Connection lines */}
            <line x1="165" y1="80" x2="235" y2="80" stroke="#34d399" strokeWidth="1" strokeDasharray="4 3" opacity="0.4">
                <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite" />
            </line>
            <line x1="165" y1="100" x2="235" y2="100" stroke="#34d399" strokeWidth="1" strokeDasharray="4 3" opacity="0.4">
                <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" begin="0.3s" repeatCount="indefinite" />
            </line>
            <line x1="165" y1="120" x2="235" y2="120" stroke="#34d399" strokeWidth="1" strokeDasharray="4 3" opacity="0.4">
                <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" begin="0.6s" repeatCount="indefinite" />
            </line>
            {/* Match circle */}
            <circle cx="200" cy="100" r="18" fill="#ffffff" stroke="#22c55e" strokeWidth="2" />
            <text x="200" y="97" fill="#22c55e" fontSize="9" textAnchor="middle" fontWeight="bold" fontFamily="monospace">99%</text>
            <text x="200" y="108" fill="#22c55e" fontSize="6" textAnchor="middle" fontFamily="sans-serif">MATCH</text>

            {/* Right: ID Photo */}
            <rect x="240" y="20" width="140" height="170" rx="14" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
            <rect x="260" y="40" width="55" height="60" rx="6" fill="#10C469" opacity="0.15" />
            <circle cx="287" cy="62" r="12" fill="#10C469" opacity="0.1" />
            <circle cx="283" cy="58" r="2.5" fill="#34d399" opacity="0.5" />
            <circle cx="291" cy="58" r="2.5" fill="#34d399" opacity="0.5" />
            <rect x="325" y="45" width="40" height="4" rx="2" fill="#4ade80" opacity="0.4" />
            <rect x="325" y="55" width="35" height="3" rx="1.5" fill="#64748b" opacity="0.3" />
            <rect x="325" y="64" width="30" height="3" rx="1.5" fill="#64748b" opacity="0.3" />
            <rect x="260" y="110" width="100" height="4" rx="2" fill="#64748b" opacity="0.2" />
            <rect x="260" y="120" width="80" height="4" rx="2" fill="#64748b" opacity="0.2" />
            <rect x="260" y="130" width="90" height="4" rx="2" fill="#64748b" opacity="0.2" />
            <text x="310" y="155" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="sans-serif">Foto KTP</text>
            <rect x="270" y="165" width="80" height="5" rx="2.5" fill="#10C469" opacity="0.2" />

            <text x="200" y="230" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="sans-serif">Face Comparison</text>
        </svg>
    );
}
