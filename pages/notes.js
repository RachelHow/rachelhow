import Layout from '../components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import SubscribeForm from '../components/SubscribeForm'
import SectionSeparator from '../components/section-separator'
// import { format } from 'timeago.js'
// import fs from 'fs'
// import matter from 'gray-matter'
// import path from 'path'
// import { notesFilePaths, NOTES_PATH } from '../../lib/mdxUtils'

const notes = () => {
  return (
    <div>
      <Layout>
        <Head>
          <title>Notes | Rachel How</title>
          <meta name='title' content='Notes | Rachel How' />
          <meta name='description' content="My lil' digital garden" />
          <meta property='og:title' content='Notes | Rachel How' />
          <meta property='og:description' content="My lil' digital garden" />
          <meta
            property='og:image'
            content='https://rachelhow.com/images/og-image.png'
          />
          <meta
            property='twitter:image'
            content='https://rachelhow.com/images/og-image.png'
          />
          <meta property='twitter:card' content='summary_large_image' />
          <meta name='twitter:title' content='Rachel How' />
          <meta name='twitter:description' content="My lil' digital garden" />
          <meta name='twitter:site' content='@rachelhxw' />
          <meta name='twitter:creator' content='Rachel How' />
          <link
            rel='icon'
            href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧠</text></svg>`}
          />
        </Head>

        <div className='container max-w-600 pt-24 sm:px-8 sm:pb-16'>
          <h1 className='pt-8 mb-4'>Welcome to my mind garden</h1>
          <p>Last updated: 25 Feb 2021, 12:39AM (Malaysia Time)</p>
          <br />
          <h4>Start exploring</h4>
          <br />
          <Link href='/notes/mental-models'>
            <a>
              <div className=' bg-lightestgray dark:bg-cardBgDark p-5 rounded-3xl mb-4 hover:opacity-75 transition duration-200 ease-in-out'>
                Mental Models{' '}
              </div>
            </a>
          </Link>
          <Link href='/notes/creativity'>
            <a>
              <div className=' bg-lightestgray dark:bg-cardBgDark p-5 rounded-3xl mb-4 hover:opacity-75 transition duration-200 ease-in-out'>
                Creativity
              </div>
            </a>
          </Link>

          <Link href='/notes/bookshelf'>
            <a>
              <div className=' bg-lightestgray dark:bg-cardBgDark p-5 rounded-3xl mb-4 hover:opacity-75 transition duration-200 ease-in-out'>
                Bookshelf
              </div>
            </a>
          </Link>
          <br />

          <h4>What's a mind garden</h4>
          <br />
          <p>
            This digital garden is a public notebook where I can freely explore
            ideas, thoughts, resources, questions, unknowns, and stuff I find
            useful and interesting. My garden embrace imperfection and is filled
            with interconnected ideas where it will change, evolve, and grow
            over time. It is unorganized on purpose—because what's life without
            a little chaos? Read the{' '}
            <Link href='/terms-of-service'>
              <a>Terms of Service</a>
            </Link>{' '}
            of this garden.
          </p>
          <br />
          <br />

          <h4>Why am I doing this</h4>
          <br />
          <p>
            I believe the best way to learn is to learn, share and exchange
            ideas in public because we're all constantly a work-in-progress. My
            main purposes are:
            <br />
            - To practice mindful learning
            <br />
            - To connect my learnings and thoughts that lead to new ideas
            <br />
            - To give back by helping others learn
            <br />
          </p>
          <br />
          <br />
          <SectionSeparator />
        </div>

        <div className='container	max-w-600 sm:px-8 py-12'>
          <h6>On the newsletter</h6>
          <h3 className='pb-2'>
            Stay updated with my musings on growth, design and productivity.
          </h3>
          <span className='caption'>
            Get my blog posts straight to your inbox, 1 - 2 times a month. No
            spam, no hard feelings.
          </span>
          <SubscribeForm />
        </div>
      </Layout>
    </div>
  )
}

export default notes
