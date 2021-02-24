import Layout from '../components/Layout'
import Head from 'next/head'
import Link from 'next/link'
// import SubscribeForm from '../components/SubscribeForm'
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
          <meta
            name='description'
            content="My lil' digital garden"
          />
          <meta property='og:title' content='Notes | Rachel How' />
          <meta
            property='og:description'
            content="My lil' digital garden"
          />
                <meta
        property='og:image'
        content='https://rachelhow.com/images/og-image.png'
      />
      <meta property='twitter:image' content='https://rachelhow.com/images/og-image.png' />
      <meta property='twitter:card' content='summary_large_image' />
      <meta name="twitter:title" content='Rachel How' />
      <meta name="twitter:description" content="My lil' digital garden" />
      <meta name="twitter:site" content="@rachelhxw"/>
      <meta name="twitter:creator" content="Rachel How"/>
          <link
            rel='icon'
            href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧠</text></svg>`}
          />
        </Head>

        <div className='container max-w-600 pt-24 sm:px-8 sm:pb-16'>
          <h1 className='pt-8 mb-4'>Welcome to my mind garden</h1>
                <p>Last updated: 25 Feb 2021, 12:39AM (Malaysian Time)</p>
                <br/>
                <h4>What's a mind garden</h4>
                <br/>
                <p>This digital garden is a public notebook where I can freely explore ideas, thoughts, resources, questions, unknowns, and stuff I find useful and interesting. My garden embrace imperfection and is filled with interconnected ideas where it will change, evolve, and grow over time. It is unorganized on purpose—because what's life without a little chaos? Read the [[terms-of-service]] of this garden.</p>
                <br/><br/>

                <h4>Why am I doing this</h4>
                <br/>
                <p>
                I believe the best way to learn is to learn, share and exchange ideas in public because we're all constantly a work-in-progress. My main purposes are:<br/>
                - To practice mindful learning<br/>
                - To connect my learnings and thoughts that lead to new ideas<br/>
                - To give back by helping others learn<br/>
                </p>
                <br/><br/>

                <h4>Focus areas</h4>
                <br/>
                <Link href="/notes/mental-models"><a>• Mental Models</a></Link><br/><br/>
                <Link href="/notes/creativity"><a>• Creativity</a></Link><br/><br/>
                <Link href="/notes/bookshelf"><a>• Bookshelf</a></Link><br/><br/>
                <br/><br/>
        </div>
      </Layout>
    </div>
  )
}

export default notes