import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios or your preferred HTTP client library
import urls from '../../Urls'

const ItemContext = createContext();
const username = localStorage.getItem('userName');

export const useItemContext = () => {
  return useContext(ItemContext);
};

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  // Load items from the backend on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${urls.api}ingredients/api/ingredients/${username}/`);
        const ingredients = response.data;
        setItems(ingredients);
      } catch (error) {
        // Handle errors, e.g., log or show a notification
        console.error('Error fetching ingredients:', error);
      }
    };

    fetchData();
  }, []);

  // Create a function to filter items expiring soon
  const filterItemsExpiringSoon = (items) => {
    const today = new Date();
    const thresholdDays = 3; // Change this to 2 for items expiring in 2 days or less
  
    const expiringSoonItems = items.filter((item) => {
      const expiryDate = new Date(item.expiry_date);
      const diffInDays = Math.floor((expiryDate - today) / (1000 * 60 * 60 * 24));
  

      
      return diffInDays >= 0 && diffInDays <= thresholdDays;
    });
  

  
    return expiringSoonItems;
  };

  const saveItemsToLocalStorage = (items) => {
    localStorage.setItem('items', JSON.stringify(items));
  };

  return (
    <ItemContext.Provider
      value={{
        items,
        setItems,
        filterItemsExpiringSoon,
        saveItemsToLocalStorage,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

