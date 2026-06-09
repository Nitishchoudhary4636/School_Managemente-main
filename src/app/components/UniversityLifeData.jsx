"use client";

import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  {
    title: 'Events and Traditions',
    image: '/Events-Traditions.jpg',
    description:
      'From the exciting Welcome Week to the colorful Cultural Fest, our university is a hub of vibrant events that reflect its diverse student body. Annual traditions like the Homecoming Parade, Spring Fest, and the Lantern Walk bring together thousands of students, alumni, and faculty in celebration. These experiences not only build school spirit but also create a strong sense of community and belonging that lasts far beyond graduation.',
  },
  {
    title: 'Transportation',
    image: '/Transportation.jpg',
    description:
      'Navigating the campus and surrounding city is simple with a wide array of transportation options. Students can access free campus shuttles, rent bicycles, or use discounted public transit passes. The university has also introduced electric scooter stations and designated green paths for pedestrians and cyclists. These eco-friendly options are aimed at promoting sustainability while ensuring convenience and affordability for students.',
  },
  {
    title: 'Social Life',
    image: '/Social-Life.jpg',
    description:
      'Social life on campus is dynamic and inclusive. Every week brings something new — whether it’s outdoor movie nights under the stars, themed dance parties, or mindfulness sessions in the wellness center. Student lounges, game nights, and shared meals at dining halls offer countless chances to meet peers. The diverse events foster cross-cultural friendships and make it easy for every student to find their place.',
  },
  {
    title: 'Student Activities',
    image: '/Student-Activities.jpg',
    description:
      'With over 150 student-led organizations, every passion has a place to grow. Whether you’re into robotics, filmmaking, activism, or jazz music, you’ll find a group that shares your interest. Clubs host workshops, competitions, and networking events throughout the year. Student government also plays a strong role in planning initiatives, giving students real leadership experience and a voice in shaping campus life.',
  },
  {
    title: 'Parking',
    image: '/Parking.jpg',
    description:
      'Parking on campus is streamlined and student-friendly. A range of permit options are available — daily, semester, or annual — with easy online registration. The mobile app helps students find real-time available spaces, reducing the hassle of circling lots. Designated areas for carpooling and electric vehicle charging support sustainable transportation choices.',
  },
  {
    title: 'Dining & Cafeteria',
    image: '/cafetria.jpg',
    description:
      'The campus dining experience is designed with variety and dietary needs in mind. Multiple dining halls and food courts offer international cuisines, with vegetarian, vegan, halal, and allergen-free stations. Local food trucks are often invited on campus, and meal plans are customizable to match student routines. Comfortable seating areas make dining a social experience, perfect for unwinding between classes.',
  },
];


const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

export default function UniversityLife() {
  return (
    <section className="bg-white pt-12 px-3 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className={`flex flex-col lg:flex-row ${
              idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
            } items-center mb-7 md:mb-10 gap-6 lg:gap-10`}
          >
            <h3 className="text-3xl font-bold px-2 underline underline-offset-8 decoration-[#279989] text-[#163269] mb-1  md:mb-4 w-full order-1 lg:hidden">
              {cat.title}
            </h3>

            <div className="w-full lg:w-1/2 order-2 lg:order-none">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full rounded-xl shadow-lg object-cover h-80"
              />
            </div>

            <div className="lg:w-1/2 flex flex-col order-3 lg:order-none">
              <h3 className="hidden lg:block text-3xl font-bold underline underline-offset-8 decoration-[#279989] text-[#163269] mb-4">
                {cat.title}
              </h3>
              <p className="text-[#163269] text-md md:text-lg leading-relaxed">{cat.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}