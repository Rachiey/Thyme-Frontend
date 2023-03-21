import React, { useState } from 'react';
import './home.css';
import { Link } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import profilepic from '../Home/images/profilepic.png';
import fridgemagnet from '../Home/images/fridgemagnet.png';
import fridgemagnets from '../Home/images/fridgemagnets.png';
import note from '../Home/images/note.png';
import fridgehandle from '../Home/images/fridgehandle.png';
import { useNavigate } from 'react-router'

export const Fridge = () => {

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
    <div className="door">
        <div className="door-front">
        <div className="fridgeTitle"> {username}'s  &nbsp; <span style= {{color: "#31BFF3"}}> F</span>
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
    <div className="fridgeRow">
    <div className="fridgeHandle" > <img src={fridgehandle} alt="fridge handle" style={{height: "200px"}} /> </div>
    <div className="fridgeMagnet" ><img src={fridgemagnet} alt="fridge magnet" style={{height: "150px", marginRight:"150px"}}/></div>
   
  </div>
  
  

   <div className="fridgeMagnets"> <Link to="/ingredients"> <img src={fridgemagnets} alt="fruit fridge magnets" style={{height: "100px"}} /> </Link> </div>

  </div>
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
<div className="ingredientsTitle"> Ingredients </div>
   <div> <a href="/ingredients"><div className="fridgeShelves"><div className="shelfOne"> <div className="carrot"> <img style ={{objectFit: 'fill'}} src = {require('../Ingredients/images/carrot.png')} alt="carrot" /> </div>
                                <div className="cheese"> <img style ={{objectFit: 'fill'}} src = {require('../Ingredients/images/cheese.png')} alt="cheese"  /></div> 
                                <div className="milk"> <img style ={{objectFit: 'fill'}}  src = {require('../Ingredients/images/milk.png')} alt="milk" /></div> </div>
    <div className="shelfTwo"><div className="broccoli"> <img style ={{objectFit: 'fill'}} src = {require('../Ingredients/images/broccoli.png')} alt="carrot" /> </div>
        <div className="orangeJuice"> <img style ={{objectFit: 'fill'}} src = {require('../Ingredients/images/orange juice.png')} alt="cheese"  /></div> 
        <div className="tomato"> <img style ={{objectFit: 'fill'}}  src = {require('../Ingredients/images/tomato.png')} alt="milk" /></div> </div>
    </div></a>
    <div className='bottomFridge'>
        <div className="note"> <img className="notePic" src={note} alt="post it note" />  
        <div className="noteWriting">
        <div className="recipeEggs"> <Link to="/recipes" style={{ color: 'inherit', textDecoration: 'inherit'}}>Eggs </Link></div>
        <div className="recipeMilk"> <Link to="/recipes" style={{ color: 'inherit', textDecoration: 'inherit'}}>Milk </Link></div>
        <div className="recipeTextButton"> <Link to="/recipes" style={{ color: 'inherit', textDecoration: 'inherit'}}>Recipes </Link></div>
        </div>
    </div>

    <div className="profilePic">  <Link to="/profile"><img src={profilepic} alt="polaroid photos" style={{height: "150px"}}/> </Link>
    <div className="profilePicButton"> <Link to="/profile" style={{ color: 'inherit', textDecoration: 'inherit'}}>Profile </Link></div></div></div></div>
    </div></div>

        </>
    
   ) }


export default Fridge;