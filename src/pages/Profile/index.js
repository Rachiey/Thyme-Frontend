import React, { useState, useEffect } from 'react';
import { useItemContext } from '../itemcontext/itemcontext';
import './profile.css';
import 'semantic-ui-css/semantic.min.css'
import { useNavigate } from 'react-router'

import SavedRecipes from '../SavedRecipes';
import BottomNavbar from '../../components/BottomNavbar/BottomNavbar'; 


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



    
    return (

        <>
<div className="profileBackground">  

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
   <h2 className="expiringTitle">Items Expiring Soon (2 days or less)</h2>
  
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
      
      <BottomNavbar />
        </div>
        

    </div>
   </div>
    

        </>
    
   ) }


export default Profile;