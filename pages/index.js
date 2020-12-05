import Layout from "../components/Layout";
import Head from "next/head";
import { getAllPostsForHome } from "../lib/api";
import Hero from "../components/Hero";
import About from "../components/About";
// import AllPosts from "../components/allPosts";
import Milestones from "../components/Milestones";
import Articles from "../components/Articles";
import CTA from "../components/CTA";

export default function IndexPage({ preview, allPosts }) {
  const morePosts = allPosts;

  return (
    <div>
      <Layout preview={preview}>
        <Head>
          <title>Rachel How</title>
        </Head>

        <div className="hero-glow">
          <img
            src="/images/Gradient Glow.png"
            alt="blob"
            className="spin-animation fixed"
          />
        </div>  

        <Hero />

        <About />

        {/* <div className="container px-16 md:px-4 sm:px-8">
          <h3 className="py-10 text-xl md:text-xl sm:text-xl">
            Selected work
          </h3>
          {morePosts.length > 0 && <AllPosts posts={morePosts} />}
        </div> */}
        
        <div className="container grid grid-cols-2 py-16 md:px-4 sm:px-8 sm:py-8">
          <Milestones />
        </div>

        {/* <Articles /> */}
        <CTA />

      </Layout>
    </div>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview) || [];
  return {
    props: { preview, allPosts },
  };
}
