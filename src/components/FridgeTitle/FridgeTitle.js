import React, {useState} from 'react';
import { useNavigate } from 'react-router';

import './style.scss';

const FridgeTitle = () => {
  const [username, setUsername] = useState(localStorage.getItem('username'));
  const navigate = useNavigate();

  const handleLogout = () => {
    // Reset the local storage session and navigate to the login page
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    setUsername(null); // Clear the username state
    navigate('/login');
  };


  return (
    <div className="fridgeTitleBack">
      {username}'s&nbsp;
      <span style={{ color: '#9023d9' }}> F</span>
            <span style={{ color: '#ffe524' }}> r</span>
            <span style={{ color: '#ff0808' }}> i</span>
            <span style={{ color: '#0aa614' }}> d</span>
            <span style={{ color: '#9023d9' }}> g</span>
            <span style={{ color: '#ff0808' }}> e</span>
<div class="logOutBox">
      <button className="logOutButton" onClick={handleLogout}>
        <span style={{ color: '#FFAF68' }}> L</span>
        <span style={{ color: '#F6E683' }}> o</span>
        <span style={{ color: '#A484E9' }}> g</span>
        &nbsp;
        <span style={{ color: '#31BFF3' }}> O</span>
        <span style={{ color: '#79D45E' }}> u</span>
        <span style={{ color: '#F4889A' }}> t</span>
      </button>
      </div>
    </div>

  );
};

export default FridgeTitle;
