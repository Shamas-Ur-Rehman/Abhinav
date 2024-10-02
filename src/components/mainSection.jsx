import React from 'react';
// Custom Linkedin SVG Icon
const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-400 hover:text-[#032388]">
    <path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 1 0-4 0v6H10v-6a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

// Custom Instagram SVG Icon
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-400 hover:text-[#032388]">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37a4 4 0 1 1-7.87 1.63A4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const HeroSection = () => {
  return (
    <div className='bg-[#FFFFFF] min-h-screen min-w-full'>
      <div className="bg-[#FFFFFF] w-full min-h-screen text-white font-sans">
        {/* Sidebar */}
        <div className="fixed left-10 bottom-6 flex flex-col space-y-6">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon />
          </a>
          <div className="w-px h-24 bg-gray-400"></div> {/* Vertical line in sidebar */}
        </div>

        {/* Main Content */}
        <div className="px-10 pt-24 max-w-5xl mx-auto text-left">
          <p className="text-[#032388] text-lg">Hi, my name is</p>
          <h1 className="text-6xl font-bold text-black mt-2">Abhinav Vinod.</h1>
          <h2 className="text-5xl font-bold text-gray-500 mt-2">I solve real world problems with business-driven solutions.</h2>
          <p className="text-gray-400 text-left mt-6 max-w-lg leading-relaxed">
          I am a businessperson hoping to specialize in entrepreneurship and supply chain management. I am currently a senior at  <a href="#">
            <span className="text-[#032388] cursor-pointer">Lone Star High School.</span></a>
          </p>
          <a href="https://docs.google.com/document/d/1pCKKVGNbeLMoDhFPVCzl4S6Vl0J3FLSt79wDQvqw3S0/edit">
          <button className="mt-8 px-6 py-3 border border-[#032388] text-[#032388] rounded hover:bg-[#032388] hover:text-[#FFFF] transition duration-300">
          check out my resume!
          </button></a>
        </div>

        {/* Watermark with vertical line */}
        <div className="fixed right-10 bottom-3 flex flex-col items-center">
          <div className="text-[#6a7692] vertical-text hover:text-[#032388] mb-6">
          vinodabhinav110@gmail.com
          </div>
          <div className="w-px h-24 bg-gray-400"></div> {/* Vertical line at the bottom of watermark */}
        </div>

        <style jsx>{`
          .vertical-text {
            writing-mode: vertical-rl;
            text-orientation: mixed;
          }
        `}</style>
      </div>
    </div>
  );
};

export default HeroSection;
