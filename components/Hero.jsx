import React from "react";
import profileimage from "../public/images/profileimage.png";

const Hero = () => (
  <div className="hero pt-24">
    <div className="container mx-auto text-center h-screen">
      <h3>hello!</h3>
      <h1 className="text-xxl">I’m Rachel How,</h1>
      <div className="flex justify-center">
        <img src={profileimage} alt="profileimage" className="profileimage"/>
      </div>
      <h1 className="text-xxl">Product Designer + Maker.</h1>
      <div>
        <span className="smiley text-xxl absolute right-smiley">☻</span>
      </div>
    </div>
  </div>
);

export default Hero;
