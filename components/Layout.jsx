import Head from "next/head";
// import Link from "next/link";

export default ({ children }) => (
  <div>
    <Head>
      <title>Rachel How</title>
      <meta charSet="utf-8" />
      <meta name="author" content="Rachel How"/>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css2?family=Karla:wght@400;700" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700" rel="stylesheet"/>
    </Head>

    <nav>
      {/* Nav Item */}
    </nav>

    {children}

    <footer>
    </footer>
  </div>
);