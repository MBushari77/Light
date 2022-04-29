import React from 'react'
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../static/logo3d.svg';
import nav_logo from '../static/logo.svg'


import Home from './Home';
import About from './About';
import Clients from './Clients';
import Gallery from './Gallery';
import Team from './Team';
import Footer from './Footer';

const LandingPage = () => {
  const home = useRef(null);
  const about = useRef(null);
  const clients = useRef(null);
  const gallery = useRef(null);
  const team = useRef(null);

  const [navSt, setNavSt] = useState(false);
  const [buttonIcon, setButtonIcon] = useState('icon-menu')

  const scrollToSection = (elementRef) =>{
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    });
  }
  const toggleNav = () => {
    setNavSt(!navSt);
    buttonIcon === 'icon-menu' ? setButtonIcon('icon-cancel') : setButtonIcon('icon-menu');
  }

  return (
    <>
    <nav className="navbar-expand-lg navbar-light navbar">
      <div className='nav_logo'>
        <Link to='/' className='nll'> 
          <img src={nav_logo} />
        </Link>
      </div>
      <button onClick={ toggleNav } className="navbar-toggler" type="button" >
        <i className={ buttonIcon }></i>
      </button>
      <div className={navSt ? "collapse navbar-collapse right_alignv": "collapse navbar-collapse right_alignv mobile_nav"} id="navbarNavAltMarkup">
        <div className="navbar-nav">
            <i className='navbar_button' onClick={ () => scrollToSection( home ) } >Home</i>
            <i className='navbar_button' onClick={ () => scrollToSection( about ) } >About</i>
            <i className='navbar_button' onClick={ () => scrollToSection( clients ) } >Clients</i>
            <i className='navbar_button' onClick={ () => scrollToSection( gallery ) } >Gallery</i>
            <i className='navbar_button' onClick={ () => scrollToSection( team ) }>Team</i>
          <div className='col-md-3 nav_contact_us_container'>
              <Link className='navbar_button  navbar_button_contact_us' to='/contact' >CONTACT US</Link>
          </div>
        </div>
      </div>
    </nav>


      
      <Home home={ home } />
      <About about={ about } />
      <Clients clients={clients } />
      <Gallery gallery={ gallery } />
      <Team team={ team } />
      {/* Footer section */}
      <Footer />
    </>
  )
}

export default LandingPage