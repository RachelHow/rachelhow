import React from "react";
import Ic_Twitter from "../src/Ic_Twitter";

const Intro = () => (
  <div className="container mx-auto py-16 w-1/3 text-center">
    <h3 className="text-l font-bold">hi :)</h3>
    <div className="pt-4 pb-4">
      As a self-taught full stack designer, I help businesses solve problems
      with digital product design and strategy. I’ve been working across several
      B2C &amp; B2B industries in Malaysia and across the globe.
      Currently, I’m a Product Designer at <strong>Fave</strong>!
      <br /><br />
      You can <strong>email me</strong> or check out <strong>my résumé</strong>.
    </div>
    <div className="pb-4">🔧 Currently building: Malaysians Who Make</div>
    <div className="flex justify-center">
      <Ic_Twitter />
    </div>
  </div>
);

export default Intro;
