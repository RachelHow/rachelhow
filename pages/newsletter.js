import Layout from '../components/Layout'
import Head from 'next/head'
import SubscribeForm from '../components/SubscribeForm'

const Newsletter = () => {
  return (
    <div>
      <Layout>
        <Head>
          <title>Newsletter</title>
          <meta name='title' content='Newsletter' />
          <meta
            name='description'
            content='Musings on growth, design and productivity.'
          />
          <meta property='og:title' content='Newsletter' />
          <meta
            property='og:description'
            content='Musings on growth, design and productivity.'
          />
        </Head>

        <div className='container max-w-600 pt-24 pb-20 sm:px-8 sm:pb-16'>
          <h1 className='pt-8 mb-4'>Newsletter</h1>
          <p>Stay updated on my musings on growth, design and productivity.</p>
          <SubscribeForm />
        </div>

        <div className='container max-w-600 pb-56 sm:px-8 sm:pb-24'>
          <h3 className='pt-8 mb-4'>Past Issues</h3>
          <p>Coming soon. Working on this! :)</p>
        </div>

      </Layout>
    </div>
  )
}

export default Newsletter