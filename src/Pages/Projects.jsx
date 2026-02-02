import React, { useState } from "react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    { category: "web", title: "E-Commerce Platform", client: "FashionHub", tech: ["React", "Node.js", "MongoDB"], desc: "Full-featured online store with admin dashboard" },
    { category: "mobile", title: "Fitness Tracker App", client: "FitLife", tech: ["React Native", "Firebase"], desc: "Cross-platform fitness application with AI coach" },
    { category: "web", title: "CRM System", client: "SalesPro", tech: ["Next.js", "PostgreSQL"], desc: "Customer relationship management for enterprises" },
    { category: "design", title: "Banking UI/UX", client: "TrustBank", tech: ["Figma", "Adobe XD"], desc: "Modern banking interface redesign" },
    { category: "mobile", title: "Food Delivery App", client: "QuickBite", tech: ["Flutter", "Node.js"], desc: "Real-time food ordering and tracking" },
    { category: "web", title: "Learning Management System", client: "EduTech Inc", tech: ["Vue.js", "Laravel"], desc: "Online education platform with video streaming" }
  ];

  const filters = ["all", "web", "mobile", "design"];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">Our <span className="text-blue-600">Projects</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our success stories and innovative solutions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-semibold capitalize transition-all ${
                activeFilter === filter
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {filter === "all" ? "All Projects" : filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-b from-white to-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-blue-500/[0.02] bg-grid"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition">
                      {project.title}
                    </h3>
                    <p className="text-gray-500">Client: {project.client}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button className="w-full py-3 border border-gray-300 rounded-lg font-semibold hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition">
                  View Case Study
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 p-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "150+", label: "Projects Delivered" },
              { value: "50+", label: "Happy Clients" },
              { value: "15+", label: "Countries Served" },
              { value: "99%", label: "Success Rate" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;