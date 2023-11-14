import React, { useState, useEffect } from 'react';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { useNavigate } from 'react-router';
import { useItemContext } from '../itemcontext/itemcontext';
import BottomNavbar from '../../components/BottomNavbar/BottomNavbar'; 
import axios from "axios";
import * as urls from '../../Urls';
import { toast } from 'react-toastify';
import ItemWarning from '../../components/ItemWarning';




export const Ingredients = () => {
  const { items, setItems, filterItemsExpiringSoon } = useItemContext();
  const [displayedItems, setDisplayedItems] = useState([]); // Initialize displayedItems state
  const [inputText, setInputText] = useState('');
  const [quantityValue, setQuantityValue] = useState(1);
  const [expiryDate, setExpiryDate] = useState('');
  // const [expiresIn, setExpiresIn] = useState('');
  const username = localStorage.getItem('userName');
  const userAuthToken = localStorage.getItem('token');

  const customId = "warning-ingredient";
 

  const navigate = useNavigate();

  const replaceTextWithEmoji = (text) => {
    const emojiMap = {
      // Define your mappings here, for example:
      'pizza': '🍕',
      'carrot': '🥕',
      'egg': '🍳',
      'eggs': '🍳',
      'broccoli': '🥦',
      'fish': '🐟',
      'chicken': '🍗',
      'bacon': '🥓',
      'tomato':'🍅',
      'apple':'🍎',
      'orange':'🍊',
      'lemon':'🍋',
      'banana':'🍌',
      'cucumber':'🥒',
      'bell pepper':'🫑',
      'milk':'🥛',
      'cheese':'🧀',
      'onion':'🧅',
      'potato':'🥔',
      'avocado':'🥑',
      'steak':'🥩',
      'salad':'🥗',
      'corn':'🌽',
      'peas':'🫛',
      'lettuce':'🥬',
      'chilli':'🌶️',
      'chillies':'🌶️',
      
      // Add more mappings as needed
    };
  
    // Check if the text exists in the map, if so, return the corresponding emoji, otherwise return the original text
    return emojiMap[text.toLowerCase()] || text;
  };

  const isEmoji = (text) => {
    const emojiRegex = /(?:[\uD800-\uDBFF][\uDC00-\uDFFF])|(?:[\u2194-\u21AA\u2B05\u2B06\u2934\u2935\u25AA\u25FE\u25FD\u25FB\u2B05\u2B06\u2934\u2935\u25AA\u25FE\u25FD\u25FB\u231A\u23F3\u231B\u23F0\u2670-\u2672\u2702\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26CE\u26CF\u26D1\u26D3\u26E9\u26EA\u26F0\u26F1\u26F2\u26F3\u26F4\u26F5\u26F7\u26F8\u26F9\u26FA\u26FD\u2705\u2708\u2709\u270A-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753\u2754\u2755\u2757\u2763\u2764\u2795\u2796\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05\u2B06\u2B50\u2B55\u3030\u303D\u3297\u3299\u23F0\u23F3])|(?:[#*0-9]\uFE0F\u20E3[\uFE0F\u20E3])|(?:[\uD83C][\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDA2\uDDA4\uDDA5\uDDE6\uDDE8-\uDDEF\uDDF1-\uDDF4\uDDF7-\uDDF9\uDE01-\uDE03\uDE05\uDE06\uDE09\uDE0A\uDE0C-\uDE0F\uDE14\uDE16\uDE18\uDE1A\uDE1C\uDE1D\uDE1E\uDE20-\uDE24\uDE27\uDE29\uDE2A\uDE2C-\uDE3A\uDE3C-\uDE44\uDE46-\uDE49\uDE4C-\uDE4F\uDE80-\uDE83\uDE85\uDE86\uDE88\uDE8A\uDE8D-\uDE8F\uDE92-\uDE96\uDE98\uDE99\uDE9B\uDE9D-\uDE9F\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB\uDECD-\uDECF\uDFF4\uDFF8\uDFF9\uDC00-\uDFFF])|(?:[\uD83D\uDC00-\uDDFF\uDE80-\uDEFF])/;
    return emojiRegex.test(text);
  };
  

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
    // Store the selected date as entered by the user
    const selectedDate = e.target.value;
    // Update the expiryDate state with the selected date
    setExpiryDate(selectedDate);
  };

  useEffect(() => {
    // Make a GET request to retrieve the user's ingredients from the backend
    axios
      .get(`${urls.api}ingredients/api/ingredients/${username}/`)
      .then((response) => {
        const ingredients = response.data;
  
        // Calculate and set expiresIn for each item
        const itemsWithExpiresIn = ingredients.map((item) => {
          const final = new Date(item.expiry_date);
          final.setHours(23, 59, 59, 999);
          const currentDate = new Date();
          const diff = final.getTime() - currentDate.getTime();
          const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  
          if (days === 0) {
            item.expiresIn = 'eat today';
          } else if (days < 0) {
            item.expiresIn = `expired ${Math.abs(days)} day${Math.abs(days) === 1 ? '' : 's'} ago`;
          } else if (days === 1) {
            item.expiresIn = 'expires tomorrow';
          } else {
            item.expiresIn = `expires in ${days} day${days === 1 ? '' : 's'}`;
          }
  
          return item;
        });
  
        setItems(itemsWithExpiresIn);
        setDisplayedItems(itemsWithExpiresIn);
      })
      .catch((error) => {
        // Handle any errors
      });
  }, [setItems, username]);
  

  const handleDeleteItem = (itemToDelete) => {
    const ingredientId = itemToDelete.id; // Get the ID of the item to delete
  
    // Replace 'path-to-your-delete-endpoint' with the actual delete endpoint
    const deleteUrl = `${urls.api}ingredients/api/ingredients/${username}/${ingredientId}/`;
  
    axios
      .delete(deleteUrl)
      .then((response) => {
        // On successful deletion, update the local state
        setItems((prevItems) => prevItems.filter((item) => item.id !== ingredientId));
        setDisplayedItems((prevDisplayedItems) =>
          prevDisplayedItems.filter((item) => item.id !== ingredientId)
        );
      })
      .catch((error) => {
        // Handle any errors
        console.error('Error deleting ingredient:', error);
      });
  };
  

  const saveItemsToBackend = (item) => {
    const ingredientId = item.id;
  
    // Define the updated item data (e.g., changed fields) here
    const updatedItemData = {
      // Include the fields you want to update, e.g., text, quantity, expiry_date, etc.
      text: item.text,
      quantity: item.quantity,
      expiry_date: item.expiry_date,
    };
  
    axios
      .put(`${urls.api}ingredients/api/ingredients/${username}/${ingredientId}/`, updatedItemData, {
        headers: {
          Authorization: `Token ${userAuthToken}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        // Handle the successful response here
        console.log('Ingredient updated successfully:', response.data);
      })
      .catch((error) => {
        // Handle errors here
        console.error('Error while updating ingredient:', error);
      });
  };
  
  

  const submitItemHandler = (event) => {
    event.preventDefault();
  
    const newId = items.length > 0 ? Math.max(...items.map((item) => item.id)) + 1 : 1;
  
    // Calculate expiresIn based on the selected date
    const final = new Date(expiryDate);
    final.setHours(23, 59, 59, 999);
    const currentDate = new Date();
    const diff = final.getTime() - currentDate.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  
    let newItem = {
      text: replaceTextWithEmoji(inputText),
      id: newId,
      quantity: quantityValue,
      expiry_date: expiryDate,
      user: username,
    };
  
    if (days === 0) {
      newItem.expiresIn = 'eat today';
      toast.warning(`Item '${newItem.text}' expires today! Eat soon!`, {
        position: toast.POSITION.TOP_CENTER,
      });

    } else if (days < 0) {
      newItem.expiresIn = `expired ${Math.abs(days)} day${Math.abs(days) === 1 ? '' : 's'} ago`;
    } else if (days === 1) {
      newItem.expiresIn = 'expires tomorrow';
      toast.warning(`Item '${newItem.text}' expires tomorrow!`, {
        position: toast.POSITION.TOP_CENTER,
        toastId: customId,
      });

    } else {
      newItem.expiresIn = `expires in ${days} day${days === 1 ? '' : 's'}`;
    }


  
    axios
      .post(`${urls.api}ingredients/api/ingredients/${username}/`, newItem, {
        headers: {
          Authorization: `Token ${userAuthToken}`,
        },
      })
      .then((response) => {
        // On successful addition, update the local state
        setItems((prevItems) => [...prevItems, newItem]);
        setDisplayedItems((prevDisplayedItems) => [...prevDisplayedItems, newItem]);
  
        // Save the updated items to the backend (you can remove this if you want to save it elsewhere)
        saveItemsToBackend([...items, newItem]);
  
        // Clear the input fields and update the displayed items
        setInputText('');
        setQuantityValue(1);
        setExpiryDate('');
  
        // Filter items expiring soon
        const expiringSoonItems = filterItemsExpiringSoon([...items, newItem]);
        setItems(expiringSoonItems); // Update the 'items' state
        setDisplayedItems(expiringSoonItems);
      })
      // window.location.reload()

      .catch((error) => {
        // Handle any errors
        console.error('Error while adding ingredient:', error);
      });
  };
  
  

return (
<>    
<div className="fridgeItemBackground">  

    <div className="fridgeTitle"> {username}'s  &nbsp; 
    <span style={{ color: '#9023d9' }}> F</span>
            <span style={{ color: '#ffe524' }}> r</span>
            <span style={{ color: '#ff0808' }}> i</span>
            <span style={{ color: '#0aa614' }}> d</span>
            <span style={{ color: '#9023d9' }}> g</span>
            <span style={{ color: '#ff0808' }}> e</span>
            </div>
        
            
            <button className="logOutButton" onClick={handleLogout}>
            <span style= {{color: "#FFAF68"}}> L</span>
                                            <span style= {{color: "#F6E683"}}> o</span>
                                            <span style= {{color: "#A484E9"}}> g</span>
                                            &nbsp; 
                                            <span style= {{color: "#31BFF3"}}> O</span>
                                            <span style= {{color: "#79D45E"}}> u</span>
                                            <span style= {{color: "#F4889A"}}> t</span> 
            </button>

            <div className="ingredientsPageTitle">  <span style={{ color: '#9023d9' }}> I</span>
            <span style={{ color: '#ffe524' }}> N</span>
            <span style={{ color: '#ff0808' }}> G</span>
            <span style={{ color: '#0aa614' }}> R</span>
            <span style={{ color: '#9023d9' }}> E</span>
            <span style={{ color: '#ff0808' }}> D</span>
            <span style={{ color: '#ffe524' }}> I</span>
            <span style={{ color: '#ff0808' }}> E</span>
            <span style={{ color: '#0aa614' }}> N</span>
            <span style={{ color: '#9023d9' }}> T</span>
            <span style={{ color: '#ff0808' }}> S</span></div>

            <form className='formInput' onSubmit={(e) => {

  e.preventDefault();

}}>
                <input className="textInputField" type="text" onChange={inputTextHandler} value={inputText} placeholder='Add ingredients'></input>
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
  <ul className='ingredientsItems'>

  {displayedItems && displayedItems.length > 0 ? (
  <div className="grid-container">
    {displayedItems.map((item, newItem, index) => (
      <div className="grid-item-card" key={`${item.id}_${index}`}>
        <div className="card-content" data-expiration={item.expiresIn}>
          <p className={isEmoji(item.text) ? 'emoji' : 'text'}>{item.text}</p>
          <p className="expire">{item.expiresIn}</p> 
          <button className="trashButton" onClick={() => handleDeleteItem(item)}>🗑</button>
          {item.expiresIn === 'eat today' || item.expiresIn === 'expires tomorrow' ? (
        <ItemWarning item={item} />
      ) : null}
        </div>
      </div>
    ))}
  </div>
) : (
  <div className="noItemsMessage">No items to display.</div>
)}

  </ul>
</div>

            <div className="itemShelfTwo">

</div>
            <div className="itemShelfThree">
            </div>

            <div className="itemShelfFour">
            </div>

            <BottomNavbar />
            
        </div>



</>
)
}

export default Ingredients;