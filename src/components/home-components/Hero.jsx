"use client";

import React from "react";
import FormBox from "./FormBox";

const textPart = {
  title: "Start your scholarship",
  subtitle:
    "Directly for students in Government Primary Schools throughout Bangladesh",
};

const Hero = () => {
  return (
    <header className="hero-header">
      <div className="home-hero relative bg-[url('/assets/images/hero_pc.jpg')] bg-cover bg-center bg-no-repeat max-h-[60vh] min-h-[80vh]">
        {/* Overlay */}

        {/* Hero Content */}
        <div className="container mx-auto px-4 max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center max-h-[60vh] min-h-[80vh]">
            <div className="flex flex-col justify-center header-text">
              <h1 className="text-3xl md:text-5xl font-bold text-white z-10 max-w-lg">
                {textPart?.title}
              </h1>
              <p className="text-lg md:text-xl text-white mt-4 z-10">
                {textPart?.subtitle}
              </p>
            </div>

            <div className="flex justify-center">
              <FormBox />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
