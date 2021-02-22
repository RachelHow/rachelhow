import Layout from '../components/Layout'
import Head from 'next/head'
import SubscribeForm from '../components/SubscribeForm'
import SectionSeparator from '../components/section-separator'

const Newsletter = () => {
  return (
    <div>
      <Layout>
        <Head>
          <title>Rachel's Newsletter</title>
          <meta name='title' content="Rachel's Newsletter" />
          <meta
            name='description'
            content='Newsletter on growth, design and productivity.'
          />
          <meta property='og:title' content="Rachel's Newsletter" />
          <meta
            property='og:description'
            content='Newsletter on growth, design and productivity.'
          />
          <meta
            property='og:image'
            content='https://rachelhow.com/images/og-image.png'
          />
          <meta
            property='twitter:image'
            content='https://rachelhow.com/images/og-image.png'
          />
          <meta property='twitter:card' content='summary_large_image' />
          <meta name='twitter:title' content="Rachel's Newsletter" />
          <meta
            name='twitter:description'
            content='Newsletter on growth, design and productivity.'
          />
          <meta name='twitter:site' content='@rachelhxw' />
          <meta name='twitter:creator' content="Rachel's Newsletter" />
        </Head>

        <div className='container	max-w-600	flex pt-32 pb-24 sm:block sm:pt-20 sm:px-8 my-auto flex-col'>
          <img
            src='/images/profileimage.png'
            alt='rachel-how'
            className='profileimage mx-auto'
          />
          <div className='text-center'>
            <h1 className='mt-8 mb-4'>
              Rachel's newsletter on growth, design &amp; productivity.
            </h1>
            <p>
              Sharpen your mind with actionable ideas &amp; resources to help
              you be more creative, mindful and productive. Delivered 1-2 times
              a month.
            </p>
            <div className='lg:mx-32 md:mx-32'>
              <SubscribeForm />
            </div>
          </div>
        </div>

        <SectionSeparator />

        <div className='container max-w-600 pb-24 sm:px-8 sm:pb-24 pt-24'>
          <h3 className='mb-8'>What's inside?</h3>
          <div className='text-base'>
            <h4>My latest essays</h4><br/>
            <h4>Personal growth tips</h4><br/>
            <h4>Actionable tools &amp; resources to improve your productivity and creativity</h4><br/>
            <h4>Interesting ideas that come to mind</h4><br/>
            <p> ...and more on the newsletter.</p>
          </div>
        </div>

        <SectionSeparator />

        <div className='container max-w-600 pb-24 sm:px-8 sm:pb-24 pt-24'>
          <h3 className='mb-8'>Past Issues</h3>
          <div className='text-base'>
            <a
              href='https://buttondown.email/rachelhow/archive/my-lifestyle-design-for-2021-issue-1/'
              target='_blank'
            >
              My Lifestyle Design for 2021 ✨ — Issue 1
            </a>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Newsletter
