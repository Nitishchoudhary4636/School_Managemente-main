import React from 'react';

const AboutHero = () => {
  return (
    <section
      className="relative bg-[url('/about-hero.jpg')] bg-cover bg-center bg-no-repeat h-96 md:h-[500px] flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-black/40 bg-opacity-50" />
      <div className="relative z-10 text-center px-6">
        <div className="max-w-2xl mx-auto   rounded-lg p-8  ">
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-md">
            Welcome to Our Website
          </h1>
          
          <div className="mt-6">
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-[#6d8d54] text-white font-medium rounded-md hover:bg-[#64814d] transition duration-300 shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
