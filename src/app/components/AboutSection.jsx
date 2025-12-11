import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const AboutSection = ({ mode }) => {
  return (
    <div id="about" className="w-full  px-[12%] py-10 scroll-mt-20">
      <h4 className="text-lg text-center mb-2 font-ovo">Introduction</h4>
      <h2 className="text-5xl text-center mb-2 font-ovo ">About Me</h2>

      <div className="w-full flex flex-col lg:flex-row items-center gap-20 my-20 ">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-md object-cover"
          />
        </div>

        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-ovo">
            I am an experienced Frontend Developer with over a decade of
            professional expertise in the field. Throughout my career, I have
            had the privilege of collaborating with prestigious organizations,
            contributing to their success and growth.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                className={`border border-gray-400 rounded-xl p-6 cursor-pointer transition-all duration-500
    ${mode === "dark" ? "bg-slate-800 text-white" : "bg-white text-black"}
    hover:-translate-y-1 hover:shadow-[4px_4px_0_#505050]
    ${mode === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-100"}
  `}
              >
                <Image
                  className={`w-7 mt-3 ${mode === "dark" ? "invert" : ""}`}
                  src={icon}
                  alt={title}
                />
                <h3
                  className={`my-4 font-semibold ${
                    mode == "dark" ? "text-white" : "text-gray-700"
                  }`}
                >
                  {title}
                </h3>
                <p
                  className={`${
                    mode == "dark" ? "text-white" : "text-gray-600"
                  } text-sm`}
                >
                  {description}
                </p>
              </li>
            ))}
          </ul>
          <h4
            className={`my-6 ${
              mode == "dark" ? "text-white" : "text-gray-600"
            } text-sm font-ovo`}
          >
            Tools I Use
          </h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer  hover:-translate-y-1 duration-500"
                key={index}
              >
                <Image src={tool} alt="tool" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
