import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import AdditionalSkillsSection from "@/components/additional-skills-section";
import ToolsSection from "@/components/tools-section";
import ResumeSection from "@/components/resume-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import { useEffect } from "react";

export default function Portfolio() {
  useEffect(() => {
    // Add scroll effect to header
    const header = document.querySelector('header');
    const handleScroll = () => {
      if (window.scrollY > 100) {
        header?.classList.add('bg-white/98', 'dark:bg-gray-900/98');
      } else {
        header?.classList.remove('bg-white/98', 'dark:bg-gray-900/98');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <AdditionalSkillsSection />
        <ToolsSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
