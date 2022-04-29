import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from '../static/logo3d.svg';
import { FaArrowRight, FaArrowLeft, FaMailBulk, FaMailchimp } from 'react-icons/fa';
import Navbar from './Navbar';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    if (name === ''){
        alert('Fill the required fields')
    }
    else{
        setLoading(true)
        let data = {
            "name": name,
            "email": email,
            "phone": phone,
            "content": content
        }
        // console.log(data)
        axios.post('http://10.42.0.74:5000/addmsg', data)
            .then((res) => {
                setLoading(false)
                setDone(true)
            })
    }
}

  return (
    <section className="contact_us_container">
      <Navbar />


      <div className="our_information row">
        <div className="col-md-6 col-sm-12">
          <div className="contact_information">
            <div>
              <h2 className='about_title'><i className='underlined'>Contact </i>iformation</h2>
            </div>
            <br/>
            <div>
              <i className="icon-phone"> +24996905755</i>
            </div>

            <div>
              <i className="icon-mail-squared"> bigmbushari@gmail.com</i>
            </div>
            
            <div>
              <i className="icon-location-1"> Khartoum/Sudan</i>
            </div>
                        
            <div className="contact_more_info">
              <br />
              <i className="icon-location-1"> Lorem ipsum, numquam incidunt quis. Dolorum sed eaque impedit non expedita necessitatibus, deserunt voluptates odio sapiente perspiciatis sint repudiandae recusandae inventore?</i>
            </div>
          </div>
          
        </div>
        <div className="col-md-6 col-sm-12 ">
          <div className="contact_form_container">
            <div>
              <h2 className='about_title'><i className='underlined'>Contact </i>iformation</h2>
            </div>
            <br/>
            { loading ? (
              <h3>Loading... </h3>
            ): null }
            { done ? (
              <div className="modal_container">
                <div className="msg_modal">
                  <div>
                    <p>Thanks for contacing us!</p>
                  </div>
                  <div>
                    <Link to='/' className="modal_button">Ok</Link>
                  </div>
                </div>

              </div>
            ): null }
            <form onSubmit={ submitForm }>

              <div className="input_field">
                <input
                  type="text"
                  placeholder="Full name"
                  required
                  className="form_input"
                  value={name} onChange={(e) => setName(e.target.value)} 
                />
              </div>

              <div className="input_field">
                <input 
                  type="text"
                  placeholder="email"
                  required
                  className="form_input"
                  value={email} onChange={(e) => setEmail(e.target.value)} 
                />
              </div>

              <div className="input_field">
                <input 
                  type="text"
                  placeholder="Phone number"
                  required
                  className="form_input"
                  value={phone} onChange={(e) => setPhone(e.target.value)} 
                />
              </div>

              <div className="input_field">
                <textarea
                  placeholder="Write something"
                  required
                  className="textarea_input"
                  value={content} onChange={(e) => setContent(e.target.value)} 
                ></textarea>
              </div>

              <div className="input_field">
                <button type='submit'> Send <i className="icon-right-dir"></i> </button>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact