"use client";

import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaChild, FaUserAlt, FaCalendarAlt, FaComment } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [form, setForm] = useState({
    kidName: "",
    dob: "",
    motherName: "",
    fatherName: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-[#163269] mb-4"
          >
            Connect With <span className="text-[#279989]">SevenUnique</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Let's start the journey for your child's bright future. We're here to help!
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-32 h-1.5 bg-gradient-to-r from-[#279989] to-[#166669] mx-auto mt-6 rounded-full"
          ></motion.div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
          >
            <div className="p-8">
              <h2 className="text-2xl font-bold text-[#163269] mb-6 pb-2 border-b border-gray-200">Our Information</h2>
              
              <div className="space-y-8">
                {/* Location */}
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start"
                >
                  <div className="bg-[#279989] bg-opacity-10 p-3 rounded-xl mr-4 flex-shrink-0">
                    <FaMapMarkerAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg">Our Campus</h3>
                    <p className="text-gray-600 mt-1">123 Education Street</p>
                    <p className="text-gray-600">Jagatpura, Jaipur</p>
                    <p className="text-gray-600">Rajasthan 700035</p>
                  </div>
                </motion.div>
                
                {/* Phone */}
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start"
                >
                  <div className="bg-[#279989] bg-opacity-10 p-3 rounded-xl mr-4 flex-shrink-0">
                    <FaPhoneAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg">Call Us</h3>
                    <a href="tel:9831995274" className="text-[#279989] hover:text-[#1f7f78] transition mt-1 block text-lg font-medium">
                      +91 98319 95274
                    </a>
                    <p className="text-gray-500 text-sm mt-1">Mon-Sat, 8:30am to 5:30pm</p>
                  </div>
                </motion.div>
                
                {/* Email */}
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start"
                >
                  <div className="bg-[#279989] bg-opacity-10 p-3 rounded-xl mr-4 flex-shrink-0">
                    <FaEnvelope className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg">Email Us</h3>
                    <a href="mailto:info@heraldkids.com" className="text-[#279989] hover:text-[#1f7f78] transition mt-1 block text-lg font-medium">
                      info@heraldkids.com
                    </a>
                    <p className="text-gray-500 text-sm mt-1">We typically reply within 24 hours</p>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Map Section */}
            <div className="h-80 w-full relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-10 z-10 pointer-events-none"></div>
              <iframe
                title="Herald Kids Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.489573666943!2d75.824341!3d26.9124236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5b5a5a5a5a5%3A0x1a2b3c4d5e6f7g8h!2sJagatpura%2C%20Jaipur%2C%20Rajasthan%20302017!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
          >
            <div className="p-8">
              <h2 className="text-2xl font-bold text-[#163269] mb-2">Admission Enquiry</h2>
              <p className="text-gray-600 mb-8">Please fill this form and our team will contact you shortly</p>
              
              <form method="get" className="space-y-6">
                {/* Kid's Name */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Child's Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaChild className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="kidName"
                      value={form.kidName}
                      onChange={handleChange}
                      required
                      className="block w-full pl-10 pr-3 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#279989] focus:border-transparent transition placeholder-gray-400"
                      placeholder="Enter your child's full name"
                    />
                  </div>
                </div>
                
                {/* Date of Birth */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaCalendarAlt className="text-gray-400" />
                    </div>
                    <input
                      type="date"
                      name="dob"
                      value={form.dob}
                      onChange={handleChange}
                      required
                      className="block w-full pl-10 pr-3 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#279989] focus:border-transparent transition appearance-none"
                    />
                  </div>
                </div>
                
                {/* Parent Names */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Mother's Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUserAlt className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="motherName"
                        value={form.motherName}
                        onChange={handleChange}
                        required
                        className="block w-full pl-10 pr-3 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#279989] focus:border-transparent transition placeholder-gray-400"
                        placeholder="Mother's full name"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Father's Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUserAlt className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="fatherName"
                        value={form.fatherName}
                        onChange={handleChange}
                        required
                        className="block w-full pl-10 pr-3 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#279989] focus:border-transparent transition placeholder-gray-400"
                        placeholder="Father's full name"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Contact Number */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaPhoneAlt className="text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      name="contact"
                      value={form.contact}
                      onChange={handleChange}
                      required
                      pattern="[0-9]{10}"
                      className="block w-full pl-10 pr-3 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#279989] focus:border-transparent transition placeholder-gray-400"
                      placeholder="10-digit mobile number"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Your Message</label>
                  <div className="relative">
                    <div className="absolute top-3 left-3">
                      <FaComment className="text-gray-400" />
                    </div>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="block w-full pl-10 pr-3 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#279989] focus:border-transparent transition placeholder-gray-400"
                      placeholder="Tell us about your child and any specific requirements..."
                    ></textarea>
                  </div>
                </div>
                
                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="submit-btn w-full bg-gradient-to-r from-[#279989] to-[#2b757a] text-white font-semibold py-4 px-6 rounded-lg hover:shadow-lg transition-all relative overflow-hidden"
                >
                  <span className="relative z-10">Submit Enquiry</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
      
      <style jsx>{`
        input[type="date"]::-webkit-calendar-picker-indicator {
          filter: invert(0.5);
          cursor: pointer;
        }
      `}</style>
    </section>
  );
}