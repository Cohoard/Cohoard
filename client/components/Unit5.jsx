import React from "react"

export default function Unit5() {
  return (
    <div>
      <h4>Unit 5</h4>
      <div className="youtube"> 
        <div className='YTTitle'>Youtube Videos </div>
        <div className="videoWrapper">
        <iframe width="560" height="315" 
          src="https://www.youtube.com/embed/wdvruTuWvW8" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
        </div>
      </div>

      <div className="furtherR">
        <div className='readingsTitle'>Further Readings </div>
        <div className="readingsWrapper">
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests">Synchronous and Asynchronous JavaScript</a>
        </div>
      </div>
    </div>
  )
}