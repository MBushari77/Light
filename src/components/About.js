import React from 'react';
import { Link } from 'react-router-dom';
import element1 from '../static/element1.svg';
import element2 from '../static/element2.svg';
import arrow from '../static/arrow.svg';

const About = ({ about, scrollToSection }) => {
  return (
    <section ref={about} className='about_section'>
      <div className='first_section'>
        <div className='about_title_container'>
            <h3 className='about_title'><i className='underlined'>About </i>us</h3>
            <img className='about_icon' src={element1} />
        </div>
        <div className='row'>
          <div className='col-sm-12 col-md-9 full_width_mobile'>
            <div className='about_text_container'>
              <i>Light is the first design consultancy based in sudan - Khr, established in 2017.<br /> We use the power of design to create exceptionalbrands, and establishing strong communication and trust.</i>
            </div>
          </div>
          <div className='col-sm-12 col-md-3'>
            <div className='get_in_touch'>
              <Link className='call_to_action' to='/contact'>Get in touch <img src={ arrow } /> </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='second_section row'>

        <div className='col-md-6 col-sm-12 our_vission'>
          <div className='about_title_container'>
              <h3 className='about_title'><i className='underlined'>Our vis</i>sion</h3>
          </div>
          <div className='about_text_container'>
              <i>To help businesses <strong> Domniate their proposed criteria.</strong></i>
              <div className='our_mv_img'>
                <img src={ element2 } />
              </div>
          </div>
        </div>

        <div className='col-md-6 col-sm-12 our_mission'>
          <div className='about_title_container'>
              <h3 className='about_title'><i className='underlined'>Our m</i>ission</h3>
          </div>
          <div className='about_text_container'>
            <i>To be the idealst service provider in our sector and the ultimate destination to create  a phenomenal brand.</i>
            <div className='our_mv_img'>
                <img src={ element2 } />
              </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About