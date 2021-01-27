import Layout from '../components/Layout'
import Head from 'next/head'
import Now from '../components/Now'
import Milestones from '../components/Milestones'
import { format } from 'timeago.js'

function About() {
  return (
    <Layout>
      <Head>
        <title>Rachel How</title>
        <meta name='title' content='Rachel How' />
        <meta
          name='description'
          content="I'm a polymath—Product designer, writer, indie maker, community
          builder."
        />
        <meta property='og:title' content='Rachel How' />
        <meta
          property='og:description'
          content="I'm a polymath—Product designer, writer, indie maker, community
          builder."
        />
        <link
          rel='icon'
          href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧀</text></svg>`}
        />
      </Head>

      <div className='container max-w-600 pt-24 pb-8 sm:px-8'>
        <img
          src='/images/rachel-how-ky.png'
          alt='rachelhow'
          className='rounded-lg mb-8'
          width='100%'
          height='auto'
        />
        <h1 className='pt-8 sm:pt-4 mb-4'>Hey! I’m Rachel.</h1>
        <span className='font-mono caption'>
          Updated {format('Jan 21, 2021')}
        </span>
        <p className='pt-8'>
          I'm a polymath—Product designer, writer, indie maker, community
          builder.
          <br />
          <br />
          I love building indie products through code. Constantly learning new
          skills fuels me. To give back to the community, I share my journey
          through writing and speaking.
          <br />
          <br />
          You can find me on {''}
          <a
            href='https://twitter.com/rachelhxw'
            target='_blank'
            className='textlink'
          >
            Twitter
          </a>{' '}
          or{' '}
          <a
            href='https://www.linkedin.com/in/rachelhow'
            target='_blank'
            className='textlink'
          >
            LinkedIn
          </a>{' '}
          where I talk about personal growth, design and development. You can
          also send me an{' '}
          <a
            href='mailto:rachelhow95@gmail.com?Subject=Hello!'
            target='_blank'
            className='textlink'
          >
            email
          </a>{' '}
          or check out my{' '}
          <a
            href='https://drive.google.com/open?id=1dzwfoK_DJCCn4D91Lste_norBMDBvCYl'
            target='_blank'
            className='textlink'
          >
            CV.
          </a>
        </p>
      </div>

      <Now />
      <Milestones />
    </Layout>
  )
}

export default About
