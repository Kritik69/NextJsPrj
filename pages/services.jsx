import React from 'react'
import Pagetitle from './Components/Pagetitle'
import Slider from "react-slick";

function services() {
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
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
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
        <Pagetitle title='Services' />
        <div className="services-wrapper sec-padd">
            <div className="container services-container">
                <p className="text-grey text-center">Our team focuses on careful planning and flawless execution to ensure the quality of each event we manage & exceed expectations.</p>
                <div className="red-line"></div>
            </div>
            <div className="container">
                <h1 className="text-blue">SPONSORSHIPS</h1>
                <div className="red-line"></div>
                <p className="text-grey">With consumers controlling more and more of their advertising messages,face-to-face conversations are one of the most effective ways to ignite a relationship between a brand and the consumer. Event sponsorships play a vital role in setting the stage for these conversations to begin, be relevant and be authentic.</p>
                <div className="row services-center">
                  <div className="col-md-6">
                    <img className='service-img' src="/media/S1.jpg" alt="" />
                  </div>
                  <div className="col-md-6">
                    <h4 className="text-grey">MCA’s turnkey sponsorship services include:</h4>
                    <ul>
                      <li className='text-grey'>Sales support</li>
                      <li className='text-grey'>Sponsor evaluation</li>
                      <li className='text-grey'>Strategic, creative and tactical program development</li>
                      <li className='text-grey'>Package development</li>
                      <li className='text-grey'>Contract negotiation</li>
                      <li className='text-grey'>Management and activation</li>
                      <li className='text-grey'>Competitive assessment</li>
                    </ul>
                  </div>
                </div>
                <div className='sec-padd'>
                  <h1 className="text-blue">ATL & BTL Campaign for Brands</h1>
                  <div className="red-line"></div>
                  <p className="text-grey">We take a refreshingly original and innovative approach to ATL and BTL Activities and help to achieve the desired outcome for brands. The activities that we arrange, promote bonding between varied groups and help in creating dynamic synergies, which have long lasting results.</p>
                </div>
                <div className="row services-center">
                  <div className="col-md-6">
                    <img src="/media/S2.jpeg" alt="" className="service-img" />
                  </div>
                  <div className="col-md-6">
                    <h1 className="text-blue">Digital & Social Media Services</h1>
                    <div className="red-line" />
                    <p className="text-grey">MCA helps to create content that attracts attention and encourages readers to share it across their social networks. It helps in gaining website traffic or attention through social media sites like:</p>
                    <ul>
                      <li className="text-grey">Facebook</li>
                      <li className="text-grey">Instagram</li>
                      <li className="text-grey">Twitter</li>
                      <li className="text-grey">Whatsapp</li>
                      <li className="text-grey">LinkedIn</li>
                    </ul>
                  </div>
                </div>
                <div className="row services-center">
                  <div className="col-md-6">
                    <h1 className="text-blue">Entertainment Events</h1>
                    <div className="red-line" />
                    <p className="text-grey">We all undeniably perceive entertainment to be the best stress buster, a pleasurable experience that adds a little spice to our lives. Here at Sound Spirit we promise to engage your senses like never before. Be it music, dance or art, our ever expanding suite of flagship shows hit home with a wide variety of audience and all one needs to do is sit back, relax and enjoy. We guarantee you the applause! When it comes to mega-concerts and gigs, it bodes well to trust the experts.</p>
                    <p>MCA has collectively handled and been involved in</p>
                    <ul>
                      <li className="text-grey">Biggest Stage Shows</li>
                      <li className="text-grey">Live Entertainment Gigs</li>
                      <li className="text-grey">Live Concert</li>
                      <li className="text-grey">Fashion Extravaganzas</li>
                      <li className="text-grey">Award Nights</li>
                      <li className="text-grey">Bollywood Nights</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                  <Slider className='mt-5' {...settings}>
                      <div>
                          <img className="service-img" src="/media/S3.jpg" alt="" />
                      </div>
                      <div>
                          <img className="service-img" src="/media/S4.jpg" alt="" />
                      </div>
                      <div>
                          <img className="service-img" src="/media/S5.jpg" alt="" />
                      </div>
                  </Slider>
                  </div>
                </div>
                <h1 className="text-blue">Customized Social Events</h1>
                <div className="red-line"></div>
                <p className="text-grey">“Life is measured, not by the number of breaths you take, but by the moments that take your breath away”, a wise man once said. How very true. Personal celebrations should be such breath-taking moments in the life of a person and also in his family & friends’. With imaginative planning, meticulous execution, unique themes, one-of-a-kind decor, innovative contests & activities, Live-Wire hosts and high-voltage performances we guarantee this and much more.</p>
                <ul>
                  <li className="text-grey">Theme Parties</li>
                  <li className="text-grey">Anniversary Bashes</li>
                  <li className="text-grey">Gala Evenings</li>
                  <li className="text-grey">Theme Birthday Parties</li>
                  <li className="text-grey">Festive Celebrations</li>
                </ul>
                <h1 className="text-blue">Corporate Events</h1>
                <div className="red-line"></div>
                <p className="text-grey">We assure you, we’re that one-stop solution you are looking for when it comes to planning and executing your corporate event. You can leaf through all the major types of events we cover in the sections ahead. Since last 4 years we have covered a wide range of corporate events, which includes</p>
                <ul>
                  <li className="text-grey">Product Launches</li>
                  <li className="text-grey">Award Functions</li>
                  <li className="text-grey">Dealer Meets</li>
                  <li className="text-grey">Corporate Outings</li>
                  <li className="text-grey">Employee Engagement</li>
                  <li className="text-grey">Destination Events</li>
                  <li className="text-grey">Annual Meetings</li>
                  <li className="text-grey">Conferences and Seminars</li>
                </ul>
                <h1 className="text-blue">MANAGEMENT</h1>
                <div className="red-line"></div>
                <p className="text-grey">We know how to market, plan and manage events, it’s what we do! The MCA team is led and staffed by experts that live and breathe event marketing. We’re experts in logistics, planning and execution.That expertise allows us to overcome any challenges and capitalize on the opportunities that are presented in the management and implement event marketing campaigns.Our teams work together to manage all of the details to achieve desired results. Are areas of service are:</p>
                <div className="row">
                  <div className="col-md-4">
                    <ul>
                      <li className="text-grey">Event and campaign management</li>
                      <li className="text-grey">Facilitate corporate tie-ups</li>
                      <li className="text-grey">Wedding Planners</li>
                      <li className="text-grey">Themed birthday events</li>
                      <li className="text-grey">Logistics planning</li>
                      <li className="text-grey">Employee Engagement</li>
                      <li className="text-grey">Experiential Marketing</li>
                      <li className="text-grey">Outdoor Advertising</li>
                      <li className="text-grey">Brand Management</li>
                      <li className="text-grey">Conferences</li>
                      <li className="text-grey">Award Nights</li>
                      <li className="text-grey">College & Cultural Events</li>
                      <li className="text-grey">Vendor management</li>
                    </ul>
                  </div>
                  <div className="col-md-8">
                    <img src="/media/S6.jpg" alt="" className="service-img" />
                  </div>
                </div>
                <h1 className="text-blue">Artist Management</h1>
                <div className="red-line"></div>
                <p className="text-grey">The artist not only adds glamour but also sets a unique charm and atmosphere, with soulful Bollywood music as well as Western Classics. That is a sure shot way to make an event memorable and much talked about. We want to make your event a fun and talked about event. You can choose from the various artist options we offer –</p>
                <ul>
                  <li className="text-grey">Live acts by artists/ performers</li>
                  <li className="text-grey">Live band</li>
                  <li className="text-grey">DJs</li>
                  <li className="text-grey">Celebrity Appearances</li>
                </ul>
                <h1 className="text-blue">CONSULTING</h1>
                <div className="red-line"></div>
                <p className="text-grey">We’re ready to serve you from start to finish, fill in the gaps or take over where you leave off. Before starting a project we listen to our clients, learn their goals and objectives, then our team goes to work on designing a strategic solution that shows a clear path to success and delivers results.You may not need our full menu of services on every project – but isn’t it comforting to know we understand the world of events well enough to fill in wherever you need help.</p>
                <div className="row">
                  <div className="col-md-8">
                    <img src="/media/S7.jpg" alt="" className="service-img" />
                  </div>
                  <div className="col-md-4">
                    <ul>
                      <li className="text-grey">Creative development</li>
                      <li className="text-grey">Strategy and planning</li>
                      <li className="text-grey">Project Management</li>
                      <li className="text-grey">Key performance indicators, measurement and consumer insight</li>
                      <li className="text-grey">Team leadership</li>
                      <li className="text-grey">Budget development and management</li>
                      <li className="text-grey">Project timelines and milestones</li>
                      <li className="text-grey">Contract negotiation and execution</li>
                      <li className="text-grey">Post event reporting and recapping</li>
                    </ul>
                  </div>
                </div>
                <h1 className="text-blue">Annual Meeting</h1>
                <div className="red-line"></div>
                <p className="text-grey">We design a tightly focused schedule for your annual meetings that accomplishes the goals set forth for the meeting in a highly professional manner.</p>
                <h1 className="text-blue">Award Function</h1>
                <div className="red-line"></div>
                <p className="text-grey">We understand the need for freshness in award functions and come up with the best creative ideas to make your event an unforgettable one. From designing the awards to providing entertainment, we excel at what we do.</p>
                <h1 className="text-blue">Conferences and Seminars</h1>
                <div className="red-line"></div>
                <p className="text-grey">We comprehend all the intricacies involved in your conferences/seminars, knowledge sharing being a key factor in such events. We work effectively towards delivering the intended transfer of information and ascertain each of your participants goes back enriched. To ensure the same, we use the best and latest AV equipment and take special care in setting up the stage.</p>
                <h1 className="text-blue">Product Launch</h1>
                <div className="red-line"></div>
                <p className="text-grey">We provide you with the most effective platform and promotional ideas to showcase your product and work on brand visibility in a way to enliven and uplift your brand in such a manner, that market penetration becomes next to easy for your product.</p>
            </div>
        </div>
    </>
  )
}

export default services