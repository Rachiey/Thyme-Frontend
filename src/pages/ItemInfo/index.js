import React, { useState, useEffect } from 'react';
import './style.css';

import 'semantic-ui-css/semantic.min.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useItemContext } from '../itemcontext/itemcontext';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faRectangleList } from '@fortawesome/free-solid-svg-icons';

export const ItemInfo = () => {
  const homeIcon = <FontAwesomeIcon icon={faHouse} />;
  const profileIcon = <FontAwesomeIcon icon={faUser} />;
  const recipesIcon = <FontAwesomeIcon icon={faRectangleList} />;

  const { items, setItems, filterItemsExpiringSoon } = useItemContext();

  const [inputText, setInputText] = useState('');
  const [itemId, setItemId] = useState(1);
  const [quantityValue, setQuantityValue] = useState(1);
  const [expiryDate, setExpiryDate] = useState('');
  const [expiresIn, setExpiresIn] = useState('');
  // const [showItemInfo, setShowItemInfo] = useState(false);
  const [nextItemId, setNextItemId] = useState(1);

  const username = localStorage.getItem('username');
  const navigate = useNavigate();

  const handleLogout = () => {
    // Reset the local storage session and navigate to the login page
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  // const initialItems = items.map((item) => ({
  //   ...item,
  //   showInfo: false,
  // }));

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const quantityValueHandler = (e) => {
    setQuantityValue(e.target.value);
  };

  const dateValueHandler = (e) => {
    const selectedDate = e.target.value; // Store the selected date as entered by the user
    setExpiryDate(selectedDate);
  
    const final = new Date(selectedDate);
  final.setHours(23, 59, 59, 999); // Set time to the last millisecond of the day
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set time to midnight

  // Calculate expiresIn based on the selected date
  const diff = final.getTime() - today.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  
    switch (true) {
      case days === 0:
        setExpiresIn('eat me today');
        break;
      case days < -1:
        setExpiresIn('expired');
        break;
      case days === 1:
        setExpiresIn('expires tomorrow');
        break;
      case days >= 1:
        setExpiresIn(`${days} day(s) left`);
        break;
      default:
        setExpiresIn('⁉');
    }
  };
  

  const handleDeleteItem = (itemToDelete) => {
    // Filter out the item to delete
    const updatedItems = items.filter((item) => item.id !== itemToDelete.id);
    
    // Update the state with the filtered items
    setItems(updatedItems);
  
    // Save the updated items to local storage
    saveItemsToLocalStorage(updatedItems);

    // Filter items expiring soon
    const expiringSoonItems = filterItemsExpiringSoon(updatedItems);
    setItems(expiringSoonItems); // Update the 'items' state

    // The useEffect will automatically save the updated items to local storage
  };

  const saveItemsToLocalStorage = (items) => {
    localStorage.setItem('items', JSON.stringify(items));
  };

  // Load items from local storage on component mount
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem('items'));
    if (savedItems) {
      setItems(savedItems);
      console.log(savedItems);
    }
  }, [setItems]);

  // Submit item handler
  const submitItemHandler = (event) => {
    event.preventDefault();
    setItemId(itemId + 1);

    // Create a new item object
    const newItem = {
      text: inputText,
      id: nextItemId,
      quantity: quantityValue,
      expiryDate: expiryDate,
      expiresIn: expiresIn,
    };

    setNextItemId(nextItemId + 1);

    // Update the items state with the new item
    const updatedItems = [...items, newItem];
    setItems([updatedItems]);

    saveItemsToLocalStorage(updatedItems);

    // Clear the input fields
    setInputText('');
    setQuantityValue(1);
    setExpiryDate('');

    // Filter items expiring soon
    const expiringSoonItems = filterItemsExpiringSoon(updatedItems);
  setItems(expiringSoonItems); // Update the 'items' state

  

  };


return (
<>    
<div className="door-back">  
    <div className="iphoneContainer">  
    <div className="iphoneIngredientsBackground">  
    
    <div className="fridgeTitle"> {username}'s  &nbsp; 
    <span style= {{color: "#31BFF3"}}> F</span>
                                            <span style= {{color: "#A484E9"}}> r</span>
                                            <span style= {{color: "#F4889A"}}> i</span>
                                            <span style= {{color: "#FFAF68"}}> d</span>
                                            <span style= {{color: "#F6E683"}}> g</span>
                                            <span style= {{color: "#79D45E"}}> e</span>
            </div>
            <div className="ingredientsTitle"> Ingredients </div>
            <button className="logOutButton" onClick={handleLogout}>
            <span style= {{color: "#FFAF68"}}> L</span>
                                            <span style= {{color: "#F6E683"}}> o</span>
                                            <span style= {{color: "#A484E9"}}> g</span>
                                            &nbsp; 
                                            <span style= {{color: "#31BFF3"}}> O</span>
                                            <span style= {{color: "#79D45E"}}> u</span>
                                            <span style= {{color: "#F4889A"}}> t</span> 
            </button>

            <form className='formInput'>
                <input className="textInputField" type="text" onChange={inputTextHandler} value={inputText}></input>
                <select className="quantityOption" name="quantity" onChange={quantityValueHandler} value={quantityValue}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="10">15</option>
                </select>
                <input
    className="datePicker"
    type="date"
    onChange={dateValueHandler}
    value={expiryDate}
></input>

                <button className="addButton" type="submit" onClick={submitItemHandler}>+</button>
            </form>

            <div className="itemShelf">
                <ul>
                {items && items.length > 0 ? (
 <div className="grid-container">
 {items.map((item, index) => ( // Use index as a fallback key
   <li className="grid-item-card" 
   key={`${item.id}_${index}`} 
  //  onMouseEnter={() => handleMouseEnter(item.id)}
  //     onMouseLeave={() => handleMouseLeave(item.id)}
  >
     <p>{item.text}</p>
     {/* <img></img> */}
     <p><span className="expires-in-colour" data-status={item.expiresIn}>{item.expiresIn}</span></p> 
     <br/>
     <button className="trashButton" onClick={() => handleDeleteItem(item)}>🗑</button>
   </li>
 ))}
</div>
                       ) : (
                         <p>No items to display.</p>
                       )}
                    
                    {/* {
                    // showItemInfo &&
                    
                    <div className="grid-container">
                        {items.map((item, index) => (
                            <li className="grid-item-card" key={`${item.id}_${index}`}>
                                <p>{item.text}  x{item.quantity}</p> 
                                <p> 🔔 Expires by: {item.expiryDate}</p>  
                                <br/>

                            </li>
                        ))}
                    </div>} */}
                </ul>
            </div>

            <div className="itemShelfTwo">

</div>
            <div className="itemShelfThree">
            </div>
            <div className="bottomNavBarItems"> 
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
    <Tooltip title="Profile">
      <IconButton style={{color: 'white', fontSize: '50px'}}>
      <Link to='/profile'>{profileIcon} </Link>
      </IconButton>
    </Tooltip> 
    </div> 
            
        </div>
</div>

    </div>
</>
)
}

export default ItemInfo;