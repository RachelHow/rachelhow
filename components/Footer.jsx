import Ic_Twitter from "../src/Ic_Twitter";
import Ic_LinkedIn from "../src/Ic_LinkedIn";
import Ic_Dribbble from "../src/Ic_Dribbble";
import Ic_Behance from "../src/Ic_Behance";
import Ic_Email from "../src/Ic_Email";

const Footer = () => (
  <div>
    <footer className="mx-16 py-4 text-center sm:mx-8 align-middle">
      <div className="text-lightgray pt-2 float-left text-s sm:pb-4 sm:w-full sm:justify-center">
        Design+Code by Rachel © 2020
      </div>
      <div className="flex float-right pb-8 sm:w-full sm:justify-center">
          <a href='mailto:rachelhow95@gmail.com?Subject=Hello!' target='_blank' className="pr-3">
            <Ic_Email />
          </a>
          <a href="https://twitter.com/rachelhxw" className="pr-3">
            <Ic_Twitter />
          </a>
          <a href="https://www.linkedin.com/in/rachelhow" className="pr-3">
            <Ic_LinkedIn />
          </a>
          <a href="https://dribbble.com/rachelhow" className="pr-3">
            <Ic_Dribbble />
          </a>
          <a href="https://www.behance.net/rachelhow" className="pr-3">
            <Ic_Behance />
          </a>
      </div>
    </footer>
  </div>
);

export default Footer