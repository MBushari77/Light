
import { Link } from 'react-router-dom';
import logo from '../static/logo.svg';


const Navbar = () => {



  return (
    <nav className='row'>
      <div className='col-md-3 col-sm-6'>
        <div className='nav_logo'>
          <Link to='/' className='nll'>
            <img src={logo} />
          </Link>
        </div>

      </div>
      <div className='col-md-6 col-sm-6 nav_buttons_container'>
        <div className='nav_actions'>
          {/* <Link className="navbar-button" to="/">Home</Link> */}
        </div>
      </div>
      <div className='col-sm-12 col-md-3 nav_contact_us_container'>
          <Link className='navbar_button  navbar_button_contact_us' to='/contact' >CONTACT US</Link>
      </div>
    </nav>
  )
}

export default Navbar