'use client';
import React, { useState } from 'react';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    prefix: '',
    firstName: '',
    lastName: '',
    relationship: '',
    phone: '',
    email: '',
    childFirstName: '',
    childLastName: '',
    dob: '',
    currentGrade: '',
    applyingGrade: '',
    applyingYear: '',
    district: '',
    interest: '',
    note: '',
    referral: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      const updatedReferrals = checked
        ? [...formData.referral, value]
        : formData.referral.filter((r) => r !== value);
      setFormData({ ...formData, referral: updatedReferrals });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const inputClass =
    'w-full p-3 border border-gray-500 rounded-lg hover:shadow-sm hover:shadow-[#279989] focus:outline-none focus:ring-1 focus:ring-[#435370] transition ';

  return (
    <form
      method="get"
      className="max-w-6xl mx-auto py-6 px-8 pt-8 bg-white   space-y-10"
    >
      <header className="text-center space-y-3">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl  font-extrabold text-[#435370]">Interested in learning more about Seven Unique?</h2>
        <p className="text-[#435370] text-lg">
          Please complete the form below and a member of our Admissions team will reach out to you soon.
        </p>

      </header>

      {/* Parent Info */}
      <section className="space-y-4">
        <p><span className="text-red-500">*</span> Required</p>
        <h3 className="text-2xl sm:text-3xl lg:text-3xl text-[#435370] font-semibold  pb-1">Parent / Guardian Information</h3>
        <p className="block font-bold mb-3">Name: <span className="text-red-500">*</span></p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <input name="prefix" type="text" placeholder="Prefix" className={inputClass} onChange={handleChange} />
          <input name="firstName" type="text" placeholder="First Name *" required className={inputClass} onChange={handleChange} />
          <input name="lastName" type="text" placeholder="Last Name *" required className={inputClass} onChange={handleChange} />
        </div>

        <div>
          <label className="block font-bold mt-8 mb-1">Relationship to Child <span className="text-red-500">*</span></label>
          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm text-gray-700">
              <input
                type="radio"
                name="relationship"
                value="Mother"
                onChange={handleChange}
                className="form-radio "
                required
              />
              <span>Mother</span>
            </label>

            <label className="flex items-center space-x-2 text-sm text-gray-700">
              <input
                type="radio"
                name="relationship"
                value="Father"
                onChange={handleChange}
                className="form-radio "
                required
              />
              <span>Father</span>
            </label>

            <label className="flex items-center space-x-2 text-sm text-gray-700">
              <input
                type="radio"
                name="relationship"
                value="Legal Guardian"
                onChange={handleChange}
                className="form-radio "
                required
              />
              <span>Legal Guardian</span>
            </label>

            <label className="flex items-center space-x-2 text-sm text-gray-700">
              <input
                type="radio"
                name="relationship"
                value="Grandparent"
                onChange={handleChange}
                className="form-radio "
                required
              />
              <span>Grandparent</span>
            </label>

            <label className="flex items-center space-x-2 text-sm text-gray-700">
              <input
                type="radio"
                name="relationship"
                value="Other"
                onChange={handleChange}
                className="form-radio "
                required
              />
              <span>Other</span>
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="phone" type="tel" placeholder="Preferred Phone Number *" required className={inputClass} onChange={handleChange} />
          <input name="email" type="email" placeholder="Email Address *" required className={inputClass} onChange={handleChange} />
        </div>
      </section>

      {/* Candidate Info */}
      <section className="space-y-4">
        <h3 className="text-2xl sm:text-3xl lg:text-3xl font-semibold text-[#435370]  pb-1">Candidate Information</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="childFirstName" type="text" placeholder="Child's First Name *" required className={inputClass} onChange={handleChange} />
          <input name="childLastName" type="text" placeholder="Child's Last Name *" required className={inputClass} onChange={handleChange} />
        </div>

        <input name="dob" type="date" placeholder="Date of Birth *" required className={inputClass} onChange={handleChange} />
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
          <input name="currentGrade" type="text" placeholder="Current Grade *" required className={inputClass} onChange={handleChange} />
          <input name="applyingGrade" type="text" placeholder="Grade Applying For *" required className={inputClass} onChange={handleChange} />
          <input name="applyingYear" type="text" placeholder="Year Applying For *" required className={inputClass} onChange={handleChange} />
        </div>
        <input name="district" type="text" placeholder="Current School District *" required className={inputClass} onChange={handleChange} />
      </section>

      {/* Other Info */}
      <section className="space-y-4">
        <h3 className="text-3xl font-semibold text-[#435370]  pb-1">Candidate Information</h3>

        <div>
          <label className="block font-bold mb-1">
            I would... <span className="text-red-500">*</span>
          </label>

          <div >
            <label className="block mb-2">
              <input
                type="radio"
                name="interest"
                value="Like to schedule a tour"
                required
                onChange={handleChange}
                className="mr-2"
              />
              Like to schedule a tour
            </label>

            <label className="block mb-2">
              <input
                type="radio"
                name="interest"
                value="Like someone to contact me"
                required
                onChange={handleChange}
                className="mr-2"
              />
              Like someone to contact me
            </label>

            <label className="block">
              <input
                type="radio"
                name="interest"
                value="Other"
                required
                onChange={handleChange}
                className="mr-2"
              />
              Other
            </label>
          </div>
        </div>


        <textarea
          name="note"
          placeholder="If 'Other' is selected, please describe..."
          className={inputClass}
          rows="4"
          onChange={handleChange}
        />
      </section>

      {/* Referral Source */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold pb-1">How did you hear about The Seven Unique School? *</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            'Mailer or Print Ad',
            'Social Media',
            'Family or Friend Recommendation',
            'Current Student or Family',
            'School Website',
            'Niche',
            'School Employee',
            'Social Media Ad',
            'Other',
          ].map((source) => (
            <label key={source} className="flex items-center space-x-2 text-sm text-gray-700">
              <input
                type="checkbox"
                name="referral"
                value={source}
                onChange={handleChange}
                className="form-checkbox "
              />
              <span>{source}</span>
            </label>
          ))}
        </div>
      </section>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          className="bg-[#5b6a86] hover:bg-[#405170] text-white font-semibold px-8 py-3  shadow-lg transition transform hover:scale-105"
        >
          Submit Your Inquiry
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
