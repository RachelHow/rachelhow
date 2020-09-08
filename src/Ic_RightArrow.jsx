import React from "react";
const RightArrow = ({ size = 24, color = "#525252" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="inline"
  >
    <path d="M5 12h13M12 5l7 7-7 7" />
  </svg>
);
export default RightArrow;