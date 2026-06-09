'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HomeCards() {
  const cards = [
    {
      image: '/card1.jpg',
      title: 'EARLY EDUCATION',
      description: 'Early Childhood and Pre-Kindergarten',
      longDescription:
        'The Early Education program emphasizes hands-on learning experiences, building the foundation for future academic success. Our dedicated teachers work closely with each child to create an inclusive and nurturing environment.',
      bgColor: 'bg-[#279989]',
    },
    {
      image: '/card2.jpg',
      title: 'LOWER SCHOOL',
      description: 'Grades Kindergarten to 8',
      longDescription:
        'The Lower School program focuses on academic growth while also encouraging leadership, respect, and social responsibility. Students engage in a variety of subjects that build a strong academic foundation.',
      bgColor: 'bg-yellow-500',
    },
    {
      image: '/card3.jpg',
      title: 'UPPER SCHOOL',
      description: 'Grades 8 to 12',
      longDescription:
        'Our Upper School provides a rigorous academic environment and offers numerous extracurricular opportunities. Students are prepared for college through specialized guidance and personalized learning experiences.',
      bgColor: 'bg-[#44883E]',
    },
  ];

  const [activeCard, setActiveCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleToggle = (index) => {
    if (isMobile) {
      setActiveCard((prev) => (prev === index ? null : index));
    }
  };

  return (
    <section className=" py-6 md:py-12  bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Improved Header */}
        <div className="text-center  mb-8 px-4">
          <h2 className="text-3xl font-bold text-[#425780] pt-2 mb-4 leading-tight">
            <span className="relative inline-block">
              <span className="relative z-10">The SevenUnique School</span>
              <span className="absolute bottom-0 left-0 w-full h-2 bg-[#a3dfd7] -rotate-1 -z-0"></span>
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            One of the best private day schools in Jaipur, offering exceptional education from early childhood through eighth grade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => {
            const isActive = activeCard === index;

            return (
              <div
                key={index}
                onClick={() => handleToggle(index)}
                className={`group relative rounded-xl overflow-hidden transition-all duration-300 cursor-pointer
                  ${card.bgColor} text-white
                  ${isActive ? 'md:scale-100 scale-[1.02] z-10 shadow-lg' : ''}
                  ${!isMobile ? 'hover:scale-[1.02] hover:shadow-lg' : ''}
                  h-full flex flex-col
                `}
              >
                {/* Card Content */}
                <div className="flex-1 flex flex-col p-6">
                  {/* Short View */}
                  <div className={`flex flex-col items-center text-center transition-all ${isMobile && isActive ? 'hidden' : 'block'} ${!isMobile ? 'md:group-hover:hidden' : ''}`}>
                    <div className="relative w-32 h-32 mb-3 rounded-full border-4 border-white border-opacity-50 overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 200px"
                        priority
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                    <p className="text-white text-opacity-90">{card.description}</p>
                  </div>

                  {/* Expanded View */}
                  <div className={`flex-1 flex flex-col justify-center transition-all ${isMobile ? (isActive ? 'block' : 'hidden') : 'hidden md:group-hover:flex'}`}>
                    <h3 className="text-xl font-bold mb-3 text-center">{card.title}</h3>
                    <p className="text-white text-opacity-90 mb-4 text-center">{card.longDescription}</p>
                    <div className="flex justify-center">
                      <span className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-lg text-sm font-medium">
                        Learn More
                      </span>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white bg-opacity-30"></div>
                <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-white bg-opacity-50"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}