import React from "react";

const Contact = () => {
  return (
    <section className="max-w-4xl mx-auto mt-12 px-6">
      <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-12">
        Contact Me
      </h2>

      <div className="bg-gradient-to-r from-blue-50 to-white border border-blue-200 rounded-2xl shadow-xl p-10 max-w-3xl mx-auto">
        <div className="space-y-8">

          {/* Location */}
          <div className="flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-blue-600 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11c1.38 0 2.5-1.12 2.5-2.5S13.38 6 12 6s-2.5 1.12-2.5 2.5S10.62 11 12 11z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z"
              />
            </svg>
            <span className="text-gray-800 text-lg font-medium">Pune, India</span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-blue-600 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5h2l3.6 7.59a1 1 0 01-1.18 1.41l-2.22-.74a11 11 0 005.53 5.53l-.74-2.22a1 1 0 011.41-1.18L19 19v2a2 2 0 01-2 2A16 16 0 013 5z"
              />
            </svg>
            <a
              href="tel:+917391029238"
              className="text-blue-700 hover:text-blue-900 transition-colors text-lg font-semibold"
            >
              +91 73910 29238
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-blue-600 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 12H8m0 0l4-4m-4 4l4 4"
              />
            </svg>
            <a
              href="mailto:diveshzope@gmail.com"
              className="text-blue-700 hover:text-blue-900 transition-colors text-lg font-semibold"
            >
              diveshzope@gmail.com
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-blue-600 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452H16.9v-5.569c0-1.328-.027-3.037-1.85-3.037-1.851 0-2.134 1.445-2.134 2.938v5.668H9.359V9h3.403v1.561h.048c.474-.9 1.637-1.85 3.37-1.85 3.602 0 4.27 2.371 4.27 5.455v6.286zM5.337 7.433a1.963 1.963 0 110-3.926 1.963 1.963 0 010 3.926zm1.685 13.02H3.652V9h3.37v11.453zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.546C0 23.223.792 24 1.771 24h20.451c.98 0 1.778-.777 1.778-1.727V1.727C24 .774 23.204 0 22.225 0z" />
            </svg>
            <a
              href="https://www.linkedin.com/in/divesh-zope"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 transition-colors text-lg font-semibold break-all"
            >
              linkedin.com/in/divesh-zope
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
