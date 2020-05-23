import React from "react";
import profileimage from "../public/images/profileimage.png";

const Hero = () => (
  <div className="hero py-24">
    <div className="container mx-auto text-center sm:px-10">
      <h1 className="text-xxl md:text-xl sm:text-xl">I’m Rachel How 👋</h1>
      <div className="flex justify-center">
        <img src={profileimage} alt="profileimage" className="profileimage"/>
      </div>
      <h1 className="text-xxl md:text-xl sm:text-xl">Product Designer + Maker.</h1>
      <div>
        <span className="smiley text-xxl absolute right-smileylg md:right-smileymd sm:right-smileysm">☻</span>
      </div>
      <div className="pt-8 px-56 md:px-24 sm:px-0 sm:pt-16">
        Product Designer at <a href="https://myfave.com/careers" className="font-bold">Fave</a> ❤️
        As a self-taught designer who loves to code, I help businesses solve problems
        with digital product design and strategy. I’ve been working across several
        B2C &amp; B2B industries in Malaysia and across the globe.
        ☕️Currently building: &nbsp; 
        <a href="https://malaysianswhomake.com" className="font-bold">Malaysians Who Make 🇲🇾</a>
        <br/><br/>
        Got an interesting project? <a href="mailto:rachelhow95@gmail.com?Subject=Hello!" className="font-bold">Email me</a> 
        &nbsp;or check out my <a href="https://drive.google.com/open?id=1dzwfoK_DJCCn4D91Lste_norBMDBvCYl" target="_blank" className="font-bold">CV</a>.
        <br/><br/>
        <a href="https://www.behance.net/rachelhow" className="font-bold">Behance </a> 
        / <a href="https://dribbble.com/rachelhow" className="font-bold">Dribbble </a> 
        / <a href="https://www.linkedin.com/in/rachelhow" className="font-bold">LinkedIn </a>
        / <a href="https://twitter.com/rachelhxw" className="font-bold">Twitter </a>
        / <a href="https://medium.com/@rachelhoww" className="font-bold">Medium </a>
      </div>
    </div>
  </div>
);

export default Hero;
