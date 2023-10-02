import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useState} from 'react'

// import components 🗄️
import Header from './components/Header';
import Home from './components/Home';
import Games from './components/Games';
import Infographics from './components/Infographics';
import ContactForm from './components/ContactForm';
import ThankYou from './components/ThankYou';

// import css 🎨
import './styles/App.css';

function App() {
  const [contact, setContact] = useState("");
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header />
        <Routes>
          <Route 
          element={<Home />} 
          path="/" default
          />

          <Route 
          element={<ContactForm 
            contact={contact} 
            setContact={setContact} 
            />} 
          path="/ContactForm" 
          />

          <Route 
          element={<Games />} 
          path="/Games" 
          />

          <Route 
          element={<Infographics />} 
          path="/Infographics" 
          />

          <Route 
          element={<ThankYou 
            contact={contact}
          />} 
          path="/ThankYou"
          />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
