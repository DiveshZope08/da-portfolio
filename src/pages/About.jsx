import React from 'react';

const About = () => {
  return (
    <section className="max-w-6xl mx-auto mt-12 px-6 font-sans text-gray-800">
      <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-10 tracking-tight">
        About Me
      </h2>

      <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 border border-blue-100">
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          Hello! I'm <strong className="text-blue-600">Divesh Zope</strong>, a passionate and driven <strong>Data Analyst</strong> and
          recent graduate in <strong>Electronics & Telecommunication Engineering</strong> with a CGPA of <span className="font-semibold text-green-600">8.25</span> from PES Modern College of Engineering.
        </p>

        <p className="mt-6 text-lg max-w-3xl mx-auto leading-relaxed">
          I have a strong foundation in programming, data visualization, and problem-solving enhanced by hands-on experience in data analysis during my internship. I'm eager to apply analytical techniques and tools like Python, SQL, and Power BI to real-world data challenges.
        </p>

        <div className="mt-12 max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold text-blue-700 mb-6 tracking-wide">Experience</h3>
          <div className="bg-blue-50 p-6 rounded-xl mb-8 shadow-md">
            <p className="text-xl font-medium text-gray-900">Data Analyst Intern</p>
            <p className="text-gray-600 mb-3">Hummingbytes Technologies Pvt Ltd | India | Jun 2024 – Nov 2024</p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2 text-lg">
              <li>Performed data cleaning, transformation, and exploratory data analysis (EDA) using Python (Pandas, NumPy).</li>
              <li>Developed interactive dashboards and reports using Power BI to visualize key business metrics.</li>
              <li>Executed SQL queries to extract, manipulate, and analyze data from relational databases.</li>
              <li>Collaborated with cross-functional teams to identify insights and support data-driven decision-making.</li>
            </ul>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold text-blue-700 mb-6 tracking-wide">Skills & Tools</h3>
          <div className="flex flex-wrap gap-4">
            {[
              "Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "SQL", "MongoDB",
              "Power BI", "Excel", "Data Cleaning", "Data Visualization",
              "Data Modeling", "Statistical Analysis", "Tableau",
              "Google Data Analytics", "Power BI Certification", "Python for Data Science",
              "Communication", "Problem-Solving", "Critical Thinking"
            ].map((skill, idx) => (
              <span
                key={idx}
                className="bg-blue-100 text-blue-900 px-4 py-2 rounded-full text-base font-semibold shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-12">
          <h3 className="text-3xl font-semibold text-blue-700 mb-6 tracking-wide">Certifications</h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-3 text-lg">
            <li>Google Data Analytics Professional Certificate</li>
            <li>Microsoft Power BI Data Analyst Associate</li>
            <li>Python for Data Science and Machine Learning</li>
            <li>Full Stack Development</li>
          </ul>
        </div>

        <div className="max-w-4xl mx-auto mt-12 mb-16">
          <h3 className="text-3xl font-semibold text-blue-700 mb-6 tracking-wide">Education</h3>
          <div className="bg-blue-50 p-6 rounded-xl shadow-md">
            <p className="text-xl font-medium text-gray-900 mb-1">
              Bachelor of Engineering in Electronics & Telecommunication
            </p>
            <p className="text-gray-600 mb-1">PES Modern College of Engineering, Pune</p>
            <p className="text-green-700 font-semibold mb-1 text-lg">CGPA: 8.25</p>
            <p className="text-gray-500 text-sm">Graduated: June 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
