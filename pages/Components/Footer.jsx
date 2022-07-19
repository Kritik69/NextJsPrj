import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocation, faPhone } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome, faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

library.add(fas, faTwitter, faFontAwesome)
function Footer() {
  return (
    <>
        <div className="footer-wrapper pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <img className='footer-img mb-3' src="./media/nav-logo.png" alt="" />
                        <p className='text-blue'>Music, Culture & Arts started in 2011, Mumbai based event company which organizes specialized events such as Live shows, Brand Activation, Brand Launches etc</p>
                        <FontAwesomeIcon className='icon' icon={faFacebook} />
                        <FontAwesomeIcon className='icon' icon={faInstagram} />
                        <FontAwesomeIcon className='icon' icon={faLinkedin} />
                    </div>
                    <div className="col-md-3 pt-2">
                        <h3 className="widget-title mb-3 text-blue fw-bold">Quick links</h3>
                        <ul class="foo-list">
                            <li>
                                <Link href='/'><a className='link'>About Us</a></Link>
                            </li>
                            <li>
                                <Link href='/'><a className='link'>Services</a></Link>
                            </li>
                            <li>
                                <Link href='/'><a className='link'>PR</a></Link>
                            </li>
                            <li>
                                <Link href='/'><a className='link'>Contact Us</a></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h2 className='text-blue'>Contact Us</h2>
                        <p className="text-blue">Business point, office #6, Lohana Colony, Paliram Road, Andheri West, Mumbai – 400058</p>
                        <p className='text-blue'>Phone: <span><a className='link' href="tel:+91 8879 028 513">+91 8879 028 513</a></span></p>
                        <p className='text-blue'>Phone: <span><a className='link' href="mailto:rohit@musiccultureart.in">rohit@musiccultureart.in ,</a></span></p>
                        <a className='link text-blue' href="mailto:info@mcaworldwide.in">info@mcaworldwide.in</a>
                    </div>
                    <div className="col-md-3">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d482528.2170106236!2d72.848322!3d19.118546!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdf106c248087a17c!2sBusiness%20Point!5e0!3m2!1sen!2sus!4v1658216037242!5m2!1sen!2sus" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer2-wrapper pb-3">
            <div className="container text-center">
                © Copyright 2022 Music Culture Art | Developed by <a className='link' href="https://vectorart.co/" target='_blank'>VectorArt</a>
            </div>
        </div>
    </>
  )
}

export default Footer