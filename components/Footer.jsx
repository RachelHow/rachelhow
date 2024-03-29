import Ic_Twitter from "../src/Ic_Twitter";
import Ic_LinkedIn from "../src/Ic_LinkedIn";
import Ic_Dribbble from "../src/Ic_Dribbble";
import Ic_Behance from "../src/Ic_Behance";
import Ic_Email from "../src/Ic_Email";
import Ic_Github from "../src/Ic_Github"

const Footer = () => (
  <div className='py-16 px-16 sm:px-8'>
    <footer className='text-center align-middle sm:pb-12'>
      <div className="float-left text-s sm:pb-4 sm:w-full sm:justify-center">
        <p className='mt-2 text-gray1 dark:text-gray3'>© 2021 Design + Code by Rachel</p>
      </div>
      <div className="flex float-right sm:w-full sm:justify-center">
          <a href='mailto:rachel@rachelhow.com?Subject=Enquiry from site!' target='_blank' className="pr-3">
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
          <a href="https://github.com/RachelHow" className="pr-3">
            <Ic_Github />
          </a>
      </div>
    </footer>
  </div>
);

export default Footer