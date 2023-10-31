import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './loginForm.css';
import * as urls from '../../Urls';

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');
  const [loading, setLoading] = useState(true);

  const checkTokenInLocalStorage = () => {
    return localStorage.getItem('token');
  };

 
  useEffect(() => {
    const tokenInLocalStorage = checkTokenInLocalStorage();

    if (tokenInLocalStorage) {
      window.location.replace(`${urls.origin}/`);
    } else {
      setLoading(false);
    }
  }, [checkTokenInLocalStorage()]);

  const onSubmit = e => {
    e.preventDefault();
    let firstCap = username.charAt(0).toUpperCase() + username.slice(1);
    const user = {
      username: firstCap,
      password: password,
    };

    fetch(`${urls.api}teathyme/auth/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(data => {
        if (data.key) {
          localStorage.clear();
          localStorage.setItem('token', data.key);
          localStorage.setItem('userName', firstCap);

          // Redirect to the main page or dashboard
          navigate('/');
        } else {
          setUsername('');
          setPassword('');
          localStorage.clear();
          setErrors(true);
        }

        // Storing the token in local storage
localStorage.setItem('authToken', data.token);

// Checking if the token exists
const authToken = localStorage.getItem('authToken');
if (authToken) {
  console.log('Token found in local storage:', authToken);
}
      });
  };

  return (
    <div>
       <div className="door">
        <div className="backLogin">
      <h1>Login Page</h1>
      {loading === false && <div style={{ display: 'flex', justifyContent: 'center', fontSize: '20px', color: 'white', margin: '10px' }}>Login</div>}
      {errors === true && <h2 style={{ textAlign: 'center', color: 'white' }}>Username/Password does not exist.</h2>}
      {/* {loading === false && (
        <div style={{ display: 'flex', justifyContent: 'center', fontSize: '20px', color: 'white' }}> */}
{/* NEED TO INTEGRATE ABOVE CODE!!!!! */}

      <form onSubmit={onSubmit}>
        <label>
          Username:
          <input type="text" value={username} autoComplete="current-username" onChange={e => setUsername(e.target.value)}/>
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} autoComplete="current-password"  onChange={e => setPassword(e.target.value)} />
        </label>
        <br />
        <div className="buttonMenu">
        <button className= "logOutButton" type="submit" ><span style= {{color: "#FFAF68"}}> L</span>
                                            <span style= {{color: "#F6E683"}}> o</span>
                                            <span style= {{color: "#A484E9"}}> g</span>
                                            &nbsp; 
                                            <span style= {{color: "#31BFF3"}}> I</span>
                                            <span style= {{color: "#79D45E"}}> n</span>
                                            </button>
              {/* Add a link to the registration page */}
      <button className= "logOutButton" ><Link to="/register"><span style= {{color: "#FFAF68"}}> R</span>
                                            <span style= {{color: "#F6E683"}}> e</span>
                                            <span style= {{color: "#A484E9"}}> g</span>
                                            <span style= {{color: "#31BFF3"}}> i</span>
                                            <span style= {{color: "#79D45E"}}> s</span>
                                            <span style= {{color: "#A484E9"}}> t</span>
                                            <span style= {{color: "#31BFF3"}}> e</span>
                                            <span style= {{color: "#79D45E"}}> r</span></Link></button>
      </div>


      </form>
    </div>
    </div>
    </div>
  );
};

export default LoginForm;