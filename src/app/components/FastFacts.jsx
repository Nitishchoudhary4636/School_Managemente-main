'use client';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  AcademicCapIcon,
  UserGroupIcon,
  ChartBarIcon,
  SparklesIcon,
  BookOpenIcon,
  GlobeAltIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import Slider from 'react-slick';

const facts = [
  {
    label: 'Students Enrolled',
    value: '1,200+',
    icon: UserGroupIcon,
    bgColor: 'bg-[#44883E]/10'
  },
  {
    label: 'Certified Teachers',
    value: '85+',
    icon: AcademicCapIcon,
    bgColor: 'bg-[#279989]/10'
  },
  {
    label: 'Graduation Rate',
    value: '98%',
    icon: ChartBarIcon,
    bgColor: 'bg-yellow-500/10'
  },
  {
    label: 'Clubs & Activities',
    value: '30+',
    icon: SparklesIcon,
    bgColor: 'bg-[#44883E]/10'
  },
  {
    label: 'Library Books',
    value: '15K+',
    icon: BookOpenIcon,
    bgColor: 'bg-[#279989]/10'
  },
  {
    label: 'International Programs',
    value: '5',
    icon: GlobeAltIcon,
    bgColor: 'bg-yellow-500/10'
  },
  {
    label: 'Years of Excellence',
    value: '50+',
    icon: ClockIcon,
    bgColor: 'bg-[#44883E]/10'
  }
];

export default function FastFacts() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          speed: 800
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          speed: 600
        }
      }
    ]
  };

  return (
    <section className="relative py-5 md:py-3 bg-white overflow-hidden">
      {/* Decorative elements */}
      
      <div className="absolute top-20 -right-20 w-64 h-64 rounded-full bg-[#44883E]/10 blur-3xl"></div>
      <div className="absolute bottom-10 -left-20 w-64 h-64 rounded-full bg-[#279989]/10 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-7 md:mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            <span className="relative inline-block">
              <span className="relative z-10">Our Achievements</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-yellow-500/60 -rotate-1 -z-0"></span>
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Quantifying excellence through our institutional milestones
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Slider {...settings} className="px-2">
            {facts.map((fact, index) => (
              <div key={index} className="px-3 focus:outline-none">
                <div className={`group relative h-full p-1 rounded-2xl ${fact.bgColor} transition-all duration-500 hover:scale-105`}>
                  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 h-full flex flex-col items-center border border-gray-100">
                    <div className={`mb-6 p-4 rounded-full ${
                      index % 3 === 0 ? 'bg-[#44883E]/10 text-[#44883E]' : 
                      index % 3 === 1 ? 'bg-[#279989]/10 text-[#279989]' : 
                      'bg-yellow-500/10 text-yellow-500'
                    } shadow-inner group-hover:shadow-md transition-all duration-300`}>
                      <fact.icon className="h-12 w-12 transition-transform duration-500 group-hover:rotate-12" />
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-3 tracking-tight">
                      <span className={
                        index % 3 === 0 ? 'text-[#44883E]' : 
                        index % 3 === 1 ? 'text-[#279989]' : 
                        'text-yellow-500'
                      }>
                        {fact.value}
                      </span>
                    </div>
                    <div className="text-lg font-medium text-gray-700">{fact.label}</div>
                    <div className={`absolute bottom-4 w-16 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                      index % 3 === 0 ? 'bg-[#44883E]' : 
                      index % 3 === 1 ? 'bg-[#279989]' : 
                      'bg-yellow-500'
                    }`}></div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}