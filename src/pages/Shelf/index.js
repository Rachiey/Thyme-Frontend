import React, {useState} from "react";
import './style.css' 

function Shelf() {
    const [inputText, setInputText] = useState("");
    const [items, setItems] = useState([]);
    const [itemId, setItemId] = useState(1);
    const [quantityValue, setQuantityValue] = useState(1)
    const [expiryDate, setExpiryDate] = useState("")
    const [expiresIn, setExpiresIn] = useState("")


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
    <div>
        <h1>Shelf</h1>
        <form>
            <input type="text" onChange={inputTextHandler} value={inputText}></input>
            <select name="quantity" onChange={quantityValueHandler} value={quantityValue}>
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
            <input type="date" onChange={dateValueHandler} value={expiryDate}></input>
            <button type="submit" onClick={submitItemHandler}>Add</button>
        </form>
        <div>
        <ul >
            <div className="grid-container">
                {items.map((item) => (
                <li className="grid-item-card">
                   {item.text}  x{item.quantity} <br/> Expires by: {item.expiryDate} <br/> Left to expire: {item.expiresIn} <br/>
                   <textarea></textarea><br/>
                   <button onClick={() => {setItems(items.filter((el) => el.id !== item.id))}}>Delete</button>
                </li>
            ))}
            </div>
        </ul>
        </div>
    </div>
    )
}

export default Shelf;