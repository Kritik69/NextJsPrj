import React from 'react'

function SoFar() {
  return (
    <>
        <div className="so-far-wrapper mt-5 pt-5 pb-5">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-3">
                        <p className="display-3 text-white">1,290</p>
                        <h3 className='text-blue'>Projects Done</h3>
                    </div>
                    <div className="col-md-3">
                        <p className="display-3 text-white">44</p>
                        <h3 className='text-blue'>Partners</h3>
                    </div>
                    <div className="col-md-3">
                        <p className="display-3 text-white">10</p>
                        <h3 className='text-blue'>Countries</h3>
                    </div>
                    <div className="col-md-3">
                        <p className="display-3 text-white">78</p>
                        <h3 className='text-blue'>Clients</h3>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SoFar