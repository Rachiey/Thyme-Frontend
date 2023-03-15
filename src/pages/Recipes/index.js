import React, { useState } from 'react';
import './recipes.css';
import 'semantic-ui-css/semantic.min.css'
import { useNavigate } from 'react-router'

export const Recipes = () => {

    const [user, setUser] = useState({username: "", email: ""});
    const username = localStorage.getItem("username")
    const navigate = useNavigate();
    
    const LoggedOut = () => {
        console.log("Log out")
        console.log(user)
        setUser({ username: "", email: ""});
        navigate('/logout')
    }
    
    return (

        <>
<div className="door-back">  
<div className="fridgeTitleBack"> {username}'s  &nbsp; <span style= {{color: "#31BFF3"}}> F</span>
                                            <span style= {{color: "#A484E9"}}> r</span>
                                            <span style= {{color: "#F4889A"}}> i</span>
                                            <span style= {{color: "#FFAF68"}}> d</span>
                                            <span style= {{color: "#F6E683"}}> g</span>
                                            <span style= {{color: "#79D45E"}}> e</span>
                                            </div>
                                            <div className ="logOutBox">
    <button className="logOutButton" onClick={LoggedOut}> <span style= {{color: "#FFAF68"}}> L</span>
                                            <span style= {{color: "#F6E683"}}> o</span>
                                            <span style= {{color: "#A484E9"}}> g</span>
                                            &nbsp; 
                                            <span style= {{color: "#31BFF3"}}> O</span>
                                            <span style= {{color: "#79D45E"}}> u</span>
                                            <span style= {{color: "#F4889A"}}> t</span> </button>
    </div>
<div className="recipesTitle"> Recipes </div>
   <div> <a href="/ingredients"><div className="fridgeShelves"><div className="shelfOne"> </div>
    <div className="shelfTwo"> </div>
    <div className="bottomNavBar"> </div> 
 
    </div></a>
   </div>
    </div>

        </>
    
   ) }


export default Recipes;