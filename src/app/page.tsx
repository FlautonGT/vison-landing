import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import FeaturesShowcase from "./components/FeaturesShowcase";
import Solutions from "./components/Solutions";
import HowItWorks from "./components/HowItWorks";
import Advantages from "./components/Advantages";
import Pricing from "./components/Pricing";
import Integration from "./components/Integration";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Products />
      <FeaturesShowcase />
      <Solutions />
      <HowItWorks />
      <Advantages />
      <Pricing />
      <Integration />
      <CTA />
      <Footer />
    </main>
  );
}
