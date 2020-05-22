import React from 'react';
import CollectionData from '../src/data.json';

const Collection = () => (
    <div className="container mx-auto py-16 sm:px-10">
      <div className="pb-12">
        <h2 className="text-xxl">I design, build &amp; write stuff.</h2>
      </div>

      <div className="grid grid-cols-2 col-gap-12 row-gap-12 sm:grid-cols-1">
          {CollectionData.map((c, index) => { 
            return <div key={index}>
                <a href={c.url} target="_blank">
                  <img src={c.image} className="collectionimg"/>
                  <h4 className="py-4 text-l">{c.name}</h4>
                  <span className="caption">{c.desc}</span>
                </a>
            </div>
          })
          }
      </div>

    </div>
);

export default Collection;