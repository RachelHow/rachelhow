import React from "react";
const DownArrow = ({ size = 24, color = "#525252" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="inline bounce-animation"
  >
    <path d="M12 5v13M5 12l7 7 7-7" />
  </svg>
);
export default DownArrow;
