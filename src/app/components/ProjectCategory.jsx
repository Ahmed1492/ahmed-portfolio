"use client";
import { projectsData as projects } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ProjectCategory = ({ filter, currentPage, setCurrentPage, mode }) => {
  // Filter projects
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category.includes(filter));

  //  Pagination state
  const projectsPerPage = 3;

  //  Calculate start & end indexes
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;

  // get current projects
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  return (
    <div className="w-full ">
      {/* Projects grid */}
      <div className="mt-[4rem]  flex flex-wrap justify-between gap-x-[1rem]  lg:gap-x-0 gap-y-[2rem]">
        {currentProjects.map((project, index) => {
          return (
            <Link
              href={`/${project.category}/${project.slug}`}
              key={index}
              className={`flex flex-col ${
                mode == "dark" ? "bg-whitea" : "bg-white"
              }  m-auto w-[23rem] md:w-[48%] lg:w-[45%] xl:w-[30%]  gap-0 hover:-translate-y-4 duration-500`}
            >
              {/* Project image */}
              <div className="relative w-full aspect-video rounded-t-lg overflow-hidden bg-gray-200 ">
                <Image
                  src={project.img[0]}
                  alt={project.title}
                  fill
                  className=""
                />
              </div>

              {/* Project details */}
              <div
                className={`flex flex-col w-full rounded-b-lg px-4 py-7 min-h-[12rem] ${
                  mode == "dark" ? "bg-gray-700" : "bg-white"
                } shadow-2xl justify-center items-center gap-3`}
              >
                <h3
                  className={`text-lg ${
                    mode === "dark" ? "text-white" : "text-[#1B2A57]"
                  } font-bold`}
                >
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
        {/* Prev button */}
        <button
          onClick={() => setCurrentPage((p) => p - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
      ${
        mode === "dark"
          ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
          : "bg-gray-200 hover:bg-gray-300"
      }
            ${currentPage === 0 ? "" : "cursor-pointer"}

    `}
        >
          Prev
        </button>

        {/* Page numbers */}
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-1 rounded font-medium transition-all duration-300 cursor-pointer
        ${
          currentPage === i + 1
            ? "bg-[#1e5585] text-white font-bold"
            : mode === "dark"
            ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }
      `}
          >
            {i + 1}
          </button>
        ))}

        {/* Next button */}
        <button
          onClick={() => setCurrentPage((p) => p + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
      ${
        mode === "dark"
          ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
          : "bg-gray-200 hover:bg-gray-300"
      }
      ${currentPage === totalPages ? "" : "cursor-pointer"}
    `}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProjectCategory;
