// app/page.tsx
import Hero from "./components/Hero";
import BentoGrid from "./components/BentoGrid";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Hero />
      <BentoGrid />
      {/* We will add the <Pricing /> (Path A/B) here in Step 3 */}
      <Footer />
    </main>
  );
}