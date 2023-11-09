import React, { useEffect } from 'react';
import "./Item.css";
import axios from "axios";
import urls from "../Urls";

const Item = ({ id, item, list, setList, setEdit, setEditId, setItem, complete }) => {
  // Fetch the initial state from localStorage when the component mounts
  useEffect(() => {
    const storedList = localStorage.getItem('shoppingList');
    if (storedList) {
      setList(JSON.parse(storedList));
    }
  }, [setList]);


  //Delete Item
  const username = localStorage.getItem('userName');

  const remove = async (id) => {
    try {
      // Update the local state
      const updatedList = list.filter((el) => el.id !== id);
      setList(updatedList);
  
      // Update the list in localStorage
      localStorage.setItem('shoppingList', JSON.stringify(updatedList));
  
      // Send the delete request to the backend
      await axios.delete(`${urls.api}shopping-list/${username}/${id}`);
    } catch (error) {
      console.error("Error deleting shopping list item:", error);
    }
  };

  //Mark Item completed
const handleComplete = (id) => {
  setList((prevList) => {
    const updatedList = prevList.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          complete: !item.complete,
        };

        // Update the completion status in localStorage
        const storedList = JSON.parse(localStorage.getItem('shoppingList')) || [];
        const updatedStoredList = storedList.map((storedItem) =>
          storedItem.id === id ? updatedItem : storedItem
        );
        localStorage.setItem('shoppingList', JSON.stringify(updatedStoredList));

        return updatedItem;
      }
      return item;
    });

    return updatedList;
  });
};

  //Edit Item
  const handleItem = (id) => {
    console.log('Editing item with id:', id);
    const editItem = list.find((el) => el.id === id);
    setItem(editItem.item);
    setEdit(true);
    setEditId(id);
  };

  const handleInputChange = (e) => {
    // Update the item value in the parent component using setItem
    setItem(e.target.value);
  };


  return (
    <div className="item">
     <input
        type="text"
        value={item} // Use the item prop here
        style={{
          border: "none",
          outline: "none",
          backgroundColor: "transparent",
          color: "white",
          fontSize: "20px",
          fontFamily: "Permanent Marker",
        }}
        className={complete ? "complete" : ""}
        onChange={handleInputChange}
      />
      <img
        style={{ cursor: "pointer" }}
        src="https://img.icons8.com/emoji/36/000000/pencil-emoji.png"
        onClick={() => {
          const confirmBox = window.confirm("Do you want to edit this item?");
          if (confirmBox === true) {
            handleItem(id);
          }
        }}
        alt="edit item"
      />
      <img
        style={{ cursor: "pointer" }}
        onClick={() => handleComplete(id)}
        src="https://img.icons8.com/offices/40/000000/checked-2--v2.png"
        alt="mark item complete"
      />

      <img
        style={{ cursor: "pointer" }}
        onClick={() => {
          const confirmBox = window.confirm(
            "Are you sure you want to delete this item?"
          );
          if (confirmBox === true) {
            remove(id);
          }
        }}
        src="https://img.icons8.com/color/48/000000/trash.png"
        alt="delete item"
      />
    </div>
  );
};
export default Item;