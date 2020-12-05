import React from 'react'
import Link from 'next/link'
import Ic_DownArrow from '../src/Ic_DownArrow'

const Hero = () => (
  <div className='flex h-screen'>
    <div className='container m-auto sm:px-8'>
      <h1 className='text-xxxl md:text-xxl sm:text-xl w-3/4 md:w-full sm:w-full leading-snug'>
        <span>Hey there, I'm Rachel.</span>
        <span className='text-medgray font-r'>
          {' '}
          I design, write &amp; build indie products. Product Designer at{' '}
          <a href='https://myfave.com/careers' className='underline'>
            Fave
          </a>
          . Building community at{' '}
          <a href='https://malaysianswhomake.com' className='underline'>
            Malaysians Who Make
          </a>
          .
        </span>
      </h1>
      <br />
      <span className="text-l">
        More
        <Link href='/about'>
          <a className='font-sb'> about me.</a>
        </Link>
      </span>
    </div>
    <div className='hero-caption text-lightgray text-s sm:px-12 sm:hidden'>
      Welcome to my journey where I explore,{' '}
      <span className='italic line-through'>fail</span> challenge and grow.{' '}
      <Ic_DownArrow size='16' />
    </div>
  </div>
)

export default Hero
