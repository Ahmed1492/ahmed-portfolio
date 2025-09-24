"use client";
import React, { useState } from "react";
import ProjectCategory from "./ProjectCategory";
const ProjectsSection = () => {
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const handleFilter = (category) => {
    setFilter(category);
    setCurrentPage(1);
  };

  const categories = [
    { category: "all", label: "All" },
    { category: "react", label: "React.js" },
    { category: "nextjs", label: "Next.js" },
    { category: "node", label: "Node.js" },
    { category: "ui", label: "UI / Front-end Design" },
  ];

  return (
    <div className="w-full    px-[12%] py-10 scroll-mt-20" id="work">
      <h4 className="text-lg text-center mb-2 font-ovo">My Projects</h4>
      <h2 className="text-5xl text-center mb-2 font-ovo ">My latest work</h2>

      <p className="text-center max-w-2xl mx-auto mb-12 font-ovo ">
        Welcome to my portfolio a showcase of responsive web projects built with
        precision and creativity.
      </p>
      <div>
        {/* Filters */}
        <div className=" flex-wrap sm:flex-nowrap flex justify-center gap-2">
          {categories.map(({ category, label }) => (
            <button
              key={category}
              onClick={() => handleFilter(category)}
              className={`px-3  text-sm md:text-base whitespace-nowrap py-2 rounded-md shadow-sm cursor-pointer transition 
              ${
                filter === category
                  ? "bg-[#1e5585] text-white font-bold"
                  : "hover:bg-gray-100"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <ProjectCategory
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          filter={filter}
        />
      </div>
    </div>
  );
};

export default ProjectsSection;
