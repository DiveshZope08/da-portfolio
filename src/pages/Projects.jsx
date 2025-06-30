import React from 'react';

const projectsData = [
  {
    title: "Sales Data Dashboard",
    description:
      "Developed an interactive Power BI dashboard to visualize monthly sales data, identify trends, and improve forecasting accuracy.",
    tools: ["Power BI", "DAX", "SQL", "Excel"],
    link: "https://github.com/DiveshZope08/sales-dashboard",
  },
  {
    title: "Customer Segmentation Analysis",
    description:
      "Performed customer segmentation using clustering techniques on a retail dataset to tailor marketing strategies.",
    tools: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
    link: "https://github.com/DiveshZope08/Customer-Segmentation-alysis",
  },
  {
    title: "Web Traffic Analysis",
    description:
      "Analyzed web traffic data using SQL and Python to identify user behavior patterns and optimize site performance.",
    tools: ["SQL", "Python", "Seaborn"],
    link: "https://github.com/DiveshZope08/web-traffic-analysis",
  },
  {
    title: "Amazon Prime Video Dashboard using Power BI",
    description:
      "The dataset, sourced from Kaggle, includes information on Amazon Prime Video's movies and TV shows. Key statistics: Total Titles: 9,655, Aggregate Ratings: 25, Array of Genres: 519, Directors on Board: 5,771, Spanning a Century: 1920-2021.",
    tools: ["Power BI", "Data Analysis", "Data Visualization"],
    usage: [
      "Download Power BI desktop application.",
      "Clone this repository.",
      "Open Amazon_Prime_Video_Dashboard.pbix with Power BI.",
      "Interact with the dashboard.",
    ],
    link: "https://github.com/DiveshZope08/Amazon-Prime-Video-Dashboard-using-Power-BI",
  },
  {
    title: "BrewGenius - IoT Coffee Machine",
    description:
      "A smart coffee machine that remembers user preferences and brews personalized coffee. Features include temperature control, water level monitoring, and app-based coffee selection.",
    tools: [
      "ESP32 Microcontroller",
      "Node.js",
      "MySQL",
      "EJS",
      "Sensors",
      "Actuators",
      "Wi-Fi",
      "Bootstrap",
    ],
    link: "https://github.com/DiveshZope08/BrewGenius-Iot-Coffee-Machine", // no link, so it won't redirect
  },
  {
    title: "Charity Application System - Frontend",
    description:
      "A frontend interface designed to manage charity applications effectively. Features include form submissions, donor tracking, and real-time updates.",
    tools: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap"],
    link: "https://github.com/DiveshZope08/Charity-Application", // no link, so it won't redirect
  },
];

const Projects = () => {
  return (
    <section className="max-w-6xl mx-auto mt-12 px-6">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">Projects</h2>

      <div className="grid gap-8 md:grid-cols-2">
        {projectsData.map(({ title, description, tools, link }, idx) => {
          // If no link, render div without href (non-clickable)
          if (!link) {
            return (
              <div
                key={idx}
                className="block bg-white border border-blue-100 rounded-xl shadow-md p-6 cursor-default"
                aria-disabled="true"
              >
                <h3 className="text-2xl font-semibold text-blue-700 mb-3">{title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, i) => (
                    <span
                      key={i}
                      className="text-blue-800 bg-blue-100 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            );
          }

          // Else render clickable link
          return (
            <a
              key={idx}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border border-blue-100 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-blue-700 mb-3">{title}</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, i) => (
                  <span
                    key={i}
                    className="text-blue-800 bg-blue-100 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
