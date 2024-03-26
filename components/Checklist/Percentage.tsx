import React from "react";

type Props = {};

function Percentage({}: Props) {
  return (
    <div>
      <div
        x-data="skillDisplay"
        // className="p-6 space-y-6 bg-gray-800 rounded-xl md:grid md:grid-cols-2 md:gap-4 sm:space-y-0"
      >

        <div
          className="flex items-center justify-center"
          x-data="{ circumference: 2 * 22 / 7 * 120 }"
        >
          <svg className="transform -rotate-90 w-72 h-72">
            <circle
              cx="145"
              cy="145"
              r="120"
              stroke="currentColor"
              stroke-width="30"
              fill="transparent"
              className="text-gray-700"
            />

            <circle
              cx="145"
              cy="145"
              r="120"
              stroke="currentColor"
              stroke-width="30"
              fill="transparent"
              // :stroke-dasharray="circumference"
              // :stroke-dashoffset="circumference - currentSkill.percent / 100 * circumference"
              className="text-blue-500 "
            />
          </svg>
          <span
            className="absolute text-5xl"
            x-text="`${currentSkill.percent}%`"
          ></span>
        </div>
      </div>
    </div>
  );
}

export default Percentage;
