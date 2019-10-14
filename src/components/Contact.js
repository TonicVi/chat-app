import React from 'react';
import './Contact.css';

class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            online: false
        };
    }
    render() {
        return (
            <div className="Contact">
                <img src={this.props.avatar} alt='' className="avatar" />
                <div>
                    <h3 className="name">{this.props.name}</h3>
                    <div className="status" 
                        onClick={event => {
                            const onlineChange = !this.state.online;
                            this.setState({ online: onlineChange })
                        }}>
                        <p className="status-text">{this.state.online ? 'online' : 'offline'}</p>
                        <span 
                        className={this.state.online ? "status-online" : "status-offline"}
                        ></span>
                    </div>
                </div>
            </div>
        );
    }
}


export default Contact;