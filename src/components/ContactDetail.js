import React from 'react';
import { Link } from 'react-router-dom';
import user from '../images/user.png'


const ContactDetail = (props) => {
    const {name, email} = props.location.state.contact;
     return(
         
         <div className="main">
             <br />
             <br />
             <div className="ui card centered">
                 <div className="image">
                     <img src={user} alt="user" />
                 </div>
                 <div className="contact">
                     <div className="header">{name}</div>
                     <div className="description">{email}</div>
                 </div>
                 <div className="center-div">
                 <Link to="/">
                 <button className="ui button blue"
                 style={{margin: "0px 80px"}}
                 >Contact List</button>
                 </Link>
             </div>
             </div>
        
        </div>
               
     );
};

export default ContactDetail;