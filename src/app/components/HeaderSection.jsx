"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
const HeaderSection = () => {
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
        <div className="flex flex-col gap-1 items-center ">
          <Image src={assets.profile_img} alt="" className="w-30 rounded-full object-cover" />
          <h3 className="text-2xl text-gray-700">Hi! I'm Ahmed Mohamed 👋🏻</h3>
        </div>
        {/* <button onClick={changeMode} className="bg-red-700 cursor-pointer">
          change mode
        </button> */}
        <h2 className="text-5xl  text-center ">
          frontend web developer <br /> based in Cairo.
        </h2>
        <p className="text-gray-600 max-w-[45%] text-center">
          I’m a frontend developer from Egypt, blending clean design with
          powerful code. With hands-on experience in React, Next.js, and
          Tailwind CSS, I craft responsive, anime-inspired interfaces that feel
          as good as they look.
        </p>

        <div className="flex items-center mt-5 gap-6">
          <a
            href="#contact"
            className="px-5 flex items-center gap-2  cursor-pointer py-2 bg-black rounded-full text-white"
          >
            Contact With Me
            <Image src={assets.right_arrow_white} alt="" className="w-4" />
          </a>
          <a
            download
            href="/resume.pdf"
            className="flex items-center gap-2 px-5  cursor-pointer py-2  rounded-full border border-slate-400"
          >
            My Reusme
            <Image src={assets.download_icon} alt="" className="w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
