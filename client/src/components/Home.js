import React from 'react';
import { Link } from 'react-router-dom';

// Import images 📷
import bike from '../assets/Watermelon_bike.png';
import wheel from '../assets/wheel.png';
import line from '../assets/blackLine.png';

// import styles
import '../styles/Home.css'

const Home = () => {
  return (
    <div>
      {/* ------- Hero Image -------*/}
      <div className="hero-image">
        <div className="bike-box" style={{ position: 'relative' }}>
          <img alt="left wheel" className="bike-wheels lwheel" src={wheel} />
          <img alt="right wheel" className="bike-wheels rwheel" src={wheel} />
          <img alt="bike" className="bike" src={bike} />
          <img alt="line" className="line" src={line} />
          {/* <div className='road'>sss</div> */}
        </div> {/* bike-box close */}
      </div>



      {/* ------- Home Main -------*/}
      <div className='Main'>
        <div className='LearnButtonDiv'>
          <li className='LearnButtonLi'>
          <Link to={"./ContactForm"} className='LearnButtonLink'>
          What do you want to learn?
          </Link>
          </li>
        </div>
      </div>

    </div>
  )
}

export default Home