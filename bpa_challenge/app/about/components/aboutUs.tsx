import React from 'react';

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center p-8 space-y-8">
      
      {/* Vision and Mission Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        <div className="p-6 border border-gray-300 rounded-lg">
          <h3 className="text-xl font-bold text-gray-700 mb-4">Our Vision</h3>
          <p className="text-gray-600 leading-relaxed">
            To redefine quality and innovation in every product we deliver, inspiring trust and excellence among our customers and partners.
          </p>
        </div>

        <div className="p-6 border border-gray-300 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Our Mission</h3>
          <p className="text-gray-600 leading-relaxed">
            To provide outstanding solutions through a commitment to sustainable practices, creativity, and consistent improvement in every aspect of our business.
          </p>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {['Member 1', 'Member 2', 'Member 3', 'Member 4'].map((member, index) => (
          <div key={index} className="flex flex-col items-center p-6 border border-gray-300 rounded-lg">
            <img 
              src={`https://via.placeholder.com/200x200?text=${member}`} 
              alt={member} 
              className="w-32 h-32 rounded-full mb-4 object-cover"
            />
            <h4 className="text-lg font-semibold text-gray-700">{member}</h4>
            <p className="text-gray-600 text-sm mt-2 text-center">
              Experienced professional with a passion for creating impactful solutions.
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default AboutUs;
