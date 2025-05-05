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
      <div className="bg-gray-900 text-white min-h-screen">
        <Navbar activeSection={activeSection} />
        <div className="overflow-y-auto">
          <section id="home" className="min-h-screen w-full">
            <Home />
          </section>
          <section id="sponsors" className="min-h-screen w-full">
            <Sponsors />
          </section>
          <section id="achievements" className="min-h-screen w-full">
            <Achievements />
          </section>
          <section id="contact" className="min-h-screen w-full">
            <ContactUs />
          </section>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;