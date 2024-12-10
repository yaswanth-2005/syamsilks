import Features from "@/components/features";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Newsletter from "@/components/newsletter";
import ProductShowcase from "@/components/product-showcase";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-purple-50">
      <Header />
      <main>
        <Hero />
        <ProductShowcase />
        <Features />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
