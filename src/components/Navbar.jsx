import { useState } from 'react';
import logo from '../assets/logo.png';

function Navbar({ activeSection }) {
  const [navOpen, setNavOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setNavOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-md shadow-green-400/20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Hybrutos Racing Logo" className="h-12" />
            <h1 className="text-xl md:text-2xl font-bold text-white">
              <span className="text-orange-500">HYBR</span>
              <span className="text-white">UTOS</span>
              <span className="text-green-500 ml-2">RACING</span>
            </h1>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setNavOpen(!navOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {navOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop navigation */}
          <ul className="hidden md:flex space-x-8">
            {['home', 'sponsors', 'achievements', 'contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className={`relative px-1 py-2 font-medium capitalize transition-all duration-300 ${
                    activeSection === item ? 'text-green-400' : 'text-white hover:text-green-400'
                  }`}
                >
                  {item}
                  {activeSection === item && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-400 transform scale-x-100 transition-transform duration-300"></span>
                  )}
                </button>
              </li>
            ))}
            {/* Brochure download link */}
            <li className="flex items-center">
              <a
                href="/Brochure.pdf"
                download
                className="relative px-1 py-2 font-medium capitalize transition-all duration-300 text-white hover:text-green-400 flex items-center"
                style={{ lineHeight: 'normal' }}
              >
                Brochure
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile navigation */}
        {navOpen && (
          <div className="md:hidden mt-4 bg-white/10 backdrop-blur-lg rounded-lg p-4 animate-fadeIn">
            <ul className="space-y-3">
              {['home', 'sponsors', 'achievements', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className={`w-full text-left px-4 py-2 rounded-md font-medium capitalize ${
                      activeSection === item ? 'bg-green-500 text-white' : 'text-white hover:bg-green-500/20'
                    }`}
                  >
                    {item}
                  </button>
                </li>
              ))}
              {/* Brochure download link for mobile */}
              <li>
                <a
                  href="/Brochure.pdf"
                  download
                  className="block w-full text-left px-4 py-2 rounded-md font-medium capitalize text-white hover:bg-green-500/20"
                >
                  Brochure
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
