import React from 'react'

const About = () => (
  <div className='py-24 sm:py-12'>
    <div className='container grid grid-flow-col py-12 md:px-4 sm:px-8 sm:py-0 md:grid-cols-1 md:block sm:grid-cols-1 sm:block'>
      <div className='my-auto pr-16 sm:w-full sm:pr-0'>
        <h3 className='text-xxl md:text-xl sm:text-xl'>
          <span className='font-b'>Let’s be friends.</span>
          <span className='text-medgray font-r'>
            {' '}
            I'm active on{' '}
            <a
              href='https://twitter.com/rachelhxw'
              target='_blank'
              className='underline'
            >
              Twitter
            </a>
            . You can{' '}
            <a
              href='mailto:rachelhow95@gmail.com?Subject=Hello!'
              target='_blank'
              className='underline'
            >
              email me
            </a>{' '}
            for freelance projects &amp; speaking engagements. For detailed work
            history, here's my{' '}
            <a
              href='https://drive.google.com/open?id=1dzwfoK_DJCCn4D91Lste_norBMDBvCYl'
              target='_blank'
              className='underline'
            >
              resumé
            </a>
            .
          </span>
        </h3>
      </div>

      <div className='mx-auto md:pt-12 sm:pt-12'>
        <img
          src='/images/profileimage.png'
          alt='rachel-how'
          className='profileimage'
        />
      </div>
    </div>
  </div>
)

export default About
