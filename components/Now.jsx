import React from 'react'
import Link from 'next/link'

const Now = () => (
  <div className='container max-w-600 sm:px-8'>
        <h1 className='py-8'>Now</h1>

      <div className=''>
        <ul>
          <li className='pb-6'>
            <a className='text-s text-black dark:text-white font-medium' href='https://malaysianswhomake.com' target='_blank'>Building a local creator community ➝</a>
            <p className='mt-1'>Malaysians Who Make, a space to showcase local creators.</p>
          </li>
          <li className='pb-6'>
          <Link href='/blog'><a  className='text-s text-black dark:text-white font-medium'>Writing about growth, design and productivity ➝</a></Link>
            <p className='mt-1'>Read my best essays.</p>
          </li>
          <li className='pb-6'>
            <a className='text-s text-black dark:text-white font-medium' href='https://notes.rachelhow.com' target='_blank'>Growing my digital garden ➝</a>
            <p className='mt-1'>A public notebook where I share my learnings, explore ideas,
            thoughts, questions and unknowns.</p>
          </li>
          <li className='pb-6'>
          <span className='text-s text-black dark:text-white font-medium'>Product Designer at Fave</span>
            <p className='mt-1'>Case studies coming soon.</p>
          </li>
          <li className='pb-6'>
            <a className='text-s text-black dark:text-white font-medium'
              href='https://twitter.com/rachelhxw'
              target='_blank'
            >
              You can find me on Twitter ➝</a>
            <p className='mt-1'>Let’s be friends!</p>
          </li>
        </ul>
      </div>
  </div>
)

export default Now
