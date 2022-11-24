import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import PasswordStrength from '../../components/PasswordStrength/PasswordStrength'

const Register = () => {
    const navigate = useNavigate();

    const [ username, setUsername ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ password2, setPassword2 ] = useState("")
    const [ firstName, setFirstName ] = useState("")
    const [ lastName, setLastName ] = useState("")

    const handleUsername = (e) => setUsername(e.target.value)
    const handleEmail = (e) => setEmail(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)
    const handlePassword2 = (e) => setPassword2(e.target.value)
    const handleFirstName = (e) => setFirstName(e.target.value)
    const handleLastName = (e) => setLastName(e.target.value)

    const newUser = async () => {
        if (password !== password2){
            return alert("Passwords do not match")
        }

        const data = {
            "username": username,
            "email": email,
            "password": password,
            "first_name": firstName,
            "last_name": lastName
        }

        const result = await axios.post('http://localhost:3000/users/register/', data)
        console.log(result)

        if (result.status !== 201) {
            alert('Server Error: failed to register user')
        }
    
        const result2 = await axios.post('http://localhost:8000/users/login/', {"username": username, "password": password})
        console.log(result2)

        sessionStorage.setItem('accessToken', result2.data.access)
        sessionStorage.setItem('refreshToken', result2.data.refresh)
        sessionStorage.setItem('username', username)

        if (result2.status === 200) {navigate('/')
        } else { alert('Server Error: failed to login') }

    }

    return (
        <div>
            <form>
                <label>Username:</label>
                <input onChange={handleUsername}></input><br></br>
                <label>First name:</label>
                <input onChange={handleFirstName}></input><br></br>
                <label>Last name:</label>
                <input onChange={handleLastName}></input><br></br>
                <label>Email:</label>
                <input onChange={handleEmail}></input><br></br>
                <label>Password:</label>
                <input type="password" onChange={handlePassword}></input><br></br>
                <label>Confirm Password</label>
                <input type="password" onChange={handlePassword2}></input><br></br>

                <PasswordStrength password={password} />

                <button onClick={newUser}>Register</button>
            </form>
        </div>
    )
}

export default Register