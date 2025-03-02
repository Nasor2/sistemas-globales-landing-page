import React from 'react';
import TitleSection from '../../components/AbourComponents/TitleSection';
import { statsData } from '../../data/DataAboutUs';
import showcaseImage2 from '../../assets/images/showcase-2.png';
import showcaseImage3 from '../../assets/images/showcase-3.png';

const textSegments = [
  { text: 'Nuestro ', color: 'text-azul-primario' },
  { text: 'Impacto ', color: 'text-blue-400' },
  { text: 'en números ', color: 'text-azul-primario' },
];

const ImpactSection = () => {
  return (
    <div className="flex justify-center w-full bg-white py-8">
      <div className="w-full max-w-5xl px-4 sm:px-6">
        <TitleSection textSegments={textSegments} />

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row mb-10">
          <div className="grid grid-cols-2 gap-x-4 gap-y-5 lg:w-1/2 mb-10 ">
            {statsData.map((stat, index) => (
              <StatCard
                key={index}
                value={stat.value}
                description={stat.description}
              />
            ))}
          </div>

          {/* Images Section */}
          <div className="lg:w-1/2 relative flex justify-center">
            <div className="relative flex flex-col md:flex-row gap-4">
              {/* Primera imagen */}
              <img
                className="w-full md:w-60 h-80 rounded-2xl object-cover"
                src={showcaseImage2}
                alt="Placeholder"
              />

              {/* Segunda imagen */}
              <img
                className="w-full md:w-60 rounded-2xl object-cover relative md:-bottom-27"
                src={showcaseImage3}
                alt="Placeholder"
              />
            </div>
          </div>
        </div>

        {/* Main Text Section  */}
        <div className="text-left text-2xl md:text-3xl font-bold mb-15 max-w-3xl md:max-lg:mt-50 ">
          <span className="text-[#1e3a5f]">Lorem </span>
          <span className="text-red-600">ipsum</span>
          <span className="text-[#1e3a5f]"> </span>
          <span className="text-[#5271a1]">dolor sit amet</span>
          <span className="text-[#1e3a5f]">, consectetur lamip </span>
          <span className="text-red-600">adipiscing</span>
          <span className="text-[#1e3a5f]"> elit id  </span>
          <span className="text-red-600">sapien.</span>
        </div>

        {/* Description  */}
        <div className="text-center text-[#5271a1] text-lg max-w-3xl mx-auto mb-25">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. id sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id congue sapien. adipiscing elit. Curabitur id congue sapien.
        </div>

        {/* Footer Text */}
        <div className="text-center text-4xl font-bold mx-auto">
          <span className="text-[#1e3a5f]">Sistemas </span>
          <span className="text-red-600">Globales.</span>
        </div>
      </div>
    </div>
  );
}


const StatCard = ({ value, description }) => {
  return (
    <div className="flex flex-col justify-center">
      <div className="text-4xl text-[#1e3a5f] font-bold">{value}</div>
      <div className="text-[#5271a1] text-sm font-bold">{description}</div>
    </div>
  );
};

export default ImpactSection;