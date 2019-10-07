import React from 'react';
import './Contact.css';

const Contact = ({ name, avatar, online }) => (
    <div className="Contact">
        <img src={avatar} alt='' className="avatar" />
        <div>
            <h3 className="name">{name}</h3>
            <div className="status">
                <p className="status-text">{online ? 'online' : 'offline'}</p>
                <span className={online ? "status-online" : "status-offline"}></span>
            </div>
        </div>
    </div>
)


export default Contact;