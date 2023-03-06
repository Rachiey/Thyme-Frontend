import React, { useState } from 'react';
import './Ingredients.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse} from '@fortawesome/free-solid-svg-icons'
import { faBookOpen} from '@fortawesome/free-solid-svg-icons'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import 'semantic-ui-css/semantic.min.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'


export const Ingredients = () => {

const [user, setUser] = useState({username: "", email: ""});


const username = localStorage.getItem("username")

const navigate = useNavigate();

const LoggedOut = () => {
    console.log("Log out")
    console.log(user)
    setUser({ username: "", email: ""});
    navigate('/login')
    
}
return (
<>
    

    <div className="iphoneContainer"> 

    <div className="iphoneIngredientsBackground"> 
 
    <div className="fridgeTitle"> {username}'s  &nbsp; <span style= {{color: "#31BFF3"}}> F</span>
                                            <span style= {{color: "#A484E9"}}> r</span>
                                            <span style= {{color: "#F4889A"}}> i</span>
                                            <span style= {{color: "#FFAF68"}}> d</span>
                                            <span style= {{color: "#F6E683"}}> g</span>
                                            <span style= {{color: "#79D45E"}}> e</span>
                                            </div>
                                            
    <button className="logOutButton" cursor={"pointer"} onClick={LoggedOut}> <span style= {{color: "#FFAF68"}}> L</span>
                                            <span style= {{color: "#F6E683"}}> o</span>
                                            <span style= {{color: "#A484E9"}}> g</span>
                                            &nbsp; 
                                            <span style= {{color: "#31BFF3"}}> O</span>
                                            <span style= {{color: "#79D45E"}}> u</span>
                                            <span style= {{color: "#F4889A"}}> t</span> </button>
  
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
    <Link to="/fridge"> <div className="homeButton"> 
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