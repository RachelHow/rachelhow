import React from "react";
import Ic_Twitter from "../src/Ic_Twitter";
import Ic_LinkedIn from "../src/Ic_LinkedIn";
import Ic_Dribbble from "../src/Ic_Dribbble";
import Ic_Behance from "../src/Ic_Behance";
import Ic_Medium from "../src/Ic_Medium";
import Ic_Github from "../src/Ic_Github";

const CTA = () => (
  <div className="pt-24">
    <div className="container text-center px-16 md:px-4 sm:px-8">
      <div className="flex justify-center pb-4">
        <img src="/images/Mini Gradient Glow.png" alt="glow" className="spin-animation"/>
      </div>
      <div className="pb-32 text-lightgray tracking-tight text-base md:texts">
        <p>Thanks for making it this far!</p>
        <br />
        <p className="text-xl md:text-l sm:text-l pink-gradient-text">
          I’m available for freelance projects / speaking engagements.
          <br />
          Let’s chat via{" "}
          <a
            href="mailto:rachelhow95@gmail.com?Subject=Hello!"
            target="_blank"
            className="font-b"
          >
            email
          </a>{" "}
          or slide into my <a
            href="https://twitter.com/rachelhxw"
            target="_blank"
            className="font-b"
          > Twitter</a> DMs. &nbsp;
          <span className="text-xxl absolute pink-gradient-text">☻</span>
        </p>
      </div>
      <div className="flex justify-center">
        <a href="https://twitter.com/rachelhxw" className="pr-4">
          <Ic_Twitter />
        </a>
        <a href="https://www.linkedin.com/in/rachelhow" className="pr-4">
          <Ic_LinkedIn />
        </a>
        <a href="https://dribbble.com/rachelhow" className="pr-4">
          <Ic_Dribbble />
        </a>
        <a href="https://www.behance.net/rachelhow" className="pr-4">
          <Ic_Behance />
        </a>
        <a href="https://medium.com/@rachelhxw" className="pr-4">
          <Ic_Medium />
        </a>
        <a href="https://github.com/rachelhow" className="pr-4">
          <Ic_Github />
        </a>
      </div>
    </div>
  </div>
);

export default CTA;
