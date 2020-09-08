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
  if (!router.isFallback && !post?._meta?.uid) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <div className="container mx-auto pt-32 pb-12 px-16">
        {router.isFallback ? (
          "Loading…"
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title[0].text} | Rachel How
                </title>
                <meta property="og:image" content={post.coverimage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverimage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
            <SectionSeparator />
            <div className="pt-10 text-center">
              <h4 className="text-l">Check out my other work</h4>
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
    paths: allPosts?.map(({ node }) => `/posts/${node._meta.uid}`) || [],
    fallback: true,
  }
}
