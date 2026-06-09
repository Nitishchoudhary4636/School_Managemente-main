"use client"

import { FaRegEdit, FaFileUpload, FaCreditCard, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
const steps = [
    {
        title: 'Complete Application Form',
        description: 'Start by filling out our secure online application form with your personal, academic, and contact information.',
        icon: <FaRegEdit className="text-[#279989] w-10 h-10" />,
    },
    {
        title: 'Upload Required Documents',
        description: 'Submit scanned copies of your transcripts, ID, recommendation letters, and any other required documents.',
        icon: <FaFileUpload className="text-[#1564ad] w-10 h-10" />,
    },
    {
        title: 'Pay the Application Fee',
        description: 'Make a secure online payment using your preferred method. A receipt will be sent to your email.',
        icon: <FaCreditCard className="text-yellow-600 w-10 h-10" />,
    },
    {
        title: 'Receive Confirmation',
        description: 'After review, you\'ll receive a confirmation email with next steps and how to track your application.',
        icon: <FaCheckCircle className="text-purple-600 w-10 h-10" />,
    },
];

const OnlineData = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const buttonVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                delay: 0.8,
                duration: 0.5
            }
        },
        hover: {
            scale: 1.05,
            transition: { duration: 0.2 }
        },
        tap: {
            scale: 0.98
        }
    };

    return (
        <section className="bg-gray-100" ref={ref}>
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2 
                    className="text-4xl font-extrabold text-center text-[#435370] pt-8 pb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Apply Online in 4 Easy Steps
                </motion.h2>

                <motion.div 
                    className="grid gap-10 grid-cols-1 sm:grid-cols-2"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-xl shadow-lg px-3 py-3 md:px-8 md:py-8  text-center transition-transform hover:-translate-y-2 hover:shadow-2xl"
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                        >
                            <motion.div 
                                className="flex justify-center mb-4"
                                whileHover={{ rotate: 5, scale: 1.1 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                {step.icon}
                            </motion.div>
                            <h3 className="text-xl font-bold mb-2 text-gray-800">{step.title}</h3>
                            <p className="text-gray-600 text-sm">{step.description}</p>
                            <motion.span 
                                className="inline-block mt-4 text-sm text-gray-400"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                Step {index + 1}
                            </motion.span>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div 
                    className="text-center pt-16"
                    variants={buttonVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    whileHover="hover"
                    whileTap="tap"
                >
                    <a
                        href="/contact-us"
                        className="inline-block px-6 py-3 bg-[#5c6f94] text-white font-semibold shadow-md hover:bg-[#435370] transition duration-300 rounded"
                    >
                        Request Information
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default OnlineData;