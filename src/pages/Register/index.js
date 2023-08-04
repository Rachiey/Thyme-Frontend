import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './register.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [isRegistered, setIsRegistered] = useState(false); // State to track registration status
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save registration data to local storage (You can add any validation or data processing here)

    // Check password boundaries before registration
    if (!isPasswordValid(formData.password)) {
      alert('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.');
      return;
    }

    localStorage.setItem('username', formData.username);
    localStorage.setItem('password', formData.password);

    // Update state to indicate successful registration
    setIsRegistered(true);

    // Log in the user immediately after successful registration
    localStorage.setItem('isLoggedIn', 'true');

    // Redirect the user to the home page or any other desired page after registration
    navigate('/');
  };

  // Password validation function
  const isPasswordValid = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
  };

  return (

    <form onSubmit={handleSubmit}>
        <div className="door">
        <div className="backLogin">
      <div>
        <h1>Register</h1>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
      </div>
      <div className="buttonMenu">
      <button type="submit" className= "logOutButton" ><span style= {{color: "#FFAF68"}}> R</span>
                                            <span style= {{color: "#F6E683"}}> e</span>
                                            <span style= {{color: "#A484E9"}}> g</span>
                                            <span style= {{color: "#31BFF3"}}> i</span>
                                            <span style= {{color: "#79D45E"}}> s</span>
                                            <span style= {{color: "#A484E9"}}> t</span>
                                            <span style= {{color: "#31BFF3"}}> e</span>
                                            <span style= {{color: "#79D45E"}}> r</span></button>
      <button className= "logOutButton" ><Link to="/login"><span style= {{color: "#FFAF68"}}> L</span>
                                            <span style= {{color: "#F6E683"}}> o</span>
                                            <span style= {{color: "#A484E9"}}> g</span>
                                            &nbsp; 
                                            <span style= {{color: "#31BFF3"}}> I</span>
                                            <span style= {{color: "#79D45E"}}> n</span></Link></button>
      </div>


      {/* Display success message if user is registered */}
      {isRegistered && <div>User registered successfully!</div>}
      </div>
    </div>
    </form>
   
  );
};

export default RegistrationForm;
