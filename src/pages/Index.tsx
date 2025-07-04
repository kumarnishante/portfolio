
import { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectSection from '@/components/ProjectSection';
import SkillSection from '@/components/SkillSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const isMobile = useIsMobile();
  
  // Enable smooth animations on page load with optimized observer
  useEffect(() => {
    document.body.classList.add('theme-transition');
    
    // Initialize animations for elements that enter viewport
    // Use fewer animations and simpler effects on mobile
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            // Once element is animated, stop observing it to improve performance
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { 
        // Use different thresholds based on device type
        threshold: isMobile ? 0.05 : 0.1,
        // Lower margin on mobile to reduce the number of elements being processed at once
        rootMargin: isMobile ? '0px 0px 10px 0px' : '0px 0px 50px 0px',
      }
    );

    // On mobile, only observe major sections to reduce the animation load
    if (isMobile) {
      document.querySelectorAll('section').forEach((section) => {
        observerRef.current?.observe(section);
      });
    } else {
      // On desktop, we can afford to animate more elements
      document.querySelectorAll('section, .project-card, .skill-badge').forEach((element) => {
        observerRef.current?.observe(element);
      });
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [isMobile]);

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <SkillSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
