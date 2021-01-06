import Layout from '../components/Layout'
import Head from 'next/head'
import { getAllWorkForHome } from '../lib/api'
import AllWork from '../components/allWork'
import SectionSeparator from '../components/section-separator'

const work = ({ preview, allPosts }) => {
  const morePosts = allPosts

  return (
    <div>
      <Layout preview={preview}>
        <Head>
          <title>Selected Work - Rachel How</title>
          <meta name='title' content='Selected Work - Rachel How' />
          <meta
            name='description'
            content="I'm a Product Designer by profession, designing thoughtful experiences that your users will love."
          />
          <meta property='og:title' content='Selected Work - Rachel How' />
          <meta
            property='og:description'
            content="I'm a Product Designer by profession, designing thoughtful experiences that your users will love."
          />
        </Head>

        <div className='container pt-40 px-8 md:px-4 sm:px-8 sm:pt-36 sm:pb-0 text-center'>
          <h1 className='text-xxxl md:text-xxl sm:text-xl'>Selected Work</h1>
          <br />
          <p className='mx-48 md:mx-24 sm:mx-0 text-medgray tracking-tight text-base md:text-s'>
            I'm a Product Designer by profession, designing thoughtful
            experiences that your users will love.
          </p>
          <div className='py-10'>
            <a
              href='mailto:rachelhow95@gmail.com?Subject=Hello!'
              target='_blank'
            >
              <button className='cta-button rounded shadow'>
                <span>rachelhow95@gmail.com</span>
              </button>
            </a>
          </div>
        </div>

        <div className='container px-8 md:px-4 sm:px-8'>
          {morePosts.length > 0 && <AllWork posts={morePosts} />}
        </div>

        <div className='container px-16 pt-0 md:px-4 sm:px-8 text-center'>
        <SectionSeparator />
        <div className='inline-block justify-center pb-4 pt-24'>
          <img
            src='/images/Avatar-Online.png'
            alt='avatar-rachel'
            width='80px'
            height='80px'
          />
        </div>
        <h1 className='text-xxl sm:text-xl'>Let’s work together</h1>
        <div className='pt-6 pb-20'>
          <p className='mx-32 md:mx-24 sm:mx-0 text-lightgray tracking-tight leading-relaxed text-base md:text-s sm:text-s'>
            I’m available for freelance projects / speaking engagements. You can{' '}
            <a
              href='mailto:rachelhow95@gmail.com?Subject=Hello!'
              target='_blank'
              className='font-b'
            >
              email
            </a>{' '}
            or{' '}
            <a
              href='https://twitter.com/rachelhxw'
              target='_blank'
              className='font-b'
            >
              {' '}
              tweet
            </a>{' '}
            me. My time books quickly but I will get back to you within 1 - 2
            working days. Thank you!
          </p>
          <br />
          <a href='mailto:rachelhow95@gmail.com?Subject=Hello!' target='_blank'>
            <button className='cta-button rounded shadow'>
              <span>rachelhow95@gmail.com</span>
            </button>
          </a>
        </div>
      </div>

      </Layout>
    </div>
  )
}

export default work

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllWorkForHome(preview)) || []
  return {
    props: { preview, allPosts },
  }
}
