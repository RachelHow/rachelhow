import Layout from '../components/Layout'
import Head from 'next/head'

const tos = () => {
  return (
    <div>
      <Layout>
        <Head>
          <title>ToS | Rachel How</title>
          <meta name='title' content='ToS | Rachel How' />
          <meta name='description' content="For my lil' digital garden" />
          <meta property='og:title' content='ToS | Rachel How' />
          <meta property='og:description' content="For my lil' digital garden" />
          <meta
            property='og:image'
            content='https://rachelhow.com/images/og-image.png'
          />
          <meta
            property='twitter:image'
            content='https://rachelhow.com/images/og-image.png'
          />
          <meta property='twitter:card' content='summary_large_image' />
          <meta name='twitter:title' content='Rachel How' />
          <meta name='twitter:description' content="For my lil' digital garden" />
          <meta name='twitter:site' content='@rachelhxw' />
          <meta name='twitter:creator' content='Rachel How' />
          <link
            rel='icon'
            href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧠</text></svg>`}
          />
        </Head>

        <div className='container max-w-600 pt-24 sm:px-8 sm:pb-16'>
          <h1 className='pt-8 mb-4'>Digital Garden Terms of Service</h1>

          <p>ToS template by: <a href="https://www.swyx.io/digital-garden-tos/" target="_blank">Shawn Wang</a></p><br/>

            <h4>Why We Need a Terms of Service</h4><br/>
            <p>The Learn In Public movement has encouraged thousands of people to write, speak, draw, or otherwise pick up what mentors put down, with the end goal of lifelong L(N*P) growth in personal knowledge and network. A key part of this strategy is maintaining your own Digital Garden.<br/>
            A Digital Garden is your very own place (often a blog, or twitter account) to plant incomplete thoughts and disorganized notes in public - the idea being that these are evergreen things that grow as your learning does, warmed by constant attention and fueled by the unambiguous daylight of peer review.<br/>
            It is in part a trick for creators to play on themselves: For perfectionists who stress over shipping anything less-than-polished and therefore never ship anything, it is a license to trade off self review for peer review and increased velocity. Many report both improved quality and quantity of output after giving themselves the permission to do this.</p><br/><br/>

            <h4>For Visitors</h4><br/>
            <p>Welcome! You are now browsing a Digital Garden. This is my personal space for Learning In Public. I am a lifelong learner so everything is a Work-In-Progress like me, but I do not let perfectionism get in the way. That means that what you read here is not authoritative or complete, and is not representative of my best work.<br/>
            However, it is representative of my interests and current state of knowledge, and if you have the same interests, then this space is also yours to use as a reference. Feedback and social sharing is welcome - that is the whole point of being public!<br/>
            1. Right to Be Wrong<br/>
            I have a right to be wrong or incomplete in my Digital Garden, either due to paucity of time or knowledge. You will not hold this, or my readership, against me because I will keep learning, with your help. Everything in the Digital Garden is a living document and I will retract or rephrase things I no longer agree with.<br/>
            2. Constructive Criticism<br/>
            You are expressly welcome to comment on, tear apart, counter-argue, or outright disagree on anything here. No compliment sandwich needed - I learn most from critics. I will listen to you but I don't promise to agree with you. Please also suggest what else I should include, read, watch, or listen to, or tell me what you would have written instead. Better yet, write a better version of what I did and publish it on your own Garden. I'd love to read it.<br/>
            3. Attribute, don't Plagiarize<br/>
            Don't plagiarize. You're welcome to quote, with attribution and a link back here. I don't waive copyright for commercial purposes. But feel free to share ideas and riff off of them.</p><br/><br/>

            <h4>For Gardeners</h4><br/>
            <p>Congratulations! You are now the proud owner of your own corner of the Internet. This is a second brain that exists outside your natural one - it is very good at remembering everything, searching and organizing facts and links, and saving you keystrokes. Your second brain is fertile ground: If you tend to it well, your Digital Garden will help you be a lifelong learner, catch you friends while you sleep, and bear fruits in unexpected ways.<br/><br/>
            However there are some ground rules to being a responsible Digital Gardener, and some things you can do to increase the yield on your work.<br/><br/>
            1. Consideration of Others<br/><br/>
            I will not publish private conversations or confidential information.<br/>
            I will consider the feelings of others if I ever write negatively about something people have worked on or said.<br/>
            I will do my best to cover my bases and check that I have not assumed incompetence or malice due to my ignorance of the full body of work.<br/>
            I will err on the side of treating others as THEY want to be treated.<br/>
            I will "steelman" arguments - the opposite of "strawman arguments" - instead of picking on the weakest piece of their argument, I will confront head on their best argument by seeking first to understand before trying to be understood.<br/><br/>
            2. Epistemic Disclosure<br/><br/>
            I will report how strongly I hold my beliefs, always reserving the right to be wrong and change my mind.<br/>
            I will report how much experience I have in the topic, by disclosing how much work I have done so far on it and linking to others who will know more.<br/>
            I will link to further resources so that readers can discover influencing and contrasting opinions from the original source.<br/>
            In the spirit of this, the practice of disclosing epistemic status and effort originates from Devon Zuegel. I don't think this always needs be disclosed, for example if it is obvious from context. But it never hurts.<br/><br/>
            3. Response to Feedback<br/><br/>
            I will not get discouraged if I don't receive feedback. I plant ideas in my Digital Garden for my own use, not solely to get visitors.
            I will reward feedback by listening and immediately correcting things I got wrong. I do not promise to agree with or respond to all feedback.</p><br/><br/>

           <h4>Call to Action</h4><br/>
           <p>Let us all adopt more explicit Digital Garden terms of service, and wear them proudly on our garden gates, and in so doing help a thousand Digital Gardens bloom all around the world by encouraging bold, curious, prolific gardeners, while responsibly inviting visitors to co-create and cross pollinate ideas.<br/><br/>
            With clearer boundaries there will hopefully be less infighting, more personal growth, and more great ideas - the oxygen on which our whole world relies for Progress.</p>

        </div>
      </Layout>
    </div>
  )
}

export default tos