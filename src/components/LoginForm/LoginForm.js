import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    const validUsername = 'admin1';
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
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;