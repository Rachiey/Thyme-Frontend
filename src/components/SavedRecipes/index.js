import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './savedrecipes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import * as urls from '../../Urls';


export const SavedRecipes = () => {
  const username = localStorage.getItem('userName');
  const location = useLocation();
  const savedRecipeURL = new URLSearchParams(location.search).get('url');
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const userAuthToken = localStorage.getItem('token');


  const fetchSavedRecipes = () => {
    axios.get(`${urls.api}savedrecipes/${username}/`, {
      headers: {
        Authorization: `Token ${userAuthToken}`
      }
    })
      .then((response) => {
        setSavedRecipes(response.data);
      })
      .catch((error) => {
        // Handle error
      });
  };

  useEffect(() => {
    fetchSavedRecipes();
      // eslint-disable-next-line
  }, [username, userAuthToken]);

  const handleSaveRecipe = () => {
    if (savedRecipeURL) {
      const data = { url: savedRecipeURL, user: username };
  
      console.log('Sending data to the backend:', data);
  
      axios.post(`${urls.api}savedrecipes/${username}/`, data, {
        headers: {
          Authorization: `Token ${userAuthToken}`
        }
      })
        .then((response) => {
          console.log('Save recipe successful:', response.data);
          fetchSavedRecipes(); // Refresh saved recipes after saving
        })
        .catch((error) => {
          console.error('Error saving recipe:', error);
          // Handle error
        });
    }
  };
  


  // Function to handle deleting a saved recipe
 

  const handleDeleteRecipe = (index) => {
    const recipeIdToDelete = savedRecipes[index].id; // Get the ID of the recipe to delete
  
    // Replace 'path-to-your-delete-endpoint' with the actual delete endpoint
    const deleteUrl = `${urls.api}savedrecipes/${username}/${recipeIdToDelete}/`;
  
    axios
      .delete(deleteUrl, {
        headers: {
          Authorization: `Token ${userAuthToken}`
        }
      })
      .then((response) => {
        // On successful deletion, update the local state
        const updatedRecipes = savedRecipes.filter((_, i) => i !== index);
        setSavedRecipes(updatedRecipes);
        localStorage.setItem('savedRecipes', JSON.stringify(updatedRecipes));
      })
      .catch((error) => {
        // Handle any errors
        console.error('Error deleting recipe:', error);
      });
  };
  


  return (
    <>
      <div className="savedRecipesTitle">
        <h1 className="shoppingTitle">Saved Recipes</h1>
      </div>

      <div className="recipeList">
        <ul>
        {savedRecipes.map((recipe, index) => (
            <li
              className='linkUrl'
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <a href={recipe.url} target="_blank" rel="noopener noreferrer">
                {recipe.url}
              </a>
              {hoveredIndex === index && (
                <div>
                  <button
                    className="deleteRecipeButton"
                    onClick={() => handleDeleteRecipe(index)}
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </button>
    </div>
              )}
  </li>
))}

        </ul>
        {savedRecipeURL && (
          <button className="saveRecipeButton" onClick={handleSaveRecipe}>Save Recipe</button>
        )}
      </div>
    </>
  );
};

export default SavedRecipes;