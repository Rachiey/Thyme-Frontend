import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import PasswordStrength from '../../components/PasswordStrength/PasswordStrength'
import './register.css';
import { Link } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate();

    const [ username, setUsername ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ password2, setPassword2 ] = useState("")

    const handleUsername = (e) => setUsername(e.target.value)
    const handleEmail = (e) => setEmail(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)
    const handlePassword2 = (e) => setPassword2(e.target.value)

    const newUser = async () => {
        if (password !== password2){
            return alert("Passwords do not match")
        }

        const data = {
            "username": username,
            "email": email,
            "password": password,
        }

        const result = await axios.post('http://localhost:3000/users/register/', data)
        console.log(result)

        if (result.status !== 201) {
            alert('Server Error: failed to register user')
        }
    
        const result2 = await axios.post('http://localhost:3000/users/login/', {"username": username, "password": password})
        console.log(result2)

        sessionStorage.setItem('accessToken', result2.data.access)
        sessionStorage.setItem('refreshToken', result2.data.refresh)
        sessionStorage.setItem('username', username)

        if (result2.status === 200) {navigate('/login')
        } else { alert('Server Error: failed to login') }

    }

    return (

        <div className="doorBack"> 
        <div className="thymeLogo">Logo Here</div>
       <div className="registerTitle">Register</div>
            <form className="registerForm">
                <label className="registrationLabel">Username</label>
                <input className="registrationtextInputField" onChange={handleUsername}></input><br/>
                <label className="registrationLabel" >Email</label>
                <input className="registrationtextInputField" onChange={handleEmail}></input><br/>
                <label className="registrationLabel" >Password</label>
                <input className="registrationtextInputField" type="password" onChange={handlePassword}></input><br/>
                <label className="registrationLabel" >Confirm Password</label>
                <input className="registrationtextInputField" type="password" onChange={handlePassword2}></input><br/>

                <div className="passwordStrength"><PasswordStrength password={password}/><br/></div>

                <button className="registrationButton" onClick={newUser}>Register</button>
                <Link to="/login"><button className="loginButton">Login</button></Link>
            </form>
        </div>

    )
}

export default Register