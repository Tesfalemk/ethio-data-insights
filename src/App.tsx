import React from 'react';
import Navigation from './components/Navigation';
import { Hero, About, Services, MarketAnalysis, Pricing, Founder, Contact, Footer } from './components/Sections';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <MarketAnalysis />
        <Pricing />
        <Founder />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}

export default App;