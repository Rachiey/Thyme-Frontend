import React, {useState} from "react";

function Shelf() {
    const [inputText, setInputText] = useState("");
    const [items, setItems] = useState([]);
    const [itemId, setItemId] = useState(1);
    const [quantityValue, setQuantityValue] = useState(1)
    const [expiryDate, setExpiryDate] = useState("")


    const inputTextHandler = (event) => {
        setInputText(event.target.value);
    }

    const quantityValueHandler = (event) => {
        setQuantityValue(event.target.value)
    }

    const dateValueHandler = (event) => {
        setExpiryDate(event.target.value)
    }
    const submitItemHandler = (event) => {
        event.preventDefault();
        setItemId(itemId + 1)
        setItems([
            ...items,
            { text: inputText, id: itemId, quantity: quantityValue, expiryDate: expiryDate}
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
            <select name="quantity" onChange={(quantityValueHandler)} value={quantityValue}>
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
        <ul>
            {items.map((item) =>(
                <li>
                   {item.text}  x{item.quantity} <br/> expires:{item.expiryDate} <br/>
                   <button onClick={() => {setItems(items.filter((el) => el.id !== item.id))}}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
    )
}

export default Shelf;