import React from 'react';
import './profile.css';
import 'semantic-ui-css/semantic.min.css'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faRectangleList } from '@fortawesome/free-solid-svg-icons'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import SavedRecipes from '../SavedRecipes';


export const Profile = () => {

    
    const username = localStorage.getItem("username")
    const navigate = useNavigate();
    
    const handleLogout = () => {
      // Reset the local storage session and navigate to the login page
      localStorage.removeItem('isLoggedIn');
      navigate('/login');
    };


    const homeIcon = <FontAwesomeIcon icon={faHouse} />
    const recipesIcon = <FontAwesomeIcon icon={faRectangleList} />
    const ingredientsIcon = <FontAwesomeIcon icon={faUtensils} />

    
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
    <button className="logOutButton" onClick={handleLogout}> <span style= {{color: "#FFAF68"}}> L</span>
                                            <span style= {{color: "#F6E683"}}> o</span>
                                            <span style= {{color: "#A484E9"}}> g</span>
                                            &nbsp; 
                                            <span style= {{color: "#31BFF3"}}> O</span>
                                            <span style= {{color: "#79D45E"}}> u</span>
                                            <span style= {{color: "#F4889A"}}> t</span> </button>
    </div>
<div className="profileTitle"> Profile </div>
   <div> <div className="fridgeShelves"><div className="shelfOne"> 
                                 </div>
    
    <div className="savedRecipesContainer">
      <SavedRecipes />
      </div>
      
         
        </div>
        <div className="bottomNavBarProfile"> 
      <Tooltip title="Home"> 
      <IconButton style={{color:'white', fontSize:'50px'}}>
      <Link to='/'>{homeIcon} </Link>
      </IconButton>
      </Tooltip>
      <Tooltip title="Recipes">
      <IconButton style={{color: 'white', fontSize: '50px'}}>
      <Link to='/recipefinder'>{recipesIcon} </Link>
      </IconButton>
    </Tooltip>  
    <Tooltip title="Ingredients">
      <IconButton style={{color: 'white', fontSize: '50px'}}>
      <Link to='/item-info'>{ingredientsIcon} </Link>
      </IconButton>
    </Tooltip> 
    </div> 
    </div>
   </div>
    

        </>
    
   ) }


export default Profile;