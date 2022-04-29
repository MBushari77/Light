import React from 'react'
import { Link } from 'react-router-dom';
import arrow from '../static/arrow.svg';
import { useState } from 'react';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import p1 from '../static/clients/p1.png'
import p2 from '../static/clients/p2.png'
import p3 from '../static/clients/p3.png'
import p4 from '../static/clients/p4.png'
import p5 from '../static/clients/p5.png'

const images = [p1, p2, p3, p4, p5]


const Gallery = ({ gallery }) => {
    const [imageIndex, setImageIndex] = useState(0);



    const NextArrow = ({onClick}) => {
        return(
            <div className="arrow next" onClick={ onClick }>
                <FaArrowRight />
            </div>
        )
    }
    const PrevArrow = ({onClick}) => {
        return(
            <div className="arrow prev" onClick={ onClick }>
                <FaArrowLeft />
            </div>
        )
    }

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 100,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next)
    }
  return (
    <section ref={ gallery } className="gallary_section">
        <div className='row'>
            <div className="col-md-5 col-sm-12 gallery_slider_side">
                <Slider {...settings} className="slider">
                    {
                        images.map((img, i) => (
                            <div key={i} className="galary_slider_img_container">
                                {/* <Link to="/gallary"> */}
                                <img 
                                    src={ img } 
                                    alt={ img } 
                                    className={i === imageIndex ? "slide activeSlide galary_slider_img" : "slide galary_slider_img" }
                                 />
                                {/* </Link> */}
                            </div>
                        ))
                    }
                </Slider>
            </div>
            <div className="col-md-7 col-sm-12 gallary_content_side">
                <div className='out_there_title_container'>
                    <h2 className='about_title'><i className='underlined'>Out </i>there</h2>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-12 content_col">
                        <p>
                            In a world of noise, similarity, hundreds of businesses, products, services and technologies are launching the market increasing your competition makes it seem impossible to get the recognition you deserve, strong presence can solve your problem, light will prevent you from blending in by having an outstanding brand, But you still need to be heard, to own the loyalty of your customers, seems tough Huh!
                        </p>
                    </div>
                    <div className="col-md-6 col-sm-12 content_col">
                        <p>
                            don't woory our content strategies and content marketing will help you establish strong communication and trust, we even makes it easierfor them to access you using our branding strategies and unique UI/UX design which lead to increasing in sales.<br/> Light a valuable source of differentiation, stand out, and <strong>Dominate the competition</strong>.
                        </p>
                    </div>
                    <div className="to_gallary_button">
                        <Link className='call_to_action' to='/gallary'>Check our work <img src={ arrow } /> </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Gallery