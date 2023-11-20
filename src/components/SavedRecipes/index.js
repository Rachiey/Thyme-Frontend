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

  // Load saved recipes from session when the component mounts
  const fetchSavedRecipes = () => {
    axios.get(`${urls.api}savedrecipes/${username}/`)
      .then((response) => {
        setSavedRecipes(response.data);
      })
      .catch((error) => {
        // Handle error
      });
  };

  // Function to handle saving a recipe to session
  const handleSaveRecipe = () => {
    if (savedRecipeURL) {
      axios.post(`${urls.api}savedrecipes/`, { url: savedRecipeURL, user: username})
        .then((response) => {
          // Handle successful save
          fetchSavedRecipes(); // Refresh saved recipes after saving
        })
        .catch((error) => {
          // Handle error
        });
    }
  };

  // Function to handle deleting a saved recipe
  const handleDeleteRecipe = (index) => {
    const updatedRecipes = [...savedRecipes];
    updatedRecipes.splice(index, 1); // Remove the recipe at the specified index
    setSavedRecipes(updatedRecipes);
    localStorage.setItem('savedRecipes', JSON.stringify(updatedRecipes));
  };


  useEffect(() => {
    fetchSavedRecipes(); // Fetch saved recipes when component mounts
  }, []);


  return (
    <>
      <div className="savedRecipesTitle">
        <h1 className="shoppingTitle">Saved Recipes</h1>
      </div>

      <div className="recipeList">
        <ul>
          {savedRecipes.map((recipeURL, index) => (
            <li className='linkUrl' key={index}>
              <a href={recipeURL} target="_blank" rel="noopener noreferrer">
                {recipeURL}
              </a>
              <div>
              <button className="deleteRecipeButton" onClick={() => handleDeleteRecipe(index)}><FontAwesomeIcon icon={faTrashCan} /></button></div>
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