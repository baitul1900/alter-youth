"use client";

import React from "react";
import appleStore from "/public/assets/icons/appstore_small.svg";
import googleStore from "/public/assets/icons/playstore_small.svg";
import Link from "next/link";
import Image from "next/image";
import transferDirectlyImage from "/public/assets/images/app_scholarship.jpg";
import getSchoolReportsImage from "/public/assets/images/app_school.png";
import iiterateCitizenImage from "/public/assets/images/app_graduation.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css"; // Import Splide styles

const dataContent = [
  {
    title: "The Uber for Scholarships",
    subTitle:
      "A platform connecting the world with financially struggling students in Government Primary Schools of Bangladesh",
  },
];

const slidesData = [
  {
    id: 1,
    title: "Transfer directly",
    description:
      "Your scholarship is transferred directly to your student's family on their mobile bank account.",
    imageSrc: transferDirectlyImage,
  },
  {
    id: 2,
    title: "Get school reports",
    description:
      "View attendance data and report cards from your student's school, until completion of Class 5.",
    imageSrc: getSchoolReportsImage,
  },
  {
    id: 3,
    title: "Ensure a literate citizen",
    description:
      "Your scholarship continues until completion of class 5, when your student achieves literacy.",
    imageSrc: iiterateCitizenImage,
  },
];

const MobileAppDownload = () => {
  return (
    <section className="container mx-auto px-4 max-w-screen-xl my-10">
      <h1 className="text-center text-3xl lg:text-4xl font-bold">
        {dataContent[0].title}
      </h1>

      <div className="flex justify-center ">
        <p className="text-center text-normal text-slate-700 my-2 w-1/2">
          {dataContent[0].subTitle}
        </p>
      </div>

      {/* App download buttons */}
      <div className="flex justify-center gap-2 mt-4">
        <div>
          <Link
            href={
              "https://apps.apple.com/us/app/alteryouth-start-scholarships/id1569106859"
            }
            target="_blank"
          >
            <Image src={appleStore} alt="apple store" />
          </Link>
        </div>
        <div>
          <Link
            href={
              "https://play.google.com/store/apps/details?id=com.alteryouth.userapp"
            }
            target="_blank"
          >
            <Image src={googleStore} alt="google store" />
          </Link>
        </div>
      </div>

      {/* Splide Carousel */}
      <div className="mt-10">
        <Splide
          options={{
            type: "loop",
            perPage: 3, // Show one full card and part of the next
            gap: "20px", // Space between cards
            padding: "1rem", // Padding around the carousel
            pagination: false, // Disable pagination dots
            arrows: false, // Enable navigation arrows
            autoplay: false, // Autoplay slides
            breakpoints: {
              1024: { perPage: 3 }, // Show 3 slides on large screens
              768: { perPage: 2 }, // Show 2 slides on medium screens
              640: { perPage: 1 }, // Show 1.5 slides on small screens
            },
          }}
        >
          {slidesData.map((data) => (
            <SplideSlide key={data.id}>
              <div className="text-center rounded-lg p-6 min-h-32">
                <div className="flex justify-center">
                  <Image
                    src={data.imageSrc}
                    alt={data.title}
                    className="max-w-[200px]"
                  />
                </div>
                <h3 className="text-lg font-bold mt-1">{data.title}</h3>
                <p className="text-sm mt-1">{data.description}</p>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default MobileAppDownload;
