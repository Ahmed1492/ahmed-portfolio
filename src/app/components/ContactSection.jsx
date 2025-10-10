"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

const ContactSection = ({ mode }) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2bb4d680-6d14-49be-906d-72214e247372");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      className={`w-full mt-[2rem] px-[12%] py-10 scroll-mt-20 ${
        mode === "dark" ? "" : "bg-[url('/footer-bg-color.png')]"
      } bg-no-repeat bg-center bg-[length:90%_auto] `}
      id="contact"
    >
      <h4 className="text-lg text-center mb-2 font-ovo">Connect with me</h4>
      <h2 className="text-5xl text-center mb-2 font-ovo ">Get in touch</h2>

      <p className="text-center max-w-2xl mx-auto mb-12 font-ovo ">
        I'd love to hear from you! If you have any questions, comments or <br />
        feedback, please use the form below.
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
          <input
            className={`flex-1 px-3 py-2 outline-none border rounded-md transition-all duration-300
        ${
          mode === "dark"
            ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400"
            : "bg-white border-gray-400 text-gray-900 placeholder-gray-600"
        }`}
            type="text"
            placeholder="Enter your name"
            required
            name="name"
          />

          <input
            className={`flex-1 px-3 py-2 outline-none border rounded-md transition-all duration-300
        ${
          mode === "dark"
            ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400"
            : "bg-white border-gray-400 text-gray-900 placeholder-gray-600"
        }`}
            type="email"
            placeholder="Enter your email"
            required
            name="email"
          />
        </div>

        <textarea
          className={`w-full p-4 outline-none border rounded-md mb-6 transition-all duration-300
      ${
        mode === "dark"
          ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400"
          : "bg-white border-gray-400 text-gray-900 placeholder-gray-600"
      }`}
          rows="6"
          placeholder="Enter your message"
          required
          name="message"
        ></textarea>

        <button
          type="submit"
          className={`cursor-pointer py-3 px-8 w-max flex items-center justify-between gap-2 rounded-full mx-auto transition-all duration-500
      ${
        mode === "dark"
          ? "bg-gray-800 text-white hover:bg-gray-700"
          : "bg-[#4a4848] text-white hover:bg-black"
      }`}
        >
          Submit now
          <Image
            src={assets.right_arrow_white}
            alt="arrow icon"
            className="w-4"
          />
        </button>

        <p className="mt-4">{result}</p>
      </form>
    </div>
  );
};

export default ContactSection;
