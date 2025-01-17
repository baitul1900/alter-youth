"use client";

import React, { useState } from "react";
import clsx from "clsx"; // Import clsx
import Icon from "../Icon";

const ScholarshipAmountCounter = () => {
  const [count, setCount] = useState(1);
  const [amount, setAmount] = useState(1650);
  const limit = 3;
  const unitPrice = 1650;

  const handleAdd = (e) => {
    e.preventDefault();
    if (count < limit) {
      const newCount = count + 1;
      setCount(newCount);
      setAmount(unitPrice * newCount); // Update the amount
    }
  };

  const handleSubtract = (e) => {
    e.preventDefault();
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      setAmount(unitPrice * newCount);
    }
  };

  return (
    <div className="flex justify-between mt-4">
      {/* Counter Box */}
      <div className="flex items-center gap-3 bg-slate-200 rounded-md">
        {/* Minus Button */}
        <button
          className={clsx(
            "p-2 rounded-md text-white",
            count === 1
              ? "bg-gray-300 cursor-not-allowed" // Disabled state
              : count === limit
              ? "bg-[#1DC468] hover:bg-[#17b758]" // Active state when count is at limit
              : "bg-gray-400" // Default active state
          )}
          onClick={handleSubtract}
          disabled={count === 1} // Disable when count is 1
        >
          <Icon name="FaMinus" />
        </button>

        {/* Count Display */}
        <div className="text-xl font-semibold">{count}</div>

        {/* Plus Button */}
        <button
          className={clsx(
            "p-2 rounded-md text-white",
            count === limit
              ? "bg-gray-300 cursor-not-allowed" // Disabled state
              : "bg-[#1DC468] hover:bg-[#17b758]" // Active state
          )}
          onClick={handleAdd}
          disabled={count === limit} // Disable when count reaches the limit
        >
          <Icon name="FaPlus" />
        </button>
      </div>
      {/* Counter Box */}

      {/* Amount Display */}
      <div className="flex items-end">
        <p className="text-xl font-bold pr-1">BDT</p>
        <p className="text-xl font-bold">{amount}</p>
        <p className="text-sm">/</p>
        <p className="text-sm">month</p>
      </div>
    </div>
  );
};

export default ScholarshipAmountCounter;
