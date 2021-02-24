import { useRouter } from 'next/router'
import Head from 'next/head'
import Layout from '../../components/Layout'
import ErrorPage from 'next/error'
import Link from 'next/link'
import postStyles from '../../components/post-styles.module.css'
import Image from 'next/image'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import dynamic from 'next/dynamic'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { notesFilePaths, NOTES_PATH } from '../../lib/mdxUtils'

const components = {
  Image: Image,
  TestComponent: dynamic(() => import('../../components/TestComponent')),
  Head,
}

export default function Note({ notes, source, frontMatter }) {
  const relatedNotes = notes.filter((x) => x.data.tag == frontMatter.tag)
  const otherNotes = notes.filter((x) => x.data.tag != frontMatter.tag)

  const content = hydrate(source, { components })

  const router = useRouter()
  if (!router.isFallback && !frontMatter?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout>
      <div className='container mx-auto pb-12 sm:px-8 lg:flex'>
        {router.isFallback ? (
          'Loading…'
        ) : (
          <>
            <div
              id='content-wrapper'
              className='w-full flex-auto lg:static lg:max-h-full lg:overflow:visible'
            >
              <article className='pt-24 max-w-600'>
                <Head>
                  <title>{frontMatter.title} - Rachel How</title>
                  <meta name='title' content={frontMatter.title} />
                  <meta
                    name='description'
                    content="As part of my lil' digital garden"
                  />
                  <meta property='og:title' content={frontMatter.title} />
                  <meta
                    property='og:description'
                    content="As part of my lil' digital garden"
                  />
                  <meta property='og:type' content='article' />
                  <meta
                    property='og:image'
                    content={`https://rachelhow.com/images/og-image.png`}
                  />
                  <meta
                    property='twitter:image'
                    content={`https://rachelhow.com/images/og-image.png`}
                  />
                  <meta property='twitter:card' content='summary_large_image' />
                  <meta name='twitter:title' content={frontMatter.title} />
                  <meta
                    name='twitter:description'
                    content="As part of my lil' digital garden"
                  />
                  <meta name='twitter:site' content='@rachelhxw' />
                  <meta name='twitter:creator' content='Rachel How' />
                  <link
                    rel='icon'
                    href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✏️</text></svg>`}
                  />
                </Head>

                {/* Post Header */}
                <div>
                  <h1 className='mb-4'>{frontMatter.title}</h1>
                  <main className={`pb-8 post ${postStyles.post}`}>
                    {content}
                  </main>
                </div>
              </article>

              <div className='text-gray1 dark:text-gray3 font-semibold'>
                {router.pathname !== '/' && (
                  <button onClick={() => router.back()}>👈 Go back</button>
                )}
              </div>
            </div>

            <div id='notesSidebar' className='flex pt-24'>
              <div id='navwrapper' className='ascrollbar'>
                <div className='pb-8'>
                      <h4 className='text-s pb-2'>Related to #creativity</h4>
                      {relatedNotes.map((note) => (
                        <Link
                          as={`/notes/${note.filePath.replace(/\.mdx?$/, '')}`}
                          href={'/notes/[slug]'}
                          key={note.filePath}
                        >
                          <a>
                            <p className='text-s pb-2 truncate'>{note.data.title}</p>
                          </a>
                        </Link>
                      ))}
                </div>
                
                <div>
                      <h4 className='text-s pb-2'>Other topics</h4>
                      {otherNotes.map((note) => (
                        <Link
                          as={`/notes/${note.filePath.replace(/\.mdx?$/, '')}`}
                          href={'/notes/[slug]'}
                          key={note.filePath}
                        >
                          <a>
                          <p className='text-s pb-2'>{note.data.title}</p>
                          </a>
                        </Link>
                      ))}
                      </div>
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  )
}

export const getStaticProps = async ({ params }) => {
  const notes = notesFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(NOTES_PATH, filePath))
    const { content, data } = matter(source)
    return {
      content,
      data,
      filePath,
    }
  })

  const postFilePath = path.join(NOTES_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(postFilePath)
  const { content, data } = matter(source)
  const mdxSource = await renderToString(content, {
    components,
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  })
  return {
    props: {
      notes,
      source: mdxSource,
      frontMatter: data,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = notesFilePaths
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }))
  return {
    paths,
    fallback: false,
  }
}
