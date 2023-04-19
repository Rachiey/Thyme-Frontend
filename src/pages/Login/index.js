import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import './login.css';
import LoginForm from '../../components/LoginForm/LoginForm';
import fridgemagnet from '../Home/images/fridgemagnet.png';
import fridgemagnets from '../Home/images/fridgemagnets.png';
import fridgehandle from '../Home/images/fridgehandle.png';



const adminUser = {
    username: "admin1",
    // email: "admin@admin.com",
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
            setError('registerInput', { type: 'custom', message: 'custom message' });
        }
    
    
    }
    
    return (
        
        <>
        <div className="doorBack">  
        <div className="fridgeRow">
            <div className="fridgeHandle" > <img src={fridgehandle} alt="fridge handle" style={{height: "200px", marginTop: "110px"}} /> </div>
            <div className="fridgeMagnet" ><img src={fridgemagnet} alt="fridge magnet" style={{height: "150px", marginRight:"150px", marginTop: "80px"}}/></div>
           
          </div>
          
          
        
           <div className="fridgeMagnets">  <img src={fridgemagnets} alt="fruit fridge magnets" style={{height: "100px"}} /> </div>
        
                                                  
        <div className="logIn"> {(user.email !== "") ? ( navigate('/') ) : ( <LoginForm login={Logged} error={error} /> )}</div>
       
        
          </div>
        
              </>
    )
}

export default Login;
