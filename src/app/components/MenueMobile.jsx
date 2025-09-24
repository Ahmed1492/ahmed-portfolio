"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

const MenueMobile = () => {
  const [isOpenMenue, setIsOpenMenue] = useState(false);

  return (
    <>
      <button
        // onClick={(prev) => setIsOpenMenue(!prev)}
        onClick={() => setIsOpenMenue((prev) => !prev)}
        className="block z-50 md:hidden ml-8"
      >
        <Image src={assets.menu_black} alt="" className="w-6 cursor-pointer" />
      </button>

      {/* Mobile Menue */}

      <ul
        className={`flex md:hidden transition-all translate-2  w-[60%] sm:w-[40%]  flex-col items-start gap-4 py-20 px-10 fixed ${
          isOpenMenue ? "right-0" : "-right-[100%]"
        }   top-0 bottom-0 w-64 z-40 h-screen bg-rose-50 transition duration-500`}
      >
        {isOpenMenue && (
          <button
            onClick={() => setIsOpenMenue(false)}
            className="absolute  z-50 cursor-pointer top-[1rem] left-[2rem] "
          >
            <Image src={assets.close_black} alt="" className="w-4" />
          </button>
        )}

        <li onClick={() => setIsOpenMenue(false)} className="">
          <a className="font-ovo" href="#top">
            Home
          </a>
        </li>
        <li onClick={() => setIsOpenMenue(false)}>
          <a className="font-ovo" href="#about">
            About me
          </a>
        </li>
        <li onClick={() => setIsOpenMenue(false)}>
          <a className="font-ovo" href="#services">
            Services
          </a>
        </li>
        <li onClick={() => setIsOpenMenue(false)}>
          <a className="font-ovo" href="#work">
            My Work
          </a>
        </li>
        <li onClick={() => setIsOpenMenue(false)}>
          <a className="font-ovo" href="#contact">
            Contact Me
          </a>
        </li>
      </ul>
    </>
  );
};

export default MenueMobile;
