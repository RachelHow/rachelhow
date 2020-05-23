import React from 'react';
import CollectionData from '../src/data.json';

const Collection = () => (
    <div className="container mx-auto py-16 md:px-8 sm:px-10">
      <div className="pb-12 text-center">
        <h2 className="text-xxl md:text-xl sm:text-xl">I design, build &amp; write stuff.</h2>
      </div>

      <div className="grid grid-cols-2 col-gap-16 row-gap-16 px-12 text-center md:px-0 sm:grid-cols-1 sm:px-0">
          {CollectionData.map((c, index) => { 
            return <div key={index}>
                <a href={c.url} target="_blank">
                  <img src={c.image} className="collectionimg"/>
                  <h4 className="pt-4 pb-2 text-l">{c.name}</h4>
                  <span className="text-lightgray">{c.desc}</span>
                </a>
            </div>
          })
          }
      </div>

    </div>
);

export default Collection;