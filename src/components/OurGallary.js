import React from 'react';
import Navbar from './Navbar';

import project1 from '../static/projects/flip/1.jpg'
import { Link } from 'react-router-dom';

const OurGallary = () => {
  return (
    <div>
      <Navbar />
      <div className="our_gallary_container">
        <div className="our_gallary_title">
          <h3 className='about_title'><i className='underlined'>Gall</i>ary</h3>
        </div>
        <div className="row">

        <div className="col-md-3 col-sm-12 one_project_container">
            <div className="project_card">
              <div className="project_card_header">
              </div>
              <div className="project_card_body">
                <div>
                  <p className="project_card_title"><i className="underlined">First proj</i>ect</p>
                </div>
                <div>
                  <i className="project_card_about">
                    lorem ipsum dolor asd cfge pokfd ewf 
                  </i>
                </div>
                <div>
                  <Link className="project_card_button" to='/gallary/flip'>More</Link>
                </div>
              </div>
            </div>
          </div>


          <div className="col-md-3 col-sm-12 one_project_container">
            <div className="project_card">
              <div className="project_card_header">
              </div>
              <div className="project_card_body">
                <div>
                  <p className="project_card_title"><i className="underlined">First proj</i>ect</p>
                </div>
                <div>
                  <i className="project_card_about">
                    lorem ipsum dolor asd cfge pokfd ewf 
                  </i>
                </div>
                <div>
                  <Link className="project_card_button" to='/gallary/flip'>More</Link>
                </div>
              </div>
            </div>
          </div>


          <div className="col-md-3 col-sm-12 one_project_container">
            <div className="project_card">
              <div className="project_card_header">
              </div>
              <div className="project_card_body">
                <div>
                  <p className="project_card_title"><i className="underlined">First proj</i>ect</p>
                </div>
                <div>
                  <i className="project_card_about">
                    lorem ipsum dolor asd cfge pokfd ewf 
                  </i>
                </div>
                <div>
                  <Link className="project_card_button" to='/gallary/flip'>More</Link>
                </div>
              </div>
            </div>
          </div>


          <div className="col-md-3 col-sm-12 one_project_container">
            <div className="project_card">
              <div className="project_card_header">
              </div>
              <div className="project_card_body">
                <div>
                  <p className="project_card_title"><i className="underlined">First proj</i>ect</p>
                </div>
                <div>
                  <i className="project_card_about">
                    lorem ipsum dolor asd cfge pokfd ewf 
                  </i>
                </div>
                <div>
                  <Link className="project_card_button" to='/gallary/flip'>More</Link>
                </div>
              </div>
            </div>
          </div>


          <div className="col-md-3 col-sm-12 one_project_container">
            <div className="project_card">
              <div className="project_card_header">
              </div>
              <div className="project_card_body">
                <div>
                  <p className="project_card_title"><i className="underlined">First proj</i>ect</p>
                </div>
                <div>
                  <i className="project_card_about">
                    lorem ipsum dolor asd cfge pokfd ewf 
                  </i>
                </div>
                <div>
                  <Link className="project_card_button" to='/gallary/flip'>More</Link>
                </div>
              </div>
            </div>
          </div>


          <div className="col-md-3 col-sm-12 one_project_container">
            <div className="project_card">
              <div className="project_card_header">
              </div>
              <div className="project_card_body">
                <div>
                  <p className="project_card_title"><i className="underlined">First proj</i>ect</p>
                </div>
                <div>
                  <i className="project_card_about">
                    lorem ipsum dolor asd cfge pokfd ewf 
                  </i>
                </div>
                <div>
                  <Link className="project_card_button" to='/gallary/flip'>More</Link>
                </div>
              </div>
            </div>
          </div>



        </div>
      </div>
    </div>
  )
}

export default OurGallary