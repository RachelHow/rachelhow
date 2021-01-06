import React from 'react'
import Link from 'next/link'
import Ic_TwitterLarge from '../src/Ic_TwitterLarge'

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  return (
    <>
      <nav className='font-display relative flex flex-wrap items-center justify-between py-3 sm:px-8'>
        <div className='container mx-auto flex flex-wrap items-center justify-between'>
          <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            <Link href='/'>
              <a className='font-b'>Rachel How</a>
            </Link>
            <button
              className='cursor-pointer font-sb text-s leading-none py-1 block lg:hidden outline-none focus:outline-none'
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              Menu
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center' +
              (navbarOpen ? ' flex' : ' hidden')
            }
          >
            <ul className='flex flex-col lg:flex-row list-none lg:ml-auto text-s md:pt-2 sm:pt-2'>
              <li>
                <Link href='/articles'>
                  <a className='px-3 sm:px-0 md:px-0 py-2 font-sb flex items-center leading-snug hover:opacity-75'>
                    Articles
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/newsletter'>
                <a className='px-3 sm:px-0 md:px-0 py-2 font-sb flex items-center leading-snug hover:opacity-75'>
                Newsletter
                </a>
                </Link>
              </li>
              <li>
                <Link href='/work'>
                  <a className='px-3 sm:px-0 md:px-0 py-2 font-sb flex items-center leading-snug hover:opacity-75'>
                    Work
                  </a>
                </Link>
              </li>
              <li>
                <a
                  href='https://notes.rachelhow.com'
                  target='_blank'
                  className='px-3 sm:px-0 md:px-0 py-2 font-sb flex items-center leading-snug hover:opacity-75'
                >
                  Notebook
                </a>
              </li>
              <li>
                <Link href='/about'>
                  <a className='px-3 sm:px-0 md:px-0 py-2 font-sb flex items-center leading-snug hover:opacity-75'>
                    About
                  </a>
                </Link>
              </li>
              <li>
                <a
                  href='https://www.notion.so/FAQ-1bf38aa7b403424b8058bb74eea8e873'
                  target='_blank'
                  className='px-3 sm:px-0 md:px-0 py-2 font-sb flex items-center leading-snug hover:opacity-75'
                >
                  FAQ
                </a>
              </li>
              {/* <li>
                <a
                  href='mailto:rachelhow95@gmail.com?Subject=Hello!'
                  target='_blank'
                  className='px-3 sm:px-0 md:px-0 py-2 font-sb flex items-center leading-snug hover:opacity-75'
                >
                  Contact
                </a>
              </li> */}
              <li>
                <a
                  target='_blank'
                  rel='noopener'
                  href='https://twitter.com/rachelhxw'
                  className='ml-2 sm:ml-0 md:ml-0 pt-1 inline-block'
                >
                  <span className='sr-only'>Twitter: @rachelhxw</span>
                  <Ic_TwitterLarge />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
