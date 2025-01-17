"use client";

import React from "react";
import appleStore from "/public/assets/icons/appstore_small.svg";
import googleStore from "/public/assets/icons/playstore_small.svg";
import Link from "next/link";
import Image from "next/image";
import GlobalSwiper from "../GlobalSwiper";
import transferDirectlyImage from "/public/assets/images/app_scholarship.jpg";
import getSchoolReportsImage from "/public/assets/images/app_school.png";
import iiterateCitizenImage from "/public/assets/images/app_graduation.png";

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

      {/* the app donwlaod button section */}
      <div className="flex justify-center gap-2 mt-4">
        <div>
          <Link
            href={
              "https://apps.apple.com/us/app/alteryouth-start-scholarships/id1569106859"
            }
            target="_blank"
            className=""
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
            className=""
          >
            <Image src={googleStore} alt="apple store" />
          </Link>
        </div>
      </div>
      {/* the app donwlaod button section end */}

      <div className="mt-4">
        <GlobalSwiper
          slidesData={slidesData}
          slidesPerView={1}
          spaceBetween={0}
          navigation={true}
          pagination={false}
          autoplay={false}
          breakpoints={{
            640: { slidesPerView: 3,
              
             },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          customSlide={(data) => (
            <div className="text-center rounded-lg p-6 min-h-32">
              <div className="flex justify-center">
                <Image src={data.imageSrc} alt={data.title} className="max-w-[200px]" />
              </div>

              <h3 className="text-lg font-bold mt-1">{data.title}</h3>
              <p className="text-sm mt-1">{data.description}</p>
            </div>
          )}
        />
      </div>
    </section>
  );
};

export default MobileAppDownload;
