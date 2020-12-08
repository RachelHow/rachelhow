import Layout from '../components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import SectionSeparator from '../components/section-separator'

function About() {
  return (
    <Layout>
      <Head>
        <title>About Me - Rachel How</title>
        <meta name='title' content='About Me - Rachel How' />
        <meta
          name='description'
          content="I'm a polymath - Product Designer at Fave, Writer, Indie Maker, Community Builder.
          I design delightful user experiences at the intersection of people and business.
          I also love coffee, cats, food, design, writing, and building stuff with code."
        />
        <meta property='og:title' content='About Me - Rachel How' />
        <meta
          property='og:description'
          content="I'm a polymath - Product Designer at Fave, Writer, Indie Maker, Community Builder.
          I design delightful user experiences at the intersection of people and business.
          I also love coffee, cats, food, design, writing, and building stuff with code."
        />
      </Head>

      <div className='container px-16 pt-24 pb-12 md:px-4 sm:px-8 sm:pt-32 text-center'>
        <img
          src='/images/rachel-how-ky.png'
          alt='rachelhow'
          className='rounded-lg mx-auto mb-8'
          width='100%'
          height='auto'
        />
        <h1 className='text-xxxl md:text-xxl sm:text-xl'>
          Hi! I'm Rachel How.
        </h1>
        <br />
        <p className='mx-36 md:mx-24 sm:mx-0 text-lightgray leading-relaxed text-base md:text-s sm:text-s'>
          I'm a polymath—Product Designer at{' '}
          <a href='https://myfave.com/careers' className='font-sb'>
            Fave
          </a>
          , Writer, Indie Maker, Community Builder.
          <br />
          I design delightful user experiences at the intersection of people and
          business.
          <br />I also love coffee, cats, food, design, writing, and building
          stuff with code.
          <br />
          You can also check out my{' '}
          <a
            href='https://drive.google.com/open?id=1dzwfoK_DJCCn4D91Lste_norBMDBvCYl'
            target='_blank'
            className='font-sb'
          >
            CV.
          </a>
        </p>

        <div className='py-10'>
          <a href='mailto:rachelhow95@gmail.com?Subject=Hello!' target='_blank'>
            <button className='cta-button rounded shadow'>
              <span>rachelhow95@gmail.com</span>
            </button>
          </a>
        </div>
      </div>

      <div className='container px-16 md:px-4 sm:px-8 text-center'>
        <div className='justify-center pb-4'>
          <img
            src='/images/designsprint-01.png'
            alt='designsprint1'
            className='rounded-lg mx-auto'
            width='100%'
            height='auto'
          />
        </div>
      </div>

      <div className='container px-16 md:px-4 sm:px-8 text-center'>
        <p className='pt-8 text-xs md:text-xxs text-lightgray py-2 uppercase tracking-wider'>
          I believe that
        </p>

        <h2 className='text-xxl'>Great design solves a real problem</h2>
        <div className='pt-6 pb-20'>
          <p className='mx-32 md:mx-0 sm:mx-0 text-lightgray tracking-tight leading-relaxed text-base md:text-s sm:text-s'>
            I always strive to design profitable solutions for you. I’ve been
            self-learning design, marketing and business since I started working
            at 18 years old. Currently, I work as a Product Designer at{' '}
            <a href='https://myfave.com/careers' className='font-sb'>
              Fave
            </a>
            , a loyalty and cashback platform in Southeast Asia, with an amazing
            team of designers, product managers and engineers. I love building
            my own product through code — Constantly learning new things makes
            me feel super energised. To give back to the community, I share my
            journey through{' '}
            <Link href='/blog'>
              <a className='font-sb'>writing</a>
            </Link>{' '}
            and speaking.
          </p>
        </div>
      </div>

      <div className='container px-16 md:px-4 sm:px-8 text-center'>
        <div className='justify-center pb-4'>
          <img
            src='/images/designsprint-02.png'
            alt='designsprint2'
            className='rounded-lg mx-auto'
            width='100%'
            height='auto'
          />
        </div>
      </div>

      <div className='container px-16 md:px-4 sm:px-8 text-center'>
        <p className='pt-8 text-xs md:text-xxs text-lightgray py-2 uppercase tracking-wider'>
          My principles
        </p>

        <h2 className='text-xxl'>Creating value for your business</h2>
        <div className='pt-6'>
          <p className='mx-32 md:mx-0 sm:mx-0 text-lightgray tracking-tight leading-relaxed text-base md:text-s sm:text-s'>
            I start every project by understanding your business and customers
            first before diving into design. I will only accept your project if
            I believe I can create value for your business and make it worth
            your investment. If I feel that I am not a good fit for your idea, I
            will recommend you other solutions.
          </p>
        </div>
      </div>

      <div className='container px-16 pt-8 md:px-4 sm:px-8 text-center'>
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
  )
}

export default About
