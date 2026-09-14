import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { BackgroundGradients } from './components/BackgroundGradients';
import { MonopoLensScene } from './components/MonopoLensScene';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { TechStack } from './components/TechStack';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  useEffect(() => {
    // Initialize Lenis smooth scroll for the luxurious fluid scrolling feel
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 2.0,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#06070a] text-white selection:bg-[#e09442]/30 selection:text-[#e8c949]">
      {/* Dynamic Layered Ambient Gradients, Precision Grid & Interactive Mouse Spotlight */}
      <BackgroundGradients />

      {/* 3D WebGL Optical Crystal Lens & Smooth Fluid Gradient Shader */}
      <MonopoLensScene />

      {/* Subtle Grain Overlay Texture */}
      <div className="grain-overlay" />

      {/* Monopo-style Smooth Lerped Dot Cursor */}
      <CustomCursor />

      {/* Editorial Sticky Navigation Bar */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative z-10 flex flex-col">
        <Hero />
        <Experience />
        <TechStack />
        <Contact />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
};

export default App;
