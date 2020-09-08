import React from "react";

const About = () => (
  <div className="pt-32 pb-40">
    <div className="container flex px-16 md:px-4 sm:px-8 sm:grid-cols-1 sm:flex-col">
      <div className="md:pr-12">
        <img
          src="https://i.ibb.co/1XDHznB/profileimage.png"
          alt="rachel-how"
          className="profileimage"
        />
      </div>
      <div className="w-1/2 m-auto md:w-3/4 sm:w-full sm:pt-12">
        <h2 className="text-xxl md:text-xl sm:text-xl">
          Hi! I’m Rachel, a Product Designer who codes &amp; write.
        </h2>
        <br />
        <span className="text-lightgray text-base md:text-s">
          Product Designer at{" "}
          <a href="https://myfave.com/careers" className="font-sb">
            Fave
          </a>
          , Kuala Lumpur. I enjoy coding, writing, speaking. I believe user
          experiences should be simple and delightful to your users.
          ☕️ Currently building:&nbsp;
          <a href="https://malaysianswhomake.com" className="font-sb">
            Malaysians Who Make
          </a>
        </span>
      </div>
    </div>
  </div>
);

export default About;
