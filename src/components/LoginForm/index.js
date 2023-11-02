import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './loginForm.css';
import * as urls from '../../Urls';

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
          <h1>Login Page</h1>
          {error && <h2 style={{ textAlign: 'center', color: 'white' }}>{error}</h2>}
          <form onSubmit={onSubmit}>
            <label>
              Username:
              <input type="text" value={username} autoComplete="current-username" onChange={(e) => setUsername(e.target.value)} />
            </label>
            <br />
            <label>
              Password:
              <input type="password" value={password} autoComplete="current-password" onChange={(e) => setPassword(e.target.value)} />
            </label>
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
