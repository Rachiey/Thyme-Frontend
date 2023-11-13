import React, { useEffect, useState } from 'react';
// import { v4 as uuidv4 } from "uuid";
import Item from "../../components/Item";
import './shoppinglist.scss';
import 'semantic-ui-css/semantic.min.css'
import { useNavigate } from 'react-router'
import BottomNavbar from '../../components/BottomNavbar/BottomNavbar'; 
import axios from 'axios';
import * as urls from '../../Urls';




export const List = () => {

  
    const navigate = useNavigate();
    const username = localStorage.getItem('userName');
    const handleLogout = () => {
      // Reset the local storage session and navigate to the login page
      localStorage.removeItem('isLoggedIn');
      navigate('/login');
    };

    const fetchShoppingList = React.useCallback(() => {
      return axios.get(`${urls.api}shopping-list/${username}/`);
    }, [username]);

 
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetchShoppingList();
          const shoppingList = response.data;
    
          // Retrieve completion status from local storage
          const storedList = JSON.parse(localStorage.getItem('shoppingList')) || [];
          const mergedList = shoppingList.map((item) => {
            const storedItem = storedList.find((stored) => stored.id === item.id);
            const complete = storedItem ? storedItem.complete : false; // Set to false if undefined
            return { ...item, complete };
          });
    
          console.log("MergedList:", mergedList);
    
          setList(mergedList);
        } catch (error) {
          console.error("Error fetching shopping list:", error);
        }
      };
    
      fetchData();
    }, [fetchShoppingList, username]);
    
        const [item, setItem] = useState("");
        const [edit, setEdit] = useState(false);
        const [editId, setEditId] = useState();
        const [list, setList] = useState([]);
        const [error, setError] = useState("");

        useEffect(() => {
          const fetchData = async () => {
            try {
              const response = await fetchShoppingList();
              const shoppingList = response.data;
              setList(shoppingList);
            } catch (error) {
              console.error("Error fetching shopping list:", error);
            }
          };
        
          fetchData();
        }, [fetchShoppingList, username]);

        const handleAddItem = async () => {
          try {
            // Declare newItem (replace this with your actual logic for creating a new item)
            const newItem = {
              item: item,
              complete: false,
            };
        
            // Make the API call to add the item
            const response = await axios.post(`${urls.api}shopping-list/${username}/`, {
              item: newItem.item,
              // add other properties as needed
            });
        
            // Update the local state with the item received from the backend
            const addedItem = response.data;
            setList([...list, addedItem]);
        
            // Update the list in localStorage
            localStorage.setItem('shoppingList', JSON.stringify([...list, addedItem]));
        
            // Clear the input field
            setItem("");
          } catch (error) {
            console.error("Error adding shopping list item:", error);
          }
        };
        
        
        // Function to handle the editing of an existing item
        const handleEditItem = async () => {
          try {
            // Perform validation checks
            if (item && item.length <= 25 && editId) {
              // Update the local state for editing
              setList(
                list.map((el) => (el.id === editId ? { ...el, item: item } : el))
              );
              setItem("");
              setEditId(null);
              setEdit(false);
              setError("");
        
              // Send the edited item to the backend
              await axios.put(`${urls.api}shopping-list/${username}/${editId}/`, {
                item: item,
              });

            } else {
              // Handle validation errors or missing editId
              if (!item) setError("Item cannot be blank.");
              else if (item.length > 25) setError("Character limit is 25.");
              else setError("Edit ID is missing.");
            }
          } catch (error) {
            console.error("Error editing shopping list item:", error);
          }
        };
        
        // Common function for form submission
        const handleSubmit = (e) => {
          e.preventDefault();
          if (edit && editId) {
            // If in edit mode, call the edit function
            handleEditItem();
          } else {
            // If not in edit mode, call the add item function
            handleAddItem();
          }
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
    <div className="fridgeTitleBack"> {username}'s  &nbsp; <span style={{ color: '#9023d9' }}> F</span>
            <span style={{ color: '#ffe524' }}> r</span>
            <span style={{ color: '#ff0808' }}> i</span>
            <span style={{ color: '#0aa614' }}> d</span>
            <span style={{ color: '#9023d9' }}> g</span>
            <span style={{ color: '#ff0808' }}> e</span>
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
      <h1 className="shoppingListTitle"> Shopping List</h1>
  
      <form onSubmit={handleSubmit}>
        <input
          className="shoppingInput"
          type="text"
          value={item}
          placeholder="Add to your list"
          onChange={handleChange}
        />
        
        {edit ? (
          <button className="addItemBtn" type="submit">
            Edit Item
          </button>
        ) : (
          <button className="addItemBtn" type="submit">
            Add Item
          </button>
        )}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
      
      <div className="listBox">
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