import Layout from "../components/Layout"

function Speaking() {
  return (
    <Layout>
        <div className="container mx-auto pt-32 pb-48 sm:pt-48 sm:px-10">
            <div className="pb-10 text-center">
              <h2 className="text-xxl md:text-xl sm:text-xl">Speaking</h2>
            </div>
            <div className="text-center leading-loose">
              Hey there!<br/>
              I'm still working on this page, but if you'd 
              like to have me come speak at your event, do send me an&nbsp;
              <a href="mailto:rachelhow95@gmail.com?Subject=Speaking Engagement"
              className="font-bold">email</a>!
              <br/>
              I usually like to speak about Product Design, Indie Hacking, Productivity
              Personal Growth and related topics.
              <br/>
              You will soon find links to past + upcoming speaking events :)
            </div>
        </div>
    </Layout>
  )
}

export default Speaking;