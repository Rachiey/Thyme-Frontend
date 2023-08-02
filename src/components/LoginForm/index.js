import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './loginForm.css';

const LoginForm = () => {
    const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Assuming there is a predefined valid username and password
    const validUsername = 'admin';
    const validPassword = 'password';
  
    if (username === validUsername && password === validPassword) {
      // Save the login status to local storage
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/');
      // Redirect to the desired page (e.g., dashboard or home page)
      // Use React Router or any other method to handle page navigation
      // For example: history.push('/dashboard');
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };
  

  return (
    <div>
      <h1>Login Page</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} autoComplete="on" onChange={handlePasswordChange} />
        </label>
        <br />
        <div className="buttonMenu">
        <button className= "logOutButton" type="submit" >Login</button>
              {/* Add a link to the registration page */}
      <button className= "logOutButton" ><Link to="/register">Register</Link></button>
      </div>


      </form>
    </div>
  );
};

export default LoginForm;