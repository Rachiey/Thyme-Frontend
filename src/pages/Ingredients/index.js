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
  
    const newId = items.length > 0 ? Math.max(...items.map((item) => item.id)) + 1 : 1;
  
    // Use the replaceTextWithEmoji function to convert the inputText to an emoji
    const newItem = {
      text: replaceTextWithEmoji(inputText),
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

            <form className='formInput' onSubmit={(e) => {
  e.preventDefault();

}}>
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
          <div className="grid-item-card" key={`${item.id}_${index}`}>
            <div className="card-content">
              <p className={isEmoji(item.text) ? 'emoji' : 'text'}>{item.text}</p>
              <button className="trashButton" onClick={() => handleDeleteItem(item)}>🗑</button>
            </div>
  
            <p className='expire'>
              <span className="expires-in-colour" data-status={item.expiresIn}>{item.expiresIn}</span>
            </p>
          </div>
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