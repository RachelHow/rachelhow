import React from "react";
const RightArrow = ({ size = 18, color = "#969696" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20 28"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="inline"
  >
    <path d="M5 12h13M12 5l7 7-7 7" />
  </svg>
);
export default RightArrow;