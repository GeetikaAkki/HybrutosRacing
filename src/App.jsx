// App.jsx
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Sponsors from './components/Sponsors';
import Achievements from './components/Achievements';
import ContactUs from './components/ContactUs';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-gray-900 text-white">
        <Navbar activeSection={activeSection} />
        <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        <section id="home" className="snap-start h-screen w-full relative z-0">
  <Home />
</section>
<section id="sponsors" className="snap-start h-screen w-full relative z-0">
  <Sponsors />
</section>
<section id="achievements" className="snap-start h-screen w-full relative z-0">
  <Achievements />
</section>
<section id="contact" className="snap-start h-screen w-full relative z-0">
  <ContactUs />
</section>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;