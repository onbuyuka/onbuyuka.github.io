import React from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { ScrollProgress } from './components/ScrollProgress';
import { useSmoothScroll } from './components/useSmoothScroll';

const App: React.FC = () => {
  useSmoothScroll();
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/5 px-6 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 font-mono text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Onat Buyukakkus</p>
          <p>55.68°N, 12.57°E · Copenhagen ☁</p>
        </div>
      </footer>
    </>
  );
};

export default App;
