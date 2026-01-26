import { AmbientBackground } from '@/app/components/ui/AmbientBackground';
import { Hero } from '@/app/components/sections/Hero';
import { Experience } from '@/app/components/sections/Experience';
import { SelectedWorks } from '@/app/components/sections/SelectedWorks';
import { Contact } from '@/app/components/sections/Contact';
import { Footer } from '@/app/components/sections/Footer';

export default function Portfolio() {
  return (
    <main className="relative min-h-screen w-full selection:bg-accent/30 text-foreground">
      {/* Background System */}
      <AmbientBackground />
      
      {/* Sections */}
      <Hero />
      <Experience />
      <SelectedWorks />
      <Contact />
      <Footer />
    </main>
  );
}