import React from "react";

type Props = {};

function Percentage({}: Props) {
  return (
    <div className="relative w-48 h-48 md:w-64 md:h-64 text-white">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle
          className="text-gray-200 stroke-current"
          strokeWidth="5"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
        ></circle>
        {/* Progress circle */}
        <circle
          className="text-yellow-400 progress-ring__circle stroke-current"
          strokeWidth="5"
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
          y="42"
          fontFamily="Verdana"
          fontSize="12"
          textAnchor="middle"
          alignmentBaseline="middle"
          style={{ fill: "white", fontWeight: "bold", fontSize: "13px" }}
        >
          70%
        </text>
        <text
          x="50"
          y="55"
          fontFamily="Verdana"
          fontSize="12"
          textAnchor="middle"
          alignmentBaseline="middle"
          style={{ fill: "white", fontSize: "8px" }}
        >
          Completado
        </text>
      </svg>
    </div>
  );
}

export default Percentage;
