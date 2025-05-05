import { useState, useEffect } from 'react';

// Placeholder images for each year (replace with actual images if available)
const yearImages = {
  2016: 'https://via.placeholder.com/200x200?text=2016',
  2017: 'https://via.placeholder.com/200x200?text=2017',
  2018: 'https://via.placeholder.com/200x200?text=2018',
  2019: 'https://via.placeholder.com/200x200?text=2019',
  2020: 'https://via.placeholder.com/200x200?text=2020',
  2021: 'https://via.placeholder.com/200x200?text=2021',
};

function Achievements() {
  const [selectedYear, setSelectedYear] = useState(2021);
  const [isAnimating, setIsAnimating] = useState(false);
  
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

  return (
    <div className="h-full w-full pt-20 overflow-y-auto bg-gray-900">
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
        <div className={`flex flex-col md:flex-row items-center justify-center bg-gray-800 border border-gray-700 rounded-xl shadow-lg p-8 w-full px-4 mb-12 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}> 
          <img 
            src={yearImages[selectedYear]} 
            alt={`Achievements for ${selectedYear}`} 
            className="w-48 h-48 object-cover rounded-lg mb-6 md:mb-0 md:mr-8 border-4 border-green-500 shadow-md"
          />
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-green-400 mb-4">{selectedYear} Awards</h3>
            <ul className="space-y-3">
              {achievementsData[selectedYear].map((achievement, idx) => (
                <li key={idx} className="bg-gray-900 rounded-md p-4 border border-gray-700 flex items-center">
                  <span className="inline-block w-8 h-8 bg-orange-500 text-white font-bold rounded-full flex items-center justify-center mr-4">{idx + 1}</span>
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