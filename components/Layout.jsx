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
      <link href="https://fonts.googleapis.com/css2?family=Karla:wght@400;700" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600" rel="stylesheet"/>
      <GoogleAnalytics/>
   </Head>

    <nav className="header w-screen px-16 py-8 sm:px-8 sm:py-4">
      <div className="sm:flex-col">
        <div className="float-left sm:pb-2 sm:w-full sm:flex sm:justify-center">
          <Link href="/">
            <a className="font-bold font-display sm:text-xl">Rachel How ☻</a>
          </Link>
        </div>
        <div className="float-right sm:w-full sm:flex sm:justify-center">
          <Link href="/speaking">
            <a className="font-display mr-8 sm:mr-8 sm:text-base sm:pt-2">
              Speaking
            </a>
          </Link>
          <a href="https://drive.google.com/open?id=1dzwfoK_DJCCn4D91Lste_norBMDBvCYl" 
          target="_blank" className="font-display mr-8 sm:mr-8 sm:text-base sm:pt-2">
            Résumé
          </a>
          <a href="mailto:rachelhow95@gmail.com?Subject=Hello!" 
          target="_blank" className="font-display sm:text-base transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            Contact
          </a>
        </div>
      </div>
    </nav>

    {children}

    <footer className="py-6 text-center">
      © 2020 Rachel How
    </footer>
  </div>
);