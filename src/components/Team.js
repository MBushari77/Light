import React from 'react'
import gengo from '../static/gengo.svg';
import ahmed from '../static/ahmed.svg';
import bushari from '../static/bushari.svg';
import heima from '../static/heima.svg';



const Team = ({ team }) => {
  return (
    <section ref={ team } className="team_section">
        <div className="team_title_container">
            <h2 className='about_title'><i className='underlined'>Our</i> team </h2>
        </div>
        <div className="row">
            
            <div className="col-md-3 col-sm-12 ">
                <div className="team_member">
                    <div className="team_member_img_container">
                        <img src={ gengo } />
                    </div>
                    <div className="team_member_name">
                        <i>Mohammed Algengo <br/> Creative director </i>
                    </div>
                </div>
            </div>

            
            <div className="col-md-3 col-sm-12 ">
                <div className="team_member">
                    <div className="team_member_img_container">
                        <img src={ ahmed } />
                    </div>
                    <div className="team_member_name">
                        <i>Ahmed Abdullateef <br/> Business developer </i>
                    </div>
                </div>
            </div>

            
            <div className="col-md-3 col-sm-12 ">
                <div className="team_member">
                    <div className="team_member_img_container">
                        <img src={ bushari } />
                    </div>
                    <div className="team_member_name">
                        <i>Mohammed Albushari <br/> Head developer </i>
                    </div>
                </div>
            </div>

            
            <div className="col-md-3 col-sm-12 ">
                <div className="team_member">
                    <div className="team_member_img_container">
                        <img src={ heima } />
                    </div>
                    <div className="team_member_name">
                        <i>Ibrahem Ahmed <br/> Consultant </i>
                    </div>
                </div>
            </div>

        </div>


    </section>
  )
}

export default Team