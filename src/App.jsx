import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import DualIdentity from './components/DualIdentity';
import ProjectsGallery from './components/ProjectsGallery';
import AnantaShowcase from './components/AnantaShowcase';
import ConceptPhilosophy from './components/ConceptPhilosophy';
import AboutSection from './components/AboutSection';
import ContactFooter from './components/ContactFooter';
import userData from '../userProfileData.json';

function App() {
  const profileData = userData?.userProfileData;

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div style={{ background: '#050505', minHeight: '100vh', position: 'relative' }}>
      <Navigation />

      {/* Anchor targets for navigation links */}
      <div id="home" />
      
      <HeroSection />
      
      <DualIdentity />
      
      <ProjectsGallery userData={profileData} />
      
      <AnantaShowcase />
      
      <ConceptPhilosophy />
      
      <AboutSection userData={profileData} />
      
      <KeepInteractionWarm />
      
      <ContactFooter userData={profileData} />
    </div>
  );
}

// Performant hover coordinate tracking utility for modern cards
function KeepInteractionWarm() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll('.surface-card');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        // Only calculate coordinates if mouse is actually inside the card bounding box
        if (
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        ) {
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          card.style.setProperty('--mouse-x', `${x}px`);
          card.style.setProperty('--mouse-y', `${y}px`);
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return null;
}

export default App;
