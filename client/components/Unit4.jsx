import React from "react"

export default function Unit4() {
    return (
        <div>
           <h4>Unit 4</h4>
           <div className="youtube"> 
            <div className='YTTitle'>Youtube Videos </div>
            <div className="videoWrapper">
              <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/wiozYyXQEVk"
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
              </iframe>
            </div>
           </div>
           
           <div className="furtherR">
            <div className='readingsTitle'>Further Readings </div>
              <div className="readingsWrapper">
                <a href="https://www.w3schools.com/js/js_htmldom_methods.asp">DOM Methods</a>
              </div>
           </div>
        </div>
    )
}


