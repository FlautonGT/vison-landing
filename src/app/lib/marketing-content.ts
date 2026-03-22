export type ClientLogo = {
  name: string;
  abbr: string;
};

export type Investor = {
  name: string;
};

export type Testimonial = {
  company: string;
  quote: string;
  name: string;
  title: string;
};

export type Certification = {
  label: string;
  sub: string;
};

function readFlag(value: string | undefined, fallback = false) {
  if (value === undefined) {
    return fallback;
  }

  return ["1", "true", "yes", "on"].includes(value.toLowerCase());
}

export const marketingVisibility = {
  showClientLogos: readFlag(process.env.NEXT_PUBLIC_SHOW_CLIENT_LOGOS, false),
  showInvestors: readFlag(process.env.NEXT_PUBLIC_SHOW_INVESTORS, false),
  showTestimonials: readFlag(process.env.NEXT_PUBLIC_SHOW_TESTIMONIALS, false),
  showCertifications: readFlag(process.env.NEXT_PUBLIC_SHOW_CERTIFICATIONS, false),
};

export const clientLogos: ClientLogo[] = [];

export const investors: Investor[] = [];

export const testimonials: Testimonial[] = [];

export const certifications: Certification[] = [];

export const clientFallbackCopy = {
  eyebrow: "Trusted by Indonesian businesses",
  body: "Dipakai untuk onboarding identitas, fraud prevention, dan compliance oleh tim produk, operasional, dan risk di berbagai industri.",
};
