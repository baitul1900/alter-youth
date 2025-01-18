"use client";

import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import imageOne from "../../../public/assets/images/community_1.jpg";
import imageTwo from "../../../public/assets/images/community_2.jpg";
import imageThree from "../../../public/assets/images/community_3.jpg";
import imageFour from "../../../public/assets/images/community_4.jpg";
import imageFive from "../../../public/assets/images/community_5.jpg";
import imageSix from "../../../public/assets/images/community_6.jpg";
import imageSeven from "../../../public/assets/images/community_7.jpg";
import imageEight from "../../../public/assets/images/community_8.jpg";
import imageNine from "../../../public/assets/images/community_9.jpg";
import imageTen from "../../../public/assets/images/community_10.jpg";
import imageEleven from "../../../public/assets/images/community_11.jpg";
import imageTwelve from "../../../public/assets/images/community_12.jpg";
import imageThirteen from "../../../public/assets/images/community_13.jpg";
import imageFourteen from "../../../public/assets/images/community_14.jpg";
import imageFifteen from "../../../public/assets/images/community_15.jpg";
import imageSixteen from "../../../public/assets/images/community_16.jpg";
import imageSeventeen from "../../../public/assets/images/community_17.jpg";
import imageEighteen from "../../../public/assets/images/community_18.jpg";
import Image from "next/image";

const sliderImages = [
  { id: 1, src: imageOne, alt: "Community Impact 1" },
  { id: 2, src: imageTwo, alt: "Community Impact 2" },
  { id: 3, src: imageThree, alt: "Community Impact 3" },
  { id: 4, src: imageFour, alt: "Community Impact 4" },
  { id: 5, src: imageFive, alt: "Community Impact 5" },
  { id: 6, src: imageSix, alt: "Community Impact 6" },
  { id: 7, src: imageSeven, alt: "Community Impact 7" },
  { id: 8, src: imageEight, alt: "Community Impact 8" },
  { id: 9, src: imageNine, alt: "Community Impact 9" },
  { id: 10, src: imageTen, alt: "Community Impact 10" },
  { id: 11, src: imageEleven, alt: "Community Impact 11" },
  { id: 12, src: imageTwelve, alt: "Community Impact 12" },
  { id: 13, src: imageThirteen, alt: "Community Impact 13" },
  { id: 14, src: imageFourteen, alt: "Community Impact 14" },
  { id: 15, src: imageFifteen, alt: "Community Impact 15" },
  { id: 16, src: imageSixteen, alt: "Community Impact 16" },
  { id: 17, src: imageSeventeen, alt: "Community Impact 17" },
  { id: 18, src: imageEighteen, alt: "Community Impact 18" },
];

const data = {
  title: "Community Impact",
  description:
    "Every scholarship begins with shipping a mobile phone to the parent of the student. Then they create their own mobile bank account using that phone, to start receiving their child's scholarships directly, every month.",
};

const CommunityImpact = () => {
  return (
    <section className="bg-[#fffFFF] py-10">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <h1 className="text-xl lg:text-2xl font-bold text-start">
          {data.title}
        </h1>
        <p className="text-start text-sm text-normal text-slate-700 my-2 ">
          {data.description}
        </p>
      </div>

      {/* slider is here */}
      <Splide
        options={{
          type: "loop",
          perPage: 3, // Show one full card and part of the next
          padding: "0rem", // Padding around the carousel
          pagination: false, // Disable pagination dots
          arrows: true, // Enable navigation arrows
          autoplay: true, // Autoplay slides
          breakpoints: {
            1024: { perPage: 3 }, // Show 3 slides on large screens
            768: { perPage: 2 }, // Show 2 slides on medium screens
            640: { perPage: 1 }, // Show 1.5 slides on small screens
          },
        }}
      >
        {sliderImages.map((data) => (
          <SplideSlide key={data?.id}>
            <Image src={data?.src} alt={data?.alt} />
          </SplideSlide>
        ))}
      </Splide>
      {/* slider is here */}
    </section>
  );
};

export default CommunityImpact;
