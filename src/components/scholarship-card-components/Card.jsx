"use client";

import React, { useState } from "react";

const Card = ({ username, countryFlag, joined, scholarships, students }) => {
  const [isExpanded, setIsExpanded] = useState(false); // State for toggling the card height

  // Limit number of students shown before "See all" is clicked
  const visibleStudents = isExpanded ? students : students.slice(0, 4);

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      {/* Top Section */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <p className="font-bold">{username}</p>
          <span>{countryFlag}</span>
        </div>
        <p className="text-gray-400 text-sm">{joined}</p>
      </div>

      {/* Scholarship Badge */}
      <span className="inline-block bg-[#e8fbee] text-[#1DC468] text-sm font-semibold px-3 py-1 rounded-full">
        {scholarships} {scholarships > 1 ? "Scholarships" : "Scholarship"}
      </span>

      {/* Students List */}
      <div className="mt-2">
        {visibleStudents.map((student, index) => (
          <div key={index} className="mb-2">
            <p className="font-bold text-sm">
              {student.name}, {student.class}
            </p>
            <p className="text-xs text-gray-400">{student.school}</p>
          </div>
        ))}
      </div>

      {/* See All Button */}
      {students.length > 4 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-[#1DC468] text-sm mt-2 focus:outline-none"
        >
          {isExpanded ? "See less" : "See all"}
        </button>
      )}
    </div>
  );
};

export default Card;
