import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../static/logo.svg';
import { useState } from 'react';


const Navbar = () => {

  const [navSt, setNavSt] = useState(false);
  const [buttonIcon, setButtonIcon] = useState('icon-menu')

  const toggleNav = () => {
    setNavSt(!navSt);
    buttonIcon === 'icon-menu' ? setButtonIcon('icon-cancel') : setButtonIcon('icon-menu');
  }

  return (
    <nav className="navbar-expand-lg navbar-light navbar">
      <div className='nav_logo'>
        <Link to='/' className='nll'> 
          <img src={logo} />
        </Link>
      </div>
      <button onClick={ toggleNav } className="navbar-toggler" type="button" >
        <i className={ buttonIcon }></i>
      </button>
      <div className={navSt ? "collapse navbar-collapse right_alignv": "collapse navbar-collapse right_alignv mobile_nav"} id="navbarNavAltMarkup">
        <div className="navbar-nav">
            <Link className='navbar_button' to='/session'>Book a session</Link>
          <div className='col-md-3 nav_contact_us_container'>
              <Link className='navbar_button  navbar_button_contact_us' to='/contact' >CONTACT US</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar