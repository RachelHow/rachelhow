import Layout from "../components/Layout";
import Head from "next/head";
import SectionSeparator from "../components/section-separator";

function About() {
  return (
    <Layout>
      <Head>
        <title>About Me</title>
      </Head>

      <div className="container px-16 pt-40 pb-20 md:px-4 sm:px-8 sm:pt-48 text-center">
          <h1 className="text-xxxl md:text-xxl sm:text-xl">
            Hello, I'm Rachel How.
          </h1>
          <br />
          <p className="mx-48 md:mx-24 sm:mx-0 text-lightgray tracking-tight text-base md:text-s">
            Product Designer at{" "}
            <a href="https://myfave.com/careers" className="font-sb">
              Fave
            </a>
            , designing delightful user experiences with the combination of
            business and marketing.
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

      <div className="container px-16 md:px-4 sm:px-8 text-center">
        <div className="justify-center pb-4">
          <img
            src="/images/designsprint-01.png"
            alt="designsprint1"
            className="rounded-lg mx-auto"
            width="80%"
            height="auto"
          />
        </div>
      </div>

      <div className="container px-16 md:px-4 sm:px-8 text-center">
        <p className="pt-8 text-xs md:text-xxs text-lightgray py-2 uppercase tracking-wider">
          I believe that
        </p>

        <h2 className="text-xl">Great design solves a real problem</h2>
        <div className="pt-6 pb-20">
          <p className="mx-32 md:mx-0 sm:mx-0 text-lightgray tracking-tight leading-relaxed text-base md:text-s">
            I always strive to design profitable solutions for you. I’ve been
            self-learning design, marketing and business since I started working
            at 18 years old. Currently, I work as a Product Designer at{" "}
            <a href="https://myfave.com/careers" className="font-sb">
              Fave
            </a>
            , a loyalty and cashback platform in Southeast Asia, with an amazing
            team of designers, product managers and engineers. I love building
            my own product through code — Constantly learning new things makes
            me feel super energised. To give back to the community, I share my
            journey through{" "}
            <a href="https://medium.com/@rachelhxw" className="font-sb">
              writing
            </a>{" "}
            and speaking.
          </p>
        </div>
      </div>

      <div className="container px-16 md:px-4 sm:px-8 text-center">
        <div className="justify-center pb-4">
          <img
            src="/images/designsprint-02.png"
            alt="designsprint2"
            className="rounded-lg mx-auto"
            width="80%"
            height="auto"
          />
        </div>
      </div>

      <div className="container px-16 md:px-4 sm:px-8 text-center">
        <p className="pt-8 text-xs md:text-xxs text-lightgray py-2 uppercase tracking-wider">
          My principles
        </p>

        <h2 className="text-xl">Creating value for your business</h2>
        <div className="pt-6">
          <p className="mx-32 md:mx-0 sm:mx-0 text-lightgray tracking-tight leading-relaxed text-base md:text-s">
            I start every project by understanding your business and customers
            first before diving into design. I will only accept your project if
            I believe I can create value for your business and make it worth
            your investment. If I feel that I am not a good fit for your idea, I
            will recommend you other solutions.
          </p>
        </div>
      </div>

      <div className="container px-16 pt-16 md:px-4 sm:px-8 text-center">
        <SectionSeparator />
        <div className="justify-center pb-4 pt-24">
          <img
            src="/images/Avatar-Online.png"
            alt="avatar-rachel"
            width="80px"
            height="80px"
          />
        </div>
        <h1 className="text-xxl sm:text-xl">Let’s work together</h1>
        <div className="pt-6 pb-20">
          <p className="mx-32 md:mx-24 sm:mx-0 text-lightgray tracking-tight leading-relaxed text-base md:text-s sm:text-s">
            I’m available for freelance projects / speaking engagements. You can{" "}
            <a
              href="mailto:rachelhow95@gmail.com?Subject=Hello!"
              target="_blank"
              className="font-b"
            >
              email
            </a>{" "}
            or{" "}
            <a
              href="https://twitter.com/rachelhxw"
              target="_blank"
              className="font-b"
            >
              {" "}
              tweet
            </a>{" "}
            me. My time books quickly but I will get back to you within 1 - 2
            working days. Thank you!
          </p>
          <br />
          <a href="mailto:rachelhow95@gmail.com?Subject=Hello!" target="_blank">
            <button className="cta-button rounded shadow">
              <h5>rachelhow95@gmail.com</h5>
            </button>
          </a>
        </div>
      </div>
    </Layout>
  );
}

export default About;
