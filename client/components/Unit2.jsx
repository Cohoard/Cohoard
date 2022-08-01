import React from 'react';

export default function Unit2() {
    return (
        <div>
           <h4>Unit 2</h4>
           <div className="youtube"> 
            <div className='YTTitle'>Youtube Videos </div>
            <div className="videoWrapper">
              <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/BBpAmxU_NQo"
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
              </iframe>
            </div>
           </div>
           <div className="furtherR">
            <div className='readingsTitle'>Further Readings </div>
              <div className="readingsWrapper">
                <a href="https://www.geeksforgeeks.org/data-structures">Data Structures</a>
              </div>
           </div>
        </div>
    )
}