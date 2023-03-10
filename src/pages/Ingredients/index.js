import React, { useState } from 'react';
// import './Ingredients.css';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse} from '@fortawesome/free-solid-svg-icons'
import { faBookOpen} from '@fortawesome/free-solid-svg-icons'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import 'semantic-ui-css/semantic.min.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'


export const Ingredients = () => {

    const [user, setUser] = useState({username: "", email: ""});
    const [inputText, setInputText] = useState("");
    const [items, setItems] = useState([]);
    const [itemId, setItemId] = useState(1);
    const [quantityValue, setQuantityValue] = useState(1)
    const [expiryDate, setExpiryDate] = useState("⁉")
    const [expiresIn, setExpiresIn] = useState("⁉")

    const username = localStorage.getItem("username")
    const navigate = useNavigate();

    const LoggedOut = () => {
        console.log("Log out")
        console.log(user)
        setUser({ username: "", email: ""});
        navigate('/login')
    }

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
                        setExpiresIn("today")
                        break;
                    case (days < -1):
                        setExpiresIn("expired")
                        break;
                    case (days === 1):
                        setExpiresIn("tomorrow")
                        break;
                    case (days >= 1):
                        setExpiresIn(`${days} day(s)`)
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
    <div className="iphoneContainer"> 

        <div className="iphoneIngredientsBackground"> 
    {/* <div className="fridgeTitle"> Username's  &nbsp; <span style= {{color: "red"}}> F</span> */}
   {/* <div className="iphoneBackground">  */}

            <div className="fridgeTitle"> {username}'s  &nbsp; 
                <span style= {{color: "red"}}> F</span>

                <span style= {{color: "#FDDA0D"}}> r</span>
                <span style= {{color: "blue"}}> i</span>
                <span style= {{color: "#F28C28"}}> d</span>
                <span style= {{color: "#32CD32"}}> g</span>
                <span style= {{color: "#720e9e"}}> e</span>
            </div>

            <button className="logOutButton" onClick={LoggedOut}>
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
            <div className="shelfOne">
                <div className="carrot">
                    <img style ={{objectFit: 'fill'}} src = {require('./images/carrot.png')} alt="carrot" />
                </div>
                <div className="cheese">
                    <img style ={{objectFit: 'fill'}} src = {require('./images/cheese.png')} alt="cheese"  />
                </div> 
                <div className="milk"> 
                    <img style ={{objectFit: 'fill'}}  src = {require('./images/milk.png')} alt="milk" />
                </div>
            </div>

            <div className="shelfTwo">
                <div className="broccoli">
                    <img style ={{objectFit: 'fill'}} src = {require('./images/broccoli.png')} alt="carrot" />
                </div>
                <div className="orangeJuice">
                    <img style ={{objectFit: 'fill'}} src = {require('./images/orange juice.png')} alt="cheese"  />
                </div> 
                <div className="tomato">
                    <img style ={{objectFit: 'fill'}}  src = {require('./images/tomato.png')} alt="milk" />
                </div>
            </div>

            <div className="shelfThree">
                <ul>
                    <div className="grid-container">
                        {items.map((item) => (
                            <li className="grid-item-card">
                                <p>{item.text}  x{item.quantity}</p> 
                                <img></img>
                                <p> 🔔 Expires by: {item.expiryDate}</p>  
                                <p> 🕓 Left to expire: <span className="expires-in-colour" data-status={item.expiresIn}>{item.expiresIn}</span></p> 
                                <br/>
                                <textarea placeholder="notes"></textarea>
                                <br/>
                                <button onClick={() => {setItems(items.filter((el) => el.id !== item.id))}} >🗑</button>
                            </li>
                        ))}
                    </div>
                </ul>
            </div>

            <div className="shelfFour">
            </div>

            <div className="bottomMenu">
                <Link to="/"> <div className="homeButton"> 
                <FontAwesomeIcon icon={faHouse} style= {{color:"white"}} />  </div> </Link>
                <Link to="/recipes"> <div className="recipeButton">  <FontAwesomeIcon icon={faBookOpen} style= {{color:"white"}} /></div> </Link>
                <Link to="/profile">  <div className="profileButton"> <FontAwesomeIcon icon={faUser} style= {{color:"white"}}  /> </div> </Link>
            </div>
        </div>
    </div>
    
</>
)
}

export default Ingredients;