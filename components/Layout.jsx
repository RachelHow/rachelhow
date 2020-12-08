import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GoogleAnalytics from './GoogleAnalytics'
import MakerWidget from './MakerWidget'

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>Rachel How</title>
      <meta charSet='utf-8' />
      <meta name='title' content='Rachel How' />
      <meta
        name='description'
        content='Rachel How designs, writes and builds indie products. Building community at Malaysians Who Make.'
      />
      <meta name='author' content='Rachel How' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta property='og:title' content='Rachel How' />
      <meta property='og:type' content='website' />
      <meta
        name='og:description'
        content='Rachel How designs, writes and builds indie products. Building community at Malaysians Who Make.'
      />
      <meta property='og:url' content='https://rachelhow.com' />
      <meta
        property='og:image'
        content='https://i.ibb.co/88C36Hd/6d44afc5-3814-49b2-b1f1-fdd9fb5042b5.png'
      />
      <meta
        property='twitter:image'
        content='https://i.ibb.co/88C36Hd/6d44afc5-3814-49b2-b1f1-fdd9fb5042b5.png'
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

    <nav className='header w-screen'>
      <Navbar />
    </nav>

    {children}

    <Footer />
  </div>
)

export default Layout
