import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as urls from '../../Urls';


const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      window.location.replace(`${urls.origin}/`);
    } else {
      setLoading(false);
    }
  }, []);

  const onSubmit = e => {
    e.preventDefault();
  
    const user = {
      username: username,
      password1: password1,
      password2: password2
    };
  
    fetch(`${urls.api}teathyme/auth/register/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => {
        if (res.ok) {
          window.location.replace(`${urls.origin}/login`);
          return res.json(); // Add 'return' here
        } else {
          throw new Error('Registration failed.'); // Handle the error case
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setErrors(true); // Set errors to true to display the error message to the user
      });
  }

  return (

    <form onSubmit={onSubmit}>
        <div className="door">
        <div className="backLogin">
      <div>
        <h1>Register</h1>
        {loading === false && <div style={{ display: 'flex', justifyContent: 'center', fontSize: '20px', color: 'white', margin: '10px' }}>Sign Up</div>}
      {errors === true && <h2 style={{ textAlign: 'center', color: 'white' }}>Oops! You cannot signup with provided credentials.</h2>}
      {/* <div style={{ display: 'flex', justifyContent: 'center', fontSize: '20px', color: 'white' }}> */}
        <label>
          Username:
          <input type="text" name="username"  value={username}  onChange={e => setUsername(e.target.value)}/>
        </label>
      </div>
      <div>
      <label htmlFor='password1'>Password:</label> <br />
          <input
            name='password1'
            type='password'
            value={password1}
            placeholder={'Enter password'}
            style={{ color: 'black' }}
            onChange={e => setPassword1(e.target.value)}
            required
            autoComplete="on"
            minLength='8'
          />{' '}
          <br />
          <label htmlFor='password2'>Confirm password:</label> <br />
          <input
            name='password2'
            type='password'
            value={password2}
            placeholder={'Re-enter password'}
            style={{ color: 'black' }}
            onChange={e => setPassword2(e.target.value)}
            required
            autoComplete="on"
          />{' '}
          <br />
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


      {/* Display success message if user is registered
      {isRegistered && <div>User registered successfully!</div>} */}
      </div>
    </div>
    </form>
   
  );
};

export default RegistrationForm;
