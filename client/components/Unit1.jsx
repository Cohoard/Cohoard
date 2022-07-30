import React from "react"

export default function Unit1() {
  return (
    <div>
      <h4>Unit 1</h4>
      <div className="youtube"> 
        <div className='YTTitle'>Youtube Videos </div>
        <div className="videoWrapper">
          <iframe width="560" height="315" 
            src="https://www.youtube.com/embed/upDLs1sn7g4" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
          </iframe>
        </div>
      </div>

      <div className="furtherR">
        <div className='readingsTitle'>Further Readings </div>
        <div className="readingsWrapper">
          <a href="https://code.tutsplus.com/articles/the-best-way-to-deep-copy-an-object-in-javascript--cms-39655">Shallow vs. Deep Clone</a>
        </div>
      </div>
    </div>
  )
}