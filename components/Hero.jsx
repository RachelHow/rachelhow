import React from 'react'
import Ic_DownArrow from '../src/Ic_DownArrow'

const Hero = () => (
  <div className='flex h-screen text-center '>
    <div className='container m-auto sm:px-8'>
      <img
        src='/images/profileimage.png'
        alt='rachel-how'
        className='profileimage mx-auto'
      />
      <h1 className='text-xl pt-8 mb-4 text-black'>
        Hi! I’m Rachel, Product Designer who codes &amp; writes.
      </h1>
      <span className='text-medgray'>Based in Kuala Lumpur 🇲🇾</span>
    </div>
    <div className='hero-caption text-medgray text-s sm:px-12 sm:hidden'>
      Welcome to my journey where I explore,{' '}
      <span className='italic line-through'>fail</span> challenge and grow.{' '}
      <Ic_DownArrow size='16' />
    </div>
  </div>
)

export default Hero
