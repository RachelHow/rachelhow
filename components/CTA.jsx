import React from "react";

const CTA = () => (
  <div className="pt-24">
    <div className="container text-center px-16 md:px-4 sm:px-8">
      <div className="flex justify-center pb-4">
        <img
          src="/images/Mini Gradient Glow.png"
          alt="glow"
          className="spin-animation"
        />
      </div>
      <div className="pb-32 text-lightgray tracking-tight text-base md:texts">
        <p>Let's work together!</p>
        <br />
        <p className="text-xl md:text-l sm:text-l">
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
          or{" "}
          <a
            href="https://twitter.com/rachelhxw"
            target="_blank"
            className="font-b"
          >
            {" "}
            tweet
          </a>{" "}
          me. &nbsp;
          <span className="text-xxl absolute pink-gradient-text">☻</span>
        </p>
        <br /><br />
        <a href="mailto:rachelhow95@gmail.com?Subject=Hello!" target="_blank">
          <button className="cta-button rounded shadow">
            <h5>rachelhow95@gmail.com</h5>
          </button>
        </a>
      </div>
    </div>
  </div>
);

export default CTA;
