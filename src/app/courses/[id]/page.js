import { notFound } from "next/navigation";
import { courses } from "@/app/data/courses";
import {
  HiOutlineBookOpen,
  HiBuildingLibrary,
  HiMapPin,
  HiAcademicCap,
  HiUser,
  HiCalendar,
  HiCpuChip,
  HiPuzzlePiece,
  HiArrowDownTray,
  HiStar,
  HiClock,
  HiGlobeAlt
} from 'react-icons/hi2';

export default async function CourseDetail({ params }) {
  const course = courses.find((c) => c.id === params.id);

  if (!course) return notFound();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0fdf4] to-[#ecfdf5]">
      {/* Floating decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#279989]/10"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(40px)',
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-3 sm:px-6 pb-10 pt-10 md:pt-20 z-10">
        {/* Course Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-5 py-2 text-xs font-bold tracking-widest text-[#279989] bg-white/80 backdrop-blur-sm border border-[#279989]/20 rounded-full mb-6 shadow-lg uppercase">
            {course.department}
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
            <span className="relative inline-block">
              <span className="absolute -inset-4 bg-gradient-to-r from-[#279989] to-[#44883E] rounded-xl opacity-20 blur-xl"></span>
              <span className="relative bg-gradient-to-r from-[#279989] to-[#44883E] bg-clip-text text-transparent">
                {course.title}
              </span>
            </span>
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-2xl mx-auto">
            {[

              { icon: HiAcademicCap, text: course.level },
              { icon: HiCpuChip, text: `${course.credit} Credits` },

            ].map((item, index) => (
              <span
                key={index}
                className="flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
              >
                <item.icon className="mr-2 h-4 w-4 text-[#279989]" />
                <span className="text-sm font-medium text-gray-700">{item.text}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Course Content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-2xl overflow-hidden border border-white/20">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Course Image */}
            <div className="relative h-full min-h-[300px] group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#279989]/30 to-[#44883E]/30 z-10 mix-blend-overlay"></div>
              <img
                src={course.img}
                alt={course.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <div className="flex flex-wrap gap-3">
                  <div className="bg-[#279989] text-white px-5 py-2 rounded-full text-sm font-bold tracking-wide shadow-lg flex items-center">
                    <HiCalendar className="mr-2 h-4 w-4" />
                    {course.semester}
                  </div>
                  <div className="bg-gradient-to-r from-amber-400 to-amber-500 text-white px-5 py-2 rounded-full text-sm font-bold tracking-wide shadow-lg flex items-center">
                    <HiGlobeAlt className="mr-2 h-4 w-4" />
                    {course.method}
                  </div>
                </div>
              </div>
            </div>

            {/* Course Details */}
            <div className="py-10 px-3 sm:px-8">
              <div className="space-y-8">
                {/* Instructor Card */}
                <div className="flex items-start gap-5 p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-inner border border-gray-100 hover:shadow-md transition-all">
                  <div className="flex-shrink-0 p-3 bg-[#279989]/10 rounded-xl shadow-inner">
                    <HiUser className="h-7 w-7 text-[#279989]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500">Professor</h3>
                    <p className="text-2xl font-bold text-gray-900 mt-2">{course.instructor}</p>
                    <p className="text-sm text-gray-500 mt-1">Department of {course.department}</p>
                  </div>
                </div>

                {/* Course Info Grid - Modified for responsive layout */}
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                  {[
                    { icon: HiOutlineBookOpen, title: "Course Code", value: course.id },
                    { icon: HiBuildingLibrary, title: "Department", value: course.department },
                    { icon: HiAcademicCap, title: "Level", value: course.level },
                    { icon: HiCpuChip, title: "Credits", value: `${course.credit} Credits` }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row sm:items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1"
                    >
                      <div className="flex-shrink-0 p-2.5 bg-[#279989]/10 rounded-lg sm:mb-0 mb-2 mx-auto sm:mx-0">
                        <item.icon className="h-5 w-5 text-[#279989]" />
                      </div>
                      <div className="text-center sm:text-left">
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">{item.title}</h3>
                        <p className="text-lg font-semibold text-gray-900 mt-1">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Course Highlights */}
                <div className="pt-8 border-t border-gray-200">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 flex items-center">
                    <HiStar className="mr-2 h-4 w-4 text-amber-400" />
                    Course Highlights
                  </h3>
                  <ul className="space-y-4">
                    {course.details?.map((detail, index) => (
                      <li
                        key={index}
                        className="flex items-start group hover:bg-gray-50/50 p-3 rounded-lg transition-all"
                      >
                        <span className="flex-shrink-0 mt-1.5 mr-3 block h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#279989] to-[#44883E] group-hover:animate-pulse"></span>
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors text-lg leading-relaxed">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Course Description */}
          <div className="py-12 px-3 md:px-8 border-t border-gray-200 bg-gradient-to-br from-white to-gray-50">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                <div>
                  <h2 className="text-4xl font-extrabold text-gray-900 mb-2 relative inline-block">
                    <span className="relative z-10">Course Overview</span>
                    <span className="absolute bottom-0 left-0 w-full h-3 bg-[#279989]/20 -z-0 transform -translate-y-1.5"></span>
                  </h2>
                  <p className="text-lg text-gray-600">Everything you need to know about this course</p>
                </div>
                {course.syllabus && (
                  <a
                    href={course.syllabus}
                    download
                    className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-gradient-to-r from-[#279989] to-[#44883E] hover:from-[#279989]/90 hover:to-[#44883E]/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                  >
                    <HiArrowDownTray className="mr-3 h-6 w-6" />
                    Download Full Syllabus
                  </a>
                )}
              </div>

              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p className="leading-relaxed text-xl">
                  {course.description}
                </p>

                {/* Additional decorative elements */}
                <div className="relative my-10">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-300/30"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="px-4 bg-white text-lg font-medium text-gray-500">
                      <HiPuzzlePiece className="h-6 w-6 text-[#279989] inline-block mr-2" />
                      Course Modules
                    </span>
                  </div>
                </div>

                {/* Sample modules (you can replace with real data) */}
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Fundamentals & Core Concepts",
                    "Advanced Techniques",
                    "Practical Applications",
                    "Case Studies & Real-world Examples"
                  ].map((module, index) => (
                    <div
                      key={index}
                      className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1"
                    >
                      <div className="flex items-center mb-3">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#279989]/10 text-[#279989] font-bold mr-3">
                          {index + 1}
                        </span>
                        <h3 className="text-lg font-bold text-gray-900">{module}</h3>
                      </div>
                      <p className="text-gray-600">
                        Comprehensive coverage of {module.toLowerCase()} with hands-on exercises and assessments.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}