import React from "react";

type Props = {};

function Percentage({}: Props) {
  return (
    <div className="relative w-40 h-40 text-white">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle
          className="text-gray-200 stroke-current"
          strokeWidth="10"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
        ></circle>
        {/* Progress circle */}
        <circle
          className="text-indigo-500 progress-ring__circle stroke-current"
          strokeWidth="10"
          strokeLinecap="round"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
          style={{
            strokeDasharray: 400,
            strokeDashoffset: 400 - (400 * 45) / 100,
          }}
        ></circle>

        {/* Center text */}
        <text
          x="50"
          y="50"
          fontFamily="Verdana"
          fontSize="12"
          textAnchor="middle"
          alignmentBaseline="middle"
          style={{ fill: "white", fontWeight: "bold" }}
        >
          70%
        </text>

        <h1 className="text-center text-4xl font-bold text-white">45%</h1>
      </svg>
    </div>
  );
}

export default Percentage;
