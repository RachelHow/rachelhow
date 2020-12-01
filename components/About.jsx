import React from 'react'
import Link from 'next/link'

const About = () => (
  <div className='pt-24 pb-40 sm:pb-12'>
    <div className='container flex py-12 px-8 md:px-4 sm:px-8 sm:py-0 sm:grid-cols-1 sm:flex-col'>
      <div className='w-1/2 my-auto mr-8 md:w-3/4 sm:w-full sm:pt-12'>
        <div className='pb-6'>
          <img
            src='/images/profileimage.png'
            alt='rachel-how'
            className='profileimage'
          />
        </div>
        <h3 className='pb-4 text-xxl md:text-xl sm:text-xl'>Welcome</h3>
        <div className='pb-4 sm:text-s'>
          I'm a Product Designer at{' '}
          <a href='https://myfave.com/careers' className='font-sb'>
            Fave
          </a>
          , Kuala Lumpur.
        </div>
        <div className='pb-4 sm:text-s'>
          I also build and run&nbsp;
          <a href='https://malaysianswhomake.com' className='font-sb'>
            Malaysians Who Make
          </a>
          , a community of Malaysian Creators &amp; Indie Makers.
        </div>
        <div className='pb-4 sm:text-s'>
          Get in touch: I'm active on{' '}
          <a
            href='https://twitter.com/rachelhxw'
            target='_blank'
            className='font-sb sm:pt-2'
          >
            Twitter
          </a>
          . You can{' '}
          <a
            href='mailto:rachelhow95@gmail.com?Subject=Hello!'
            target='_blank'
            className='font-sb sm:pt-2'
          >
            email me
          </a>{' '}
          for freelance projects/speaking engagements. For detailed work
          history, here's my{' '}
          <a
            href='https://drive.google.com/open?id=1dzwfoK_DJCCn4D91Lste_norBMDBvCYl'
            target='_blank'
            className='font-sb'
          >
            resumé
          </a>
          .
        </div>
        <div className='pb-2 sm:text-s'>
          <Link href='/about'>
            <a className='font-sb'>Read more about me.</a>
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default About
