import React, { useState } from 'react';
const ExperienceItem = ({ company, position, period, details, isActive }) => (
  <div className={`mb-8 ${isActive ? 'block' : 'hidden'}`}>
    <h3 className="text-xl font-semibold text-black mb-1">
      {position} <span className="text-[#032388]">@ {company}</span>
    </h3>
    <p className="text-gray-400 mb-4">{period}</p>
    <ul className="text-gray-400">
      {details.map((detail, index) => (
        <li key={index} className="flex items-start mb-2">
          <span className="text-[#032388] mr-2 mt-1">▹</span>
          <span>{detail}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Experiences = () => {
  const [activeTab, setActiveTab] = useState('Digital Bridges');

  const experiences = [
    {
      company: 'Digital Bridges',
      position: 'Founder ',
      period: '',
      details: [
        'Created a system called Whats Your Passion?, a database designed to help students explore career paths by accessing interviews and testimonials from professionals across various industries.',
        'Made the platform accessible to students, providing insights and inspiration to help them identify their passions and future career directions.',
        'Founded and led a volunteering program to teach digital literacy to seniors, improving connectivity and independence for over 30 individuals.',
        'Designed and delivered training on email, video calls, online banking, and internet safety, fostering tech confidence and community engagement.'

      ],
    },
    {
      company: 'Beadbound',
      position: 'Co-Founde',
      period: '',
      details: [
        'Founded a non-profit organization that creates and sells handmade bracelets to finance community workshops, positively impacting local residents.',
        'Organized and led bracelet-making workshops, providing materials and inspiring creativity among children.',
        'Coordinated the creation and distribution of over 100 personalized notes and bracelets to residents in senior living facilities, enhancing community connection.',
        'Contributed over 200 volunteer hours, demonstrating a commitment to service and support for the elderly.',
    ],
    },
    {
      company: 'BPA',
      position: 'Chapter President',
      period: '',
      details: [
        'Lead and guided 170+ members through BPA competitions leading to a 21% increase in members and qualifiers.',
        'Hosted workshops for qualifying regional/state members to practice and improve their events',
        'Hosted workshops for qualifying regional/state members to practice and improve their events',
      ],
    },
    {
      company: 'UNT',
      position: 'Student Researcher ',
      period: '',
      details: [
        'Conducted research on the fundamentals of additive material manufacturing under the supervision of Dr. Raj Banerjee’s team.',
        'Collaborated in developing a coding program to calculate and display stress-strain curves, identifying critical points of material failure such as fractures and breakage.',
        'Generated a comprehensive 9-10 page report on the Impact of Crystal Structure Anisotropy on the Mechanical Properties of Iron and Aluminum Single Crystals, exploring how structural differences influence material strength and performance.',
      ],
    },
    {
      company: 'MAD-Learn',
      position: 'Student  Intern',
      period: '',
      details: [
        'Analyzed and tested mobile applications and datasets using Java, ensuring optimal functionality and performance.',
        'Spearheaded app development projects, managing tasks and workflows through Agile methodologies',
        'Conducted comprehensive user testing, refining app features based on feedback to enhance user experience and product quality.',
        'Created data-driven presentations and implemented new program formats, emphasizing key insights from extensive data analysis to support decision-making and product improvements.',
      ],
    },
    {
      company: 'MV Realty Group',
      position: 'Student Intern',
      period: '',
      details: [
        'Oversaw the design and execution of curriculum for a realtor training program, ensuring the effective onboarding and development of new real estate professionals.',
        'Developed and delivered presentations for a volunteer initiative supporting elderly communities, aligning with the program’s goals and outreach efforts.',
        'Assisted in managing day-to-day operational tasks, streamlining processes and ensuring efficient workflow across the team.',
        'Provided comprehensive support during open houses, coordinating logistics, facilitating client interactions, and enhancing property showcasing efforts.',
      ],
    },
    {
      company: 'AV closet',
      position: 'Owner of',
      period: '',
      details: [
        'Built a profitable clothing and shoe resale business on Depop and Poshmark, generating over $1,200 in profit within six months.',
        'Gained expertise in digital marketing, product photography, and online sales strategies to drive consistent revenue.',
        'Managed sourcing, cleaning, and repairing inventory, developing practical skills in supply chain management.',
        'Applied market research and pricing strategies to optimize sales and maintain competitiveness.',
      ],
    },
    {
        company: 'Frisco Ignite',
        position: 'Organizer',
        period: '',
        details: [
            'Planned and executed a TED Talk STEAM event, engaging over 400 students with innovative presentations and interactive discussions.',
            'Collaborated with a large team to organize workshops that educated young students on the fundamentals of STEAM, fostering interest and creativity in the subject.',
            'Delivered a presentation on artificial intelligence, highlighting its relevance and applications in todays world.',
            'Managed all aspects of venue selection and overall event organization, ensuring a seamless experience for participants and speakers alike.',
        ],
      },
  ];

  return (
    <section id='expirance'>
    <div className="bg-[#FFFF] min-h-screen text-black font-sans p-10" >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">
          <span className="text-[#032388] mr-2">02.</span>
          Some of my Experiences
        </h2>
        
        <div className="flex">
          <div className="w-1/4 border-l border-[#032388]">
            {experiences.map((exp, index) => (
              <button
                key={index}
                className={`block w-full text-left py-3 px-4 ${
                  activeTab === exp.company
                    ? 'text-[#032388] border-l-2 border-[#032388] font-semibold rounded bg-gray-300'
                    : 'text-gray-400 hover:bg-gray-300 rounded  hover:text-[#032388]'
                }`}
                onClick={() => setActiveTab(exp.company)}
              >
                {exp.company}
              </button>
            ))}
          </div>
          
          <div className="w-3/4 pl-8">
            {experiences.map((exp, index) => (
              <ExperienceItem
                key={index}
                {...exp}
                isActive={activeTab === exp.company}
              />
            ))}
          </div>
        </div>
      </div>
      
    </div>
    </section>
  );
};

export default Experiences;