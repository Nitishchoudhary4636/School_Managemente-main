'use client';

import { useState, useEffect } from 'react';
import { FaGraduationCap, FaBasketballBall, FaUsers, FaArrowRight } from 'react-icons/fa';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/heroimg1.jpg',
      title: 'Welcome to Seven Unique School',
      subtitle: 'Empowering the next generation of leaders.',
    },
    {
      image: '/heroimg2.jpg',
      title: 'Unleash Your Potential',
      subtitle: 'Education for a brighter future.',
    },
    {
      image: '/heroimg4.jpg',
      title: 'Shape Your Future with Us',
      subtitle: 'Prepare for success, today and tomorrow.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  // Slide indicators
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white h-[60vh] sm:h-[70vh] md:h-[80vh] transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url('${slides[currentSlide].image}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 h-full flex flex-col justify-center items-center text-center">
          <div className="w-full px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
              {slides[currentSlide].title}
            </h1>

            <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto animate-fadeIn">
              {slides[currentSlide].subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/apply"
                className="inline-flex items-center justify-center bg-[#6d8d54] hover:bg-[#5a7a42] text-white font-medium px-6 py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 w-auto"
              >
                Apply Now <FaArrowRight className="ml-2" />
              </a>
            </div>

          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-white w-6' : 'bg-white/50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Info Boxes Section */}
      <section className="relative z-30 px-4 sm:px-6 -mt-16 sm:-mt-20 md:-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {/* Graduation Card */}
            <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-2">
              <div className="bg-[#6d8d54]/10 p-4 rounded-full mb-4 group-hover:bg-[#6d8d54]/20 transition">
                <FaGraduationCap className="text-3xl text-[#6d8d54]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Graduation</h3>
              <p className="text-gray-600 text-sm">98% graduation rate</p>

            </div>

            {/* Athletics Card */}
            <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-2 sm:transform sm:scale-105 sm:z-10">
              <div className="bg-[#6d8d54]/10 p-4 rounded-full mb-4 group-hover:bg-[#6d8d54]/20 transition">
                <FaBasketballBall className="text-3xl text-[#6d8d54]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Athletics</h3>
              <p className="text-gray-600 text-sm">15+ sports programs</p>

            </div>

            {/* Social Life Card */}
            <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-2">
              <div className="bg-[#6d8d54]/10 p-4 rounded-full mb-4 group-hover:bg-[#6d8d54]/20 transition">
                <FaUsers className="text-3xl text-[#6d8d54]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Social Life</h3>
              <p className="text-gray-600 text-sm">30+ student clubs</p>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}