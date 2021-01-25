import React, { useState } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false)

  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  React.useEffect(() => setMounted(true), [])

  return (
    <>
      <nav className='font-display relative flex flex-wrap items-center py-2 sm:px-8'>
        <div className='container mx-auto flex flex-wrap items-center'>
          <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            <Link href='/'>
              <a className='font-semibold'>Rachel How.</a>
            </Link>
            <button
              className='cursor-pointer text-s leading-none py-1 block lg:hidden outline-none focus:outline-none'
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
            <ul className='flex flex-col lg:flex-row list-none lg:ml-auto md:pt-2 sm:pt-2'>
              <li>
                <Link href='/about'>
                  <a className='menu-text'>
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/articles'>
                  <a className='menu-text'>
                    Articles
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/work'>
                  <a className='menu-text'>
                    Work
                  </a>
                </Link>
              </li>
              <li>
                <a
                  href='https://notes.rachelhow.com'
                  target='_blank'
                  className='menu-text'
                >
                  Notebook
                </a>
              </li>
              <li>
                <a
                  href='https://www.notion.so/FAQ-1bf38aa7b403424b8058bb74eea8e873'
                  target='_blank'
                  className='menu-text'
                >
                  AMA
                </a>
              </li>
              <li className='sm:px-0 md:px-0 flex hover:opacity-75 pb-1 pl-4'>
                <button
                  aria-label='Toggle Dark Mode'
                  type='button'
                  className=''
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                >
                  {mounted && (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      stroke='currentColor'
                      className='h-6 w-6 text-black dark:text-white'
                    >
                      {theme === 'dark' ? (
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                        />
                      ) : (
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                        />
                      )}
                    </svg>
                  )}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
