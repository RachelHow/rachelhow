import Head from "next/head";
import Link from "next/link";
import GoogleAnalytics from "./GoogleAnalytics";
import Ic_Twitter from "../src/Ic_Twitter";
import Ic_LinkedIn from "../src/Ic_LinkedIn";
import Ic_Dribbble from "../src/Ic_Dribbble";
import Ic_Behance from "../src/Ic_Behance";
import Ic_Medium from "../src/Ic_Medium";
import Ic_Github from "../src/Ic_Github";

export default ({ children }) => (
  <div>
    <Head>
      <title>Rachel How</title>
      <meta charSet="utf-8" />
      <meta name="author" content="Rachel How" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content="Rachel How" />
      <meta property="og:type" content="website" />
      <meta name="og:description" content="Product Designer" />
      <meta property="og:url" content="https://rachelhow.com" />
      <meta
        property="og:image"
        content="https://i.ibb.co/wyWj5XP/URL-image-preview.png"
      />
      <meta
        property="twitter:image"
        content="https://i.ibb.co/wyWj5XP/URL-image-preview.png"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800"
        rel="stylesheet"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link rel="canonical" href="https://rachelhow.com" />
      <GoogleAnalytics />
    </Head>

    <nav className="header w-screen px-16 py-6 sm:px-8 sm:py-4">
      <div>
        <div className="float-left sm:pb-2 sm:w-full sm:flex sm:justify-center">
          <Link href="/">
            <a className="font-eb sm:text-xl">Rachel How ☻</a>
          </Link>
        </div>
        <div className="float-right sm:w-full sm:flex sm:justify-center">
          <Link href="/about">
          <a
            className="font-sb mr-12 sm:mr-12 sm:text-base sm:pt-2"
          >
            About
          </a>
          </Link>
          <a
            href="https://www.notion.so/FAQ-1bf38aa7b403424b8058bb74eea8e873"
            target="_blank"
            className="font-sb mr-12 sm:mr-12 sm:text-base sm:pt-2"
          >
            FAQ
          </a>
          <a
            href="https://drive.google.com/open?id=1dzwfoK_DJCCn4D91Lste_norBMDBvCYl"
            target="_blank"
            className="font-sb mr-12 sm:mr-12 sm:text-base sm:pt-2"
          >
            CV
          </a>
          <a
            href="mailto:rachelhow95@gmail.com?Subject=Hello!"
            target="_blank"
            className="font-sb sm:text-base sm:pt-2"
          >
            <h5>Contact</h5>
          </a>
        </div>
      </div>
    </nav>

    {children}

    <footer className="py-12 text-center">
      <div className="flex justify-center pb-8">
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
      <div className="text-lightgray text-s sm:px-12">
        © 2020 All rights reserved. Designed + Coded by Rachel How
      </div>
    </footer>
  </div>
);
