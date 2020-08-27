import Layout from '../components/Layout';
import Head from 'next/head';
import { getAllPostsForHome } from '../lib/api';
import Hero from '../components/Hero';
import Articles from '../components/Articles';
import AllPosts from '../components/allPosts';

export default function IndexPage({ preview, allPosts }) {
  const morePosts = allPosts
  
  return (
    <div>
      <Layout preview={preview}>
        <Head>
          <title>Rachel How</title>
        </Head>
      <Hero/>
        <div className="pt-10 text-center">
          <h2 className="text-xl md:text-xl sm:text-xl">Selected Work</h2>
        </div>
        {morePosts.length > 0 && <AllPosts posts={morePosts} />}
        <Articles/>
      </Layout>
    </div>
  )
}

export async function getStaticProps({ preview = false, previewData }) {
  const allPosts = await getAllPostsForHome(previewData)
  return {
    props: { preview, allPosts },
  }
}
