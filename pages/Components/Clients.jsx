import React, { Component } from 'react'
import Slider from "react-slick";

function Clients() {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: false,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear", 
        responsive: [
          {
            breakpoint: 3000,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
   };
  return (
    <>
    <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
      />
        <div className="clients-wrapper mt-5">
            <div className="container text-center">
                <h1 className="text-blue">Our Clients</h1>
                <Slider className='mt-5' {...settings}>
                    <div>
                        <img src="/C1.jpg" alt="" />
                    </div>
                    <div>
                        <img src="/C2.jpg" alt="" />
                    </div>
                    <div>
                        <img src="/C3.jpg" alt="" />
                    </div>
                    <div>
                        <img src="/C4.jpg" alt="" />
                    </div>
                    <div>
                        <img src="/C5.jpg" alt="" />
                    </div>
                    <div>
                        <img src="/C6.jpg" alt="" />
                    </div>
                    <div>
                        <img src="/C7.jpg" alt="" />
                    </div>
                    <div>
                        <img src="/C8.jpg" alt="" />
                    </div>
                    <div>
                        <img src="/C9.jpg" alt="" />
                    </div>
                    <div>
                        <img src="/C10.jpg" alt="" />
                    </div>
                    <div>
                        <img src="/C11.jpg" alt="" />
                    </div>
                    <div>
                        <img src="/C12.jpg" alt="" />
                    </div>
                    <div>
                        <img src="/C13.jpg" alt="" />
                    </div>
                    <div>
                        <img src="/C14.jpg" alt="" />
                    </div>
                    <div>
                        <img src="/C15.jpg" alt="" />
                    </div>
                    <div>
                        <img src="/C16.jpg" alt="" />
                    </div>
                    <div>
                        <img src="/C17.jpg" alt="" />
                    </div>
                    <div>
                        <img src="/C18.jpg" alt="" />
                    </div>
                    <div>
                        <img src="/C19.jpg" alt="" />
                    </div>
                    <div>
                        <img src="/C20.jpg" alt="" />
                    </div>
                    <div>
                        <img src="/C21.jpg" alt="" />
                    </div>
                </Slider>
            </div>
        </div>
    </>
  )
}

export default Clients