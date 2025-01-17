"use client";

import React from "react";
import Card from "../scholarship-card-components/Card";
import { cardData } from "@/utils/static-const";

const ScholarshipCommunity = () => {
  return (
    <section className="py-10 bg-[#fffFFF]">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <p className="text-center text-xl lg:text-2xl font-bold text-[#1DC468]">
          #alteryouthrevolution
        </p>
        <h2 className="text-center text-3xl lg:text-4xl font-bold mt-1">
          The Scholarship Community
        </h2>

        <div className="flex justify-center ">
          <p className="text-center text-sm text-normal text-slate-700 my-2 w-1/2">
            Despite public primary schools being free of cost in Bangladesh,
            many students still{" "}
            <span className="font-bold">drop out of school</span> to work and
            earn in order to support their families. Your scholarship helps a
            child attend school and support their families at the same time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((card) => (
            <Card
              key={card.id}
              username={card.username}
              countryFlag={card.countryFlag}
              joined={card.joined}
              scholarships={card.scholarships}
              students={card.students}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScholarshipCommunity;
