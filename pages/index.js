import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Collection from '../components/Collection';

export default function IndexPage() {
  return (
    <div>
      <Layout>
        <Hero/>
        <Intro/>
        <Collection/>
      </Layout>
    </div>
  )
}