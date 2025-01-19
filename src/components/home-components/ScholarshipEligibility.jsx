"use client";

import React from "react";
import SvgDisabledFather from "../../../public/assets/icons/DisabledFather";
import SvgOrphan from "../../../public/assets/icons/Orphan";
import SvgSingleMother from "../../../public/assets/icons/SingleMother";

const cardData = [
  {
    id: 1,
    title: "Disabled Father",
    description: "Student's father is physically unable to work",
    icon: <SvgDisabledFather />,
  },
  {
    id: 2,
    title: "Single Mother",
    description: "Student's father is deceased or has abandoned the family",
    icon: <SvgSingleMother />,
  },
  {
    id: 3,
    title: "Orphan",
    description: "Both parents are deceased or have abandoned the child",
    icon: <SvgOrphan />,
  },
];

const ScholarshipEligibility = () => {
  return (
    <section className="bg-[#FFFFFf] py-10 ">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <h1 className="text-xl md:text-2xl font-bold text-center">
          Scholarship Eligibility
        </h1>

        <div className="flex justify-center mb-3">
          <p className="text-sm md:text-base text-slate-700 mt-2 w-2/3 text-center">
            Only students who are currently enrolled in Government Primary
            Schools and fall under any of the following criteria are eligible to
            apply for scholarships
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="bg-[#fffFFF] rounded-lg shadow-md p-4 flex items-center gap-4"
            >
              <div className="mb-2">{card.icon}</div>
              <div>
                <h2 className="text-sm md:text-base font-bold">{card.title}</h2>
                <p className="text-sm md:text-md text-gray-700">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScholarshipEligibility;
