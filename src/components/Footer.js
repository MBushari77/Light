import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="col-md-3 col-sm-6 footer_part_one">
          <div>
            <h4>Light</h4>
          </div>
          <div>
            <i>Home</i>
          </div>
          <div>
            <i>About us</i>
          </div>
          <div>
            <i>Portfolio</i>
          </div>
          <div>
            <i>Light</i>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 footer_part_two">
          <div>
            <h4>Team </h4>
          </div>
          <div>
            <i>Mohammed Algengo</i>
          </div>
          <div>
            <i>Mhammed Albushari</i>
          </div>
          <div>
            <i>Ahmed Abdullateef</i>
          </div>
          <div>
            <i>Ibrahem Ahmed</i>
          </div>
        </div>
        <div className="col-md-5 col-sm-12 footer_part_three">
          <div>
            <h4>Contact us </h4>
          </div>
          <div>
            <i className="icon-phone"> +24996905755</i>
          </div>
          <div>
            <i className="icon-mail-squared"> bigmbushari@gmail.com</i>
          </div>
          <div>
            <i className="icon-location-1"> Khartoum/Sudan</i>
          </div>
          <div className="social_media_icons">
            <i className="icon-facebook"> </i>
            <i className="icon-instagram"> </i>
            <i className="icon-behance"> </i>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer