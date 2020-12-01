import Layout from "../components/Layout";
import Head from "next/head";
import { getAllPostsForHome } from "../lib/api";
import AllPosts from "../components/allPosts";
import CTA from "../components/CTA";

const blog = ({ preview, allPosts }) => {
  const morePosts = allPosts;

  return (
    <div>
      <Layout preview={preview}>
        <Head>
          <title>Rachel How</title>
        </Head>

        <div className="container px-16 pt-40 pb-12 md:px-4 sm:px-8 sm:pt-36 sm:pb-0 text-center">
          <h1 className="text-xxxl md:text-xxl sm:text-xl">
            Thoughts
          </h1>
          <br />
          <p className="mx-48 md:mx-24 sm:mx-0 text-lightgray tracking-tight text-base md:text-s">
            Musings on design, personal growth, and building indie products.
          </p>
          <div className="py-10">
            <a
              href="mailto:rachelhow95@gmail.com?Subject=Hello!"
              target="_blank"
            >
              <button className="cta-button rounded shadow">
                <h5>rachelhow95@gmail.com</h5>
              </button>
            </a>
          </div>
        </div>

        <div className="container px-16 md:px-4 sm:px-8">
          {/* {morePosts.length > 0 && <AllPosts posts={morePosts} />} */}
        </div>

        <CTA />

      </Layout>
    </div>
  );
}

export default blog;

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview) || [];
  return {
    props: { preview, allPosts },
  };
}