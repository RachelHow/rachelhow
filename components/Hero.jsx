import React from 'react'

const Hero = () => (
  <div className='container max-w-2xl flex pt-32 pb-24'>
        <img
          src='/images/profileimage.png'
          alt='rachel-how'
          className='profileimage sm:mx-auto mr-8'
        />

        <div className='mt-12'>
          <h1 className='pt-8 sm:pt-4 mb-4'>Hi! I’m Rachel 🌶</h1>
          <p className='dark:text-gray3'>
            I’m a product designer who codes &amp; writes. Currently designing
            products at Fave.
          </p>
        </div>
  </div>
)

export default Hero
