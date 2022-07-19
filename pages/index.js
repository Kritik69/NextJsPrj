import Head from 'next/head'
import Banner from './Components/Banner'
import Clients from './Components/Clients'
import Footer from './Components/Footer'
import Form from './Components/Form'
import NavBar from './Components/NavBar'
import OurVision from './Components/OurVision'
import Services from './Components/Services'
import SoFar from './Components/SoFar'
import Videos from './Components/Videos'
import WhatWeDo from './Components/WhatWeDo'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Banner />
        <Services />
        <WhatWeDo />
        <OurVision />
        <Videos />
        <SoFar />
        <Clients />
        <Form />
    </>
  )
}
