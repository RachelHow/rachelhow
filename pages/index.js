import Layout from '../components/Layout'
import Head from 'next/head'
import Link from 'next/link'
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

        <div className='container	max-w-600	flex pt-32 pb-8 sm:block sm:pt-20 sm:px-8'>
          <img
            src='/images/profileimage.png'
            alt='rachel-how'
            className='profileimage sm:mx-auto mr-8'
          />

          <div className='mt-12 sm:mt-4 sm:text-center'>
            <h1 className='pt-8 sm:pt-4 mb-4'>Hi! I’m Rachel 🌶</h1>
            <p>
              I’m a product designer who codes &amp; writes. Currently designing
              products at Fave.
            </p>
          </div>
        </div>

        <div className='container max-w-600	sm:px-8 py-12'>
          <h6>Thinking out loud</h6>
          <h3>I write about personal growth and design.</h3>
          <Link href='/articles'><button className='btn btn-primary mt-8'>More on the blog ➝</button></Link>
        </div>

        <Work posts={allPosts} />

        <div className='container	max-w-600 sm:px-8 py-12'>
          <h6>Never stop learning</h6>
          <h3>Here are resources that might help you.</h3>
          <div className='pt-6'>
            <div className='bg-lightestgray dark:bg-cardBgDark p-5 mb-6 rounded-3xl'>
              <a
                href='https://www.notion.so/FAQ-1bf38aa7b403424b8058bb74eea8e873'
                target='_blank'
                className='flex'
              >
                <div className='my-auto'><Ic_FAQ /></div>
                <div className='pl-6 my-auto'>
                  <h4>Personal FAQs</h4>
                  <span className='caption'>
                    Answering the most-asked questions by aspiring
                    designers/indie makers.
                  </span>
                </div>
              </a>
            </div>
            <div className='bg-lightestgray dark:bg-cardBgDark p-5 rounded-3xl'>
              <a
                href='https://notes.rachelhow.com'
                target='_blank'
                className='flex'
              >
                <div className='my-auto'><Ic_DigitalGarden /></div>
                <div className='pl-6 my-auto'>
                  <h4>Digital Garden</h4>
                  <span className='caption'>
                    A public notebook where I openly share my notes, thoughts,
                    questions and unknowns.
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className='container	max-w-600 sm:px-8 py-12'>
          <h6>On the newsletter</h6>
          <h3 className='pb-2'>
            Stay updated with my articles on personal growth &amp; design.
          </h3>
          <span className='caption'>
            Get articles straight to your inbox, 1 - 2 times a month. No spam,
            no hard feelings.
          </span>
          <button className='btn btn-primary mt-8'>Subscribe ⚡️</button>
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
