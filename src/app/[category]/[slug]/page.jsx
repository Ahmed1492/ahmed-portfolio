import { assets, projectsData } from "@/assets/assets";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import Image from "next/image";
import ProjectGallery from "../../components/ProjectGallery"; // import client component

const SingleProject = async ({ params }) => {
  const { category, slug } = params;
  const project = projectsData.find(
    (pro) => pro.slug === slug && pro.category === category
  );

  return (
    <div className="lightBg">
      <Navbar />
      <div className="px-[6%] py-[4%]">
        {/* container: stack on small, side by side on md+ */}
        <div className="flex flex-col lg:flex-row mt-[4rem] gap-8 justify-between">
          
          {/* LEFT */}
          <div className="lg:w-[40%] w-full flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              {project.title}
            </h2>
            <p className="text-base md:text-lg lg:text-xl max-w-2xl">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.techUsed.map((tech, index) => (
                <span
                  key={index}
                  className="bg-[#585D6F] px-2 py-1 text-white rounded-lg text-sm"
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

            <span className="w-full bg-slate-500 h-0.5 my-6 rounded-full"></span>

            <div className="flex flex-wrap gap-5">
              <Link
                target="_blank"
                href={project?.githupRepo || ""}
                className="flex items-center gap-2 cursor-pointer text-gray-800 font-semibold text-base md:text-lg p-2 rounded-md"
              >
                GitHub Repo
                <Image src={assets.arrow_icon} className="w-3" alt="arrow" />
              </Link>
              <Link
                target="_blank"
                href={project?.liveDemo || project?.recordDemo || ""}
                className="flex items-center gap-2 cursor-pointer text-gray-800 font-semibold text-base md:text-lg p-2 rounded-md"
              >
                Live Demo
                <Image src={assets.arrow_icon} className="w-3" alt="arrow" />
              </Link>
            </div>
          </div>

          {/* RIGHT: Gallery */}
          <div className="lg:w-[55%] w-full">
            <ProjectGallery images={project.img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
