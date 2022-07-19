import React from 'react'

function Form() {
  return (
    <>
        <div className="form-wrapper mt-5 pt-5 pb-5">
            <div className="container">
                <div className="row text-white">
                    <div className="col-md-6">
                        <p className="display-4">We're On A Mission To Change Your View of SEO</p>
                        <p className="h3">For Nay Query <a className='link' href="tel:+91 8879 028 513">+91 8879 028 513</a></p>
                    </div>
                    <div className="col-md-6">
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
    </>
  )
}

export default Form