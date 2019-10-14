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
                        <text 
                        className={this.state.online ? "status-online" : "status-offline"}
                        ></text>
                        <text className="status-text">{this.state.online ? 'online' : 'offline'}</text>
                    </div>
                </div>
            </div>
        );
    }
}


export default Contact;