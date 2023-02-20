import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import fridgemagnet from './images/fridgemagnet.png';
import fridgemagnets from './images/fridgemagnets.png';
import note from './images/note.png';
import fridgehandle from './images/fridgehandle.png';
import profilepic from './images/profilepic.png';



export const Home = () => {

    return (
        <div className="homePage">
    <div className="iphoneContainer"> 
    <div className="iphoneBackground"> 
    <div className="fridgeTitle"> Username's  &nbsp; <span style= {{color: "red"}}> F</span>
                                            <span style= {{color: "#FDDA0D"}}> r</span>
                                            <span style= {{color: "blue"}}> i</span>
                                            <span style= {{color: "#F28C28"}}> d</span>
                                            <span style= {{color: "#32CD32"}}> g</span>
                                            <span style= {{color: "#720e9e"}}> e</span>
                                            </div>
    <div className ="logOutBox">
    <Link to="/logout"><div className="logOutButton">  <span style= {{color: "red"}}> L</span>
                                            <span style= {{color: "#FDDA0D"}}> o</span>
                                            <span style= {{color: "blue"}}> g</span>
                                            &nbsp; 
                                            <span style= {{color: "#F28C28"}}> O</span>
                                            <span style= {{color: "#32CD32"}}> u</span>
                                            <span style= {{color: "#720e9e"}}> t</span></div> </Link>
    </div>
    <div className="fridgeRow">
    <div className="fridgeMagnet" ><img src={fridgemagnet} alt="fridge magnet" style={{height: "110px", marginRight:"75px"}}/></div>
    <div className="profilePic">  <Link to="/profile"><img src={profilepic} alt="polaroid photos" style={{height: "150px"}}/> </Link></div>
    </div>
    <div className="profilePicButton"> <Link to="/profile" style={{ color: 'inherit', textDecoration: 'inherit'}}>Profile </Link></div>
    <div className="fridgeRow2">
    <div className="note"> <img src={note} alt="post it note" style={{height: "220px"}}/>  
        <div className="recipeTextButton"> <Link to="/recipes" style={{ color: 'inherit', textDecoration: 'inherit'}}>Recipes </Link></div>
    </div>
   
    <div className="fridgeHandle" > <img src={fridgehandle} alt="fridge handle" style={{height: "200px"}} /> </div>
    </div>
   <div className="fridgeMagnets"> <Link to="/ingredients"> <img src={fridgemagnets} alt="fruit fridge magnets" style={{height: "200px"}} /> </Link> </div>
   <div className="fridgeMagnetsButton"> <Link to="/ingredients" style={{ color: 'inherit', textDecoration: 'inherit'}}>Ingredients </Link></div>
   </div>
    </div>
        </div>
    )
    }


export default Home;