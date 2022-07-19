import React from 'react'
import Pagetitle from './Components/Pagetitle'
import about from './../public/media/aboutus.png'
function About() {
  return (
    <>
      <Pagetitle title='About Us'/>
      <div className="aboutus-wrapper sec-padd">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src='/media/aboutus.png' alt="" />
            </div>
            <div className="col-md-6">
              <h1 className="text-blue">Who are we</h1>
              <div className="red-line" />
              <p className="text-grey">Music, Culture & Arts started in 2011, Mumbai based event company which organizes specialized events such as Live shows, Brand Activation, Brand Launches, Theme based Weddings, Birthday events, Outdoor Advertising, Conferences & Dealers Meet, Corporate Tie-ups, etc</p>
              <p className="text-grey">We manage events across the globe. MCA team focuses on dedicating quality and excellence. Our systematic method of managing events helps your brand to achieve and deliver results that exceeds all expectations. We ensure cost-effective service, accountability and flexibility in all your requirements.</p>
              <p className='text-grey'>At MCA Events, “WHY FIT IN, WHEN WE CAN MAKE YOU STAND OUT.” Whatever your budget may be, we have solutions you will not find elsewhere.</p>
            </div>
          </div>
          <div>
            <h1 className="text-blue">Why us ?</h1>
            <div className="red-line" />
            <p className="text-grey">Larger companies with on-staff event planners have to bill their clients more to defray the costs of inevitable down time. The personal touch:</p>
            <p className="text-grey">Everyone on the MCA Team rallies behind your event. But to ensure nothing falls through the cracks, one dedicated person answers directly to you. Your phone calls get answered. Your emails are replied to promptly. Your input is embraced. One-stop event</p>
            <p className="text-grey">Why waste time running in circles looking for individual event production services when you can make one call to MCA? We take care of everything from strategy, design, audio-visuals to message development, talent booking and much more. Our clients see MCA as more than a production and event planning company that creates, designs and delivers powerful productions. They see us as a true partner.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About