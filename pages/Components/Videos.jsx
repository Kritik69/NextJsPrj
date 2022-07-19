import React from 'react'

function Videos() {
  return (
    <>
        <div className="videos-wrapper mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/37J7x9bhw1M" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="col-md-6">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/s0fQVJkaRPU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Videos