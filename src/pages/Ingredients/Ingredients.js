import React from 'react';
import './Ingredients.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse} from '@fortawesome/free-solid-svg-icons'
import { faBookOpen} from '@fortawesome/free-solid-svg-icons'
import { faUser} from '@fortawesome/free-solid-svg-icons'
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
    <div className="logOutButton">  <span style= {{color: "red"}}> L</span>
                                            <span style= {{color: "#FDDA0D"}}> o</span>
                                            <span style= {{color: "blue"}}> g</span>
                                            &nbsp; 
                                            <span style= {{color: "#F28C28"}}> O</span>
                                            <span style= {{color: "#32CD32"}}> u</span>
                                            <span style= {{color: "#720e9e"}}> t</span></div>
    <div className="shelfOne"></div>
    <div className="shelfTwo"></div>
    <div className="shelfThree"></div>
    <div className="shelfFour">
        <div className="addButton">+</div>
    </div>
    <div className="bottomMenu">
 
  <div className="homeButton"><FontAwesomeIcon icon={faHouse} style= {{color:"white"}} /> </div>

        {/* <div className="homeButton" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} > <FontAwesomeIcon icon={faHouse} />   {isHovering && <h2>Home</h2>} </div> */}
        <div className="recipeButton"> <FontAwesomeIcon icon={faBookOpen} style= {{color:"white"}} /></div>
        <div className="profileButton"> <FontAwesomeIcon icon={faUser} style= {{color:"white"}}  /> </div>
    </div>
    </div>
    </div>
        </>
)
}

export default Ingredients;