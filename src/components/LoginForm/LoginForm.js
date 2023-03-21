import React, { useState } from 'react'

function LoginForm({ Login, error }) {

    const [details, setDetails] = useState({username: "", email: "", password: ""});
    
    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

  return (
    <form onSubmit={submitHandler}>
        <div className="form-inner">
            <div className="logInTitle">
        <span style= {{color: "#FFAF68"}}> L</span>
                                            <span style= {{color: "#F6E683"}}> o</span>
                                            <span style= {{color: "#A484E9"}}> g</span>
                                            &nbsp; 
                                            <span style= {{color: "#31BFF3"}}> I</span>
                                            <span style= {{color: "#79D45E"}}> n</span>
                                            </div>
            {/* ERROR! */}
            <div className='username'>
                <label className='usernameTitle' htmlFor="username">Username:</label>
                <input type="text" username="username" id="username" onChange={e => setDetails({...details, username: e.target.value})} value={details.username}/>
            </div>
            <div className='email'>
                <label className='emailTitle' htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
            </div>
            <div className='password'>
                <label className= 'passwordTitle' htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
            </div>
            <input className='logInButton' type="submit" value="Login" />
        </div>
    </form>
  )
}

export default LoginForm