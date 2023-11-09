import React from "react";
import "./Item.css";
import axios from "axios";
import urls from "../Urls";

const Item = ({
  id,
  item,
  list,
  setEdit,
  setEditId,
  setItem,
  setList,
  complete,
}) => {
  //Delete Item
  const username = localStorage.getItem('userName');

  const remove = async (id) => {
    try {
      // Update the local state
      setList(list.filter((el) => el.id !== id));
  
      // Send the delete request to the backend
      await axios.delete(`${urls.api}shopping-list/${username}/${id}`);
    } catch (error) {
      console.error("Error deleting shopping list item:", error);
    }
  };

  //Mark Item completed
  const handleComplete = (id) => {
    setList(
      list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            complete: !item.complete,
          };
        }
        return item;
      })
    );
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
        value={item}
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