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
  <div className='container max-w-600 pb-16'>
      <h1 className='pt-8 sm:pt-4 mb-8'>Milestones</h1>

      <div>
        <ul>
          {MilestoneList.map((a, index) => (
            <li key={index} className='pb-3'>
              <p>{a.stone} {a.date}</p>
            </li>
          ))}
        </ul>
      </div>
  </div>
)

export default Milestones
