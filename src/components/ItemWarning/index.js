import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the default styles
import { useEffect } from 'react';

const ItemWarning = ({ item }) => {
  useEffect(() => {
    const handleButtonClick = (event) => {
      // Your logic here
      event.preventDefault();
      toast.dismiss(`warning_${item.id}`);
    };

    if (item.expiresIn === 'eat today') {
      toast.warning(`Item '${item.text}' expires today! Use it soon!`, {
        position: toast.POSITION.TOP_CENTER,
        toastId: `warning_${item.id}`, // Use a custom toastId
      });
    } else if (item.expiresIn === 'expires tomorrow') {
      toast.warning(`Item '${item.text}' expires tomorrow!`, {
        position: toast.POSITION.TOP_CENTER,
        toastId: `warning_${item.id}`, // Use a custom toastId
      });
    }

    // Attach an event listener for the "x" button
    const closeButton = document.querySelector(`#warning_${item.id} .Toastify__close-button`);

    if (closeButton) {
      closeButton.addEventListener('click', handleButtonClick, { passive: false });
    }

    // Cleanup: remove the event listener when the component unmounts
    return () => {
      if (closeButton) {
        closeButton.removeEventListener('click', handleButtonClick);
      }
    };
  }, [item]);

  return null;
};

export default ItemWarning;
