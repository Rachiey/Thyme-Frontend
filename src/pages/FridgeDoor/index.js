import React from 'react';
import './fridge.css';
import { Link } from 'react-router-dom'
// import 'semantic-ui-css/semantic.min.css'
// import fridgemagnet from './images/fridgemagnet.png';
// import fridgemagnets from './images/fridgemagnets.png';
// import note from './images/note.png';
import fridgehandle from '../Home/images/fridgehandle.png';
// import profilepic from './images/profilepic.png';




export const Fridge = () => {

    return (
        <>
        <div className="door">
  <div className="door-front">
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
  <div className="fridgeHandle" > <img src={fridgehandle} alt="fridge handle" style={{height: "150px"}} /> </div>
  </div>
<div className="door-back">  <div className="ingredientsTitle"> Ingredients<a href="/ingredients">
      <span className="link"></span>
   </a>  <div className="fridgeShelves"><div className="shelfOne"> <div className="carrot"> <img style ={{objectFit: 'fill'}} src = {require('../Ingredients/images/carrot.png')} alt="carrot" /> </div>
                                <div className="cheese"> <img style ={{objectFit: 'fill'}} src = {require('../Ingredients/images/cheese.png')} alt="cheese"  /></div> 
                                <div className="milk"> <img style ={{objectFit: 'fill'}}  src = {require('../Ingredients/images/milk.png')} alt="milk" /></div> </div>
    <div className="shelfTwo"><div className="broccoli"> <img style ={{objectFit: 'fill'}} src = {require('../Ingredients/images/broccoli.png')} alt="carrot" /> </div>
                                <div className="orangeJuice"> <img style ={{objectFit: 'fill'}} src = {require('../Ingredients/images/orange juice.png')} alt="cheese"  /></div> 
                                <div className="tomato"> <img style ={{objectFit: 'fill'}}  src = {require('../Ingredients/images/tomato.png')} alt="milk" /></div> </div>
    <div className="shelfThree"></div>
    <div className="shelfFour"> </div></div></div></div>
</div>
{/* 
<div className="iphoneContainer"> 
    <div className="iphoneIngredientsBackground"> 
    <div className="fridgeTitle"> _____'s  &nbsp; <span style= {{color: "red"}}> F</span>
                                            <span style= {{color: "#FDDA0D"}}> r</span>
                                            <span style= {{color: "blue"}}> i</span>
                                            <span style= {{color: "#F28C28"}}> d</span>
                                            <span style= {{color: "#32CD32"}}> g</span>
                                            <span style= {{color: "#720e9e"}}> e</span>
                                            </div>
  
    <div className="shelfOne"> <div className="carrot"> <img style ={{objectFit: 'fill'}} src = {require('../Ingredients/images/carrot.png')} alt="carrot" /> </div>
                                <div className="cheese"> <img style ={{objectFit: 'fill'}} src = {require('../Ingredients/images/cheese.png')} alt="cheese"  /></div> 
                                <div className="milk"> <img style ={{objectFit: 'fill'}}  src = {require('../Ingredients/images/milk.png')} alt="milk" /></div> </div>
    <div className="shelfTwo"><div className="broccoli"> <img style ={{objectFit: 'fill'}} src = {require('../Ingredients/images/broccoli.png')} alt="carrot" /> </div>
                                <div className="orangeJuice"> <img style ={{objectFit: 'fill'}} src = {require('../Ingredients/images/orange juice.png')} alt="cheese"  /></div> 
                                <div className="tomato"> <img style ={{objectFit: 'fill'}}  src = {require('../Ingredients/images/tomato.png')} alt="milk" /></div> </div>
    <div className="shelfThree"></div>
    <div className="shelfFour">
       
    </div>
   
    </div> */}
    
    {/* </div> */}
        </>
    )
    }


export default Fridge;