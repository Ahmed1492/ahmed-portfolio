import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const FooterSection = ({ mode }) => {
  const phone = "201024954601";
  const message = "Hey Ahmed, I love your work!";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phone}`;

  return (
    <div className="mt-20">
      <div className="text-center ">
        <Image
          src={mode !== "dark" ? assets.logo : assets.logo_dark}
          alt=""
          className="w-36 mx-auto "
        />

        <div className="w-max flex items-center gap-2 mx-auto mb-2">
          <Image src={mode =='dark'?assets.mail_icon_dark :assets.mail_icon} alt="" className="w-5" />
          ahmed.m.14.092@gmail.com
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>@2025 Ahmed Mohamed. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/ahmed1492">
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ahmed-mohamed-8a8619259/"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterSection;
