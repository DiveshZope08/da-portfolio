import React from 'react';
import profilePic from '../assets/divesh.jpeg';
import resumePdf from '../assets/divesh_cv.pdf';

const Home = () => {
  return (
    <section
      className="flex flex-col items-center justify-center text-center mt-24 px-6 max-w-4xl mx-auto font-sans"
      style={{ fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
      aria-label="Introduction section"
    >
      {/* Profile Image */}
      <img
        src={profilePic}
        alt="Portrait of Divesh Zope"
        className="w-40 h-40 rounded-full border-8 border-gradient-to-r from-blue-500 via-purple-600 to-pink-500 shadow-lg object-cover"
        loading="lazy"
        width={160}
        height={160}
      />

      {/* Name */}
      <h1
        className="text-6xl font-extrabold text-gray-900 mt-8 mb-3 tracking-tight"
        style={{ letterSpacing: '-0.02em' }}
      >
        Divesh Zope
      </h1>

      {/* Subtitle */}
      <p className="text-xl text-indigo-600 font-semibold tracking-wide mb-10 sm:mb-12">
        Aspiring Data Analyst & Electronics & Telecommunication Graduate
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        <a
          href={resumePdf}
          download
          className="bg-indigo-600 hover:bg-indigo-700 focus-visible:ring-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 text-white font-semibold px-10 py-3 rounded-full shadow-md transition duration-300 ease-in-out"
          aria-label="Download Resume PDF"
          role="button"
        >
          Download Resume
        </a>
        <a
          href="https://github.com/DiveshZope08"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 hover:bg-gray-800 focus-visible:ring-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 text-white font-semibold px-10 py-3 rounded-full shadow-md transition duration-300 ease-in-out"
          aria-label="Visit GitHub Profile"
          role="button"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/divesh-zope/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 focus-visible:ring-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 text-white font-semibold px-10 py-3 rounded-full shadow-md transition duration-300 ease-in-out"
          aria-label="Visit LinkedIn Profile"
          role="button"
        >
          LinkedIn
        </a>
      </div>

      {/* About / Summary */}
      <div className="text-gray-800 text-lg max-w-3xl leading-relaxed space-y-6 px-4 md:px-0">
        <p>
          I am a dedicated <strong>Data Analyst</strong> with a Bachelor's degree in Electronics and Telecommunication Engineering. I excel at extracting actionable insights from complex datasets to drive impactful business decisions. Skilled in <strong>Python</strong>, <strong>SQL</strong>, <strong>Power BI</strong>, and <strong>Excel</strong>, I have hands-on experience with data cleaning, visualization, and predictive analytics.
        </p>
        <p>
          I hold certifications such as the <strong>Power BI Certificate</strong> and <strong>Python for Data Science</strong>, equipping me with modern analytical techniques and tools essential for solving data-driven problems.
        </p>
        <p>
          I am eager to bring my analytical mindset, technical skills, and problem-solving abilities to a dynamic team and contribute to meaningful data projects that empower business growth.
        </p>
      </div>
    </section>
  );
};

export default Home;
