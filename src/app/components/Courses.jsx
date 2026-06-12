"use client";

import { courses } from "@/app/data/courses";

export default function Courses() {
  return (
    <div className="products-section product-list max-w-8xl mx-auto px-3.5 sm:px-6 py-10 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="text-center mb-10 md:mb-20">
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-[#279989] uppercase bg-[#279989]/10 rounded-full mb-4">
          Academic Excellence
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
          Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#279989] to-[#44883E]">Course Catalog</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover transformative learning experiences tailored to your academic journey
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {courses.map((course, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
          >
            {/* Card Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#279989]/5 to-[#44883E]/5 opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Card Content */}
            <div className="relative z-10 h-full flex flex-col p-8">
              {/* Course Header */}
              <div className="mb-6">
                <div className="flex justify-between items-start">
                  <h2 className="text-2xl font-bold text-gray-900 pr-4">{course.title}</h2>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#44883E] text-white">
                    {course.credit} CR
                  </span>
                </div>
                <div className="flex items-center mt-2 text-sm text-[#279989]">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {course.campus}
                </div>
              </div>

              {/* Course Details */}
              <div className="flex-grow space-y-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#279989]/10 flex items-center justify-center">
                    <svg className="h-5 w-5 text-[#279989]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Instructor</p>
                    <p className="text-sm font-semibold text-gray-900">{course.instructor}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Department</p>
                    <p className="text-sm font-semibold text-gray-900">{course.department}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Level</p>
                    <p className="text-sm font-semibold text-gray-900">{course.level}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Semester</p>
                    <p className="text-sm font-semibold text-gray-900">{course.semester}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Method</p>
                    <p className="text-sm font-semibold text-gray-900">{course.method}</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8 pt-6 border-t border-gray-200 border-opacity-30">
                <a
                  href={`/courses/${course.id}`}
                  className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-[#279989] to-[#44883E] hover:from-[#279989]/90 hover:to-[#44883E]/90 shadow-sm transition-all duration-300 transform group-hover:scale-[1.02]"
                >
                  View Full Details
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Accent Elements */}
            <div className="absolute top-0 right-0 h-16 w-16 bg-[#44883E]/10 transform rotate-45 translate-x-8 -translate-y-8"></div>
            <div className="absolute bottom-0 left-0 h-16 w-16 bg-yellow-500/10 transform -rotate-45 -translate-x-8 translate-y-8"></div>
          </div>
        ))}
      </div>
    </div>
  );
}