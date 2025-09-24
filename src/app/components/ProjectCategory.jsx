"use client";
import { projectsData as projects } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ProjectCategory = ({ filter, currentPage, setCurrentPage }) => {
  // Filter projects
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  //  Pagination state
  const projectsPerPage = 3;

  //  Calculate start & end indexes
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;

  // get current projects
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  return (
    <div className="w-full">
      {/* Projects grid */}
      <div className="mt-[4rem] flex flex-wrap justify-between gap-x-[1rem]  lg:gap-x-0 gap-y-[2rem]">
        {currentProjects.map((project, index) => {
          return (
            <Link
              href={`/${project.category}/${project.slug}`}
              key={index}
              className="flex flex-col m-auto w-[23rem] md:w-[48%] lg:w-[45%] xl:w-[30%]  gap-3"
            >
              {/* Project image */}
              <div className="relative w-full aspect-video rounded-t-lg overflow-hidden bg-gray-200">
                <Image
                  src={project.img[0]}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Project details */}
              <div className="flex flex-col w-full rounded-lg px-4 py-7 shadow-2xl justify-center items-center gap-3">
                <h3 className="text-lg text-[#1B2A57] font-bold">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {project.techUsed.map((tech, index) => (
                    <span
                      className="bg-[#585D6F] px-2 py-1 text-white rounded-lg text-sm"
                      key={index}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center mt-10 gap-3">
        <button
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          onClick={() => setCurrentPage((p) => p - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-1 rounded ${
              currentPage === i + 1
                ? "bg-[#1e5585] text-white font-bold"
                : "bg-gray-200 cursor-pointer"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          onClick={() => setCurrentPage((p) => p + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProjectCategory;
