import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const NewSession = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [indiv, setIndiv] = useState(true);
  const [comp,setComp] = useState(false);
  const [coSize, setCoSize] = useState('')
  const [coName, setCoName] = useState('')

  const setIndivFunc = () => {
    setIndiv(true)
    setComp(false)
  }

  const setCompFunc = () => {
    setIndiv(false)
    setComp(true)
  }

  const submitForm = (e) => {
    e.preventDefault();
    if (coSize === 'none'){
        alert('Fill the required fields')
        return;
    }
    else{
        setLoading(true)
        let data = {
            "name": name,
            "email": email,
            "phone": phone,
            "content": content,
            "indv": indiv,
            "comp": comp,
            "coName": coName,
            "coSize": coSize
        }
        // console.log(data)
        console.log(data);
        axios.post('http://10.42.0.74:5000/addsession', data)
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
              <h2 className='about_title'><i className='underlined'>Why we d</i>o this?</h2>
            </div>
            <br/>

            <div className="contact_more_info">
              <br />
              <i className="icon-hashtag"> Lorem ipsum, numquam incidunt quis. Dolorum sed eaque impedit non expedita necessitatibus, deserunt voluptates odio sapiente perspiciatis sint repudiandae recusandae inventore?</i>
            </div>
          </div>
          
        </div>
        <div className="col-md-6 col-sm-12 ">
          <div className="contact_form_container">
            <div>
              <h2 className='about_title'><i className='underlined'>Book a se</i>ssion</h2>
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
                  placeholder="Email"
                  required
                  className="form_input"
                  value={email} onChange={(e) => setEmail(e.target.value)} 
                />
              </div>


              <div className="input_field">
                <input 
                  type="text"
                  placeholder="Phone"
                  required
                  className="form_input"
                  value={phone} onChange={(e) => setPhone(e.target.value)} 
                />
              </div>

              <div className="type_buttons_container">
                <button 
                  type="button"
                  onClick={setIndivFunc}
                  className={indiv ? "type_button type_button_active" : "type_button"}
                >Individual</button>
                <button 
                  type="button"
                  onClick={setCompFunc}
                  className={comp ? "type_button type_button_active" : "type_button"}
                >Company</button>
              </div>
              {
                comp ? (
                  <>
                    <div className="input_field">
                      <input 
                        type="text"
                        placeholder="Company name"
                        required
                        className="form_input"
                        value={coName} onChange={(e) => setCoName(e.target.value)} 
                      />
                    </div>

                    <div className="input_field">
                      <select onChange={(e) => setCoSize(e.target.value)}  required>
                        <option hidden disabled value="none" defaultValue>company size</option>
                        <option value='5to25'> 5 - 25 </option>
                        <option value='26to50'> 26 - 50 </option>
                        <option value='51to100'> 51 - 100 </option>
                        <option value='more'> More </option>
                      </select>
                    </div>
                  </>
                ):
                null
              }


              <div className="input_field">
                <textarea
                  placeholder="Describe your issue"
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

export default NewSession