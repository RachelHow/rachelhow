import Ic_Twitter from "../src/Ic_Twitter";
import Ic_LinkedIn from "../src/Ic_LinkedIn";
import Ic_Dribbble from "../src/Ic_Dribbble";
import Ic_Behance from "../src/Ic_Behance";
import Ic_Medium from "../src/Ic_Medium";
import Ic_Github from "../src/Ic_Github";

const Footer = () => (
  <div>
    <footer className="mx-16 py-4 text-center sm:mx-8">
      <div className="text-lightgray float-left text-s sm:pb-4 sm:w-full sm:justify-center">
        Designed + Coded by Rachel © 2020
      </div>
      <div className="flex float-right pb-8 sm:w-full sm:justify-center">
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
    </footer>
  </div>
);

export default Footer