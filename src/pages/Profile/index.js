import React, { useState, useEffect } from 'react';
import { useItemContext } from '../itemcontext/itemcontext';
import './profile.css';
import 'semantic-ui-css/semantic.min.css'
// import { useNavigate } from 'react-router'
import SavedRecipes from '../../components/SavedRecipes';
import BottomNavbar from '../../components/BottomNavbar/BottomNavbar'; 
import FridgeTitle from '../../components/FridgeTitle/FridgeTitle';

export const Profile = () => {
  const { items, filterItemsExpiringSoon } = useItemContext();
const [expiringSoonItems, setExpiringSoonItems] = useState([]);

useEffect(() => {
  const filteredItems = filterItemsExpiringSoon(items);
  setExpiringSoonItems(filteredItems);
}, [items, filterItemsExpiringSoon]);





    
    return (

        <>
<div className="profileBackground">  

<FridgeTitle/>

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