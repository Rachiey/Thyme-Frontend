import React, { useState, useEffect } from 'react';
import { useItemContext } from '../itemcontext/itemcontext';
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
  const { items, filterItemsExpiringSoon } = useItemContext();
const [expiringSoonItems, setExpiringSoonItems] = useState([]);

useEffect(() => {
  const filteredItems = filterItemsExpiringSoon(items);
  setExpiringSoonItems(filteredItems);
}, [items, filterItemsExpiringSoon]);


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
   <div> <div className="fridgeShelves">
   <h2>Items Expiring Soon (2 days or less)</h2>
  
   <div className="shelfOne">
  

        <div>
   
          <ul>
          <div className="grid-container">
            {expiringSoonItems && expiringSoonItems.length > 0 ? (
              expiringSoonItems.map((item) => (
                <li key={item.id}>
                  {/* Render item information */}
                  <p>{item.text} x{item.quantity}</p>
                  <p>🔔 Expires by: {item.expiryDate}</p>
                  <br />
                  {/* Add any additional actions or UI elements */}
                </li>
              ))
            ) : (
              <p>No items expiring soon.</p>
            )}
            </div>
          </ul>
        </div>
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