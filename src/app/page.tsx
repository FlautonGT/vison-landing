import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import ClientLogos from "./components/ClientLogos";
import Products from "./components/Products";
import FeaturesShowcase from "./components/FeaturesShowcase";
import Solutions from "./components/Solutions";
import HowItWorks from "./components/HowItWorks";
import Advantages from "./components/Advantages";
import Pricing from "./components/Pricing";
import Certifications from "./components/Certifications";
import DashboardPreview from "./components/DashboardPreview";
import CodeSnippet from "./components/CodeSnippet";
import Investors from "./components/Investors";
import Testimonials from "./components/Testimonials";
import Integration from "./components/Integration";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <ClientLogos />
      <Certifications />
      <Products />
      <FeaturesShowcase />
      <Solutions />
      <HowItWorks />
      <Advantages />
      <DashboardPreview />
      <CodeSnippet />
      <Investors />
      <Pricing />
      <Testimonials />
      <Integration />
      <CTA />
      <Footer />
    </main>
  );
}
