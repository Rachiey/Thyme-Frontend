import React, { useState, useEffect } from 'react';
import { useItemContext } from '../itemcontext/itemcontext';
import './profile.css';
import 'semantic-ui-css/semantic.min.css'
import { useNavigate } from 'react-router'
import SavedRecipes from '../../components/SavedRecipes';
import BottomNavbar from '../../components/BottomNavbar/BottomNavbar'; 
import axios from 'axios';
import * as urls from '../../Urls';


export const Profile = () => {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [username, setUsername] = useState(localStorage.getItem('userName'));
  const navigate = useNavigate();

  useEffect(() => {
    // Update the username when it changes in localStorage
    setUsername(localStorage.getItem('userName'));
  }, []);

const {items, filterItemsExpiringSoon } = useItemContext();
const [expiringSoonItems, setExpiringSoonItems] = useState([]);

useEffect(() => {
  const filteredItems = filterItemsExpiringSoon(items);
  setExpiringSoonItems(filteredItems);
}, [items, filterItemsExpiringSoon]);

const deleteProfile = () => {
  // API call to delete the user profile
  const username = localStorage.getItem('userName');
  const userAuthToken = localStorage.getItem('token');
  const deleteUrl = `${urls.api}users/${username}/`;

axios
.delete(deleteUrl, {
  headers: {
    Authorization: `Token ${userAuthToken}`
  }
})
.then((response) => {
  // Successful deletion, remove local storage data and redirect to login
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('userName');
  navigate('/login');
})
.catch((error) => {
  // Handle error
  console.error('Error deleting profile:', error);
  // You can display an error message or take appropriate action
});
};

const handleDeleteConfirmation = () => {
  setShowDeleteConfirmation(true);
};

const cancelDelete = () => {
  setShowDeleteConfirmation(false);
};

const handleLogout = () => {
  // Reset the local storage session and navigate to the login page
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('username');
  setUsername(null); // Clear the username state
  navigate('/login');
};

const fridgeTitle = username ? `${username}'s` : '';

    
    return (

        <>
<div className="profileBackground">  

<div className="fridgeTitleBack">
            {fridgeTitle} &nbsp; <span style={{ color: '#9023d9' }}> F</span>
            <span style={{ color: '#ffe524' }}> r</span>
            <span style={{ color: '#ff0808' }}> i</span>
            <span style={{ color: '#0aa614' }}> d</span>
            <span style={{ color: '#9023d9' }}> g</span>
            <span style={{ color: '#ff0808' }}> e</span>
          </div>

          <button className="logOutButton" onClick={handleLogout}>
            {' '}
            <span style={{ color: '#FFAF68' }}> L</span>
            <span style={{ color: '#F6E683' }}> o</span>
            <span style={{ color: '#A484E9' }}> g</span>
            &nbsp;
            <span style={{ color: '#31BFF3' }}> O</span>
            <span style={{ color: '#79D45E' }}> u</span>
            <span style={{ color: '#F4889A' }}> t</span>{' '}
          </button>

<div className="profileTitle"> Profile </div>
<button className="deleteProfileButton" onClick={handleDeleteConfirmation}>
        Delete Profile
      </button>
        {/* Delete Profile Confirmation Modal */}
        {showDeleteConfirmation && (
        <div className="deleteProfileModal">
          <div className="deleteProfileModalContent">
            <h3 className='sureText'>Are you sure you want to delete your profile?</h3>
            <div className="deleteProfileModalActions">
              <button className="modalAction1" onClick={deleteProfile}>Yes, Delete</button>
              <button className="modalAction2"  onClick={cancelDelete}>Cancel</button>
            </div>
          </div>
        </div>
      )}
   <div> <div className="fridgeShelves">
   <h2 className="expiringTitle">Items Expiring Soon (2 days or less)</h2>
  
   <div className="profileShelfItems">
          <ul>
          <div className="profile-grid-container">
            {expiringSoonItems && expiringSoonItems.length > 0 ? (
              expiringSoonItems.map((item) => (
                <li key={item.id}>
                  {/* Render item information */}
                  <p className="itemText">{item.text} x{item.quantity}</p>
                  <p>🔔 Expires by: {item.expiry_date}</p>
                  <br />
                  {/* Add any additional actions or UI elements */}
                </li>
              ))
              
            ) : (
              <div className="noItemsExpire">No items expiring soon.</div>
            )}
            
            </div>
          </ul>
        
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