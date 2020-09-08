import React from "react";
import Ic_DownArrow from "../src/Ic_DownArrow";

const Hero = () => (
  <div className="flex h-screen">
    <div className="hero-glow">
      <img
        src="/images/Gradient Glow.png"
        alt="gradientglow"
        className="spin-animation"
      />
    </div>
    <div className="container m-auto sm:px-8">
      <h1 className="text-center text-xxxl md:text-xxl sm:text-xl">
        I design web/app experiences
        <br />
        that your users will love.
      </h1>
    </div>
    <div className="hero-caption text-lightgray text-s sm:px-12">
      Welcome to my journey where I explore,{" "}
      <span className="italic line-through">fail</span> challenge myself and
      grow. <Ic_DownArrow size="16" />
    </div>
  </div>
);

export default Hero;
