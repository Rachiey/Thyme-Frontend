import React, { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import Item from "../../components/Item";
import './shoppinglist.css';
import 'semantic-ui-css/semantic.min.css'
import { useNavigate } from 'react-router'
import BottomNavbar from '../../components/BottomNavbar/BottomNavbar'; 




export const List = () => {

  


    const username = localStorage.getItem("username")
    const navigate = useNavigate();
    
    const handleLogout = () => {
      // Reset the local storage session and navigate to the login page
      localStorage.removeItem('isLoggedIn');
      navigate('/login');
    };




    const arr = () => {
      let data = localStorage.getItem("data");
      if (data) return JSON.parse(localStorage.getItem("data"));
      else return [];
    };

    const [item, setItem] = useState("");
    const [edit, setEdit] = useState(false);
    const [editId, setEditId] = useState();
    const [list, setList] = useState(arr);
    const [error, setError] = useState("");
  
    const handleSubmit = (e) => {
      const newItem = {
        id: uuidv4(),
        item: item,
        complete: false,
      };
      e.preventDefault();
    if (item && item.length <= 25 && !edit) {
      setList([...list, newItem]);
      setItem("");
      setError("");
    } else if (item && item.length <= 25 && edit && editId) {
      setList(
        list.map((el) => {
          if (el.id === editId) {
            return { ...el, item: item };
          }
          return el;
        })
      );
      setItem("");
      setEditId(null);
      setEdit(false);
      setError("");
    } else if (!item) setError("Item cannot be blank.");
    else if (item.length > 25) setError("Character limit is 25.");
  };

  React.useEffect(() => {
    localStorage.setItem("data", JSON.stringify(list));
  }, [list]);

  const handleChange = (e) => {
    setItem(e.target.value);
  };


    
    return (

        <>
<div className="shoppingListBackground">  
<div className="fridgeTitleBack"> {username}'s  &nbsp; <span style= {{color: "#31BFF3"}}> F</span>
                                            <span style= {{color: "#A484E9"}}> r</span>
                                            <span style= {{color: "#F4889A"}}> i</span>
                                            <span style= {{color: "#FFAF68"}}> d</span>
                                            <span style= {{color: "#F6E683"}}> g</span>
                                            <span style= {{color: "#79D45E"}}> e</span>
                                            </div>
                                            <div className ="logOutBox">
    <button className="logOutButton" onClick={handleLogout}> <span style= {{color: "#FFAF68"}}> L</span>
                                            <span style= {{color: "#F6E683"}}> o</span>
                                            <span style= {{color: "#A484E9"}}> g</span>
                                            &nbsp; 
                                            <span style= {{color: "#31BFF3"}}> O</span>
                                            <span style= {{color: "#79D45E"}}> u</span>
                                            <span style= {{color: "#F4889A"}}> t</span> </button>
    </div>
    <div className="shoppingList">
      <h1 className="shoppingTitle"> Shopping List</h1>
  
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          value={item}
          placeholder="Add to your list"
          onChange={handleChange}
        />
        {edit ? (
          <button className="btn" type="submit">
            Edit Item
          </button>
        ) : (
          <button className="btn" type="submit">
            Add Item
          </button>
        )}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
      <div>
        {list.map((c, id) => (
           
          <Item
            key={id} 
            id={c.id}
            item={c.item}
            list={list}
            setList={setList}
            complete={c.complete}
            setItem={setItem}
            setEdit={setEdit}
            setEditId={setEditId}
          />
        
        ))}
      </div>
    </div>
    


    <BottomNavbar />
 
    </div>

   

        </>
    
   ) }


export default List;