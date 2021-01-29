import Layout from '../components/Layout'
import Head from 'next/head'
import { getAllPostsForHome } from '../lib/api'
import AllPosts from '../components/allPosts'
import SubscribeForm from '../components/SubscribeForm'

const articles = ({ preview, allPosts }) => {
  const morePosts = allPosts

  return (
    <div>
      <Layout preview={preview}>
        <Head>
          <title>Best Articles | Rachel How</title>
          <meta name='title' content='Best Articles | Rachel How' />
          <meta
            name='description'
            content='Musings on design, personal growth, and building indie products.'
          />
          <meta property='og:title' content='Best Articles | Rachel How' />
          <meta
            property='og:description'
            content='Musings on design, personal growth, and building indie products.'
          />
                          <link
                  rel='icon'
                  href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>☕️</text></svg>`}
                />
        </Head>

        <div className='container max-w-600 pt-24 pb-20 sm:px-8 sm:pb-16'>
          <h1 className='pt-8 mb-4'>Best articles</h1>
          <p>Stay updated on my musings on design, personal growth, and building indie products.</p>
          <SubscribeForm />
        </div>

        <div className='container max-w-600 pb-12 sm:px-8'>
          {morePosts.length > 0 && <AllPosts posts={morePosts} />}
        </div>

      </Layout>
    </div>
  )
}

export default articles

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) || []
  return {
    props: { preview, allPosts },
  }
}
