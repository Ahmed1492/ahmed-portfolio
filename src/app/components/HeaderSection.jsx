"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
const HeaderSection = ({ mode }) => {
  const [theme, setThem] = useState("");
  useEffect(() => {
    setThem(localStorage.getItem("theme"));
    console.log(theme);
  }, []);
  const changeMode = () => {
    if (theme == "dark") {
      setThem("light");
      localStorage.setItem("theme", "white");
    } else {
      setThem("dark");
      localStorage.setItem("theme", "dark");
    }
  };
  // ${theme == "dark" ? "bg-black" : ""}
  return (
    <div className={`w-full h-screen  `}>
      <div className="h-full  w-full flex flex-col gap-5 items-center justify-center">
        <div className="flex  md:mt-0 flex-col gap-1 items-center ">
          <Image
            src={assets.user_image4}
            alt=""
            className="w-28 md:w-32 rounded-full object-cover"
          />
          <h3
            className={`text-lg md:text-2xl ${
              mode === "dark" ? "text-white" : "text-gray-700"
            } `}
          >
            Hi! I'm Ahmed Mohamed 👋🏻
          </h3>
        </div>
        {/* <button onClick={changeMode} className="bg-red-700 cursor-pointer">
          change mode
        </button> */}
        <h2 className="text-xl md:text-5xl  text-center ">
          Full Stack Web Developer <br /> Based in Cairo.
        </h2>
        <p
          className={` ${
            mode === "dark" ? "text-white" : "text-gray-600"
          } max-w-[86%]  sm:max-w-[45%] text-center`}
        >
          I’m a full-stack developer from Egypt who blends clean design with
          powerful, reliable code. I work with React, Next.js, Node.js, and
          MongoDB to build fast, responsive web applications. I enjoy creating
          anime-inspired interfaces backed by solid backend logic—projects that
          look great, perform well, and solve real problems.
        </p>

        <div className="flex items-center mt-5 gap-6">
          <a
            href="#contact"
            className="md:px-5 px-3 py-2 flex items-center gap-2 text-sm md:text-base cursor-pointer bg-black rounded-full text-white"
          >
            Contact With Me
            <Image src={assets.right_arrow_white} alt="" className="w-4" />
          </a>
          <a
            download
            href="/resume.pdf"
            className="flex items-center gap-2 md:px-5 px-3 py-2 text-sm md:text-base  cursor-pointer   rounded-full border border-slate-400"
          >
            My Resume
            <Image
              src={assets.download_icon}
              alt=""
              className={`w-4 ${mode == "dark" ? "invert" : ""}`}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
