import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';


function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    import ('bootstrap/dist/js/bootstrap.min.js')
  },[])
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
