import React from 'react';
const ApplyContent = () => {
    return (
        <section className="bg-white text-[#051e4d] pt-7 px-4">
            <div className="max-w-6xl mx-auto space-y-16">

                <div className="text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-5">Welcome to Seven Unique!</h2>
                    <h3 className="text-lg  font-semibold">We are delighted that you are considering Seven Unique for your child’s education.</h3>
                    <p className="mt-4 text-md">
                        The Seven Unique School, in Pottstown, PA, engages students who love learning and families that value education in a supportive community. With an updated approach to a <span className='font-bold'> classic curriculum</span>, Wyndcroft’s faculty guides students through a challenging academic program that provides a firm foundation and cultivates a sense of gratitude and responsibility toward the larger world. Beginning in preschool, students develop critical leadership skills, so that when they reach middle school, they emerge confident, poised, and prepared to <span className='font-bold'> succeed at the best secondary schools </span> and beyond.
                    </p>
                    <p className="mt-4 text-md">
                        We provide superior education to students across Southeastern, PA. We're recognized as the preferred private school near Philadelphia and major surrounding cities by parents and students who've experienced our quality education and culture! In fact, many of our students who've gone on to top colleges and career paths, still recognize Wyndcroft as being the one of the best <span className='font-bold'>private schools in PA</span> to equip them for all of their academic and personal endeavors.
                    </p>
                </div>

                <div className="pt-3 max-w-2xl mx-auto grid gap-4 grid-cols-1 sm:grid-cols-3">
                    <a
                        href="/online-application"
                        className="flex items-center justify-center text-center mx-8 sm:mx-0 px-3 py-3 bg-[#279989] text-white font-semibold shadow-md hover:bg-[#207c77] transition duration-300"
                    >
                        How to Apply
                    </a>
                    <a
                        href="/contact-us"
                        className="flex items-center justify-center text-center mx-8 sm:mx-0 px-3 py-3 bg-yellow-500 text-white font-semibold shadow-md hover:bg-yellow-600 transition duration-300"
                    >
                        Request Information
                    </a>
                    <a
                        href="/"
                        className="flex items-center justify-center text-center mx-8 sm:mx-0 px-6 py-3 bg-[#44883E] text-white font-semibold shadow-md hover:bg-[#4e6e4c] transition duration-300"
                    >
                        Call 610-326-0544 to Schedule Your Visit
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ApplyContent;
