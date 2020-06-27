const ArticleList = [
    {
        "name": "I Launched a Side Project to Showcase Malaysian Creators — Malaysians Who Make",
        "desc": "Featured on Prototypr",
        "date": "June 24, 2020",
        "url": "https://blog.prototypr.io/i-launched-a-side-project-to-showcase-malaysian-creators-malaysians-who-make-cf1fcc209419",
    },
    {
        "name": "My lifelong journey of learning, failing and standing back up",
        "date": "June 16, 2020",
        "url": "https://medium.com/@rachelhxw/my-lifelong-journey-of-learning-failing-and-standing-back-up-dc0f94b1edc",
    },
    {
        "name": "Create native Lottie animations with Sketch and AE, the simple way.",
        "desc": "Featured on Fave",
        "date": "Sep 9, 2019",
        "url": "https://medium.com/fave-engineering/create-native-lottie-animations-with-sketch-and-ae-the-simple-way-f3f43ad8f4ce",
      },
      {
        "name": "What I’ve learned from joining a hackathon with only 1.5 months of coding experience",
        "date": "May 3, 2019",
        "url": "https://medium.com/@rachelhoww/what-ive-learned-from-joining-a-hackathon-with-only-1-5-months-of-coding-experience-59d9a80f2c52",
      },
      {
        "name": "UI/UX Case Study: NameLink App Design Concept",
        "date": "Mar 10, 2019",
        "url": "https://medium.com/@rachelhoww/namelink-app-design-concept-46a3a6c1aee1",
      }
]

const Articles = () => (
  <div className="">
    <div className="py-10 text-center">
        <h2 className="text-xxl md:text-xl sm:text-xl">Articles</h2>
    </div>
    <div className="container mx-auto pb-20 sm:px-10 sm:py-8">
      {ArticleList.map((a, index) => { 
          return <div key={index} className="article-card">
              <a href={a.url} target="_blank">
                {a.desc ? <span className="text-lightgray article-pill font-bold">{a.desc}</span> : ''}
                <h4 className="pt-3 text-l">{a.name}</h4>
                <div className="text-lightgray pt-2">{a.date}</div>
              </a>
          </div>
        })
      }
    </div>
  </div>
);

export default Articles;