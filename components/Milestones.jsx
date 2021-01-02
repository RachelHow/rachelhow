const MilestoneList = [
  {
    date: ' / Dec 2020',
    stone: 'Guest Speaker, Friends of Figma Kuala Lumpur',
  },
  {
    date: ' / Oct 2020',
    stone: "Webinar, A Self-Taught Designer's Journey",
  },
  {
    date: ' / Sep 2020',
    stone: 'Guest Speaker at Monash University Malaysia',
  },
  {
    date: ' / Aug 2020',
    stone: '$1.3K MRR on product design for clients',
  },
  {
    date: ' / May 2020',
    stone: 'Built Malaysians Who Make — 1,000+ views in 7 days',
  },
  {
    date: ' / Apr 2019',
    stone: 'Top 10 Team at CYHI Hackathon, Hong Leong Bank',
  },
]

const Milestones = () => (
  <div className='pb-16 px-48 md:px-4 sm:px-8'>
    <div className='container grid grid-cols-3 col-gap-48 py-12 sm:grid-cols-1'>
      <div className='col-span-1 sm:pb-8'>
        <h1 className='text-xl'>Milestones</h1>
      </div>

      <div className='col-span-2 sm:col-span-1'>
        <ul>
          {MilestoneList.map((a, index) => (
            <li key={index} className='pb-6 sm:block'>
              <span className='font-sb'>{a.stone}</span>
              <span className='text-medgray'>
                {a.date}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)

export default Milestones
