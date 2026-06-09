'use client';
import { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Slider from 'react-slick';

export default function Faculty() {
    const facultyMembers = [
        {
            name: 'Dr. Alice Green',
            position: 'Principal',
            bio: 'Dr. Alice Green brings over 15 years of educational leadership experience,  diverse, and equitable learning environments. Throughout her career, she has been dedicated to building strong relationships between students, parents, and faculty members, ensuring that every student has access to the tools and resources needed to thrive academically. She has worked in both public and private institutions, and her expertise lies in educational management, curriculum development, and policy creation. Dr. Green is also a published author on the subjects of educational reform and leadership development.',
            email: 'alice.green@school.edu',
            phone: '(123) 456-7890',
            image: '/faculty1.jpg',
            degree: 'PhD in Education',
            subjects: ['Educational Leadership', 'Student Affairs'],
            officeHours: 'Mon-Fri: 9 AM - 5 PM',
        },
        {
            name: 'Mr. John Smith',
            position: 'Math Teacher',
            bio: 'Mr. John Smith is a passionate educator with over 12 years of teaching experience in mathematics. He has a deep love for making math accessible and exciting for students of all levels, whether they are struggling to understand basic concepts or are tackling advanced calculus. John uses interactive and hands-on learning techniques to engage his students, including real-world applications that help them see how math is integral to their daily lives. His teaching philosophy is built around the belief that all students can succeed in math with the right support, and he strives to create a classroom environment that fosters curiosity and confidence.',
            email: 'john.smith@school.edu',
            phone: '(123) 456-7891',
            image: '/faculty2.jpg',
            degree: 'MSc in Mathematics',
            subjects: ['Algebra', 'Calculus', 'Geometry'],
            officeHours: 'Mon, Wed: 2 PM - 4 PM',
        },
        {
            name: 'Ms. Maria Lopez',
            position: 'English Teacher',
            bio: 'Ms. Maria Lopez has been an English teacher for over 10 years, specializing in literature, creative writing, and grammar. She has a unique ability to inspire students to engage with literature on a deeper level, encouraging them to analyze texts from different perspectives and relate them to their own lives. Maria believes that reading and writing are fundamental tools for personal expression, and she fosters a classroom environment where students feel safe to share their thoughts and ideas. Her teaching approach combines traditional literary analysis with creative assignments that help students find their voice and improve their writing skills.',
            email: 'maria.lopez@school.edu',
            phone: '(123) 456-7892',
            image: '/faculty3.jpg',
            degree: 'MA in English Literature',
            subjects: ['Literature', 'Creative Writing', 'Grammar'],
            officeHours: 'Tue, Thu: 11 AM - 1 PM',
        },
        {
            name: 'Dr. David Clark',
            position: 'Science Teacher',
            bio: 'Dr. David Clark is a dedicated science teacher with a deep passion for  learners. With a background in physics, chemistry, each subject with an enthusiasm that is contagious. He encourages students to explore the world around them through hands-on experiments, critical thinking, and problem-solving exercises. David’s goal is to provide his students with the tools they need to not only understand scientific concepts but to think like scientists—asking questions, experimenting, and learning from their mistakes. He believes that science should be fun, engaging, and accessible to everyone, regardless of their background or prior knowledge.',
            email: 'david.clark@school.edu',
            phone: '(123) 456-7893',
            image: '/faculty4.jpg',
            degree: 'PhD in Physics',
            subjects: ['Physics', 'Chemistry', 'Environmental Science'],
            officeHours: 'Mon, Fri: 10 AM - 12 PM',
        },
        {
            name: 'Ms. Emma Williams',
            position: 'History Teacher',
            bio: 'Ms. Emma Williams has always been fascinated by history’s ability to tell the story of humanity’s progress, mistakes, and triumphs. She teaches hist dates and facts, but truly understanding the forces that have shaped societies throughout the world. Emma incorporates various teaching methods, including project-based learning, interactive discussions, and historical simulations, to help students better understand the past and how it connects to current events. Her classroom is a space where students are encouraged to think critically about historical narratives and develop their own opinions on the events that shaped the world.',
            email: 'emma.williams@school.edu',
            phone: '(123) 456-7894',
            image: '/faculty5.jpg',
            degree: 'MA in History',
            subjects: ['World History', 'American History'],
            officeHours: 'Wed: 1 PM - 3 PM',
        },
        {
            name: 'Mr. James Lee',
            position: 'Computer Science Teacher',
            bio: 'Mr. James Lee is a computer science educator with a passion for technology and coding. With a background in both softwaremaking the world of programming students, regardless of their prior experience. In his classroom, students learn to think like programmers, tackling problems logically and creatively. James teaches various programming languages such as Python, JavaScript, and Java, and incorporates real-world projects that help students build skills for future careers in tech. He believes that technology is the future, and it is essential for young people to understand the tools that drive innovation in the modern world.',
            email: 'james.lee@school.edu',
            phone: '(123) 456-7895',
            image: '/faculty6.jpg',
            degree: 'MSc in Computer Science',
            subjects: ['Programming', 'Data Structures', 'Web Development'],
            officeHours: 'Tue, Thu: 3 PM - 5 PM',
        },
        {
            name: 'Ms. Olivia Brown',
            position: 'Art Teacher',
            bio: 'Ms. Olivia Brown is a passionate artist and  her creativity into the classroom every day. With a background in fine arts and digital media, Olivia encourages her students to explore their artistic potential in a variety of mediums, from traditional painting and sculpture to digital art and graphic design. She believes that art is an essential part of self-expression and that all students have the potential to be creative. Olivia fosters a supportive environment where students feel free to experiment with their ideas and challenge themselves to think outside the box. Her goal is in their artistic abilities and discover a lifelong passion for creativity.',
            email: 'olivia.brown@school.edu',
            phone: '(123) 456-7896',
            image: '/teacher2.jpg',
            degree: 'MFA in Fine Arts',
            subjects: ['Painting', 'Sculpture', 'Digital Arts'],
            officeHours: 'Mon, Thu: 10 AM - 12 PM',
        },
        {
            name: 'Mr. Liam Taylor',
            position: 'Physical Education Teacher',
            bio: 'Mr. Liam Taylor is an enthusiastic physical education teacher with a background in kinesiology and sports coaching. Liam believes that physical activity is crucial not only for a healthy body but also for a healthy mind. He encourages his students to take part in various sports, outdoor activities, and fitness challenges to improve their overall well-being. His lessons focus on building teamwork, leadership, and sportsmanship, in addition to developing physical strength and coordination. Liam’s mission is to instill a lifelong love for physical activity in his students, empowering them to lead healthy and active lives.',
            email: 'liam.taylor@school.edu',
            phone: '(123) 456-7897',
            image: '/teacher3.jpg',
            degree: 'BA in Kinesiology',
            subjects: ['Physical Education', 'Sports Coaching'],
            officeHours: 'Mon, Wed: 9 AM - 11 AM',
        },

    ];


    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleDetails = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className="py-5 mb-5 md:py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-2">
                <h2 className="text-3xl sm:text-4xl px-4 sm:px-6 font-extrabold text-left text-[#4a6088] mb-6">
                    Meet Our Faculty
                </h2>
                <p className="text-lg text-left text-[#4a6088] px-4 sm:px-6 pb-6 sm:pb-8 md:pb-12">
                    Our faculty members are experienced, dedicated, and passionate about helping students succeed.
                </p>

                <Slider {...settings}>
                    {facultyMembers.map((faculty, index) => (
                        <div key={index} className="px-2.5 md:px-4"> {/* Margin between slides */}
                            <div className="bg-white rounded-lg shadow-md overflow-hidden p-6 h-full">
                                <div className="flex items-start mb-4">
                                    <div className="w-32 h-32 rounded-full overflow-hidden mr-6 flex-shrink-0">
                                        <img
                                            src={faculty.image || '/placeholder-profile.jpg'}
                                            alt={faculty.name}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-[#4a6088]">{faculty.name}</h3>
                                        <p className="text-sm text-[#279989] font-semibold mb-2">{faculty.position}</p>
                                        <p className="text-gray-600 text-sm line-clamp-4">{faculty.bio}</p>
                                    </div>
                                </div>

                                <div>
                                    <button
                                        onClick={() => toggleDetails(index)}
                                        className="flex items-center text-[#279989] hover:text-[#3d6963] focus:outline-none"
                                    >
                                        {expandedIndex === index ? (
                                            <FaChevronUp className="mr-2" />
                                        ) : (
                                            <FaChevronDown className="mr-2" />
                                        )}
                                        {expandedIndex === index ? 'Hide Details' : 'Show Details'}
                                    </button>

                                    {expandedIndex === index && (
                                        <div className="mt-4 text-sm text-gray-600">
                                            <div className="flex items-center mb-2">
                                                <FaPhoneAlt className="mr-2" />
                                                <span>{faculty.phone}</span>
                                            </div>
                                            <div className="flex items-center mb-2">
                                                <FaEnvelope className="mr-2" />
                                                <a href={`mailto:${faculty.email}`} className="underline">
                                                    {faculty.email}
                                                </a>
                                            </div>
                                            <p><strong>Degree:</strong> {faculty.degree}</p>
                                            <p><strong>Subjects:</strong> {faculty.subjects.join(', ')}</p>
                                            <p><strong>Office Hours:</strong> {faculty.officeHours}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

            </div>
        </section>
    );
}
