import { useRouter } from 'next/router'
import Head from 'next/head'
import Layout from '../../components/Layout'
import ErrorPage from 'next/error'
import Link from 'next/link'
import { format } from 'timeago.js'
import SectionSeparator from '../../components/section-separator'
import SubscribeForm from '../../components/SubscribeForm'
import postStyles from '../../components/post-styles.module.css'
import Image from 'next/image'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import dynamic from 'next/dynamic'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { postFilePaths, POSTS_PATH } from '../../lib/mdxUtils'

const components = {
  Image: Image,
  TestComponent: dynamic(() => import('../../components/TestComponent')),
  Head,
}

export default function Post({ posts, source, frontMatter }) {
  const content = hydrate(source, { components })

  const router = useRouter()
  if (!router.isFallback && !frontMatter?.slug) {
    return <ErrorPage statusCode={404} />
  }

  const sortPosts = posts.sort(
    (a, b) =>
    Number(new Date(b.data.publishedAt)) - Number(new Date(a.data.publishedAt))
    )

  return (
    <Layout>
      <div className='container mx-auto pb-12 sm:px-8 lg:flex'>
        {router.isFallback ? (
          'Loading…'
        ) : (
          <>
              <div id='sidebar' className='flex lg:w-1/3 lg:mr-24 pt-24 md:hidden sm:hidden'>
                  <div className='h-screen sticky top-0 overflow-y-auto pr-4 ascrollbar'>
                          {sortPosts.map((post) => (
                            <Link
                              as={`/blog/${post.filePath.replace(/\.mdx?$/, '')}`}
                              href={'/blog/[slug]'}
                              key={post.filePath}
                            >
                              <a>
                                  <h4 className='text-s'>{post.data.title}</h4>
                                  <p className='pb-6 text-xs'>
                                    {format(post.data.publishedAt)}
                                  </p>
                              </a>
                            </Link>
                          ))}
                    </div>
              </div>

              <div id='content-wrapper' className='w-full flex-auto lg:static lg:max-h-full lg:overflow:visible'>

                <article className='pt-24 max-w-600'>
                  <Head>
                    <title>{frontMatter.title} - Rachel How</title>
                    <meta name='title' content={frontMatter.title} />
                    <meta name='description' content={frontMatter.description} />
                    <meta property='og:title' content={frontMatter.title} />
                    <meta
                      property='og:description'
                      content={frontMatter.description}
                    />
                    <meta property='og:type' content='article' />
                    <meta date={new Date(frontMatter.publishedAt).toISOString()} />
                    <meta
                      property='og:image'
                      content={`https://rachelhow.com${frontMatter.image}`}
                    />
                    <meta
                      property='twitter:image'
                      content={`https://rachelhow.com${frontMatter.image}`}
                    />
                    <meta property='twitter:card' content='summary_large_image' />
                    <meta name='twitter:title' content={frontMatter.title} />
                    <meta
                      name='twitter:description'
                      content={frontMatter.description}
                    />
                    <meta name='twitter:site' content='@rachelhxw' />
                    <meta name='twitter:creator' content='Rachel How' />
                    <link
                      rel='icon'
                      href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✏️</text></svg>`}
                    />
                  </Head>

                  {/* Post Header */}
                  <div className='pb-8'>
                    {frontMatter.image ? (
                      <img
                        src={frontMatter.image}
                        alt={frontMatter.title}
                        className='rounded-lg object-cover'
                      />
                    ) : null}
                    <h1 className='pt-8 sm:pt-4 mb-4'>{frontMatter.title}</h1>
                    <span className='font-mono caption'>
                      By Rachel on {frontMatter.publishedAt} {` • `}
                      {frontMatter.readingTime}
                    </span>
                  </div>

                  <main className={`pb-16 post ${postStyles.post}`}>{content}</main>
                </article>

                <div className='pb-12 lg:hidden'>
                  <Link href='/blog'>
                    <a className='text-base'>👈 &nbsp; Back to the blog</a>
                  </Link>
                </div>

                <SectionSeparator />

                <div className='max-w-600 py-12'>
                  <h6 className='pt-8'>On the newsletter</h6>
                  <h3 className='pb-2'>
                    Stay updated with my musings on growth, design and productivity.
                  </h3>
                  <span className='caption'>
                    Thanks for reading. You can get my blog posts straight to your
                    inbox, once a month.
                  </span>
                  <SubscribeForm />
                </div>
              
            </div>
          </>
        )}
      </div>
    </Layout>
  )
}



export const getStaticProps = async ({ params }) => {

  //fetch all blog posts
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
    const { content, data } = matter(source)
    return {
      content,
      data,
      filePath,
    }
  })

  //fetch selected article
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
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
      posts,
      source: mdxSource,
      frontMatter: data,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = postFilePaths
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }))
  return {
    paths,
    fallback: false,
  }
}