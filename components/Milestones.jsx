import Ic_DownArrow from "../src/Ic_DownArrow";

const Milestones = () => (
  <div className="bg-lightestgray text-black">
    <div className="container py-20 px-16 md:px-4 sm:px-8">
      <h3 className="pb-16 text-xl md:text-xl sm:text-xl">
        Milestones <Ic_DownArrow size="28" color="#202020" />
      </h3>

      <div className="flex pb-4 sm:pb-8 md:flex-col sm:flex-col">
        <p className="text-s md:text-xxs text-lightgray uppercase tracking-wider pr-12 leading-12">
          Sep 5, 2019
        </p>
        <h4 className="text-base font-b">
          Built my first product, Malaysians Who Make — 1,000+ views in 7 days
        </h4>
      </div>
      <div className="flex pb-4 sm:pb-8 md:flex-col sm:flex-col">
        <p className="text-s md:text-xxs text-lightgray uppercase tracking-wider pr-12 leading-12">
          Sep 5, 2019
        </p>
        <h4 className="text-base font-b">
          Reached $1.3K MRR by helping clients to scale their design through
          UI/UX design
        </h4>
      </div>
      <div className="flex pb-4 sm:pb-8 md:flex-col sm:flex-col">
        <p className="text-s md:text-xxs text-lightgray uppercase tracking-wider pr-12 leading-12">
          Sep 5, 2019
        </p>
        <h4 className="text-base font-b">
          Won Top 10 Team in my first hackathon by Hong Leong Bank
        </h4>
      </div>

      <div className="pt-12">
        <span className="font-b">Contact me</span> for collaboration / speaking engagements
      </div>
    </div>
  </div>
);

export default Milestones;
