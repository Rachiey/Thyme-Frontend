// import React, { useState } from 'react'

// function LoginForm({ Login, error }) {

//     const [details, setDetails] = useState({username: "", email: "", password: ""});
    
//     const submitHandler = e => {
//         e.preventDefault();

//         Login(details);
//     }

//   return (
//     <form onSubmit={submitHandler}>
//         <div className="form-inner">
//             <div className="logInTitle">
//         <span style= {{color: "#FFAF68"}}> L</span>
//                                             <span style= {{color: "#F6E683"}}> o</span>
//                                             <span style= {{color: "#A484E9"}}> g</span>
//                                             &nbsp; 
//                                             <span style= {{color: "#31BFF3"}}> I</span>
//                                             <span style= {{color: "#79D45E"}}> n</span>
//                                             </div>
//             ERROR!
//             <div className='username'>
//                 <label className='usernameTitle' htmlFor="username">Username:</label>
//                 <input type="text" username="username" id="username" onChange={e => setDetails({...details, username: e.target.value})} value={details.username}/>
//             </div>
//             <div className='email'>
//                 <label className='emailTitle' htmlFor="email">Email:</label>
//                 <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
//             </div>
//             <div className='password'>
//                 <label className= 'passwordTitle' htmlFor="password">Password:</label>
//                 <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
//             </div>
//             <input className='logInButton' type="submit" value="Login" />
//         </div>
//     </form>
//   )
// }

// export default LoginForm

import React, { Component } from 'react';


class LoginForm extends Component {

    state = {
        username: "",
        password: ""
    }

    handleInput = e => this.setState({ [e.target.name]: e.target.value });

    formIncomplete = () => Object.values(this.state).some(v => !v);

    login = e => {
        e.preventDefault();
        this.props.login(this.state);
    }

    render() {
        return (
            <div id="content">
                <h2>Login</h2>
                <form onSubmit={this.login}>
                    <div className="loginInput">
                        <label htmlFor="username">Enter your username</label>
                        <input type="text" name="username" value={this.state.username} onChange={this.handleInput} />
                    </div>
                    <div className="loginInput">
                        <label htmlFor="password">Enter your password</label>
                        <input type="password" name="password" value={this.state.password} onChange={this.handleInput} />
                    </div>
                    <div className="loginInput">
                        <input type="submit" className={this.formIncomplete() ? 'disabled' : 'enabled'} disabled={this.formIncomplete()} value="Login" />
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginForm;