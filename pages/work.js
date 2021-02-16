import Layout from '../components/Layout'
import Head from 'next/head'
import { getAllWorkForHome } from '../lib/api'
import AllWork from '../components/allWork'
import Ic_Resume from '../src/Ic_Resume'
import Ic_Email from '../src/Ic_Email'
import Ic_LinkedIn from '../src/Ic_LinkedIn'

const work = ({ preview, allPosts }) => {
  const morePosts = allPosts

  return (
    <div>
      <Layout preview={preview}>
        <Head>
          <title>Work - Rachel How</title>
          <meta name='title' content='Work - Rachel How' />
          <meta
            name='description'
            content='I design digital experiences that your users will love.'
          />
          <meta property='og:title' content='Work - Rachel How' />
          <meta
            property='og:description'
            content='I design digital experiences that your users will love.'
          />
                <meta
        property='og:image'
        content='https://rachelhow.com/images/og-image.png'
      />
      <meta property='twitter:image' content='https://rachelhow.com/images/og-image.png' />
      <meta property='twitter:card' content='summary_large_image' />
      <meta name="twitter:title" content='Rachel How' />
      <meta name="twitter:description" content="I design digital experiences that your users will love." />
      <meta name="twitter:site" content="@rachelhxw"/>
      <meta name="twitter:creator" content="Rachel How"/>
          <link
            rel='icon'
            href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚡️</text></svg>`}
          />
        </Head>

        <div className='container max-w-600 pt-24 sm:px-8'>
          <h1 className='pt-8 sm:pt-4 mb-8'>
            I design digital experiences
            <br />
            that your users will love.
          </h1>
        </div>

        <div className='container max-w-600 py-4 grid grid-cols-2 gap-x-12 sm:px-8 sm:grid-cols-1'>
          <div className='col-span-1 sm:pb-16'>
            <img
              src='/images/designsprint-01.png'
              alt='designsprint1'
              className='rounded-md mb-4 img-150'
            />
            <h6>I believe that</h6>
            <h4 className='pb-2'>Great design solves a real problem</h4>
            <span className='caption'>
              I stand in the intersection of technology, business and marketing.
              Currently I’m a Product Designer at Fave, in cross-collaboration
              with a team of designers, product managers and engineers.
            </span>
          </div>
          <div className='col-span-1 sm:pb-16'>
            <img
              src='/images/designsprint-02.png'
              alt='designsprint2'
              className='rounded-md mb-4 img-150'
            />
            <h6>My principles</h6>
            <h4 className='pb-2'>To create value for your business</h4>
            <span className='caption'>
              I start every project by understanding your business and customers
              first before diving into design. I will only accept your project
              if I believe I can create value for your business and make it
              worth your investment. If I feel that I am not a good fit for your
              project, I will recommend alternatives.
            </span>
          </div>
        </div>

        <div className='container max-w-600 sm:px-8 '>
          <h1 className='pt-16 sm:pt-4 mb-4'>Selected work</h1>
          <p className='font-mono pb-4'>
            Case studies coming soon. Scroll to see more ➝
          </p>
          {morePosts.length > 0 && <AllWork posts={morePosts} />}
        </div>

        <div className='container max-w-600 sm:px-8 '>
          <div className='pt-12 pb-20'>
            <img
              src='/images/Avatar-Online.png'
              alt='avatar-rachel'
              width='80px'
              height='80px'
              className='pb-6'
            />
            <h6>Let’s work together</h6>
            <h3 className='pb-2'>Contact me</h3>
            <span className='caption'>
              I’m available on selected freelance projects and speaking
              engagements. My time books quickly but I will get back to you
              within 2 working days. Thank you!
            </span>
            <div className='flex pt-6'>
              <a
                href='mailto:rachel@rachelhow.com?Subject=Work Enquiry!'
                target='_blank'
                className='pr-3'
              >
                <Ic_Email />
              </a>
              <a
                href='https://drive.google.com/open?id=1dzwfoK_DJCCn4D91Lste_norBMDBvCYl'
                className='pr-3'
              >
                <Ic_Resume />
              </a>
              <a href='https://www.linkedin.com/in/rachelhow' className='pr-3'>
                <Ic_LinkedIn />
              </a>
            </div>
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
