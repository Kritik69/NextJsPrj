import React from 'react'

function Services() {
  return (
    <>
        <div className='services-wrapper'>
          <div className="container">
            <div className="services p-3">
              <div className="row">
                <div className="col-md-4">
                  <div className="services-inner-row">
                    <img className='services-icons m-1' src="./media/icon1.png" alt="" />
                    <div className=' m-1'>
                    <h4 className="text-white">ATL & BTL Campaign</h4>
                    <h6 className="text-white">We take a refreshingly original and innovative approach to ATL and BTL Activities and help to achieve the desired outcome for brands. The activities that we arrange, promote bonding between varied groups and help in creating dynamic synergies, which have long lasting results.</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="services-inner-row">
                    <img className='services-icons m-1' src="./media/icon2.png" alt="" />
                    <div className='m-1'>
                      <h4 className='text-white'>MANAGEMENT</h4>
                      <h6 className="text-white">That expertise allows us to overcome any challenges and capitalize on the opportunities that are presented in the management and implement event marketing campaigns.Our teams work together to manage all of the details to achieve desired results.</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="services-inner-row">
                    <img className='services-icons m-1' src="./media/icon3.png" alt="" />
                    <div className=' m-1'>
                      <h4 className="text-white">CONSULTING</h4>
                      <h6 className="text-white">We’re ready to serve you from start to finish, fill in the gaps or take over where you leave off. Before starting a project we listen to our clients, learn their goals and objectives, then our team goes to work on designing a strategic solution that shows a clear path to success and delivers results.</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Services