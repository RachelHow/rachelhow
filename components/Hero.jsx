import React from 'react';
import profileimage from '../public/images/profileimage.png';

const Hero = () => (
    <div className="hero py-16">
      <div>
        <h3>hello!</h3>
        <h1 className="text-xxl">I’m Rachel How,</h1>
      </div>
      <div>
        <img src={profileimage} alt="profileimage" />
      </div>
      <div>
        <h1 className="text-xxl">Digital Product Designer + Maker.</h1>
      </div>
      <div>
        <span className="text-xxl">☻</span>
      </div>
    </div>
);

export default Hero;