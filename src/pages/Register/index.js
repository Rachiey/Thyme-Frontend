import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as urls from '../../Urls';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [type1, setType1] = useState('password');
  const [type2, setType2] = useState('password');
  const [icon1, setIcon1] = useState(eyeOff);
  const [icon2, setIcon2] = useState(eyeOff);
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      if (localStorage.getItem('token') !== null) {
        // Redirect only if the user is already authenticated and not on the registration page
        if (window.location.pathname !== '/register') {
          window.location.replace(`${urls.origin}/`);
        }
      } else {
        setLoading(false);
      }
    }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      username: username,
      password1: password1,
      password2: password2,
      email: email,
    };

    fetch(`${urls.api}users/auth/register/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        if (res.ok) {
          window.location.replace(`${urls.origin}/login`);
          return res.json();
        } else {
          throw new Error('Registration failed.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setErrors(true);
      });
  };

  const togglePasswordVisibility = (field) => {
    if (field === 'password1') {
      setType1(type1 === 'password' ? 'text' : 'password');
      setIcon1(type1 === 'password' ? eye : eyeOff);
    } else if (field === 'password2') {
      setType2(type2 === 'password' ? 'text' : 'password');
      setIcon2(type2 === 'password' ? eye : eyeOff);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="door">
        <div className="backLogin">
          <div>
            <h1>Register</h1>
            {loading === false && (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontSize: '20px',
                  color: 'white',
                  margin: '10px',
                }}
              >
                Sign Up
              </div>
            )}
            {errors === true && (
              <h2 style={{ textAlign: 'center', color: 'white' }}>
                Oops! You cannot signup with provided credentials.
              </h2>
            )}
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password1">Password:</label> <br />
            <input
              id="password1"
              name="password1"
              type={type1}
              value={password1}
              placeholder="Enter password"
              style={{ color: 'black' }}
              onChange={(e) => setPassword1(e.target.value)}
              required
              autoComplete="on"
              minLength="8"
            />{' '}
            <span
              className="flex justify-around items-center"
              onClick={() => togglePasswordVisibility('password1')}
            >
              <Icon className="absolute mr-10" icon={icon1} size={25} />
            </span>
            <br />
            <label htmlFor="password2">Confirm password:</label> <br />
            <input
              id="password2"
              name="password2"
              type={type2}
              value={password2}
              placeholder="Re-enter password"
              style={{ color: 'black' }}
              onChange={(e) => setPassword2(e.target.value)}
              required
              autoComplete="on"
            />{' '}
            <span
              className="flex justify-around items-center"
              onClick={() => togglePasswordVisibility('password2')}
            >
              <Icon className="absolute mr-10" icon={icon2} size={25} />
            </span>
            <br />
          </div>
          <div className="buttonMenu">
            <button type="submit" className="logOutButton">
              <span style={{ color: '#FFAF68' }}> R</span>
              <span style={{ color: '#F6E683' }}> e</span>
              <span style={{ color: '#A484E9' }}> g</span>
              <span style={{ color: '#31BFF3' }}> i</span>
              <span style={{ color: '#79D45E' }}> s</span>
              <span style={{ color: '#A484E9' }}> t</span>
              <span style={{ color: '#31BFF3' }}> e</span>
              <span style={{ color: '#79D45E' }}> r</span>
            </button>
            <button className="logOutButton">
              <Link to="/login">
                <span style={{ color: '#FFAF68' }}> L</span>
                <span style={{ color: '#F6E683' }}> o</span>
                <span style={{ color: '#A484E9' }}> g</span>
                &nbsp;
                <span style={{ color: '#31BFF3' }}> I</span>
                <span style={{ color: '#79D45E' }}> n</span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default RegistrationForm;
