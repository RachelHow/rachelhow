import Layout from "../components/Layout";
import Head from "next/head";
import { getAllPostsForHome } from "../lib/api";
import Hero from "../components/Hero";
import About from "../components/About";
import AllPosts from "../components/allPosts";
import Milestones from "../components/Milestones";
import Articles from "../components/Articles";
import CTA from "../components/CTA";
import Ic_DownArrow from "../src/Ic_DownArrow";

export default function IndexPage({ preview, allPosts }) {
  const morePosts = allPosts;

  return (
    <div>
      <Layout preview={preview}>
        <Head>
          <title>Rachel How</title>
        </Head>

        <Hero />

        <About />

        <div className="container px-16 md:px-4 sm:px-8">
          <h3 className="py-10 text-xl md:text-xl sm:text-xl">
            Selected work <Ic_DownArrow size="32" color="#202020"/>
          </h3>
          {morePosts.length > 0 && <AllPosts posts={morePosts} />}
        </div>

        <Milestones />
        <Articles />
        <CTA />

      </Layout>
    </div>
  );
}

export async function getStaticProps({ preview = false, previewData }) {
  const allPosts = await getAllPostsForHome(previewData);
  return {
    props: { preview, allPosts },
  };
}
