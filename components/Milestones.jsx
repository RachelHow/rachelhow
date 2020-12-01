import Ic_DownArrow from '../src/Ic_DownArrow'

const MilestoneList = [
  {
    date: '2020-10-13',
    stone: "Webinar: A Self-Taught Designer's Journey",
  },
  {
    date: '2020-09-14',
    stone: 'Guest Speaker at Monash University Malaysia',
  },
  {
    date: '2020-08-31',
    stone: 'Reached $1.3K MRR by helping clients to scale their UI/UX designs',
  },
  {
    date: '2020-05-20',
    stone: 'Built my first product, Malaysians Who Make: 1K+ views in 7 days',
  },
  {
    date: '2019-04-28',
    stone: 'Won Top 10 Team in my first hackathon by Hong Leong Bank',
  },
]

const Milestones = () => (
  <div>
    <div className='container py-12 px-8 md:px-4 sm:px-8 sm:py-8'>
      <h3 className='pb-8 text-xxl md:text-xl sm:text-xl sm:pb-0'>
        Milestones <Ic_DownArrow size='28' color='#202020' />
      </h3>

      <div>
        <ul>
          {MilestoneList.map((a, index) => (
            <li key={index} className='pb-2 sm:block'>
              <span className='pr-6 md:pr-4 sm:pr-4 text-base sm:text-s text-lightgray uppercase tracking-wider leading-12'>
                {a.date}
              </span>
              <span className='text-base font-sb sm:text-s'>{a.stone}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className='pt-8'>
        <a
          href='mailto:rachelhow95@gmail.com?Subject=Hello!'
          target='_blank'
          className='font-b'
        >
          <h5>Get in touch </h5>
        </a>
        for collaboration / speaking engagements
      </div>
    </div>
  </div>
)

export default Milestones
