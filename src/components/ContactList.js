import React from 'react';
import Contact from './Contact';

const contacts = [
    {   
        name: "Miriam Lopez",
        avatar: "https://randomuser.me/api/portraits/women/13.jpg",
        online: true
    },
    {
        name: "Fred Globin",
        avatar: "https://randomuser.me/api/portraits/lego/0.jpg",
        online: true
    },
    {
        name: "Julia Franklin",
        avatar: "https://randomuser.me/api/portraits/women/72.jpg",
        online: false
    },
    {
        name: "Georgia Fresles",
        avatar: "https://randomuser.me/api/portraits/women/50.jpg",
        online: false
    },
    {
        name: "Christopher Phone",
        avatar: "https://randomuser.me/api/portraits/men/23.jpg",
        online: true
    }
]
const ContactList = () => (
    <div>
        {contacts.map(item => (
            <Contact key={item.avatar} name={item.name} avatar={item.avatar} online={item.online} />
        ))}
    </div>
)
export default ContactList;