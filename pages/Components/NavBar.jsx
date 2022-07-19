import React from 'react'
import Link from 'next/link'

function NavBar() {
  return (
    <>
   <header className='bg-light'>
        <nav class="navbar navbar-expand-lg ">
        <div class="container">
            <Link href='/'><a class="navbar-brand"><img className='logo-img' src='./media/nav-logo.png' alt="" /></a></Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="nav-item">
                <Link href='/'><a class="nav-link active text-black" aria-current="page">HOME</a></Link>
                </li>
                <li class="nav-item">
                <Link href='/about'><a class="nav-link text-black">ABOUT</a></Link>
                </li>
                <li class="nav-item">
                <Link href='/services'><a class="nav-link text-black">SERVICES</a></Link>
                </li>
                <li class="nav-item">
                <Link href='/pr'><a class="nav-link text-black">PUBLIC RELATIONS</a></Link>
                </li>
                <li class="nav-item">
                <Link href='/contact'><a class="nav-link text-black">CONTACT US</a></Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
   </header>
    </>
  )
}

export default NavBar