import React from 'react'
import Link from 'next/link'
import Ic_RightArrow from '../src/Ic_RightArrow'

const Now = () => (
  <div className='pt-12 px-48 md:px-4 sm:px-8'>
    <div className='container grid grid-cols-3 col-gap-48 py-12 sm:grid-cols-1'>
      <div className='col-span-1 sm:pb-8'>
        <h1 className='text-xl'>Now</h1>
      </div>

      <div className='col-span-2'>
        <ul>
          <li className='pb-6'>
            <a className='font-sb' href='https://malaysianswhomake.com' target='_blank'>Building a local creator community</a><Ic_RightArrow/><br />
            <span className='text-medgray'>Malaysians Who Make, a space to showcase local creators.</span>
          </li>
          <li className='pb-6'>
          <Link href='/blog'><a  className='font-sb'>Writing about random ideas, personal growth, design</a></Link> <Ic_RightArrow/>
            <br />
            <span className='text-medgray'>Read the blog.</span>
          </li>
          <li className='pb-6'>
            <a className='font-sb' href='https://notes.rachelhow.com' target='_blank'>Growing my digital garden</a><Ic_RightArrow/><br />
            <span className='text-medgray'>A public notebook where I share my learnings, explore ideas,
            thoughts, questions and unknowns.</span>
          </li>
          <li className='pb-6'>
          <span className='font-sb'>Product Designer at Fave</span>
            <br />
            <span className='text-medgray'>Case studies coming soon.</span>
          </li>
          <li className='pb-6'>
            <a className='font-sb'
              href='https://twitter.com/rachelhxw'
              target='_blank'
            >
              You can find me on Twitter
            <Ic_RightArrow/></a>
            <br />
            <span className='text-medgray'>Let’s be friends!</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default Now
