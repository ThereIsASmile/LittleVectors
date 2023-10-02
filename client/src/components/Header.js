import React from 'react';
import { Link } from 'react-router-dom';

// import images 📸
import lvlogo from '../assets/Little_Vectors_logo.png';

// import styles 🎨
import '../styles/Header.css';

// import components 🗄️
import './Games';
import './ContactForm';
import './Infographics';

const Header = () => {
  return (
    <div>
      <div className='header'>
        <div className='lvlogoheader'>
          <Link to={"./"}>
            <img 
            className='LvLogoImg' 
            alt="Little Vectors" 
            src={lvlogo} />
          </Link>
        </div>

        <div className='navbar'>
          <ul>
            <li>
            <Link to={"/Games"}>Games</Link>
            </li>

            <li>
            <Link to={"/Infographics"}>Infographics</Link>
            </li>

            <li>
            <Link to={"/ContactForm"}>Contact</Link>
            </li>

          </ul>
        </div>
      </div>


    </div>
  )
}

export default Header