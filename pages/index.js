import Layout from "../components/Layout";
import Head from "next/head";
import { getAllWorkForHome } from "../lib/api";
import Hero from "../components/Hero";
import Now from "../components/Now";
import AllWork from "../components/allWork";
import Work from "../components/Work";
import Milestones from "../components/Milestones";
// import Articles from "../components/Articles";
import CTA from "../components/CTA";

export default function IndexPage({ preview, allPosts }) {
  const morePosts = allPosts;

  return (
    <div>
      <Layout preview={preview}>
        <Head>
          <title>Rachel How - Product Designer, Writer, Indie Maker</title>
          <meta name='title' content='Rachel How - Product Designer, Writer, Indie Maker' />
          <meta
            name='description'
            content='Rachel How designs, writes and builds indie products. Building community at Malaysians Who Make.'
          />
          <meta property='og:title' content='Rachel How - Product Designer, Writer, Indie Maker' />
          <meta
            property='og:description'
            content='Rachel How designs, writes and builds indie products. Building community at Malaysians Who Make.'
          />
        </Head>

        <div className="hero-glow">
          <img
            src="/images/Gradient-Full-01.png"
            alt="gradient"
            className="fixed h-screen sm:hidden"
          />
        </div>  

        <Hero />
        <Now />
        {/* <Articles /> */}
        <Milestones />
        <Work posts={allPosts}/>
        {/* <CTA /> */}

      </Layout>
    </div>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllWorkForHome(preview) || [];
  return {
    props: { preview, allPosts },
  };
}
