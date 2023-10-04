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
      localStorage.setItem('username', username);
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
       <div className="door">
        <div className="backLogin">
      <h1>Login Page</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} autoComplete="current-username" onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} autoComplete="current-password" onChange={handlePasswordChange} />
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