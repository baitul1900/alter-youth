"use client";

import React from "react";
import Image from "next/image";
import headTeacher from "../../../public/assets/images/ht2.jpeg";
import personImage from "../../../public/assets/images/person.jpg";
import applicantImage from "../../../public/assets/images/applicant.jpg";

const demoData = [
  {
    id: 1,
    title: "Are you a teacher? Get your students listed on the platform.",
    src: headTeacher,
    linkText: "Download the school app",
  },
  {
    id: 2,
    title: "You can study anywhere in the world.",
    src: personImage,
    linkText: "See all scholarships",
  },
  {
    id: 3,
    title: "While students get closer to their dreams.",
    src: applicantImage,
    linkText: "See all graduates",
  },
];

const TeacherCard = () => {
  return (
    <section className="bg-[#fffFFF] py-10">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {demoData.map((item) => (
            <div
              key={item.id}
              className="relative group w-full h-[400px] overflow-hidden rounded-lg shadow-lg"
            >
              {/* Image */}
              <div className="overflow-hidden h-full w-full">
                <Image
                  src={item.src}
                  alt={item.title}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Text Overlay */}
              <div className="absolute inset-0 flex flex-col justify-start items-start p-6 bg-black bg-opacity-40">
                <h2 className="text-white text-xl font-bold mb-4">{item.title}</h2>
                <a
                  href="#"
                  className="text-white flex items-center space-x-2 group-hover:translate-x-2 transition-transform duration-300"
                >
                  <span>{item.linkText}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeacherCard;
