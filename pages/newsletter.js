import Layout from '../components/Layout'
import Head from 'next/head'
import CTA from '../components/CTA'

const Newsletter = () => {
  return (
    <div>
      <Layout>
        <Head>
          <title>Newsletter</title>
          <meta name='title' content='Newsletter' />
          <meta
            name='description'
            content='Musings on design, personal growth, and building indie products.'
          />
          <meta property='og:title' content='Newsletter' />
          <meta
            property='og:description'
            content='Musings on design, personal growth, and building indie products.'
          />
        </Head>

        <div className='container pt-40 px-8 md:px-4 sm:px-8 sm:pt-36 text-center'>
          <h1 className='text-xxxl md:text-xxl sm:text-xl'>Newsletter</h1>
          {/* <br />
          <p className='mx-48 md:mx-24 sm:mx-0 text-medgray tracking-tight text-base md:text-s'>
            Description
          </p> */}
        </div>

        <div className='container pt-40 pb-64 px-8 md:px-4 sm:px-8 sm:pt-36 text-center'>
            <h2 className='text-xl md:text-xxl sm:text-xl'>Past Issues</h2>
            <br/>
            Coming soon.
        </div>

        {/* <CTA /> */}
      </Layout>
    </div>
  )
}

export default Newsletter