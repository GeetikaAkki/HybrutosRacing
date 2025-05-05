import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';

function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [carPosition, setCarPosition] = useState(-100);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: slide1,
      title: 'Innovation in Motion',
      description: 'Pushing the boundaries of hybrid technology',
    },
    {
      image: slide2,
      title: 'Engineering Excellence',
      description: 'Where passion meets precision',
    },
    {
      image: slide3,
      title: 'Future of Racing',
      description: 'Leading the way in sustainable motorsports',
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true
    });

    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);

      if (position < 300) {
        setCarPosition(Math.min(50, -100 + position / 2));
      }
    };

    window.addEventListener('scroll', handleScroll);

    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    setTimeout(() => {
      setCarPosition(50);
    }, 500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden pt-20">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gray-900">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      {/* Slideshow */}
      <div className="relative h-[85vh] w-full overflow-hidden -mt-20 z-10">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-5xl font-bold mb-4">{slide.title}</h2>
                <p className="text-2xl">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all ${
                currentSlide === index ? 'bg-green-500 scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Introduction Section - Enhanced with animations */}
      <div className="relative z-20 bg-gradient-to-b from-transparent to-gray-900 pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-extrabold mb-12 tracking-tighter text-center"
                data-aos="fade-down"
                data-aos-delay="200">
              <span className="text-orange-500">HYBR</span>
              <span className="text-white">UTOS</span>
              <span className="text-green-500 ml-2">RACING</span>
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1" data-aos="fade-right" data-aos-delay="400">
                <p className="text-gray-200 text-xl leading-relaxed mb-8">
                  Welcome to Hybrutos Racing, where innovation meets speed at SRM University, Chennai. As a premier student racing team, we're pioneering the future of sustainable motorsports by combining cutting-edge engineering with environmental consciousness. Our mission is to push the boundaries of hybrid technology while nurturing the next generation of automotive innovators.
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <button 
                    onClick={() => document.getElementById('achievements').scrollIntoView({ behavior: 'smooth' })} 
                    className="bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/30"
                    data-aos="fade-up"
                    data-aos-delay="600">
                    Our Achievements
                  </button>
                  <button 
                    onClick={() => document.getElementById('sponsors').scrollIntoView({ behavior: 'smooth' })} 
                    className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
                    data-aos="fade-up"
                    data-aos-delay="700">
                    Meet Our Sponsors
                  </button>
                </div>
              </div>

              <div className="order-1 lg:order-2 flex justify-center" data-aos="fade-left" data-aos-delay="400">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-orange-500/20 rounded-full blur-3xl"></div>
                  <img 
                    src={slide1} 
                    alt="Racing Car" 
                    className="w-full max-w-lg h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Content Section - Reimagined */}
      <div className="container mx-auto px-4 pt-24 pb-32 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Innovation Section */}
            <div className="text-center transform hover:scale-105 transition-all duration-300" 
                 data-aos="fade-up" 
                 data-aos-delay="200">
              <div className="relative mb-6 group">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-green-500 transform group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="absolute -inset-4 bg-green-500/10 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold text-green-400 mb-4">Innovation</h3>
              <p className="text-gray-300 text-lg">Pioneering hybrid technology solutions that define the future of racing</p>
            </div>

            {/* Technology Section */}
            <div className="text-center transform hover:scale-105 transition-all duration-300" 
                 data-aos="fade-up" 
                 data-aos-delay="400">
              <div className="relative mb-6 group">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-orange-500/20 to-orange-500/10 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-orange-500 transform group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div className="absolute -inset-4 bg-orange-500/10 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold text-orange-400 mb-4">Technology</h3>
              <p className="text-gray-300 text-lg">Cutting-edge systems designed for maximum performance and efficiency</p>
            </div>

            {/* Sustainability Section */}
            <div className="text-center transform hover:scale-105 transition-all duration-300" 
                 data-aos="fade-up" 
                 data-aos-delay="600">
              <div className="relative mb-6 group">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-green-500 transform group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="absolute -inset-4 bg-green-500/10 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold text-green-400 mb-4">Sustainability</h3>
              <p className="text-gray-300 text-lg">Committed to eco-friendly racing solutions for a greener tomorrow</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;