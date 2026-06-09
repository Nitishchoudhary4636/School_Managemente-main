import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-[#04112b] text-white py-8 ">
            <div className="max-w-7xl mx-auto px-4  ">

                <div className="grid md:grid-cols-3  gap-10">

                    <div>
                        <h3 className="text-lg font-semibold mb-4 underline underline-offset-6 decoration-[#7ca55d] decoration-2 ">About Us</h3>
                        <p className="text-sm">
                            We are a premier educational institution dedicated to providing quality education in a nurturing and innovative environment. Our mission is to inspire and equip students with the skills, knowledge, and values needed to succeed in an ever-changing world
                        </p>
                        <p className="text-sm">
                            Our focus is on fostering creativity, critical thinking, and leadership in every student. Through a balanced approach that combines academics, extracurricular activities, and personal development, we prepare our students to become well-rounded individuals and responsible global citizens.
                        </p>
                    </div>

                    <div className='md:text-center'>
                        <h3 className="text-lg font-semibold mb-4 underline underline-offset-6 decoration-[#7ca55d] decoration-2">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/" className="text-sm hover:text-[#7ca55d]">Home</a></li>
                            <li><a href="/apply" className="text-sm hover:text-[#7ca55d]">APPLY</a></li>
                           <li><a href="/courses" className="text-sm hover:text-[#7ca55d]">COURSES</a></li>
                            <li><a href="/university-life" className="text-sm hover:text-[#7ca55d]">UNIVERSITY LIFE</a></li>
                            <li><a href="/academics" className="text-sm hover:text-[#7ca55d]">ACADEMICS</a></li>
                            <li><a href="/contact" className="text-sm hover:text-[#7ca55d]">CONTACT US</a></li>
                        </ul>
                    </div>

                    <div className='md:text-center'>
                        <h3 className="text-lg font-semibold mb-4 underline underline-offset-6 decoration-[#7ca55d] decoration-2">Contact Us</h3>
                        <ul className="space-y-2">
                            <li className="text-sm font-semibold">School Name</li>
                            <li className="text-sm">Address: 123 Education St, City, Country</li>
                            <li className="text-sm">Phone: +123 456 7890</li>
                            <li className="text-sm">✉ Email: info@school.com</li>
                            <li className="text-sm"> Website: <a href="https://www.schoolwebsite.com" className="text-[#7ca55d] hover:underline">www.schoolwebsite.com</a></li>
                            <li className="text-sm"> Office Hours: Monday - Friday, 9:00 AM - 3:00 PM</li>
                            <li className="text-sm"> Find us on the map: <a href="https://www.google.com/maps?q=123+Education+St,+City,+Country" className="text-[#7ca55d] hover:underline">View on Google Maps</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-100 pt-6 text-center">
                    <div className="flex justify-center text-amber-50 space-x-6 mb-4">
                        <a href="https://facebook.com" className="text-white hover:text-blue-500">
                            <FaFacebook />
                        </a>
                        <a href="https://twitter.com" className="text-white hover:text-blue-500">
                            <FaTwitter />
                        </a>
                        <a href="https://instagram.com" className="text-white hover:text-blue-500">
                            <FaInstagram />
                        </a>
                    </div>

                    <p className="text-sm text-gray-400">© 2025 School Name. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
