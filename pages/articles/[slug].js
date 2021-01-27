import { useRouter } from 'next/router'
import Head from 'next/head'
import Layout from '../../components/Layout'
import ErrorPage from 'next/error'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import PostBody from '../../components/post-body'
import AllPosts from '../../components/allPosts'
import SectionSeparator from '../../components/section-separator'
import CoverImage from '../../components/cover-image'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <div className='container max-w-600 mx-auto pt-20 pb-12 sm:px-8'>
        {router.isFallback ? (
          'Loading…'
        ) : (
          <>
            <article>
              <Head>
                <title>{post.title} - Rachel How</title>
                <meta name='title' content={post.title} />
                <meta name='description' content="Rachel How's Article" />
                <meta property='og:title' content={post.title} />
                <meta
                  property='og:description'
                  content="Rachel How's Article"
                />
                <meta property='og:image' content={post.coverImage} />
              </Head>

              {/* Cover Image */}
              <div>
                <CoverImage title={post.title} url={post.coverImage.url} />
              </div>

              {/* Post Header */}
              <div className='pb-8'>
                <h1 className='pt-8 sm:pt-4 mb-8'>{post.title}</h1>
                <span className='font-mono caption'>
                  By {post.author.name} on {post.date} • {post.readingTime}
                </span>
              </div>

              <PostBody content={post.content} />
            </article>

            <SectionSeparator />

            <div className='pt-20'>
              <h3 className='pb-12'>Continue reading</h3>
              {morePosts && morePosts.length > 0 && (
                <AllPosts posts={morePosts} />
              )}
            </div>
          </>
        )}
      </div>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await getPostAndMorePosts(params.slug, previewData)

  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? [],
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths: allPosts?.map((post) => `/articles/${post.slug}`) || [],
    fallback: true,
  }
}
