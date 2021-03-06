import React, { useState } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import Ic_Menu from '../src/Ic_Menu'

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false)

  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  React.useEffect(() => setMounted(true), [])

  return (
    <>
      <nav className='font-display relative flex flex-wrap items-center py-2 sm:px-8'>
        <div className='container mx-auto flex flex-wrap items-center'>
          {/* Left */}
          <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            <Link href='/'>
              <a className='my-auto text-base'>Rachel How.</a>
            </Link>
            <div className='flex'>
              <button
                  aria-label='Toggle Dark Mode'
                  type='button'
                  className='lg:hidden'
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                >
                  {mounted && (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      className='h-5 w-5'
                    >
                      {theme === 'dark' ? (
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          fill="#ffffff"
                          stroke="#ffffff"
                          d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                        />
                      ) : (
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          fill="#111111"
                          stroke="#111111"
                          d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                        />
                      )}
                    </svg>
                  )}
                </button>
              <button
                className='block lg:hidden ml-4'
                type='button'
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                {theme === 'dark'  ? <Ic_Menu color={"#ffffff"}/> : <Ic_Menu color={"#111111"}/>}
              </button>
            </div>
          </div>

          {/* Center */}
          <div
            className={
              'lg:flex lg:mx-auto' + (navbarOpen ? ' flex' : ' hidden')
            }
          >
            <ul className='flex flex-col lg:flex-row list-none lg:ml-auto md:pt-2 sm:pt-2 md:ml-0 sm:ml-0'>
              <li>
                <Link href='/blog'>
                  <a className='menu-text'>Blog</a>
                </Link>
              </li>
              <li>
                <Link href='/work'>
                  <a className='menu-text'>Work</a>
                </Link>
              </li>
              <li>
                <Link href='/notes'>
                  <a className='menu-text'>Notes</a>
                </Link>
              </li>
              <li>
                <Link href='/about'>
                  <a className='menu-text'>About</a>
                </Link>
              </li>
              <li>
                <Link href='/faq'>
                  <a className='menu-text'>FAQ</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className='hover:opacity-75 md:hidden sm:hidden'>
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
                  className='h-5 w-5 text-black dark:text-white'
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
          </div>
        </div>
      </nav>
    </>
  )
}
