import React from 'react';

const Resume = () => (
    <div className="py-16">
      <div className="pb-8 w-1/2">
        <h2 className="text-xxl">Résumé</h2>
      </div>
      <div className="pb-8">
        <h3 className="text-l">My Expertise</h3>
        <div>
            User interface design<br/>
            User experience design<br/>
            Product strategy<br/>
            Design systems<br/>
            Website Development
        </div>
      </div>
      <div className="pb-8">
        <h3 className="text-l">Tools</h3>
        <div>
            Figma, Sketch, Invision, Adobe XD<br/>
            Adobe Illustrator, Adobe After Effects<br/>
            React
        </div>
      </div>
      <div>
        <h3 className="text-l">Milestones</h3>
        <div>
            <strong>2019:</strong> Won Top 10 team in a 24 Hour Hackathon
        </div>
      </div>
      Download my résumé
    </div>
);

export default Resume;