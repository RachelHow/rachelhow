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
      <h3 className='font-sb pb-8 text-xxl'>
        Milestones
      </h3>

      <div>
        <ul>
          {MilestoneList.map((a, index) => (
            <li key={index} className='pb-4 sm:block'>
              <p className='text-s text-lightgray uppercase tracking-wider'>
                {a.date}
              </p>
              <p className='text-l font-m'>{a.stone}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
)

export default Milestones
