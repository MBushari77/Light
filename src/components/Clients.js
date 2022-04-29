import React from 'react'
import { useState } from 'react';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import p1 from '../static/clients/p1.png'
import p2 from '../static/clients/p2.png'
import p3 from '../static/clients/p3.png'
import p4 from '../static/clients/p4.png'
import p5 from '../static/clients/p5.png'

const images = [p1, p2, p3, p4, p5, p1, p2, p3, p4, p5]

const Clients = ({ clients }) => {
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
        slidesToShow: 5,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next)
    }
    return (
        <section ref={ clients } className='clients_section'>
            <div className='about_title_container reviews_title_container'>
                <h3 className='about_title'><i className='underlined'>Revi</i>ews</h3>
            </div>
            <div className="reviews">
                <div className="row">

                    <div className="col-md-4 col-sm-12">
                        <div className="review">
                            <div>
                                <img src={ p1 } className="review_img" />
                            </div>
                            <div className="review_content">
                                <p>jknakjs sdui h3ied u8dei j  ewiuwe eywrhe wieyrbweiubd d3498d34 vvtg3gv bfv fw yfbuw eybr  </p>
                            </div>
                            <div className="row">
                                <div className="col-md-5"></div>
                                <div className="col-md-7 ">
                                    <p className="review_owner">mohammed albushari, software developer </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-4 col-sm-12">
                        <div className="review">
                            <div>
                                <img src={ p3 } className="review_img" />
                            </div>
                            <div className="review_content">
                                <p>jknakjs sdui h3ied u8dei j  ewiuwe eywrhe wieyrbweiubd d3498d34 vvtg3gv bfv fw yfbuw eybr  </p>
                            </div>
                            <div className="row">
                                <div className="col-md-5"></div>
                                <div className="col-md-7 ">
                                    <p className="review_owner">mohammed albushari, software developer </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-4 col-sm-12">
                        <div className="review">
                            <div>
                                <img src={ p2 } className="review_img" />
                            </div>
                            <div className="review_content">
                                <p>jknakjs sdui h3ied u8dei j  ewiuwe eywrhe wieyrbweiubd d3498d34 vvtg3gv bfv fw yfbuw eybr  </p>
                            </div>
                            <div className="row">
                                <div className="col-md-5"></div>
                                <div className="col-md-7 ">
                                    <p className="review_owner">mohammed albushari, software developer </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            {/* Our Clients */}
            <div className="our_clients_container">
                <div>
                    <h2 className='about_title'>Our c<i className='underlined'>lient</i>s</h2>
                </div>
                <div>
                    <Slider {...settings} className="logos_slider">
                        {
                            images.map((img, i) => (
                                <div key={i} className="galary_slider_img_container">
                                    <img 
                                        src={ img } 
                                        alt={ img } 
                                        className="logo_slide"
                                        />
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Clients