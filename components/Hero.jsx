import React from "react";

const Hero = () => (
  <div className="hero pt-32 pb-12 px-16 sm:px-10 sm:pt-24">
    <div className="flex container mx-auto 
    md:grid-cols-1 md:flex-col-reverse 
    sm:grid-cols-1 sm:flex-col-reverse">
      
      <div className="w-1/2 md:w-full md:text-center sm:text-center sm:w-full">
        <h1 className="text-xxl md:text-xl sm:text-xl pt-8">
          I design websites and apps to give delightful user experiences.
          &nbsp;<span className="smiley text-xxl absolute">☻</span>
        </h1>
        <div className="pt-4 text-lightgray">
          Product Designer at <a href="https://myfave.com/careers" className="font-bold">Fave</a>
          &nbsp;by day, self-taught coder by night. Based in Kuala Lumpur.
          ☕️Currently building: &nbsp; 
          <a href="https://malaysianswhomake.com" className="font-bold">Malaysians Who Make</a>
          <br/><br/>
          <a href="https://dribbble.com/rachelhow" className="font-bold">Dribbble </a> 
          / <a href="https://www.behance.net/rachelhow" className="font-bold">Behance </a> 
          / <a href="https://www.linkedin.com/in/rachelhow" className="font-bold">LinkedIn </a>
          / <a href="https://twitter.com/rachelhxw" className="font-bold">Twitter </a>
          / <a href="https://medium.com/@rachelhoww" className="font-bold">Medium </a>
          / <a href="https://github.com/rachelhow" className="font-bold">GitHub </a>
        </div>
        <br/>• Available for Projects &amp; Speaking Engagements
      </div>

      <div className="profilecontainer w-1/2 md:block md:mx-auto sm:block sm:w-full sm:h-auto sm:mx-auto">
        <img src="https://i.ibb.co/1XDHznB/profileimage.png" alt="profileimage" 
        className="profileimage float-right md:float-none sm:float-none"/>
      </div>

    </div>
  </div>
);

export default Hero;
