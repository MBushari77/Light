import React from 'react'
import { Link } from 'react-router-dom';
import logo_3d from '../static/logo3d.svg';
import arrow from '../static/arrow.svg';


const Home = ({ home }) => {
  return (
    <section ref={ home } className='home_section'>
      <div className='home_logo_container'>
        <img src={ logo_3d } />
      </div>
      <div>
        <h1>The first design consultancy in sudan</h1>
        <p>We help brandsdominate their competition</p>
      </div>
      <div>
        <Link className='call_to_action' to='/session'>Book a session <img src={ arrow } /> </Link>
      </div>
    </section>
  )
}

export default Home