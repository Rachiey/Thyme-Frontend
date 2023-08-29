import React, { createContext, useContext, useState, useEffect } from 'react';

const ItemContext = createContext();

export const useItemContext = () => {
  return useContext(ItemContext);
};

export const ItemProvider = ({ children }) => {
    const initialItems = JSON.parse(localStorage.getItem('items')) || [];

    const [items, setItems] = useState(initialItems);

  // Load items from local storage on component mount
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem('items'));
    if (savedItems) {
      setItems(savedItems);
    }
  }, []);

  // Create a function to filter items expiring soon
  const filterItemsExpiringSoon = (items) => {
    const today = new Date();
    const thresholdDays = 7; // You can adjust this threshold as needed

    return items.filter((item) => {
      // Parse the item's expiryDate as a Date object
      const expiryDate = new Date(item.expiryDate);

      // Calculate the difference in days between today and the expiry date
      const diffInDays = Math.floor((expiryDate - today) / (1000 * 60 * 60 * 24));

      // Filter items that expire within the threshold
      return diffInDays >= 0 && diffInDays <= thresholdDays;
    });
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