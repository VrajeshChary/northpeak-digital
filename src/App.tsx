import React from 'react';
import { ScrollProgress } from './components/common/ScrollProgress';
import { BackToTop } from './components/common/BackToTop';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Results } from './components/sections/Results';
import { Pricing } from './components/sections/Pricing';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  return (
    <div className="app-root">
      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Main Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <Services />
        <Results />
        <Pricing />
        <Contact />
      </main>

      {/* Footer with mandatory Digital Heroes credit line */}
      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTop />
    </div>
  );
};

export default App;
