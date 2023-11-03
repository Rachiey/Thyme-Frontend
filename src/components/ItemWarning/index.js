import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the default styles
import { useEffect } from 'react';

const ItemWarning = ({ item }) => {
  useEffect(() => {
    if (item.expiresIn === 'eat today') {
      toast.warning(`Item '${item.text}' expires today! Eat soon!`, {
        position: toast.POSITION.TOP_CENTER,
        toastId: `warning_${item.id}`, // Use a custom toastId
      });
    } else if (item.expiresIn === 'expires tomorrow') {
      toast.warning(`Item '${item.text}' expires tomorrow!`, {
        position: toast.POSITION.TOP_CENTER,
        toastId: `warning_${item.id}`, // Use a custom toastId
      });
    }
  }, [item]);

  return null;
};

export default ItemWarning;
