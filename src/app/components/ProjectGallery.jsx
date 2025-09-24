"use client";
import Image from "next/image";
import React, { useState } from "react";

const ProjectGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full">
      {/* MAIN IMAGE */}
      <div className="rounded-sm shadow-lg w-full relative aspect-video">
        <Image
          src={images[currentIndex]}
          alt="main"
          fill
          className="object-cover rounded-sm shadow-lg"
        />
      </div>

      {/* THUMBNAILS */}
      <div className="flex flex-wrap items-center justify-center mt-3 gap-2">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`thumb-${index}`}
            width={80}
            height={60}
            onClick={() => setCurrentIndex(index)}
            className={`object-cover rounded-md shadow-md cursor-pointer 
        w-20 h-16 sm:w-24 sm:h-18 md:w-28 md:h-20
        ${index === currentIndex ? "ring-2 ring-blue-500" : ""}`}
          />
        ))}
      </div>

      {/* BUTTONS */}
      <div className="flex items-center justify-center mt-[2rem] gap-3">
        <div
          onClick={handlePrev}
          className="bg-slate-700 text-white cursor-pointer w-14 h-14 flex items-center justify-center p-5 rounded-full"
        >
          Prev
        </div>
        <div
          onClick={handleNext}
          className="bg-slate-700 text-white cursor-pointer w-14 h-14 flex items-center justify-center p-5 rounded-full"
        >
          Next
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;
