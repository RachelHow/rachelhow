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
      <link
        rel='icon'
        href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌶</text></svg>`}
      />
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
