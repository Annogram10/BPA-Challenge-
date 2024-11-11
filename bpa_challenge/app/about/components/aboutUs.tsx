import React from 'react';

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center p-8 space-y-8 w-screen">
      
      {/* Vision and Mission Section */}
      <div className="grid grid-cols-2 gap-8 w-screen ">
        <div className='grid-span-1 w-full bg-zinc-800 p-8 pt-4 font-semibold text-base-100 text-3xl rounded-r-lg'>
          Our Music
          <p className='text-sm font-normal pt-2'>
          Stage Fright experimented with a fusion of indie rock, blues, and a hint of punk, creating songs that range from gritty, soulful ballads to high-energy anthems. Their music is known for its catchy guitar riffs, driving basslines, and lyrics that capture themes of resilience and rebellion.
          </p>
        </div>
        <div className='flex grid-span-2 mr-8'>
          <div className="flex flex-col w-full items-center p-6 border mr-6 border-gray-300 rounded-lg">
          <img 
            src="/alex.jpeg"
            alt="Alex Ramirez"
            className="w-32 h-32 rounded-full mb-4 object-cover object-center"
          />

              <h4 className="text-lg font-semibold text-gray-700">Alex "Riff" Ramirez</h4>
              <p className="text-gray-600 text-sm text-center mt-2">
              Known for their electrifying solos and daring improvisations, Alex brings a raw edge to the band’s sound. Their passion for experimental riffs fuels Stage Fright’s unique blend of indie rock and blues.
              </p>
            </div>
            <div className="flex flex-col w-full items-center p-6 border border-gray-300 rounded-lg">
              <img 
                src="/devis.jpeg" // Local image path
                alt="Davis Scott"
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <h4 className="text-lg font-semibold text-gray-700">Davis "Echo" Scott</h4>
              <p className="text-gray-600 text-sm text-center mt-2">
              With a powerful, soulful voice, Davis captures the audience with lyrics that tell stories of defiance and resilience. He's the band’s heart, drawing everyone in with charismatic performances and lyrics that connect deeply.
              </p>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 w-screen ">
        <div className='flex grid-span-2 ml-8'>
          <div className="flex flex-col w-full items-center p-6 border mr-6 border-gray-300 rounded-lg">
              <img 
                src="/jordon.jpeg" // Local image path
                alt="Jordan Carter"
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <h4 className="text-lg font-semibold text-gray-700">Jordan "Jet" Carter</h4>
              <p className="text-gray-600 text-sm text-center mt-2">
                  Jordan’s high-energy drumming style is the band’s engine, adding intensity to every track with fast-paced punk-inspired beats. Their dynamic presence on stage keeps the rhythm alive and the energy high.
              </p>
            </div>
            <div className="flex flex-col w-full items-center p-6 border border-gray-300 rounded-lg">
              <img 
                src="/blake.jpeg" // Local image path
                alt="Blake Brooks"
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <h4 className="text-lg font-semibold text-gray-700">Blake "Bassline" Brooks</h4>
              <p className="text-gray-600 text-sm text-center mt-2">
              Blake’s smooth, steady basslines bring balance to the band’s sound, grounding the wilder guitar and drums. Their improvisational style keeps each performance fresh, adding a groove that everyone can feel.
              </p>
            </div>
        </div>
        <div className='grid-span-1 w-full bg-zinc-800 p-8 pt-4 font-semibold text-base-100 text-3xl rounded-l-lg'>
          How We Got Started
          <p className='text-sm font-normal pt-2'>
          Stage Fright formed when a group of friends, each from different musical backgrounds, decided to combine their talents during a late-night jam session. Drawn by a shared passion for energetic performances and raw, unfiltered sound, they quickly bonded and turned their impromptu sessions into a full-fledged band.
          </p>
        </div>
      </div>

    </div>
  );
};

export default AboutUs;
