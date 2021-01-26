import Layout from '../components/Layout'
import Head from 'next/head'
import { getAllWorkForHome } from '../lib/api'
import Work from '../components/Work'
import Ic_DigitalGarden from '../src/Ic_DigitalGarden'
import Ic_FAQ from '../src/Ic_FAQ'

export default function IndexPage({ preview, allPosts }) {
  const morePosts = allPosts

  return (
    <div>
      <Layout preview={preview}>
        <Head>
          <title>Rachel How - Product Designer, Writer, Indie Maker</title>
          <meta
            name='title'
            content='Rachel How - Product Designer, Writer, Indie Maker'
          />
          <meta
            name='description'
            content='Rachel How designs, writes and builds indie products. Building community at Malaysians Who Make.'
          />
          <meta
            property='og:title'
            content='Rachel How - Product Designer, Writer, Indie Maker'
          />
          <meta
            property='og:description'
            content='Rachel How designs, writes and builds indie products. Building community at Malaysians Who Make.'
          />
        </Head>

        <div className='container	max-w-800	flex pt-32 pb-8'>
          <img
            src='/images/profileimage.png'
            alt='rachel-how'
            className='profileimage sm:mx-auto mr-8'
          />

          <div className='mt-12'>
            <h1 className='pt-8 sm:pt-4 mb-4'>Hi! I’m Rachel 🌶</h1>
            <p className='w-3/5'>
              I’m a product designer who codes &amp; writes. Currently designing
              products at Fave.
            </p>
          </div>
        </div>

        <div className='container max-w-800	py-12'>
          <h6>Thinking out loud</h6>
          <h3>I write about personal growth and design.</h3>
          <button className='btn btn-primary mt-8'>More on the blog</button>
        </div>

        <Work posts={allPosts} />

        <div className='container	max-w-800 py-12'>
          <h6>Never stop learning</h6>
          <h3>Here are resources that might help you.</h3>
          <div className='pt-6'>
            <div className='flex bg-lightestgray dark:bg-cardBgDark p-6 mb-4 rounded-3xl'>
              <Ic_FAQ />
              <div className='pl-4 my-auto'>
                <h4>Personal FAQs</h4>
                <span className='caption'>
                  Answering the most-asked questions by aspiring designers/indie
                  makers.
                </span>
              </div>
            </div>
            <div className='flex bg-lightestgray dark:bg-cardBgDark p-6 rounded-3xl'>
              <Ic_DigitalGarden />
              <div className='pl-4 my-auto'>
                <h4>Digital Garden</h4>
                <span className='caption'>
                  A public notebook where I openly share my notes, thoughts,
                  questions and unknowns.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='container	max-w-800 py-12'>
          <h6>On the newsletter</h6>
          <h3 className='pb-2'>
            Stay updated with my articles on personal growth &amp; design.
          </h3>
          <span className='caption'>
            Get articles straight to your inbox, 1 - 2 times a month. No spam,
            no hard feelings.
          </span>
          <button className='btn btn-primary mt-8'>Subscribe</button>
        </div>
      </Layout>
    </div>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllWorkForHome(preview)) || []
  return {
    props: { preview, allPosts },
  }
}
