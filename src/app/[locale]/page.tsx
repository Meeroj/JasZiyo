import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LandingPage from "@/components/LandingPage";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <LandingPage />
      </main>
    </>
  );
}
