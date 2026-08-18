
import logo from '../assets/logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

function Header (){
  const [btnName, setBtnName] = useState('Login')
  const onlineStatus = useOnlineStatus();
  return(
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="App-logo" />
      </div>
      <div className="nav-container">
        <ul className="nav-list">
          <li>Status : {onlineStatus ? "🟢" : "🔴"} </li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <button onClick={()=>{
            btnName === 'Login' ? setBtnName("Logout") : setBtnName("Login")
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  )
}

export default Header;