"use client";
import Image from "next/image";
import Link from "next/link";  // ✅ import Link
import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import MobileMenue from "../components/MenueMobile";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // ✅ cleanup
  }, []);

  return (
    <>
      <div className="fixed left-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>
      <nav
        className={`w-full fixed z-50 flex items-center justify-between  px-5 lg:px-8 xl:px-[10%] ${
          isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""
        }`}
      >
        <Link href="/#top">
          <Image
            src={assets.logo}
            alt="#logo"
            className="w-28 cursor-pointer"
          />
        </Link>

        <ul
          className={` hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? "" : "bg-white shadow-sm bg-opacity-50"
          }`}
        >
          <li>
            <Link className="font-ovo" href="/#top">Home</Link>
          </li>
          <li>
            <Link className="font-ovo" href="/#about">About me</Link>
          </li>
          <li>
            <Link className="font-ovo" href="/#services">Services</Link>
          </li>
          <li>
            <Link className="font-ovo" href="/#work">My Work</Link>
          </li>
          <li>
            <Link className="font-ovo" href="/#contact">Contact Me</Link>
          </li>
        </ul>

        <div className="flex items-center justify-end w-full md:w-max gap-4">
          <button>
            <Image
              src={assets.moon_icon}
              alt=""
              className="w-6 cursor-pointer"
            />
          </button>
          <Link
            href="/#contact"
            className="hidden lg:flex items-center gap-2 px-10 py-2 border border-gray-500 rounded-full ml-4"
          >
            Contact
            <Image src={assets.arrow_icon} className="w-3" alt="arrow" />
          </Link>
        </div>

        <MobileMenue />
      </nav>
    </>
  );
};

export default Navbar;
