import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GoogleAnalytics from './GoogleAnalytics'
import MakerWidget from './MakerWidget'

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>Rachel How</title>
      <meta charSet='utf-8' />
      <meta name='author' content='Rachel How' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://rachelhow.com' />
      <meta
        property='og:image'
        content='https://rachelhow.com/images/og-image.png'
      />
      <meta
        property='twitter:image'
        content='https://rachelhow.com/images/og-image.png'
      />
      <link
        href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800'
        rel='stylesheet'
      />
      <link href='/fonts/styles.css' rel='stylesheet' />
      <link rel='shortcut icon' href='/favicon/favicon.ico' />
      <link rel='canonical' href='https://rachelhow.com' />
      <MakerWidget />
      <GoogleAnalytics />
    </Head>

    <nav className='header dark:text-white'>
      <Navbar />
    </nav>

    {children}

    <Footer />
  </div>
)

export default Layout
