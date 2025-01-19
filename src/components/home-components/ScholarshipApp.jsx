"use client";

import React, { useState } from "react";
import Image from "next/image";
import scholarshipImage from "../../../public/assets/images/ay_video_poster.jpg"; // Replace with your image path

const ScholarshipApp = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalToggle = () => {
    setModalOpen(!isModalOpen);
  };

  const handleBackdropClick = (e) => {
    // Close the modal if the backdrop is clicked
    if (e.target.id === "modal-backdrop") {
      setModalOpen(false);
    }
  };

  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4 max-w-screen-xl flex flex-col lg:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="relative group w-full lg:w-1/2 overflow-hidden rounded-lg shadow-lg">
          {/* Image */}
          <div className="overflow-hidden">
            <Image
              src={scholarshipImage}
              alt="Scholarship"
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Play Button */}
          <button
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            onClick={handleModalToggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.752 11.168l-4.586-2.659A1 1 0 009 9.338v5.324a1 1 0 001.166.829l4.586-2.659a1 1 0 000-1.664z"
              />
            </svg>
          </button>
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-bold mb-4">The scholarship app</h2>
          <p className="text-gray-600 leading-relaxed">
            In Bangladesh, while 98% of children enroll in school, 2 million
            children drop out to work before achieving literacy in order to
            support their families financially. On the flipside, Bangladesh has
            a diaspora population of 10 million in advanced economies who wish
            to make an impact on their homeland. AlterYouth, imagine Uber for
            scholarships, is a C2C scholarship app enabling users from around
            the world to start scholarships directly for financially struggling
            students in Government Primary Schools of Bangladesh, through
            digital banking.
          </p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          id="modal-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={handleBackdropClick}
        >
          <div className="relative w-full max-w-3xl bg-white rounded-lg overflow-hidden">
            {/* Close Button */}
            <button
              className="absolute top-[-1.5rem] right-[-1.5rem] w-10 h-10 bg-white text-black rounded-full flex items-center justify-center shadow-lg z-50"
              onClick={handleModalToggle}
            >
              &times;
            </button>
            {/* Video */}
            <video
              src="/path-to-your-video.mp4" // Replace with your video path
              controls
              autoPlay
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ScholarshipApp;
