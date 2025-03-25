import React from 'react';

const CompanyLogos = () => {
  const companies = [
    { name: 'Dropbox', logo: '/api/placeholder/200/100' },
    { name: 'Creative Market', logo: '/api/placeholder/200/100' },
    { name: 'Asana', logo: '/api/placeholder/200/100' },
    { name: 'Deliveroo', logo: '/api/placeholder/200/100' },
    { name: 'Amazon', logo: '/api/placeholder/200/100' },
    { name: 'Google', logo: '/api/placeholder/200/100' },
    { name: 'Spotify', logo: '/api/placeholder/200/100' },
    { name: 'Airbnb', logo: '/api/placeholder/200/100' },
    { name: 'Shopify', logo: '/api/placeholder/200/100' },
    { name: 'Nissan', logo: '/api/placeholder/200/100' }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">
          Trusted by 1200+ Popular Companies
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 place-items-center">
        {companies.map((company) => (
          <div 
            key={company.name} 
            className="w-full flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
          >
            <img 
              src={company.logo} 
              alt={`${company.name} logo`} 
              className="max-h-16 max-w-full grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyLogos;