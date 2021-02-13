import { useRouter } from 'next/router'
import Head from 'next/head'
import Layout from '../../components/Layout'
import ErrorPage from 'next/error'
import Link from 'next/link'
import SectionSeparator from '../../components/section-separator'
import SubscribeForm from '../../components/SubscribeForm'
import Image from 'next/image'
import fs from 'fs'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import dynamic from 'next/dynamic'
import matter from 'gray-matter'
import path from 'path'
import { postFilePaths, POSTS_PATH } from '../../lib/mdxUtils'
import postStyles from '../../components/post-styles.module.css'

const components = {
  Image: Image,
  TestComponent: dynamic(() => import('../../components/TestComponent')),
  Head,
}

export default function Post({ posts, morePosts, source, frontMatter }) {
  const content = hydrate(source, { components })

  const router = useRouter()
  if (!router.isFallback && !frontMatter?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout>
      <div className='container max-w-600 mx-auto pt-36 pb-12 sm:px-8'>
        {router.isFallback ? (
          'Loading…'
        ) : (
          <>
            <article>
              <Head>
                <title>{frontMatter.title} - Rachel How</title>
                <meta name='title' content={frontMatter.title} />
                <meta name='description' content='An article by Rachel How' />
                <meta property='og:title' content={frontMatter.title} />
                <meta
                  property='og:description'
                  content='An article by Rachel How'
                />
                <meta property='og:image' content={frontMatter.image} />
                <link
                  rel='icon'
                  href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✏️</text></svg>`}
                />
              </Head>

              {/* Post Header */}
              <div className='pb-8'>
                <img
                  src={frontMatter.image}
                  alt={frontMatter.title}
                  className='rounded-lg object-cover'
                />
                <h1 className='pt-8 sm:pt-4 mb-4'>{frontMatter.title}</h1>
                <span className='font-mono caption'>
                  By Rachel on {frontMatter.publishedAt} {` • `}
                  {frontMatter.readingTime}
                </span>
              </div>

              <main className={`pb-16 post ${postStyles.post}`}>{content}</main>
            </article>

            <div className='pb-12'>
              <Link href='/blog'>
                <a className='text-base'>👈 &nbsp; Back to the blog</a>
              </Link>
            </div>

            <SectionSeparator />

            <div className='container	max-w-600 py-12'>
              <h6 className='pt-8'>On the newsletter</h6>
              <h3 className='pb-2'>
                Stay updated with my musings on personal growth &amp; design.
              </h3>
              <span className='caption'>
                Thanks for reading. You can get my blog posts straight to your
                inbox, once a month.
              </span>
              <SubscribeForm />
            </div>
          </>
        )}
      </div>
    </Layout>
  )
}

export const getStaticProps = async ({ params }) => {
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
