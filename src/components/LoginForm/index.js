import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './loginForm.css';
import * as urls from '../../Urls';
import thymesuplogo from '../../pages/Home/images/thymesup.png';
import fridgehandle from '../../pages/Home/images/fridgehandle.png';

const LoginForm = () => {
  // const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    const firstCap = username.charAt(0).toUpperCase() + username.slice(1);
    const user = {
      username: firstCap,
      password: password,
    };

    console.log('User object before sending:', user); 

    try {
      const response = await fetch(`${urls.api}users/auth/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      console.log('Before checking response.ok');

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.key);
        localStorage.setItem('userName', firstCap);
        localStorage.setItem('isLoggedIn', 'true');
      
        console.log('success');

        // navigate('/');
        window.location.replace(`${urls.origin}/`);
        console.log('navigate');
      } else {
        setError('Username/Password does not exist.');
        setUsername('');
        setPassword('');
        localStorage.clear();
      }
    } catch (error) {
      console.error('Login failed:', error);
      setError('An error occurred during login.');
    }
  };

  return (
    <div>
      <div className="door">
        <div className="backLogin">
        <div className="logo">
              <img src={thymesuplogo} alt="thyme's up logo" style={{ height: '180px'}} />
            
            </div>
            <div className="fridgeLogInHandle">
              {' '}
              <img src={fridgehandle} alt="fridge handle" style={{ height: '200px' }} />{' '}
            </div>
          <h1 className="loginTitle">Login Page</h1>
          {error && <h2 style={{ textAlign: 'center', color: 'white' }}>{error}</h2>}
          <form className="loginForm"onSubmit={onSubmit}>
           
              <input className="loginInput"type="text" value={username} autoComplete="current-username" onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username" />
       
            <br />
          
              <input className="loginInput"type="password" value={password} autoComplete="current-password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
           
            <br />
            <div className="buttonMenu">
              <button className="logOutButton" type="submit">
                <span style={{ color: "#FFAF68" }}> L</span>
                <span style={{ color: "#F6E683" }}> o</span>
                <span style={{ color: "#A484E9" }}> g</span>
                &nbsp;
                <span style={{ color: "#31BFF3" }}> I</span>
                <span style={{ color: "#79D45E" }}> n</span>
              </button>
              <button className="logOutButton">
                <Link to="/register">
                  <span style={{ color: "#FFAF68" }}> R</span>
                  <span style={{ color: "#F6E683" }}> e</span>
                  <span style={{ color: "#A484E9" }}> g</span>
                  <span style={{ color: "#31BFF3" }}> i</span>
                  <span style={{ color: "#79D45E" }}> s</span>
                  <span style={{ color: "#A484E9" }}> t</span>
                  <span style={{ color: "#31BFF3" }}> e</span>
                  <span style={{ color: "#79D45E" }}> r</span>
                </Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
