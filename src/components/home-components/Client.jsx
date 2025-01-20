"use client";

import React from "react";
import undpImage from "../../../public/assets/images/undp.jpg";
import expoImage from "../../../public/assets/images/expo.png";
import SvgGoogle from "../../../public/assets/icons/Google";
import clsx from "clsx";

const cardData = [
  {
    id: 1,
    text: '"Asia Pacific SDG Enterprise Award"',
    image: undpImage.src, // Use the .src property for img tag
    sideText: true,
  },
  {
    id: 2,
    text: null,
    image: expoImage.src, // Use the .src property for img tag
    sideText: false,
  },
  {
    id: 3,
    text: "Winner of Google Business Group Stories",
    image: <SvgGoogle />,
    sideText: false,
  },
];

const Client = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4 max-w-screen-xl ">
        <h4 className="text-xl lg:text-2xl font-bold text-center mb-4">
          In Association With
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cardData.map((card) =>
            card.sideText ? (
              <div
                key={card.id}
                className={clsx(
                  card.id === 2
                    ? "flex justify-start items-center md:border-r border-l border-[#E5E7EB] "
                    : "flex justify-start items-center "
                )}
              >
                <div>
                  {typeof card.image === "string" ? (
                    <img
                      src={card.image}
                      className="w-40 h-40 object-contain"
                      alt={card.text}
                    />
                  ) : (
                    card.image
                  )}
                </div>
                <div>
                  <p>{card.text}</p>
                </div>
              </div>
            ) : (
              <div
                key={card.id}
                className="flex flex-col justify-start items-center"
              >
                <div className="w-40 h-40 flex items-center justify-center">
                  {typeof card.image === "string" ? (
                    <img
                      src={card.image}
                      className="w-40 h-40 object-contain"
                      alt={card.text}
                    />
                  ) : (
                    card.image
                  )}
                </div>
                <p>{card.text}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Client;
