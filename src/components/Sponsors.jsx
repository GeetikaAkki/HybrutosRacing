import { useState } from 'react';
import teijinLogo from '../assets/teijin.jpg';
import bussmannLogo from '../assets/bussmann.webp';
import gigavacLogo from '../assets/gigavac.jpeg';
import knLogo from '../assets/k&n.jpg';
import wilwoodLogo from '../assets/wilwood.jpeg';
import continentalLogo from '../assets/continental.png';
import axicutLogo from '../assets/axicut.jpg';
import braidLogo from '../assets/braid.png';
import onlyscrewsLogo from '../assets/onlyscrewsLogo.jpg';

function Sponsors() {
  const [hoveredSponsor, setHoveredSponsor] = useState(null);

  const sponsors = [
    { id: 1, name: "Teijin", logo: teijinLogo, tier: "Platinum", url: "https://www.teijin.com/" },
    { id: 2, name: "Bussmann", logo: bussmannLogo, tier: "Gold", url: "https://www.eaton.com/" },
    { id: 3, name: "Gigavac", logo: gigavacLogo, tier: "Silver", url: "https://www.gigavac.com/" },
    { id: 4, name: "K&N Engineering", logo: knLogo, tier: "Gold", url: "https://www.knfilters.com/" },
    { id: 5, name: "Wilwood", logo: wilwoodLogo, tier: "Silver", url: "https://www.wilwood.com/" },
    { id: 6, name: "Continental AG", logo: continentalLogo, tier: "Platinum", url: "https://www.continental.com/" },
    { id: 7, name: "Axicut", logo: axicutLogo, tier: "Bronze", url: "https://www.axicut.com/" },
    { id: 8, name: "Braid", logo: braidLogo, tier: "Bronze", url: "https://www.braid.es/" },
    { id: 9, name: "OnlyScrews", logo: onlyscrewsLogo, tier: "Silver", url: "https://onlyscrews.in" },
  ];

  const tierColors = {
    Platinum: "from-gray-300 to-white",
    Gold: "from-yellow-600 to-yellow-300",
    Silver: "from-gray-400 to-gray-200",
    Bronze: "from-orange-800 to-orange-400"
  };

  return (
    <div className="min-h-screen w-full pt-20 bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold text-center mb-6">
          <span className="text-orange-500">OUR</span>
          <span className="ml-2 text-green-500">SPONSORS</span>
        </h2>

        <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto mb-12">
          We are grateful for the support of our amazing sponsors who make our racing dreams possible.
        </p>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.id}
                className={`bg-gray-800 rounded-lg overflow-hidden transform transition-all duration-300 ${
                  hoveredSponsor === sponsor.id ? 'scale-105 shadow-lg shadow-green-500/30' : ''
                }`}
                onMouseEnter={() => setHoveredSponsor(sponsor.id)}
                onMouseLeave={() => setHoveredSponsor(null)}
              >
                <div className={`h-3 bg-gradient-to-r ${tierColors[sponsor.tier]}`}></div>
                <div className="p-6">
                  <div className="flex items-center justify-center mb-4">
                    <div
                      className="w-32 h-32 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden cursor-pointer"
                      onClick={() => window.open(sponsor.url, '_blank')}
                    >
                      <img src={sponsor.logo} alt={sponsor.name} className="max-w-full" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center text-white mb-2">{sponsor.name}</h3>
                  <p className="text-center text-gray-400">{sponsor.tier} Sponsor</p>
                  <div className="mt-4 flex justify-center">
                    <span className={`inline-block h-1 bg-green-500 transition-all duration-300 ${
                      hoveredSponsor === sponsor.id ? 'w-24' : 'w-16'
                    }`}></span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Become a sponsor section (you can fill this out later) */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-8 border border-gray-700 transform transition-transform duration-500 hover:border-green-500">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 flex justify-center">
                {/* Optional image or CTA here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
