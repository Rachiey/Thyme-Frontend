import React from 'react';
import './Ingredients.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse} from '@fortawesome/free-solid-svg-icons'
import { faBookOpen} from '@fortawesome/free-solid-svg-icons'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import 'semantic-ui-css/semantic.min.css'
import { Link } from 'react-router-dom'
// import { Button } from 'semantic-ui-react'
// import { HomeButton } from '../Button/button'

// import ReactTooltip from 'react-tooltip';
// import {useState} from 'react';
// import './Ingredients/fonts/AlphaFridgeMagnets.ttf';

//import { Link } from 'react-router-dom';





export const Ingredients = () => {
    // const [isHovering, setIsHovering] = useState(false);

    // const handleMouseOver = () => {
    //   setIsHovering(true);
    // };
  
    // const handleMouseOut = () => {
    //   setIsHovering(false);
    // };
    
  

return (
    <>
    
    <div className="iphoneContainer"> 
    <div className="iphoneBackground"> 
    <div className="fridgeTitle"> Username's  &nbsp; <span style= {{color: "red"}}> F</span>
                                            <span style= {{color: "#FDDA0D"}}> r</span>
                                            <span style= {{color: "blue"}}> i</span>
                                            <span style= {{color: "#F28C28"}}> d</span>
                                            <span style= {{color: "#32CD32"}}> g</span>
                                            <span style= {{color: "#720e9e"}}> e</span>
                                            </div>
    <Link to="/logout"><div className="logOutButton">  <span style= {{color: "red"}}> L</span>
                                            <span style= {{color: "#FDDA0D"}}> o</span>
                                            <span style= {{color: "blue"}}> g</span>
                                            &nbsp; 
                                            <span style= {{color: "#F28C28"}}> O</span>
                                            <span style= {{color: "#32CD32"}}> u</span>
                                            <span style= {{color: "#720e9e"}}> t</span></div> </Link>
    <div className="shelfOne"> <div className="carrot"> <img style ={{objectFit: 'fill'}} src = {require('./images/carrot.png')} alt="carrot" /> </div>
                                <div className="cheese"> <img style ={{objectFit: 'fill'}} src = {require('./images/cheese.png')} alt="cheese"  /></div> 
                                <div className="milk"> <img style ={{objectFit: 'fill'}}  src = {require('./images/milk.png')} alt="milk" /></div> </div>
    <div className="shelfTwo"><div className="broccoli"> <img style ={{objectFit: 'fill'}} src = {require('./images/broccoli.png')} alt="carrot" /> </div>
                                <div className="orangeJuice"> <img style ={{objectFit: 'fill'}} src = {require('./images/orange juice.png')} alt="cheese"  /></div> 
                                <div className="tomato"> <img style ={{objectFit: 'fill'}}  src = {require('./images/tomato.png')} alt="milk" /></div> </div>
    <div className="shelfThree"></div>
    <div className="shelfFour">
        <div className="addButton">+</div>
    </div>
    <div className="bottomMenu">
    <Link to="/home"> <div className="homeButton"> 
    < FontAwesomeIcon icon={faHouse} style= {{color:"white"}} />  </div> </Link>
    <Link to="/recipes"> <div className="recipeButton">  <FontAwesomeIcon icon={faBookOpen} style= {{color:"white"}} /></div> </Link>
    <Link to="/profile">  <div className="profileButton"> <FontAwesomeIcon icon={faUser} style= {{color:"white"}}  /> </div> </Link>
    </div>
    </div>
    </div>
        </>
)
}

export default Ingredients;