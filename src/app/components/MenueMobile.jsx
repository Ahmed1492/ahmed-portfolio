"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const MenueMobile = ({ isScroll }) => {
  const [isOpenMenue, setIsOpenMenue] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpenMenue((prev) => !prev)}
        className="block z-50 md:hidden ml-4"
      >
        <Image src={assets.menu_black} alt="menu" className="w-6 cursor-pointer" />
      </button>

      <ul
        className={`fixed top-0 bottom-0 z-40 h-screen flex flex-col items-start gap-6 px-10 py-20 transition-all duration-500 ${
          isOpenMenue ? "right-0" : "-right-full"
        } w-[60%] sm:w-[40%] bg-white bg-opacity-50 backdrop-blur-lg shadow-md rounded-l-xl`}
      >
        {isOpenMenue && (
          <button
            onClick={() => setIsOpenMenue(false)}
            className="absolute top-4 left-4 z-50"
          >
            <Image src={assets.close_black} alt="close" className="w-4" />
          </button>
        )}

        {[
          { label: "Home", href: "/#top" },
          { label: "About me", href: "/#about" },
          { label: "Services", href: "/#services" },
          { label: "My Work", href: "/#work" },
          { label: "Contact Me", href: "/#contact" },
        ].map(({ label, href }) => (
          <li key={label} onClick={() => setIsOpenMenue(false)}>
            <Link className="font-ovo text-lg" href={href}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MenueMobile;