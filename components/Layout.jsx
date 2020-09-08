import Head from "next/head";
import Link from "next/link";
import GoogleAnalytics from "./GoogleAnalytics";

export default ({ children }) => (
  <div>
    <Head>
      <title>Rachel How</title>
      <meta charSet="utf-8" />
      <meta name="author" content="Rachel How"/>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content="Rachel How" />
      <meta property="og:type" content="website" />
      <meta name="og:description" content="Product Designer"/>
      <meta property="og:url" content="https://rachelhow.com"/>
      <meta property="og:image" content="/images/URL-image-preview.png" /> 
      <meta property="twitter:image" content="/images/URL-image-preview.png" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800" rel="stylesheet"/>
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link rel="canonical" href="https://rachelhow.com"/>
      <GoogleAnalytics/>
   </Head>

    <nav className="header w-screen px-16 py-6 sm:px-8 sm:py-4">
      <div>
        <div className="float-left sm:pb-2 sm:w-full sm:flex sm:justify-center">
          <Link href="/">
            <a className="font-eb sm:text-xl">Rachel How ☻</a>
          </Link>
        </div>
        <div className="float-right sm:w-full sm:flex sm:justify-center">
          <a href="https://www.notion.so/FAQ-1bf38aa7b403424b8058bb74eea8e873" 
          target="_blank"
          className="font-sb mr-12 sm:mr-12 sm:text-base sm:pt-2">
            FAQ
          </a>
          <a href="https://drive.google.com/open?id=1dzwfoK_DJCCn4D91Lste_norBMDBvCYl" 
          target="_blank" className="font-sb mr-12 sm:mr-12 sm:text-base sm:pt-2">
            Résumé
          </a>
          <a href="mailto:rachelhow95@gmail.com?Subject=Hello!" 
          target="_blank" className="font-sb sm:text-base sm:pt-2">
            Contact
          </a>
        </div>
      </div>
    </nav>

    {children}

    <footer className="py-12 text-center">
      <div className="text-lightgray text-s sm:px-12">
        © 2020 All rights reserved. Designed + Coded by Rachel How
      </div>
    </footer>
  </div>
);