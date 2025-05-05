import { useState, useEffect } from 'react';

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
      {/* Background track effect */}
      <div className="absolute inset-0 bg-gray-900">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute left-0 bottom-24 w-full h-8 bg-green-500/30"></div>
        <div className="absolute left-0 bottom-32 w-full h-1 bg-white"></div>
        <div className="absolute left-0 bottom-40 w-full h-1 bg-white"></div>
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

      {/* Introduction Section */}
      <div className="relative z-20 bg-gradient-to-b from-transparent to-gray-900 pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tighter">
              <span className="text-orange-500">HYBR</span>
              <span className="text-white">UTOS</span>
              <span className="text-green-500 ml-2">RACING</span>
            </h1>

            <div className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-lg border border-gray-700 transform transition-all duration-300 hover:scale-[1.02] hover:border-green-500 hover:shadow-lg hover:shadow-green-500/20">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Welcome to Hybrutos Racing, where innovation meets speed. As a premier racing team at SRM University,
                Chennai, we're not just building cars – we're crafting the future of sustainable motorsports.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Our team of passionate engineering students combines cutting-edge technology with environmental
                consciousness to create high-performance hybrid vehicles that push the boundaries of what's possible
                in the world of racing.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Join us on this exciting journey as we accelerate towards a greener, more efficient future in
                motorsports, one innovation at a time.
              </p>
            </div>
          </div>
        </div>
      </div>

      
      {/* Content Section */}
      <div className="container mx-auto px-4 pt-16 md:pt-24 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tighter">
            <span className="text-orange-500">HYBR</span>
            <span className="text-white">UTOS</span>
            <span className="text-green-500 ml-2">RACING</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-10">
            Engineering Excellence in Hybrid Racing
          </p>

          <div className="grid grid-cols-1 gap-8 mb-12">
            <div className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-lg border border-gray-700 transform transition-all duration-300 hover:scale-105 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/20">
              <h2 className="text-3xl font-bold mb-6 text-green-400">Our Vision</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                At Hybrutos Racing, we're not just building cars – we're crafting the future of sustainable motorsports.
                As a premier racing team at SRM University, Chennai, we combine cutting-edge engineering with environmental
                consciousness to create high-performance hybrid vehicles that push the boundaries of what's possible.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Our team of dedicated engineering students works tirelessly to innovate and perfect hybrid technology,
                participating in prestigious international competitions that test both our technical prowess and our
                commitment to sustainable racing solutions.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Join us on this exciting journey as we accelerate towards a greener, more efficient future in motorsports,
                one innovation at a time.
              </p>
            </div>
          </div>

          <button
            onClick={() => document.getElementById('achievements').scrollIntoView({ behavior: 'smooth' })}
            className="bg-green-500 text-white px-8 py-3 rounded-full font-medium shadow-lg shadow-green-500/30 hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
          >
            Explore Our Achievements
          </button>
        </div>
      </div>

      {/* Speedometer */}
      <div className="absolute bottom-8 right-8 w-24 h-24 rounded-full bg-gray-800 border-4 border-gray-700 flex items-center justify-center overflow-hidden z-30">
        <div className="w-1 h-10 bg-red-500 absolute bottom-12 transform origin-bottom rotate-45 transition-transform duration-1000"></div>
        <div className="text-xs text-center">
          <span className="text-green-500 font-mono font-bold">HYBRUTOS</span>
          <br />
          <span className="text-orange-500 font-mono">RACING</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
