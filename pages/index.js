import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import IDesign from '../components/IDesign';
import IBuild from '../components/IBuild';
import IWrite from '../components/IWrite';
import Resume from '../components/Resume';

export default function IndexPage() {
  return (
    <div>
      <Layout>
        <Hero/>
        <Intro/>
        <IDesign/>
        <IBuild/>
        <IWrite/>
        <Resume/>
      </Layout>
    </div>
  )
}