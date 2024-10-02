import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import '../styles/AboutMe.css';

const AboutMe = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, 
        threshold: 0.1,
    });

    return (
        <>       
            <div ref={ref} className={`about-section ${inView ? 'animate' : ''}`} id="about">
                
                    <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 {`title ${inView ? 'animate-title' : ''}`}">
                        <span className="text-[#032388] mr-2">01.</span>
                        About Me
                    </h2>

                    <div className="flex flex-col md:flex-row gap-8">
                        <div className={`text-content ${inView ? 'animate-text' : ''} md:w-2/3`}>
                            <p className="text-gray-400 mb-4">
                                My name is Abhinav Vinod, an entrepreneur at heart with a passion for
                                starting businesses and exploring the diverse aspects that make them thrive.
                                I’m fascinated by how each component—whether it’s strategy, operations, marketing,
                                or product development—comes together to create something impactful.
                            </p>
                            <p className="text-gray-400 mb-4">
                                My passion for business started at a young age, when I started analyzing
                                the many different moving parts within businesses. It started with my local
                                <span className="text-[#032388]"> Chinese restaurant</span>,
                                <span className="text-[#032388]"> Hong Kong express</span>, where I observed how various elements—like operations,
                                customer service, and supply chain—came together to create a successful enterprise.
                            </p>
                            <p className="text-gray-400 mb-4">
                                With this passion, I have been able to put forth my passion through many different aspects,
                                creating a <span className="text-[#032388]">non-profit organization</span>, working to bridge the
                                digital divide for the elderly, and <span className="text-[#032388]">researching material science</span> through a business lens.
                            </p>
                            <p className="text-gray-400 mb-4">
                                Some of my experiences:
                            </p>
                            <ul className="grid grid-cols-2 gap-2 text-gray-400">
                                <li className="flex items-center">
                                    <span className="text-[#032388] bullet mr-2">▹</span> Digital Bridges
                                </li>
                                <li className="flex items-center">
                                    <span className="text-[#032388] bullet mr-2">▹</span> Beadbound
                                </li>
                                <li className="flex items-center">
                                    <span className="text-[#032388] bullet mr-2">▹</span> BPA , UNT
                                </li>
                                <li className="flex items-center">
                                    <span className="text-[#032388] bullet mr-2">▹</span> MAD-Learn , MV Realty Group
                                </li>
                            </ul>
                        </div>

                        <div className={`image-container ${inView ? 'animate-image' : ''} md:w-1/3`}>
                            <div className="relative">
                                <div className="absolute inset-0 bg-[#032388] opacity-20 rounded transform translate-x-2 translate-y-2"></div>
                                <img
                                    src="./Shamas.png"
                                    alt="Abhinav Vinod"
                                    className="rounded relative z-10 w-full  h-[1000x]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutMe;
