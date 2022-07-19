import React from 'react'
import Pagetitle from './Components/Pagetitle'

function contact() {
  return (
    <>
        <Pagetitle title='Contact Us' />
        <div className="contact-wrapper sec-padd">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1 className="text-blue">Get in Touch</h1>
                <div className="red-line"></div>
                <p className="text-grey">Please get in touch and Our expert support team will answer all your questions.</p>
              </div>
              <div className="col-md-6">
                  <div className="inputs">
                    <h1 className="text-blue">Drop Us a Line</h1>
                    <div className="row">
                      <div className="col-md-6 mb-3 mb-md-0">
                        <input className='inp' type="text" placeholder='Name' />
                      </div>
                      <div className="col-md-6">
                        <input className='inp' type="tel" placeholder='Phone No.' />
                      </div>
                      <div className="col-12 my-3">
                        <input className='inp' type="email" placeholder='Email' />  
                      </div>
                      <div className="col-12">
                        <textarea className='inp' placeholder='Comment' cols="30" rows="5"></textarea>  
                      </div>
                      <div className="col-12 mt-3">
                        <button className='inp submit-btn'>Send Message</button>
                      </div>
                    </div>
                      
                  </div>
              </div>
            </div>
          </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3769.7275874705524!2d72.843935!3d19.119603!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x453a9e10cd2c9b76!2sReliance%20Hostel!5e0!3m2!1sen!2sus!4v1658232905154!5m2!1sen!2sus" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </>
  )
}

export default contact