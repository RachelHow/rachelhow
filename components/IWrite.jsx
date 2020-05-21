import React from 'react';

const IWrite = () => (
    <div className="container mx-auto py-16">
      <div className="pb-8 w-1/2">
        <h2 className="text-xxl">I write</h2>
        My thoughts on design, side projects and other fun stuff.
      </div>
      <div className="w-3/4">
        <div className="write-card">
          Create native Lottie animations with Sketch and AE, the simple way.
          <br/><span className="write-date">Sep 9, 2019</span>
        </div>
        <div className="write-card">
          What I’ve learned from joining a hackathon with only 1.5 months of coding experience
          <br/><span className="write-date">May 3, 2019</span>
        </div>
        <div className="write-card">
          UI/UX Case Study: NameLink App Design Concept
          <br/><span className="write-date">Mar 10, 2019</span>
        </div>
      </div>
    </div>
);

export default IWrite;