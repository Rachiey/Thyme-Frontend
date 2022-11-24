import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'

const Login = () => {

    const navigate = useNavigate();

    const [ username, setUsername ] = useState("")
    const [ password, setpassword ] = useState("")

    const handleUsername = (e) => setUsername(e.target.value)
    const handlePassword = (e) => setpassword(e.target.value)

    const handleLogin = async () => {
        const data = {
            "username": username,
            "password": password,
        }

        const result = await axios.post('http://localhost:3000/users/login/', data)
        console.log(result)

        sessionStorage.setItem('accessToken', result.data.access)
        sessionStorage.setItem('refreshToken', result.data.refresh)
        sessionStorage.setItem('username', username)

        if (result.status === 200) {
            navigate('/')
            window.location.reload()
        } else { alert('Server Error: Failed to login') }
    }

    const handleRegister = () => {
        navigate('/register')
    }

    

    return (
        <div>
            <h1>Login Page</h1>
            <form>
               <label>Username:</label>
               <input onChange={handleUsername}></input><br></br>
               <label>Password:</label>
               <input type="password" onChange={handlePassword}></input><br></br>
               <button onClick={handleLogin}>Login</button> 
            </form>
            <div>
                <h2>Register here</h2>
                <button onClick={handleRegister}>Register</button>
            </div>
        </div>
    )
}

export default Login
