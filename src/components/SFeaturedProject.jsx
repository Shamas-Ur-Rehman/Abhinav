import React, { useState } from 'react';
import { useRef } from 'react';
import Navbar from './Navbar';

const ProjectCard = ({ project, isEven }) => (
  <div className={`relative mb-32 ${isEven ? 'text-right' : 'text-left'}`}>
    <div className="relative z-10 w-full md:w-7/12 mb-8">
      <img src={project.image} alt={project.title} className="w-full rounded-lg shadow-xl" />
    </div>
    {/* // text Card */}
    <div className={`absolute top-1/2 ${isEven ? 'left-0' : 'right-0'} w-full md:w-7/12 shadow-[#032388] -mt-20 p-8 bg-white rounded-lg shadow-xl z-20`}>
      <h4 className="text-[#032388] text-sm mb-2">Featured Project</h4>
      <h3 className="text-2xl font-bold text-black mb-4">{project.title}</h3>
      <p className="text-gray-400 mb-4">{project.description}</p>
      <div className="flex flex-wrap mb-4 justify-end">
        {project.technologies.map((tech, index) => (
          <span key={index} className="text-gray-400 text-sm ml-4 mb-2">{tech}</span>
        ))}
      </div>
    </div>
  </div>
);

const SFeaturedProjects = () => {
    const featureProjectRef = useRef(null);


  const [projects] = useState([
    {
      title: "Beadbound",
      description: "BeadBound started as a personal journey—a way for me to express myself and feel more connected to who I am through the art of bracelet-making. At BeadBound, we sell handmade bead bracelets and use the proceeds to host workshops where volunteers create heartfelt bracelets and notes for local elderly homes. So far we’ve made nearly 150 bracelets and contributed 200+ volunteer hours. BeadBound is about more than just jewelry—it’s about building community and spreading joy, one bracelet at a time.",
      image: "data:image/jpeg;base64,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", // Replace with actual image path
      technologies: [],
    },
    // {
    //   title: "Research paper",
    //   technologies: [],
    // },
    
    
  ]);

  return (
    <>
    <Navbar featureProjectRef={featureProjectRef} />
    
    <div ref={featureProjectRef} className="bg-white min-h-screen text-black font-sans p-10" id='work'>
      <div className="max-w-4xl mx-auto">
        
        
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} isEven={index % 2 !== 0} />
        ))}
      </div>
      
    </div>
    </>
  );
};

export default SFeaturedProjects;