
import logo from '../assets/logo.png';
import { useState } from 'react';
function Header (){
  const [btnName, setBtnName] = useState('Login')
  return(
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="App-logo" />
      </div>
      <div className="nav-container">
        <ul className="nav-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <button onClick={()=>{
            btnName === 'Login' ? setBtnName("Logout") : setBtnName("Login")
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  )
}

export default Header;