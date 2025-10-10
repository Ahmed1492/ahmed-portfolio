"use client";
import React from "react";
import { assets, projectsData } from "@/assets/assets";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import Image from "next/image";
import ProjectGallery from "../../components/ProjectGallery";
import { useAppContext } from "@/app/context/AppContext";

const SingleProject = ({ params }) => {
  const unwrappedParams = React.use(params);
  const { category, slug } = unwrappedParams;

  const project = projectsData.find(
    (pro) => pro.slug === slug && pro.category === category
  );

  const { mode , setMode } = useAppContext();

  if (!project)
    return <div className="p-10 text-center">Project not found.</div>;

  return (
    <div
      className={
        mode === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }
    >
      <Navbar mode={mode} setMode={setMode} />
      <div className="px-[6%] py-[4%]">
        <div className="flex flex-col lg:flex-row mt-[4rem] gap-8 justify-between">
          {/* LEFT */}
          <div className="lg:w-[40%] w-full flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              {project.title}
            </h2>

            <p className="text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.techUsed.map((tech, index) => (
                <span
                  key={index}
                  className={`px-2 py-1 rounded-lg text-sm ${
                    mode === "dark"
                      ? "bg-gray-700 text-gray-200"
                      : "bg-[#585D6F] text-white"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>

            <ul className="flex flex-col ms-6 mt-4 gap-2 text-sm md:text-base lg:text-[17px] list-[circle] list-outside">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <span className="w-full bg-gray-400 h-0.5 my-6 rounded-full"></span>

            <div className="flex flex-wrap gap-5">
              <Link
                target="_blank"
                href={project?.githupRepo || ""}
                className="flex items-center gap-2 cursor-pointer font-semibold text-base md:text-lg p-2 rounded-md transition-all duration-300 hover:text-[#1e5585]"
              >
                GitHub Repo
                <Image src={mode ==='dark' ?assets.arrow_icon_dark : assets.arrow_icon} className="w-3" alt="arrow" />
              </Link>

              <Link
                target="_blank"
                href={project?.liveDemo || project?.recordDemo || ""}
                className="flex items-center gap-2 cursor-pointer font-semibold text-base md:text-lg p-2 rounded-md transition-all duration-300 hover:text-[#1e5585]"
              >
                Live Demo
                <Image src={mode ==='dark' ?assets.arrow_icon_dark : assets.arrow_icon} className="w-3" alt="arrow" />
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:w-[55%] w-full">
            <ProjectGallery images={project.img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
