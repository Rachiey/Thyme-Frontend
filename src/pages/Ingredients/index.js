import React, { useState, useEffect } from 'react';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { useNavigate } from 'react-router';
import { useItemContext } from '../itemcontext/itemcontext';
import BottomNavbar from '../../components/BottomNavbar/BottomNavbar'; 

export const Ingredients = () => {
  const { items, setItems, filterItemsExpiringSoon } = useItemContext();
  const [displayedItems, setDisplayedItems] = useState([]); // Initialize displayedItems state
  const [inputText, setInputText] = useState('');
  const [quantityValue, setQuantityValue] = useState(1);
  const [expiryDate, setExpiryDate] = useState('');
  const [expiresIn, setExpiresIn] = useState('');
  const username = localStorage.getItem('username');
  const navigate = useNavigate();

  const handleLogout = () => {
    // Reset the local storage session and navigate to the login page
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const quantityValueHandler = (e) => {
    setQuantityValue(e.target.value);
  };

  const dateValueHandler = (e) => {
    const selectedDate = e.target.value; // Store the selected date as entered by the user
    const currentDate = new Date(); // Get the current date
    
    setExpiryDate(selectedDate);
  
    const final = new Date(selectedDate);
    final.setHours(23, 59, 59, 999); // Set time to the last millisecond of the day
  
    // Calculate expiresIn based on the selected date
    const diff = final.getTime() - currentDate.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  
    if (days === 0) {
      setExpiresIn('eat today');
    } else if (days < 0) {
      setExpiresIn(`expired ${Math.abs(days)} day${Math.abs(days) === 1 ? '' : 's'} ago`);
    } else if (days === 1) {
      setExpiresIn('expires tomorrow');
    } else {
      setExpiresIn(`expires in ${days} day${days === 1 ? '' : 's'}`);
    }
  };
  
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem('items'));
    if (savedItems) {
      setItems(savedItems);
      setDisplayedItems(savedItems); // Initialize displayedItems with saved items
    }
  }, [setItems]);

  const handleDeleteItem = (itemToDelete) => {
    // Filter out the item to delete based on the previous state
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemToDelete.id));
    
    // Update displayedItems based on the filtered items using a functional update
    setDisplayedItems((prevDisplayedItems) => prevDisplayedItems.filter((item) => item.id !== itemToDelete.id));

    // Save the updated items to local storage
    saveItemsToLocalStorage(items.filter((item) => item.id !== itemToDelete.id));
  
    // Filter items expiring soon
    const expiringSoonItems = filterItemsExpiringSoon(items);
    setItems(expiringSoonItems); // Update the 'items' state
    setDisplayedItems(expiringSoonItems); // Update the displayedItems state
  };

  const saveItemsToLocalStorage = (items) => {
    localStorage.setItem('items', JSON.stringify(items));
  };

  const submitItemHandler = (event) => {
    event.preventDefault();
  
    // Generate a unique ID for the new item based on the length of the items array
    const newId = items.length > 0 ? Math.max(...items.map((item) => item.id)) + 1 : 1;
  
    // Create a new item object
    const newItem = {
      text: inputText,
      id: newId,
      quantity: quantityValue,
      expiryDate: expiryDate,
      expiresIn: expiresIn,
    };
  
    // Update the items state with the new item using a functional update
    setItems((prevItems) => [...prevItems, newItem]);

    // Update displayedItems with the new item using a functional update
    setDisplayedItems((prevDisplayedItems) => [...prevDisplayedItems, newItem]);
    
    // Save the updated items to local storage
    saveItemsToLocalStorage([...items, newItem]);
  
    // Clear the input fields
    setInputText('');
    setQuantityValue(1);
    setExpiryDate('');
  
    // Filter items expiring soon
    const expiringSoonItems = filterItemsExpiringSoon([...items, newItem]);
    setItems(expiringSoonItems); // Update the 'items' state
    setDisplayedItems(expiringSoonItems);
  };


return (
<>    
<div className="fridgeItemBackground">  

    <div className="fridgeTitleItems"> {username}'s  &nbsp; 
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

            <div className="itemShelfItems">
            <ul>
          {displayedItems && displayedItems.length > 0 ? (
            <div className="grid-container">
              {displayedItems.map((item, index) => (
                <li
                  className="grid-item-card"
                  key={`${item.id}_${index}`}
                >
                  <p>{item.text}</p>
                  <p><span className="expires-in-colour" data-status={item.expiresIn}>{item.expiresIn}</span></p>
                  <br />
                  <button className="trashButton" onClick={() => handleDeleteItem(item)}>🗑</button>
                </li>
              ))}
            </div>
          ) : (
            <p className="noItemsMessage">No items to display.</p>

          )}
        </ul>
            </div>

            <div className="itemShelfTwo">

</div>
            <div className="itemShelfThree">
            </div>

            <BottomNavbar />
            
        </div>



</>
)
}

export default Ingredients;