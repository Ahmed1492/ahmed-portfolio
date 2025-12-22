import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const ServicesSection = ({ mode }) => {
  return (
    <div className="w-full  px-[12%] py-10 scroll-mt-20" id="services">
      <h4 className="text-lg text-center mb-2 font-ovo">What I Offer</h4>
      <h2 className="text-5xl text-center mb-2 font-ovo ">My Services</h2>

      <p className="text-center max-w-2xl mx-auto mb-12 font-ovo ">
        I’m Ahmed, a full-stack developer specializing in building modern,
        scalable web applications from front end to back end. I work with React,
        Next.js, Node.js, and MongoDB to deliver responsive interfaces, secure
        APIs, and efficient backend systems. Inspired by companies like
        Microsoft, Tesla, and Apple, I focus on combining clean architecture
        with thoughtful design to create reliable, high-performance digital
        products.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className={`flex flex-col justify-between border border-gray-400 rounded-lg px-8 py-12 cursor-pointer transform transition-all duration-500
        ${mode === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-700"}
        hover:-translate-y-1 hover:shadow-[4px_4px_0_#505050]
        ${mode === "dark" ? "hover:bg-gray-700" : "hover:bg-[#fcf4ff]"}
      `}
          >
            <Image src={icon} alt={title} className="w-10 rounded-full" />
            <h3 className="text-lg my-4 font-semibold">{title}</h3>
            <p
              className={`text-sm leading-5 ${
                mode == "dark" ? "text-white" : "text-gray-600"
              }  `}
            >
              {description}
            </p>
            <a
              href={link}
              className="flex items-center gap-2 text-sm mt-5 text-blue-600 hover:underline"
            >
              Read more
              <Image
                src={
                  mode === "dark"
                    ? assets.right_arrow_bold_dark
                    : assets.right_arrow
                }
                alt=""
                className="w-4 mt-1"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
