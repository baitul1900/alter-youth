"use client";

import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import school1 from "../../../public/assets/images/school1.jpeg";
import school2 from "../../../public/assets/images/school2.jpeg";
import school3 from "../../../public/assets/images/school3.jpeg";
import school4 from "../../../public/assets/images/school4.jpeg";
import school5 from "../../../public/assets/images/school5.jpeg";
import school6 from "../../../public/assets/images/school6.jpeg";
import school7 from "../../../public/assets/images/school7.jpeg";
import Image from "next/image";
import Icon from "../Icon";

const simplifiedSchoolData = [
  {
    id: 1,
    name: "Agla Government Primary School",
    location: "Kayetpara",
    image: school1,
  },
  {
    id: 2,
    name: "Kanchan Government Primary School",
    location: "Kanchan",
    image: school2,
  },
  {
    id: 3,
    name: "Daudpur Government Primary School",
    location: "Daudpur",
    image: school3,
  },
  {
    id: 4,
    name: "Kendua Government Primary School",
    location: "Golakandail",
    image: school4,
  },
  {
    id: 5,
    name: "Bhulta Government Primary School",
    location: "Bhulta",
    image: school5,
  },
  {
    id: 6,
    name: "Deboi Government Primary School",
    location: "Rupganj",
    image: school6,
  },
  {
    id: 7,
    name: "Birabo Government Primary School",
    location: "Bholabo",
    image: school7,
  },
];

const SchoolsNationWide = () => {
  return (
    <section className="bg-[#fffFFF] py-10">
      <div className="container mx-auto px-4 max-w-screen-xl mb-1">
        <h1 className="text-xl lg:text-2xl font-bold text-start">
          Students from Government Primary Schools Nationwide
        </h1>
      </div>

      {/* slider is here */}
      <Splide
        options={{
          type: "loop",
          perPage: 5,
          gap: "20px", // Space between cards
          padding: "50px",
          pagination: false,
          arrows: false,
          autoplay: false,
          breakpoints: {
            1024: { perPage: 3 }, // Show 3 slides on large screens
            768: { perPage: 2 }, // Show 2 slides on medium screens
            640: { perPage: 1 }, // Show 1.5 slides on small screens
          },
        }}
      >
        {simplifiedSchoolData.map((data) => (
          <SplideSlide key={data?.id}>
            <div className="flex flex-col w-full">
              <Image
                src={data?.image}
                alt={data?.name}
                className="object-cover rounded-lg shadow-md"
              />

              <div className="p-4">
                <h2 className="text-md font-bold">{data?.name}</h2>
                <div className="flex items-center gap-2">
                  <Icon name="FaLocationDot" color="#1DC468" />
                  <p className="text-sm text-gray-600">
                    {data?.location}, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
      {/* slider is here */}
    </section>
  );
};

export default SchoolsNationWide;
