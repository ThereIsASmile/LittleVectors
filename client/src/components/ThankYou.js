import React from 'react';

// import styles 🎨
import '../styles/Thankyou.css';


const ThankYou = ({contact}) => {
  return (
    <div>
    <h2>Thank You</h2>
    
    <p>{contact.firstName}</p>
    
    </div>
    
  )
}

export default ThankYou