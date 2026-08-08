
import logo from '../assets/logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header (){
  const [btnName, setBtnName] = useState('Login')
  return(
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="App-logo" />
      </div>
      <div className="nav-container">
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <button onClick={()=>{
            btnName === 'Login' ? setBtnName("Logout") : setBtnName("Login")
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  )
}

export default Header;