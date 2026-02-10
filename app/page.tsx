import { Hero } from "@/components/sections/Hero";
import { ContentGrid } from "@/components/sections/ContentGrid";
import { AboutSection } from "@/components/sections/AboutSection";
import { NewsSection } from "@/components/sections/NewsSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ContentGrid />
      <AboutSection />
      <NewsSection />
    </main>
  );
}
