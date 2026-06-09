import React from 'react';
import { FaGraduationCap, FaLightbulb } from 'react-icons/fa';
const AboutData = () => {
    return (
        <section className="bg-white text-[#04193f] py-16 px-4">
            <div className="max-w-6xl mx-auto space-y-16">

                <div className="text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold">About Seven Unique</h2>
                    <p className="mt-4 text-lg">
                        The Wyndcroft School is a distinguished coeducational private high school located in Pottstown, Pennsylvania. We are committed to empowering students from grades 9 through 12 with the knowledge, skills, and character needed to thrive in college and beyond. Our rigorous academic programs, strong community values, and emphasis on leadership and personal growth prepare students to become confident, responsible, and accomplished individuals ready to make a meaningful impact on the world.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">

                    <div className="flex flex-col items-start bg-gray-100 p-6 rounded-xl shadow-md transition hover:shadow-lg">
                        <div className="flex items-center mb-4">
                            <FaGraduationCap className="h-8 w-8 text-[#279989] mr-3" />
                            <h3 className="text-2xl font-semibold">Our Mission</h3>
                        </div>
                        <p className="text-gray-700">
                            To deliver a dynamic and inclusive learning environment that inspires academic excellence, cultivates leadership, and fosters a lifelong love for learning in every student.
                        </p>
                    </div>

                    <div className="flex flex-col items-start bg-gray-100 p-6 rounded-xl shadow-md transition hover:shadow-lg">
                        <div className="flex items-center mb-4">
                            <FaLightbulb className="h-8 w-8 text-yellow-500 mr-3" />
                            <h3 className="text-2xl font-semibold">Our Vision</h3>
                        </div>
                        <p className="text-gray-700">
                            To become a nationally recognized leader in secondary education, shaping students into compassionate global citizens and critical thinkers ready to lead in a changing world.
                        </p>
                    </div>
                </div>
                <div className="text-left">
                    <h2 className="text-2xl  font-bold">What We Do</h2>
                    <p className="mt-4 text-md font-normal text-[#555d6d]">
                        Beginning in <span className='font-bold text-[#555d6d]'>early education and preschool</span>, students will begin to develop critical <span className='font-bold text-[#555d6d]'>leadership</span> skills. When they reach the Lower and Upper Schools, they emerge more confident, poised, and prepared to succeed. With our <span className='font-bold text-[#555d6d]'>updated approach to a classic curriculum</span>, Wyndcroft's faculty guides students through a rigorous academic program that cultivates a sense of gratitude and responsibility toward the larger world.
                    </p>
                    <p className="mt-4 text-md">
                        We are committed to the success of our students, and we aim to prepare them to live and thrive in a global community. Our Seven Unique graduates learn to create a strong foundation for achievement in the future. We are confident that once they graduate, our students will be prepared to <span className='font-bold text-[#555d6d]'>succeed at the best secondary schools</span> or high education they choose to pursue.
                    </p>
                    <p className="mt-4 text-md">
                        The Wyndcroft School offers far more than a challenging academic curriculum and exceptional <span className='font-bold text-[#555d6d]'> arts</span> and <span className='font-bold text-[#555d6d]'>athletics</span> program for children. We are not only recognized as an academic leader in Pottstown, but many day schools for senior high education across Montgomery, Chester, and Berks counties have also acknowledged the distinct difference in confidence, skillset, and character development from our Wyndcroft graduates.
                    </p>
                    <p className="mt-4 text-md">
                        We understand how challenging finding commendable educational programs for your child may be, but The Wyndcroft School makes it easy and comfortable for you to trust that your child is in the best possible care from day one.
                    </p>
                </div>

                <div className="pt-6 max-w-2xl mx-auto  grid gap-4 grid-cols-1 sm:grid-cols-3">
                    <a
                        href="/online-application"
                        className="block text-center mx-10 sm:mx-0 px-3 py-3 bg-[#279989] text-white font-semibold  shadow-md hover:bg-[#207c77] transition duration-300"
                    >
                        How to Apply
                    </a>
                    <a
                        href="/contact-us"
                        className="block text-center mx-10 sm:mx-0 px-3 py-3 bg-yellow-500 text-white font-semibold  shadow-md hover:bg-yellow-600 transition duration-300"
                    >
                        Request Information
                    </a>
                    <a
                        href="/contact-us"
                        className="block text-center mx-10 sm:mx-0 px-6 py-3 bg-[#44883E] text-white font-semibold  shadow-md hover:bg-[#4e6e4c] transition duration-300"
                    >
                        Schedule Your Visit
                    </a>
                </div>


                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="relative">
                        <img
                            src="/principal.jpg"
                            alt="Principal"
                            className="w-48 h-48 object-cover rounded-full   shadow-xl transition-transform transform hover:scale-105"
                        />

                        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-500 to-transparent opacity-30"></div>
                    </div>

                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold">Message from the Principal</h3>
                        <p className="mt-2 text-lg">
                            "At our school, we believe in holistic development. Our goal is to support students academically and personally
                            so they can thrive in all aspects of life."
                        </p>
                        <p className="mt-4 italic">— Dr. Ayesha Khan, Principal</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutData;
