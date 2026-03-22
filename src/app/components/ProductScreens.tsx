import {
  CheckCircle2,
  FileText,
  Fingerprint,
  ScanLine,
  Search,
  Shield,
  ShieldAlert,
} from "lucide-react";

function ScreenBadge({
  label,
  tone = "default",
}: {
  label: string;
  tone?: "default" | "success" | "warn";
}) {
  const toneClasses = {
    default: "border-slate-200 bg-white text-slate-600",
    success: "border-emerald-200 bg-emerald-50 text-emerald-700",
    warn: "border-amber-200 bg-amber-50 text-amber-700",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${toneClasses[tone]}`}
    >
      {label}
    </span>
  );
}

function ScreenSectionTitle({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
        {eyebrow}
      </div>
      <div className="mt-1 text-sm font-semibold text-slate-900">{title}</div>
    </div>
  );
}

export function EkycFlowScreen() {
  return (
    <div className="flex h-full flex-col bg-[linear-gradient(180deg,#ffffff_0%,#f4fbf7_100%)] p-4 text-slate-900">
      <div className="flex items-center justify-between">
        <ScreenSectionTitle eyebrow="e-KYC flow" title="Customer onboarding" />
        <ScreenBadge label="Live" tone="success" />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 text-[10px] font-semibold text-slate-500">
        <div className="rounded-2xl bg-slate-100 px-2 py-2 text-center">KTP</div>
        <div className="rounded-2xl bg-emerald-100 px-2 py-2 text-center text-emerald-700">
          Liveness
        </div>
        <div className="rounded-2xl bg-slate-100 px-2 py-2 text-center">Review</div>
      </div>

      <div className="mt-4 rounded-[1.8rem] border border-slate-200 bg-white p-3 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
        <div className="flex items-center justify-between">
          <ScreenBadge label="Scan ready" />
          <span className="text-[11px] font-medium text-slate-400">Step 02/03</span>
        </div>

        <div className="mt-4 rounded-[1.5rem] bg-slate-950 p-3 text-white">
          <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full border border-emerald-400/30 bg-[radial-gradient(circle_at_top,rgba(52,211,153,0.28),transparent_60%)]">
            <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-emerald-300/40 bg-slate-900">
              <div className="absolute inset-3 rounded-full border border-dashed border-emerald-300/40" />
              <Fingerprint size={42} className="text-emerald-300" />
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between text-xs">
            <span className="text-slate-300">Passive liveness</span>
            <span className="font-semibold text-emerald-300">Confidence 99.1%</span>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-3 py-2.5 text-sm">
            <span className="text-slate-500">NIK match</span>
            <span className="font-semibold text-slate-900">Valid</span>
          </div>
          <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-3 py-2.5 text-sm">
            <span className="text-slate-500">Face match</span>
            <span className="font-semibold text-slate-900">99.98%</span>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-2xl border border-slate-200 bg-white px-3 py-3">
          <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            OCR
          </div>
          <div className="mt-2 text-sm font-semibold text-slate-900">KTP data extracted</div>
        </div>
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-3 py-3">
          <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
            Result
          </div>
          <div className="mt-2 text-sm font-semibold text-emerald-800">Verified</div>
        </div>
      </div>
    </div>
  );
}

export function OcrWorkspaceScreen() {
  return (
    <div className="grid h-full grid-cols-[0.92fr_1.08fr] bg-[linear-gradient(135deg,#f8fbff_0%,#eef9f3_100%)] text-slate-900">
      <div className="border-r border-slate-200 p-4">
        <ScreenSectionTitle eyebrow="Input" title="Capture KTP" />
        <div className="mt-4 rounded-[1.4rem] border border-slate-200 bg-white p-3 shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
          <div className="aspect-[4/5] rounded-[1rem] bg-[linear-gradient(135deg,#1e293b_0%,#0f172a_100%)] p-3 text-white">
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <div className="text-[11px] uppercase tracking-[0.16em] text-slate-300">
                Dokumen
              </div>
              <div className="mt-2 text-base font-semibold">KTP Indonesia</div>
              <div className="mt-4 space-y-2 text-xs text-slate-300">
                <div>NIK</div>
                <div>Nama Lengkap</div>
                <div>Alamat</div>
                <div>Tanggal Lahir</div>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-xs">
              <span>Auto-capture ready</span>
              <ScanLine size={14} className="text-emerald-300" />
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between">
          <ScreenSectionTitle eyebrow="Output" title="Structured OCR result" />
          <ScreenBadge label="Parsed" tone="success" />
        </div>
        <div className="mt-4 rounded-[1.4rem] border border-slate-200 bg-white p-4 shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
          {[
            ["NIK", "3174XXXXXXXXXXXX"],
            ["Nama", "Budi Santoso"],
            ["Tanggal Lahir", "01-01-1990"],
            ["Alamat", "Jakarta Pusat"],
            ["Jenis Kelamin", "Laki-laki"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="flex items-center justify-between border-b border-slate-100 py-3 last:border-b-0"
            >
              <span className="text-sm text-slate-500">{label}</span>
              <span className="text-sm font-semibold text-slate-900">{value}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-600">
            Confidence OCR
            <div className="mt-1 text-lg font-semibold text-slate-900">99.4%</div>
          </div>
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-3 py-3 text-sm text-emerald-700">
            Ready for API response
            <div className="mt-1 text-lg font-semibold text-emerald-800">JSON OK</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FaceMatchScreen() {
  return (
    <div className="flex h-full flex-col bg-[linear-gradient(180deg,#ffffff_0%,#f3f7fb_100%)] p-4 text-slate-900">
      <div className="flex items-center justify-between">
        <ScreenSectionTitle eyebrow="Face match" title="Selfie vs document photo" />
        <ScreenBadge label="1:1 compare" />
      </div>

      <div className="mt-4 grid flex-1 grid-cols-2 gap-3">
        {["Selfie", "Foto dokumen"].map((label, index) => (
          <div key={label} className="rounded-[1.4rem] border border-slate-200 bg-white p-3">
            <div className="text-xs font-semibold text-slate-500">{label}</div>
            <div className="mt-3 flex aspect-square items-center justify-center rounded-[1.1rem] bg-slate-100">
              <div
                className={`flex h-28 w-28 items-center justify-center rounded-full border ${
                  index === 0
                    ? "border-emerald-300 bg-emerald-50"
                    : "border-slate-300 bg-white"
                }`}
              >
                <span className="text-sm font-semibold text-slate-700">Face</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-[1.6rem] bg-slate-950 p-4 text-white">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-300">Similarity score</span>
          <CheckCircle2 size={18} className="text-emerald-300" />
        </div>
        <div className="mt-2 text-4xl font-black tracking-[-0.04em]">99.98%</div>
        <div className="mt-3 h-2 rounded-full bg-white/10">
          <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-emerald-400 to-emerald-300" />
        </div>
      </div>
    </div>
  );
}

export function LivenessScreen() {
  return (
    <div className="flex h-full flex-col bg-[linear-gradient(180deg,#0f172a_0%,#111827_100%)] p-4 text-white">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Liveness session
          </div>
          <div className="mt-1 text-sm font-semibold">Passive detection</div>
        </div>
        <ScreenBadge label="Secure" tone="success" />
      </div>

      <div className="mt-4 flex flex-1 items-center justify-center rounded-[1.8rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(52,211,153,0.18),transparent_45%),linear-gradient(180deg,rgba(15,23,42,0.86),rgba(15,23,42,0.96))]">
        <div className="relative flex h-52 w-52 items-center justify-center rounded-full border border-emerald-300/20">
          <div className="absolute inset-4 rounded-full border border-dashed border-emerald-300/30" />
          <div className="absolute inset-10 rounded-full border border-emerald-300/40" />
          <Fingerprint size={54} className="text-emerald-300" />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
        <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-slate-300">
          Blink
          <div className="mt-1 font-semibold text-white">Detected</div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-slate-300">
          Replay
          <div className="mt-1 font-semibold text-white">Blocked</div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-slate-300">
          Verdict
          <div className="mt-1 font-semibold text-emerald-300">Live</div>
        </div>
      </div>
    </div>
  );
}

export function DeepfakeScreen() {
  return (
    <div className="grid h-full grid-cols-2 gap-3 bg-[linear-gradient(180deg,#f8fafc_0%,#eef6f1_100%)] p-4 text-slate-900">
      <div className="rounded-[1.4rem] border border-slate-200 bg-white p-3">
        <div className="flex items-center justify-between">
          <ScreenSectionTitle eyebrow="Live input" title="Original feed" />
          <ScreenBadge label="Safe" tone="success" />
        </div>
        <div className="mt-4 flex aspect-[4/5] items-center justify-center rounded-[1rem] bg-slate-100">
          <Shield size={46} className="text-emerald-500" />
        </div>
      </div>
      <div className="rounded-[1.4rem] border border-amber-200 bg-white p-3">
        <div className="flex items-center justify-between">
          <ScreenSectionTitle eyebrow="Attack analysis" title="Synthetic signal" />
          <ScreenBadge label="Review" tone="warn" />
        </div>
        <div className="mt-4 flex aspect-[4/5] items-center justify-center rounded-[1rem] bg-amber-50">
          <ShieldAlert size={46} className="text-amber-500" />
        </div>
      </div>
      <div className="col-span-2 rounded-[1.4rem] border border-slate-200 bg-white p-4">
        <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
          Model checks
        </div>
        <div className="mt-3 grid grid-cols-3 gap-3 text-sm">
          <div className="rounded-2xl bg-slate-50 px-3 py-3 text-slate-600">
            Face swap
            <div className="mt-1 font-semibold text-slate-900">No signal</div>
          </div>
          <div className="rounded-2xl bg-slate-50 px-3 py-3 text-slate-600">
            Injection
            <div className="mt-1 font-semibold text-slate-900">Monitored</div>
          </div>
          <div className="rounded-2xl bg-emerald-50 px-3 py-3 text-emerald-700">
            Final verdict
            <div className="mt-1 font-semibold text-emerald-800">Pass / Review</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function WatchlistScreen() {
  return (
    <div className="flex h-full flex-col bg-[linear-gradient(180deg,#ffffff_0%,#f7fafc_100%)] p-4 text-slate-900">
      <div className="flex items-center justify-between">
        <ScreenSectionTitle eyebrow="Watchlist screening" title="AML and sanctions check" />
        <ScreenBadge label="Real-time" />
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-[1.3rem] border border-slate-200 bg-white px-3 py-3 shadow-[0_10px_24px_rgba(15,23,42,0.05)]">
        <Search size={16} className="text-slate-400" />
        <span className="text-sm text-slate-500">Cari nama atau identitas...</span>
      </div>

      <div className="mt-4 grid gap-3">
        {[
          ["PPATK / DTTOT", "No match found", "success"],
          ["UN sanctions", "No match found", "success"],
          ["Internal risk list", "Manual review optional", "default"],
        ].map(([label, value, tone]) => (
          <div
            key={label}
            className="flex items-center justify-between rounded-[1.3rem] border border-slate-200 bg-white px-4 py-3 shadow-[0_10px_24px_rgba(15,23,42,0.05)]"
          >
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                {label}
              </div>
              <div className="mt-1 text-sm font-semibold text-slate-900">{value}</div>
            </div>
            <ScreenBadge
              label={tone === "success" ? "Pass" : "Review"}
              tone={tone === "success" ? "success" : "default"}
            />
          </div>
        ))}
      </div>

      <div className="mt-auto rounded-[1.4rem] border border-slate-200 bg-slate-950 p-4 text-white">
        <div className="flex items-center gap-2">
          <FileText size={16} className="text-emerald-300" />
          <div className="text-sm font-semibold">Compliance response ready</div>
        </div>
        <div className="mt-2 text-sm text-slate-300">
          Hasil screening siap diteruskan ke workflow fraud prevention dan audit log.
        </div>
      </div>
    </div>
  );
}
