import Layout from '../components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import SubscribeForm from '../components/SubscribeForm'
import { format } from 'timeago.js'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { postFilePaths, POSTS_PATH } from '../lib/mdxUtils'

const blog = ({ posts }) => {

  const sortPosts = posts.sort(
    (a, b) =>
    Number(new Date(b.data.publishedAt)) - Number(new Date(a.data.publishedAt))
    )

  return (
    <div>
      <Layout>
        <Head>
          <title>Blog | Rachel How</title>
          <meta name='title' content='Blog | Rachel How' />
          <meta
            name='description'
            content='Musings on growth, design and productivity.'
          />
          <meta property='og:title' content='Blog | Rachel How' />
          <meta
            property='og:description'
            content='Musings on growth, design and productivity.'
          />
          <link
            rel='icon'
            href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>☕️</text></svg>`}
          />
        </Head>

        <div className='container max-w-600 pt-24 pb-20 sm:px-8 sm:pb-16'>
          <h1 className='pt-8 mb-4'>Blog</h1>
          <p>
            Stay updated on my musings on growth, design and productivity.
          </p>
          <SubscribeForm />
        </div>

        <div className='container max-w-600 pb-12 sm:px-8'>
          <div className='pb-20'>
              {sortPosts.map((post) => (
                  <Link
                    as={`/blog/${post.filePath.replace(/\.mdx?$/, '')}`}
                    href={'/blog/[slug]'}
                    key={post.filePath}
                  >
                    <a className='pb-8 grid grid-cols-3 sm:grid-cols-1'>
                      <div className='col-span-2 pr-8 my-auto'>
                        <h4 className='pb-2'>{post.data.title}</h4>
                        <p>
                          {format(post.data.publishedAt)} {'  •  '}
                          {post.data.readingTime}
                        </p>
                      </div>
                      <div className='col-span-1 sm:hidden'>
                        <img
                          src={post.data.image}
                          alt={post.data.title}
                          className='rounded-lg object-cover'
                        />
                      </div>
                    </a>
                  </Link>
              ))}
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default blog

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
    const { content, data } = matter(source)
    return {
      content,
      data,
      filePath,
    }
  })
  return { props: { posts } }
}
