"use client";

import React from "react";

const textPart = {
  title: "Start your scholarship",
  subtitle:
    "Directly for students in Government Primary Schools throughout Bangladesh",
};

const Hero = () => {
  return (
    <div className="home-hero relative bg-[url('/assets/images/hero_pc.jpg')] bg-cover bg-center bg-no-repeat max-h-[60vh] min-h-[80vh]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center max-h-[60vh] min-h-[80vh]">
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white z-10 max-w-lg">
              {textPart?.title}
            </h1>
            <p className="text-lg md:text-xl text-white mt-4 z-10">
              {textPart?.subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
