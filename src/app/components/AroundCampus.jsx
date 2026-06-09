'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const campusHighlights = [
  {
    title: 'Modern Library',
    description: 'Thousands of books and quiet study zones.',
    image: '/library.jpg'
  },
  {
    title: 'Art Room',
    description: 'Creative space for painting, sculpture, and crafts.',
    image: '/artroom.jpg'
  },
  {
    title: 'Playground',
    description: 'Safe and fun outdoor space for younger students.',
    image: '/playground.jpg'
  },
  {
    title: 'Science Labs',
    description: 'State-of-the-art physics, chemistry, and biology labs.',
    image: '/sciencelab.jpg'
  },
  {
    title: 'Sports Complex',
    description: 'Well-equipped gym, basketball courts, football field.',
    image: '/sport.jpg'
  },
  {
    title: 'Auditorium',
    description: 'Hosts events, seminars, and cultural performances.',
    image: '/auditorium.jpg'
  },
  {
    title: 'Computer Lab',
    description: 'High-speed internet, modern PCs, and workshops.',
    image: '/computerlab.jpg'
  },
  {
    title: 'Cafeteria',
    description: 'Healthy and delicious meals in a clean  environment.',
    image: '/cafetria.jpg'
  },
];

export default function AroundTheCampus() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section className="relative bg-[#F9F9F7] py-16 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 -right-20 w-64 h-64 rounded-full bg-[#44883E]/10 blur-3xl"></div>
      <div className="absolute bottom-10 -left-20 w-64 h-64 rounded-full bg-[#279989]/10 blur-3xl"></div>
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#44883E]/5 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#279989] mb-3 relative inline-block">
            <span className="relative z-10">Around the Campus</span>
            <span className="absolute bottom-0 left-0 w-full h-2 bg-[#44883E]/20 z-0"></span>
          </h2>
          <div className="w-20 h-1  mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our facilities and get a glimpse of daily life at our school.
          </p>
        </div>

        <Slider {...settings} className="">
          {campusHighlights.map((item, index) => (
            <div key={index} className="px-2.5 focus:outline-none">
              <div className="group h-full bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#279989]/30">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#279989]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 p-4 w-full bg-gradient-to-t from-[#1A3E3A]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-sm font-medium">Explore →</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#279989] mb-2 group-hover:text-[#1A3E3A] transition-colors">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <div className="flex items-center">
                    <div className="w-8 h-[2px] bg-[#44883E] mr-2"></div>
                    <span className="text-xs font-medium text-[#44883E]">Campus Feature</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}