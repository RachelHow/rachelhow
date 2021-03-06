import Layout from '../components/Layout'
import Head from 'next/head'
import SubscribeForm from '../components/SubscribeForm'
import SectionSeparator from '../components/section-separator'

const Faq = () => {
  return (
    <div>
      <Layout>
        <Head>
          <title>Frequently Asked Questions - Rachel How</title>
          <meta name='title' content="Rachel's FAQ" />
          <meta name='description' content='Answering my most asked questions in public.' />
          <meta property='og:title' content="Rachel's FAQ" />
          <meta property='og:description' content='Answering my most asked questions in public.' />
          <meta
            property='og:image'
            content='https://rachelhow.com/images/og-image.png'
          />
          <meta
            property='twitter:image'
            content='https://rachelhow.com/images/og-image.png'
          />
          <meta property='twitter:card' content='summary_large_image' />
          <meta name='twitter:title' content="Rachel's FAQ" />
          <meta name='twitter:description' content='Answering my most asked questions in public.' />
          <meta name='twitter:site' content='@rachelhxw' />
          <meta name='twitter:creator' content="Rachel's FAQ" />
        </Head>

        <div className='container	max-w-600	flex pt-32 pb-16 sm:block sm:pt-20 sm:px-8 my-auto flex-col'>
          <img
            src='/images/profileimage.png'
            alt='rachel-how'
            className='profileimage mx-auto'
          />
          <div className='text-center'>
            <h1 className='mt-8 mb-4'>Frequently Asked Questions</h1>
            <p>
              I often receive questions via Emails, Twitter DMs and LinkedIn
              from passionate individuals who are interested to dive into UX/UI,
              Product, Coding. So I decided to answer these questions in public.
              I hope this FAQ helps you in any way!
            </p>
          </div>
        </div>

        <SectionSeparator />

        <div className='container max-w-600 pb-24 sm:px-8 sm:pb-24 pt-16'>
          <div className='mb-16'>
            <h3 className='mb-8'>On a career in Product Design</h3>
            <h4>1. What’s the career prospect for UX/UI like in Malaysia?</h4>
            <br />
            <p>
              I think the UI/UX industry in Malaysia is not mature yet. However,
              a lot of companies start investing in it now. I see increasing job
              opportunities for UI/UX Designers or Product Designers, which is
              normal as more companies are going digital post-COVID. What I
              personally faced so far is, sometimes stakeholders might not be
              aligned with UX best practices. Instilling design thinking in
              Malaysians, in general, is a constant uphill battle. So we need to
              work harder to push great UX forward and to deliver a great
              product in the end. In the near future, however, I believe
              there'll always be a demand for UX Designers. A great product
              cannot live without UX designers as there'll always be user
              problems to solve. Like any other career, you just have to adapt
              fast to what comes next.
            </p>
            <br />
            <h4>
              2. What kind of courses did you take to help teach yourself UX/UI?
            </h4>
            <br />
            <p>
              I didn't take any courses or go to University. Starting out, I
              didn't know proper design processes, UX principles and fundamental
              design methods. I Google my problems and learn by doing. After I
              got a job in Product Design, I improved my skills through my job
              and mentors at Fave (Archie, Arvin). For courses, I recommend
              Interaction Design Foundation. But don't forget to put theory into
              practice. You only learn when you actually try to design
              something. Disclaimer: I've heard great things about this course
              but I've never taken it before.
            </p>
            <br />
            <h4>3. What are the skills needed for a good UX/UI designer?</h4>
            <br />
            <p>
              The list is endless but I'll try to keep this concise. - Craft
              &amp; Execution - Understand UX principles and guidelines
              (material design, human interface guideline, accessibility) -
              Visual design skills (good eye for design, attention to detail,
              interaction design, software, design systems, prototyping) -
              Design Methods (design thinking, design sprints, jobs-to-be-done
              framework, journey mapping, usability testing) - Collaboration
              (PMs, Engineers and other depts) - Product &amp; Business Thinking
              (measuring success metrics of your design, understanding business
              goals)
            </p>
            <br />
            <h4>4. Why did you choose UX/UI design?</h4>
            <br />
            <p>
              {' '}
              To me, UX/UI Design is a hybrid of 3 things: Tech, Usability
              (Functionality) and Aesthetics. I like that I'm able to design
              something digitally yet also functional (solves a real problem).
              It's so fascinating to see how humans react to the design and how
              it affects their actions. Great UX helps people achieve the goal
              that they're set to achieve. For example, adding shadows to a
              button helps to elevate the Call-To-Action, which triggers people
              to click on it. Every tiny little design detail affects the entire
              product!
            </p>
            <br />
            <h4>
              5. What’s the best part of the job and what’s your least
              favourite?
            </h4>
            <br />
            <p>
              {' '}
              For me, the best part of the job is designing interfaces that
              solve a problem, whether it's interaction design or building
              design systems, and then collaborating with developers and Product
              Managers to watch it come to live. There's never one best way to
              solve the problem, which means I get to constantly challenge
              myself to achieve a design breakthrough. As for my least favourite
              part of the job, I think it would be my day-to-day meetings. I'm
              an introvert who believes in getting things done efficiently and
              quickly. Meetings that are unnecessarily long and unproductive
              makes me mentally exhausted. A good balance of deep focus time and
              alignment meetings would be nice.
            </p>
            <br />
            <h4>
              6. How was the process for you to get a job as a Product Designer?
            </h4>
            <br />
            <p>
              {' '}
              I stumbled upon UI/UX from my previous Digital Marketing role. It
              was a small company, at that point in time, they needed someone to
              redesign a few websites. I volunteered for the task, researched on
              a Wordpress site builder, bought the plugin and started
              building/designing the site. I didn't know proper design
              processes, UX principles and fundamental design methods. I learned
              by doing. If the design fails, I try again. I loved it so much
              that I worked late nights to achieve the outcome that I want. I
              google about everything UI/UX, watch YouTube videos and read
              articles. I start by crafting ONE case study. I aim to make it a
              really, really strong case study to show recruiters. Prior to
              this, I designed websites at my previous marketing role, even
              though it's out of my job scope. At the end of every interview, I
              ask for feedback on how to improve. I take these advices (eg.
              improve my knowledge on a subject, show more of my thought
              process) and revise until I get it right. I treat every job
              interview like designing a product—I'm the product in this case!
            </p>
            <br />
            <h4>
              7. Is Product Design a competitive field in the recent years?
            </h4>
            <br />
            <p>
              {' '}
              Currently, the demand is higher than supply. Companies are opening
              up more UX roles as businesses go digital, especially due to
              COVID. The role would be competitive in the near future as more
              individuals become a UX professional. However, just like any
              career, there is no future-proof job—We must always be ready to
              adapt and grow.
            </p>
            <br />
            <h4>8. As a Product Designer, do I need to know coding?</h4>
            <br />
            <p>
              This knowledge comes with experience. The more you talk to
              developers and understand their pain points, the better you know.
              There are 2 things you need to know: 1) While designing: Take code
              feasibility and scalability into consideration when designing. For
              example, how does the design look like on mobile VS web? How do
              devs build it in such a way that doesn't compromise the UX? 2)
              Design Handoff: What info the developer needs, how a designer
              should structure their handoff process. Different company has
              different process, you can learn on the job.
            </p>
            <br />
            <h4>
              9. What do you think about Product Designers on a project basis VS
              a permanent role?
            </h4>
            <br />
            <p>
              I think it's better to hire a Product Designer in a permanent
              role. Design is an iterative process, it doesn't make sense for a
              company to have designers on contract or project basis. A Product
              Designer on contract won't have enough time to understand the
              business, users and iterate on the design. But it depends on the
              product as well.
            </p>
            <br />
            <h4>
              10. Starting out, how do you prepare your case study when you have
              no portfolio?
            </h4>
            <br />
            <p>
              I refer to top designer's case study on
              [Bestfolios](https://www.bestfolios.com/casestudy) or other sites
              like Behance. Then, I work backwards from there. You can also
              watch youtube where people walk you through how to prepare a case
              study and the do's/don'ts. The purpose of a case study is for the
              hiring manager to understand your thought process. Think of it as
              a story on how you would approach your work! 😊
            </p>
            <br />

            <h4>
              11. In Malaysia, do companies look for roles who do both UX and
              UI? How was ur experience?
            </h4>
            <br />
            <p>
              From my experience, Malaysian companies usually want an
              all-rounded role so the product designers are capable to handle
              the end-to-end design process. It's good to equip yourself with
              both UX and UI skills. You will get better at it as you progress
              in your career. When starting out, I was transparent about my
              level of experience (eg. I understand the concept of UX but not
              good at advanced skills like research, user testing). Most
              importantly just be honest, grasp the fundamental concepts (I
              learn from Googling my questions) and don't give up. Quick tip:
              Always ask for feedback at the end of the interview to know what
              you need to improve on! 😊
            </p>
            <br />
            <h4>
              12. I noticed that you've created your own case studies rather
              than redesigns of apps/websites. What's your take on redesigning
              app/websites vs creating your own case study for the portfolio?
            </h4>
            <br />
            <p>
              I generally avoid web/app redesigns without proper context. UI/Web
              designers redesign stuff and showcase them on Dribbble. As Product
              Designers, let's not forget the UX side of things—The problem
              we're trying to solve. Case studies give more depth compared to
              redesigns. It shows your thought process, design process, way of
              working. If you want to redesign an existing product, make sure to
              structure it as a case study. Always start from the problem you
              set out to solve!
            </p>
          </div>

          <SectionSeparator />

          <div className='my-16'>
            <h3 className='mb-8'>On Indie Hacking, learning to code</h3>

            <h4>
              1. I'm wondering since you mentioned you only had limited frontend
              knowledge, why not opt for no code platforms?
            </h4>
            <br />
            <p>
              Reasons why I chose to build it with code, by myself: 1. No-code
              tools may cost money and I aim to build things at a lower
              overhead. I'm proud to say that I only pay for the domain and
              nothing else (at this point) :D 2. I want to learn by building
              something all by myself. The process of applying what I learn to
              production is seriously very satisfying. I find coding very fun
              lol! Although there are downsides to it, for sure. I tried
              building new features to my product but it took me a month to
              figure things out and the code still breaks. I could seek help
              from a professional, but I really wanted to go through the pain
              and learn it properly. This is just me. If you're rushing to ship
              a product, have a tight timeline and don't wanna run into bugs, I
              think it's okay to go no-code—as long as it's able to achieve your
              end goal.
            </p>
            <br />
            <h4>
              2. I really like how you built everything from scratch including
              the code. Any advice on what I should learn first if I want to
              start building projects like malaysianswhomake.com?
            </h4>
            <br />
            <p>
              I think it depends on what you want to build and what coding
              language you're already familiar with. First, decide on what to
              build, then learn the necessary skills to get where you want to
              go. Of course, basic Javascript, HTML, CSS knowledge would help a
              lot.
            </p>
            <br />
            <h4>
              3. What coding courses would you recommend for a total beginner?
            </h4>
            <br />
            <p>
              {' '}
              I'll always suggest to go for free courses first. You can try
              FreeCodeCamp. It's pretty fun. You can also try Youtube by
              Traversy Media or Mosh Hamedani.
            </p>
          </div>

          <br />
          <br />
          <br />
          <p>🥁 Thanks for making it this far! I hope you find this helpful.</p>
        </div>

        <SectionSeparator />

        <div className='container	max-w-600 sm:px-8 py-12'>
          <h6>I also write a newsletter.</h6>
          <h3 className='pb-2'>
            Stay updated with my musings on growth, design and productivity.
          </h3>
          <span className='caption'>
            Get my blog posts straight to your inbox, 1 - 2 times a month. No
            spam, no hard feelings.
          </span>
          <SubscribeForm />
        </div>
      </Layout>
    </div>
  )
}

export default Faq
