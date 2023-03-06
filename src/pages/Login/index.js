import React, { useState } from 'react'
import { useNavigate } from 'react-router'
// import axios from 'axios'
import LoginForm from '../../components/LoginForm/LoginForm'



const adminUser = {
    username: "admin1",
    email: "admin@admin.com",
    passsword: "test1"
}


const Login = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState({username: "", email: ""});
    const [error, setError] = useState("");

    const Logged = details => {
        console.log(details);
    
        if (details.email === adminUser.email && details.password === adminUser.passsword) {
            console.log("Logged in")
            setUser({
                username: details.username,
                email: details.email
            })
            localStorage.setItem("username", details.username)
            localStorage.setItem("email", details.email)
            console.log(localStorage)
        } else {
            console.log("Details do not match")
        }
    
    
    }
    
    

    return (<div>
        {(user.email !== "") ? (
            navigate('/fridge')
        ) : (
            <LoginForm Login={Logged} error={error} />
        )}
        </div>
    )
}

export default Login
