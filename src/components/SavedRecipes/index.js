import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './savedrecipes.css';

export const SavedRecipes = () => {
  const location = useLocation();
  const savedRecipeURL = new URLSearchParams(location.search).get('url');
  const [savedRecipes, setSavedRecipes] = useState([]);

  // Load saved recipes from session when the component mounts
  useEffect(() => {
    const savedRecipesFromSession = JSON.parse(sessionStorage.getItem('savedRecipes')) || [];
    setSavedRecipes(savedRecipesFromSession);
  }, []);

  // Function to handle saving a recipe to session
  const handleSaveRecipe = () => {
    if (savedRecipeURL) {
      const updatedRecipes = [...savedRecipes, savedRecipeURL];
      setSavedRecipes(updatedRecipes);
      sessionStorage.setItem('savedRecipes', JSON.stringify(updatedRecipes));
    }
  };

  // Function to handle deleting a saved recipe
  const handleDeleteRecipe = (index) => {
    const updatedRecipes = [...savedRecipes];
    updatedRecipes.splice(index, 1); // Remove the recipe at the specified index
    setSavedRecipes(updatedRecipes);
    sessionStorage.setItem('savedRecipes', JSON.stringify(updatedRecipes));
  };

  return (
    <>
      <div className="savedRecipesTitle">
        <h1 className="shoppingTitle">Saved Recipes</h1>
      </div>

      <div className="recipeList">
        <ul>
          {savedRecipes.map((recipeURL, index) => (
            <li key={index}>
              <a href={recipeURL} target="_blank" rel="noopener noreferrer">
                {recipeURL}
              </a>
              <div>
              <button className="deleteRecipeButton" onClick={() => handleDeleteRecipe(index)}>Delete</button></div>
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


// import React, {useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import 'semantic-ui-css/semantic.min.css'
// import './savedrecipes.css';
// import 'semantic-ui-css/semantic.min.css'





// export const SavedRecipes = () => {

  
//     const location = useLocation();
//     const savedRecipeURL = new URLSearchParams(location.search).get('url');
//     const [savedRecipes, setSavedRecipes] = useState([]);

//       // Load saved recipes from session when the component mounts
//   useEffect(() => {
//     const savedRecipesFromSession = JSON.parse(sessionStorage.getItem('savedRecipes')) || [];
//     setSavedRecipes(savedRecipesFromSession);
//   }, []);

//    // Function to handle saving a recipe to session
//    const handleSaveRecipe = () => {
//     if (savedRecipeURL) {
//       const updatedRecipes = [...savedRecipes, savedRecipeURL];
//       setSavedRecipes(updatedRecipes);
//       sessionStorage.setItem('savedRecipes', JSON.stringify(updatedRecipes));
//     }
//   };

  

    
//     return (

//         <>


//     <div className="savedRecipesTitle">
//       <h1 className="shoppingTitle">Saved Recipes</h1>
//     </div>

//     <div className= "recipeList">
//       <ul>
//         {savedRecipes.map((recipeURL, index) => (
//           <li key={index}>
//             <a href={recipeURL} target="_blank" rel="noopener noreferrer">
//               {recipeURL}
//             </a>
//           </li>
//         ))}
//       </ul>
//       {savedRecipeURL && (
//         <button className="saveRecipeButton" onClick={handleSaveRecipe}>Save Recipe</button>
//       )}
//     </div>
   


  
 
    
   

//         </>
    
//    ) }


// export default SavedRecipes;