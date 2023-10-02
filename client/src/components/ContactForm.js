// import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// import styles 🎨
import '../styles/Contact.css';

const ContactForm = ({contact, setContact}) => {
  
  // const [contact, setContact] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   learn: ""
  // });
  // contact is being used as the name of the object instead of user. This way in the future, user can be used for login and reg. 

  const onChangeHandler = (e) => {
    console.log(e)
    setContact({
      ...contact,
      [e.target.name]: e.target.value
    })
  }
  const navigate = useNavigate();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    //prevent default behavior of the submit
    //make a post request to create a new contact
    console.log("---------", contact)
    axios.post('http://localhost:8000/api/contact/create', contact)
      // this is the same as the route in the contact.routes is this ok?
      .then(res => {
        console.log("This is the response", res);
        console.log("This is response.data", res.data);
        navigate('/thankYou')
      })
      .catch((err) => {
        console.log(err);
      })
  }
  return (
    <div className='ContactMain' >
      <form className='ContactForm' onSubmit={onSubmitHandler}>
        <div className="f">

          <label 
          htmlFor="firstName">
          First Name:</label>
          <br/>
          <input 
          type="text" 
          name="firstName" 
          id="firstName" 
          className="" 
          onChange={onChangeHandler} 
          value={contact.firstName} />
          
        </div>

        <div className="f">
          <label 
          htmlFor="lastName">
          Last Name:</label>
          <br/>
          <input 
          type="text" 
          name="lastName" 
          id="lastName" 
          className="" 
          onChange={onChangeHandler} />
        </div>

        <div className="f">
          <label 
          htmlFor="email">
          Email:</label>
          <br/>
          <input 
          type="text" 
          name="email" 
          id="email" 
          className="" 
          onChange={onChangeHandler} />
        </div>

        <div className="f">
          <label 
          htmlFor="favorite"></label>
          <select 
          className="" 
          name="favorite">
            <option value="">What's your favorite subject?</option>
            <option value="Science">Science</option>
            <option value="English">English</option>
            <option value="Math">Math</option>
            <option value="Art" >Art</option>
            <option value="Music">Music</option>
            <option value="PE" >PE</option>
          </select>
        </div>

        <div className="f">
          <label 
          htmlFor="learn">What would you like to learn about?</label>
          <br/>
          <input 
          type="text" 
          name="learn" 
          id="learn" 
          className="" 
          onChange={onChangeHandler} />
        </div>
        <button 
        className='SubmitButton'>
        Submit</button>
      </form>

    </div>
  )
}

export default ContactForm

