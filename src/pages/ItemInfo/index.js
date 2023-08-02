import React, { useState } from 'react';
// import './Ingredients.css';
import './style.css';

import 'semantic-ui-css/semantic.min.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faRectangleList} from '@fortawesome/free-solid-svg-icons'


export const ItemInfo = () => {

    const homeIcon = <FontAwesomeIcon icon={faHouse} />
    const profileIcon = <FontAwesomeIcon icon={faUser} />
    const recipesIcon = <FontAwesomeIcon icon={faRectangleList} />




    const [inputText, setInputText] = useState("");
    const [items, setItems] = useState([]);
    const [itemId, setItemId] = useState(1);
    const [quantityValue, setQuantityValue] = useState(1)
    const [expiryDate, setExpiryDate] = useState("⁉")
    const [expiresIn, setExpiresIn] = useState("")
    const [showItemInfo, setShowItemInfo] = useState(false);

    const username = localStorage.getItem("username")
    const navigate = useNavigate();

    const handleLogout = () => {
        // Reset the local storage session and navigate to the login page
        localStorage.removeItem('isLoggedIn');
        navigate('/login');
      };


    const inputTextHandler = (e) => {setInputText(e.target.value)}
    const quantityValueHandler = (e) => {setQuantityValue(e.target.value)}

    const dateValueHandler = (e) => {
        setExpiryDate(e.target.value)
            var final = new Date(e.target.value)
            var today = new Date()
            var diff = final.getTime() - today.getTime()
            var days = Math.floor(diff / (1000 * 60 * 60 * 24) + 1)
  
                switch(true) {
                    case (days === 0):
                        setExpiresIn("eat me today")
                        break;
                    case (days < -1):
                        setExpiresIn("expired")
                        break;
                    case (days === 1):
                        setExpiresIn("expires tomorrow")
                        break;
                    case (days >= 1):
                        setExpiresIn(`${days} day(s) left`)
                        break;
                    default:
                        setExpiresIn("⁉")


                }
    }

    const submitItemHandler = (event) => {
        event.preventDefault();
        setItemId(itemId + 1)
        setItems([
            ...items,
            { text: inputText, id: itemId, quantity: quantityValue, expiryDate: expiryDate, expiresIn: expiresIn}
        ])
        setInputText("")
        setQuantityValue(1);
        setExpiryDate("")      
    }

return (
<>    
<div className="door-back">  
    <div className="iphoneContainer">  
    <div className="iphoneIngredientsBackground">  
    
    <div className="fridgeTitle"> {username}'s  &nbsp; 
                <span style= {{color: "red"}}> F</span>

                <span style= {{color: "#FDDA0D"}}> r</span>
                <span style= {{color: "blue"}}> i</span>
                <span style= {{color: "#F28C28"}}> d</span>
                <span style= {{color: "#32CD32"}}> g</span>
                <span style= {{color: "#720e9e"}}> e</span>
            </div>

            <button className="logOutButton" onClick={handleLogout}>
                    <span style= {{color: "red"}}> L</span>
                    <span style= {{color: "#FDDA0D"}}> o</span>
                    <span style= {{color: "blue"}}> g</span>
                    &nbsp; 
                    <span style= {{color: "#F28C28"}}> O</span>
                    <span style= {{color: "#32CD32"}}> u</span>
                    <span style= {{color: "#720e9e"}}> t</span>
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
                <input className="datePicker" type="date" onChange={dateValueHandler} value={expiryDate}></input>
                <button className="addButton" type="submit" onClick={submitItemHandler}>+</button>
            </form>

            <div className="shelfThree">
                <ul>
                    <div className="grid-container">
                        {items.map((item) => (
                            <li className="grid-item-card" onMouseEnter={() => setShowItemInfo(true)} onMouseLeave={() => setShowItemInfo(false)}>
                                <p>{item.text}</p> 
                                <img></img>
                                <p><span className="expires-in-colour" data-status={item.expiresIn}>{item.expiresIn}</span></p> 
                                <br/>
                                <button onClick={() => {setItems(items.filter((el) => el.id !== item.id))}} >🗑</button>
                            </li>
                        ))}
                    </div>
                    {showItemInfo &&
                    
                    <div className="grid-container">
                        {items.map((item) => (
                            <li className="grid-item-card">
                                <p>{item.text}  x{item.quantity}</p> 
                                <p> 🔔 Expires by: {item.expiryDate}</p>  
                                <textarea placeholder="notes"></textarea>
                                <br/>

                            </li>
                        ))}
                    </div>}
                </ul>
            </div>

            <div className="shelfFour">
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