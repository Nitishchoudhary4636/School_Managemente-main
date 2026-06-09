"use client";

import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkStyle =
    "relative group text-[#163269] block hover:text-[#7ca55d] transition-colors duration-200";
  const underline =
    "absolute left-0 -bottom-1 h-[2px] w-full origin-left scale-x-0 transform bg-[#7ca55d] transition-transform duration-300 group-hover:scale-x-100";

  return (
    <header className="sticky top-0 z-50 bg-gray-50 text-[#163269] shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-8 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="/">SCHOOL MANAGEMENT</a>
        </div>

        <nav className="hidden lg:flex text-sm font-bold space-x-8">
          {[
            { label: "ABOUT", href: "/about" },
            { label: "APPLY", href: "/apply" },
            { label: "ACADEMICS", href: "/academics" },
            { label: "COURSES", href: "/courses" },
            { label: "UNIVERSITY LIFE", href: "/university-life" },
            { label: "CONTACT US", href: "/contact" }
          ].map((item, idx) => (
            <a key={idx} href={item.href} className={navLinkStyle}>
              {item.label}
              <span className={underline}></span>
            </a>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-black focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 visible" : "max-h-0 opacity-0 invisible"
        }`}
      >
        <nav className="px-4 pb-4 text-sm font-bold space-y-2">
          {[
            { label: "ABOUT", href: "/about" },
            { label: "APPLY", href: "/apply" },
            { label: "ACADEMICS", href: "/academics" },
            { label: "COURSES", href: "/courses" },
            { label: "UNIVERSITY LIFE", href: "/university-life" },
            { label: "CONTACT US", href: "/contact" }
          ].map((item, idx) => (
            <a key={idx} href={item.href} className={navLinkStyle}>
              {item.label}
              <span className={underline}></span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
