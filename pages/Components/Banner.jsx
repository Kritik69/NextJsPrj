import React from 'react'

function Banner() {
  return (
    <>
      <div className="home-wrapper">
        <div className="banner-div pt-5 pb-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="banner-content col-md-6">
                <p className="text-white display-3"><b>Exquisite of Digital Marketing</b></p>
                <p className="text-white">Music, Culture & Arts started in 2011, Mumbai based event company which organizes specialized events such as Live shows, Brand Activation, Brand Launches, Theme based Weddings, Birthday events, Outdoor Advertising, Conferences & Dealers Meet, Corporate Tie-ups, etc</p>
              </div>
              <div className="banner-img-div col-md-6">
                <img className='banner-img' src="./media/banner-img-1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner