import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const ServicesSection = () => {
  return (
    <div className="w-full  px-[12%] py-10 scroll-mt-20" id="services">
      <h4 className="text-lg text-center mb-2 font-ovo">What I Offer</h4>
      <h2 className="text-5xl text-center mb-2 font-ovo ">My Services</h2>

      <p className="text-center max-w-2xl mx-auto mb-12 font-ovo ">
        "I’m Ahmed — a frontend-first full-stack developer crafting sleek,
        responsive web experiences with React, Next.js, and Tailwind CSS.
        Inspired by the innovation of companies like Microsoft, Tesla, and
        Apple, I’m building my own brand from the ground up. My work blends
        technical precision with creative flair, and I’m always pushing for
        designs that feel alive a
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1  duration-500"
            key={index}
          >
            <Image src={icon} alt={title} className="w-10" />
            <h3 className="text-lg my-4 text-gray-700">{title}</h3>
            <p className="text-sm text-gray-600 leading-5">{description}</p>
            <a className="flex items-center gap-2 text-sm mt-5" href={link}>
              Read more
              <Image src={assets.right_arrow} alt="" className="w-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
