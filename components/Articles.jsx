import Ic_DownArrow from '../src/Ic_DownArrow'
import Ic_RightArrow from '../src/Ic_RightArrow'

const ArticleList = [
  {
    name:
      'I Launched a Side Project to Showcase Malaysian Creators — Malaysians Who Make',
    date: 'June 24, 2020 | Featured on Prototypr',
    url:
      'https://blog.prototypr.io/i-launched-a-side-project-to-showcase-malaysian-creators-malaysians-who-make-cf1fcc209419',
  },
  {
    name: 'My lifelong journey of learning, failing and standing back up',
    date: 'June 16, 2020',
    url:
      'https://medium.com/@rachelhxw/my-lifelong-journey-of-learning-failing-and-standing-back-up-dc0f94b1edc',
  },
  {
    name: 'Create native Lottie animations with Sketch and AE, the simple way.',
    date: 'Sep 9, 2019 | Featured on Fave',
    url:
      'https://medium.com/fave-engineering/create-native-lottie-animations-with-sketch-and-ae-the-simple-way-f3f43ad8f4ce',
  },
  {
    name:
      'What I’ve learned from joining a hackathon with only 1.5 months of coding experience',
    date: 'May 3, 2019',
    url:
      'https://medium.com/@rachelhoww/what-ive-learned-from-joining-a-hackathon-with-only-1-5-months-of-coding-experience-59d9a80f2c52',
  },
  {
    name: 'UI/UX Case Study: NameLink App Design Concept',
    date: 'Mar 10, 2019',
    url:
      'https://medium.com/@rachelhoww/namelink-app-design-concept-46a3a6c1aee1',
  },
]

const Articles = () => (
  <div>
    <div className='container py-12 md:px-4 sm:px-8 sm:py-12'>
      <h3 className='font-sb pb-4 text-xxl sm:pb-0'>
        Articles <Ic_DownArrow size='28' color='#fff' />
      </h3>

      <div>
        <ul>
          {ArticleList.map((a, index) => {
            // remove bottom border for last item in list
            return ArticleList.length - 1 === index ? (
              <li key={index} className='py-4'>
                <div className='text-base text-medgray uppercase tracking-wider'>
                  {a.date}
                </div>
                <a href={a.url} target='_blank'>
                  <h4 className='text-base font-sb'>{a.name}</h4>
                  <p className='text-s md:text-xxs text-medgray'>
                    Read on Medium <Ic_RightArrow size='14' color='#202020' />
                  </p>
                </a>
              </li>
            ) : (
              <li
                key={index}
                className='py-4 border-b last:border-b-0 border-lightestgray'
              >
                <div className='text-s text-medgray uppercase tracking-wider'>
                  {a.date}
                </div>
                <a href={a.url} target='_blank'>
                  <h4 className='text-base font-sb'>{a.name}</h4>
                  <p className='text-s md:text-xxs text-medgray'>
                    Read on Medium <Ic_RightArrow size='14' color='#202020' />
                  </p>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  </div>
)

export default Articles
