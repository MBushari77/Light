import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

const Dashboard = () => {
    const [msgs, setMsgs] = useState([]);
    useEffect(() => {
        axios.get('http://10.42.0.74:5000/allmsgs')
            .then((res) => {
                setMsgs(res.data.data)
            })
    }, [])


  return (
    <div className="row dashboard_section">
        <div className="col-md-6 col-sm-12">
            <div>
                <h3>Messages</h3>
            </div>
            
            {
                msgs.length === 0 ? (
                    <h3> No Messages </h3>
                ) :(
                    msgs.map((msg, i) => (
                        // Code ...
                        <div key={ i }>
                            <div className="msg_container">
                                <p># { msg.name }</p>
                                <p># { msg.email }</p>
                                <p># { msg.phone }</p>
                                <p># { msg.content }</p>
                            </div>
                        </div>
                    ))
                )
            }
            
            

        </div>
    </div>
  )
}

export default Dashboard