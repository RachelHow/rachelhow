import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import PostBody from '../../components/post-body'
import AllPosts from '../../components/allPosts'
import PostHeader from '../../components/post-header'
import SectionSeparator from '../../components/section-separator'
import Layout from '../../components/Layout'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <div className='container mx-auto pt-20 pb-12 px-8 md:px-4 sm:px-8'>
        {router.isFallback ? (
          'Loading…'
        ) : (
          <>
            <article>
              <Head>
                <title>{post.title} - Rachel How</title>
                <meta name='title' content={post.title} />
                <meta
                  name='description'
                  content="Rachel How's Blog"
                />
                <meta property='og:title' content={post.title} />
                <meta
                  property='og:description'
                  content="Rachel How's Blog"
                />
                <meta property='og:image' content={post.coverImage} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage.url}
                readingTime={post.readingTime}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
            <SectionSeparator />
            <div className='pt-10 text-center'>
              <h4 className='text-l'>Continue reading</h4>
            </div>
            {morePosts && morePosts.length > 0 && (
              <AllPosts posts={morePosts} />
            )}
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
    paths: allPosts?.map((post) => `/blog/${post.slug}`) || [],
    fallback: true,
  }
}
