import Image from 'next/image';

export default function Teachers() {
  const teachers = [
    {
      name: 'Mrs. Sarah Thompson',
      position: 'Director of Admission & Communications',
      bio: 'With over 10 years of experience, Sarah leads our admissions process with warmth and professionalism, helping families navigate every step with confidence.',
      image: '/teacher2.jpg',
      email: 'sarah.thompson@school.edu',
    },
    {
      name: 'Mr. John Doe',
      position: 'Admissions Associate & Extended Day Program Manager',
      bio: 'John supports new families throughout the enrollment process and ensures our extended day program runs smoothly and efficiently.',
      image: '/teacher1.jpg',
      email: 'john.doe@school.edu',
    },
    {
      name: 'Ms. Emily Rivera',
      position: 'Director of Finance & Operations',
      bio: 'Emily oversees school operations and financial planning, ensuring a safe and efficient environment for our community.',
      image: '/teacher3.jpg',
      email: 'emily.rivera@school.edu',
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-[#435370] pb-4">
          We're Here to Help!
        </h2>
        <p className="text-lg text-center text-gray-600 pb-12 max-w-2xl mx-auto">
          Our admissions team is here to support you throughout every step of the application process.
        </p>

        <div className="grid gap-10 sm:grid-cols-2  lg:grid-cols-3">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <div className="relative w-full h-60">
                <Image
                  src={teacher.image || '/placeholder-profile.jpg'}
                  alt={teacher.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{teacher.name}</h3>
                <p className="text-sm text-[#435370]  mb-3"><span className='font-bold'>Titles: </span>{teacher.position}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{teacher.bio}</p>
                {teacher.email && (
                  <p className="mt-4 text-sm font-bold text-[#435370]">
                    Email:
                    <a
                      href={`mailto:${teacher.email}`}
                      className="text-[#24887b] underline hover:text-blue-800"
                    >
                      {teacher.email}
                    </a>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
