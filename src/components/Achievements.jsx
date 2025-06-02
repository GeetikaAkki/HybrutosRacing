import { useState, useEffect } from 'react';
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';
import op1 from '../assets/op1.jpg';
import op2 from '../assets/op2.jpg';
import op3 from '../assets/op3.jpg';
import fhl from '../assets/fhl.png';
import fil from '../assets/fil.png';

// Define consistent competition images
const competitionImages = {
  'Formula Hybrid': fhl,
  'Formula Imperial': fil,
};

function Achievements() {
  const [selectedYear, setSelectedYear] = useState(2021);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredAward, setHoveredAward] = useState(null);

  // Group achievements by year
  const achievementsData = {
    2016: [
      { competition: "Formula Hybrid", award: "First in Hybrid in Progress (HIP)" },
    ],
    2017: [
      { competition: "Formula Hybrid", award: "Podium Finish" },
      { competition: "Formula Hybrid", award: "First in Design Presentation" },
      { competition: "Formula Hybrid", award: "General Motors Award for demonstrating the true spirit of Formula Hybrid" },
    ],
    2018: [
      { competition: "Formula Hybrid", award: "Promising performance by the team" },
    ],
    2019: [
      { competition: "Formula Imperial", award: "Overall 2nd in Hybrid Category" },
      { competition: "Formula Imperial", award: "1st in Static events" },
      { competition: "Formula Imperial", award: "Award for the Best Hybrid" },
      { competition: "Formula Imperial", award: "Endurance of 21 km Runner-up" },
      { competition: "Formula Imperial", award: "Best Design" },
      { competition: "Formula Imperial", award: "Best B-plan & Cost" },
    ],
    2020: [
      { competition: "Formula Hybrid", award: "Podium Finish" },
      { competition: "Formula Hybrid", award: "Best in Engineering Design" },
    ],
    2021: [
      { competition: "Formula Hybrid", award: "Podium Finish" },
    ],
  };

  const years = Object.keys(achievementsData).sort((a, b) => b - a);

  const handleYearChange = (year) => {
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedYear(year);
      setIsAnimating(false);
    }, 300);
  };

  const renderImages = (year) => {
    if (year === '2019') {
      return (
        <div className="flex flex-col space-y-4 w-96">
          <div className="relative group">
            <img 
              src={slide1}
              alt="2019 Slide 1"
              className="w-full h-48 object-cover rounded-lg border-4 border-green-500 shadow-md transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="relative group">
            <img 
              src={op1}
              alt="2019 Op 1"
              className="w-full h-48 object-cover rounded-lg border-4 border-green-500 shadow-md transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
      );
    }
    let image, alt;
    switch (year) {
      case '2021':
        image = slide1;
        alt = '2021 Slide 1';
        break;
      case '2020':
        image = slide2;
        alt = '2020 Slide 2';
        break;
      case '2018':
        image = op2;
        alt = '2018 Op 2';
        break;
      case '2017':
        image = op1;
        alt = '2017 Op 1';
        break;
      case '2016':
        image = op3;
        alt = '2016 Op 3';
        break;
      default:
        image = slide3;
        alt = 'Default Slide 3';
    }
    return (
      <div className="relative group w-96">
        <img 
          src={image}
          alt={alt}
          className="w-full h-96 object-cover rounded-lg border-4 border-green-500 shadow-md transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    );
  };

  return (
    <div className="min-h-screen w-full pt-20 bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold text-center mb-6">
          <span className="text-green-500">OUR</span>
          <span className="ml-2 text-orange-500">ACHIEVEMENTS</span>
        </h2>

        <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto mb-12">
          Over the years, Hybrutos Racing has garnered numerous accolades in prestigious competitions.
        </p>

        {/* Year selector */}
        <div className="flex justify-center mb-8 bg-gray-800 rounded-full p-2 max-w-xl mx-auto shadow-lg shadow-green-500/10">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => handleYearChange(year)}
              className={`px-4 py-2 mx-1 rounded-full transition-all duration-300 ${
                year === selectedYear.toString()
                  ? 'bg-green-500 text-white font-bold'
                  : 'bg-transparent text-gray-400 hover:text-white'
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Rectangular card for selected year */}
        <div className={`flex flex-col md:flex-row items-start justify-center bg-gray-800 border border-gray-700 rounded-xl shadow-lg p-8 w-full px-4 mb-12 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          {renderImages(selectedYear.toString())}
          <div className="flex-1 md:ml-8 mt-6 md:mt-0">
            <h3 className="text-2xl font-bold text-green-400 mb-4">{selectedYear} Awards</h3>
            <ul className="space-y-3">
              {achievementsData[selectedYear].map((achievement, idx) => (
                <li 
                  key={idx} 
                  className="bg-gray-900 rounded-md p-4 border border-gray-700 flex items-center transform transition-all duration-300 hover:scale-105 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/20"
                  onMouseEnter={() => setHoveredAward(idx)}
                  onMouseLeave={() => setHoveredAward(null)}
                >
                  <span className="inline-block w-8 h-8 rounded-full flex items-center justify-center mr-4 bg-white">
                    <img
                      src={competitionImages[achievement.competition]}
                      alt={achievement.competition}
                      className="w-8 h-8 object-contain rounded-full"
                    />
                  </span>
                  <div>
                    <div className="font-semibold text-white">{achievement.competition}</div>
                    <div className="text-green-400">{achievement.award}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Achievement counter with gamification */}
        <div className="mt-12 py-8 bg-gray-800 rounded-lg max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-gray-400 mb-2">Total Achievements</p>
            <div className="text-5xl font-bold text-white mb-4">
              {Object.values(achievementsData).reduce((total, yearAchievements) => total + yearAchievements.length, 0)}
            </div>
            <div className="flex justify-center space-x-16">
              <div className="text-center">
                <p className="text-gray-400 text-sm">Competitions</p>
                <p className="text-2xl font-bold text-green-500">2</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-sm">Years</p>
                <p className="text-2xl font-bold text-orange-500">{years.length}</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-sm">Podiums</p>
                <p className="text-2xl font-bold text-yellow-500">4</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievements;
