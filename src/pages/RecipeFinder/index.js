import React, {useState} from 'react';
import axios from 'axios';
import './recipefinder.css';
import 'semantic-ui-css/semantic.min.css'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'


import BottomNavbar from '../../components/BottomNavbar/BottomNavbar'; 



export const RecipeFinder = () => {


    const username = localStorage.getItem("username")
    const navigate = useNavigate();
    
    const handleLogout = () => {
      // Reset the local storage session and navigate to the login page
      localStorage.removeItem('isLoggedIn');
      navigate('/login');
    };


    const [ingredients, setIngredients] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleInputChange = (e) => {
    setIngredients(e.target.value);
  };

  const searchRecipes = async () => {
    const appId = 'ee012a65';
    const appKey = '2f95ba7f90bafcbddc6bbf5d1f61c15b';
    const apiUrl = `https://api.edamam.com/search?q=${encodeURIComponent(
      ingredients
    )}&app_id=${appId}&app_key=${appKey}`;

    try {
        const response = await axios.get(apiUrl);
        setRecipes(response.data.hits);
      } catch (error) {
        console.error('Error fetching recipes:', error);
        setRecipes([]);
      }

    

};

 


    
    return (

        <>
       
<div className="recipeFinderBackground">  
<div className="fridgeTitleBack"> {username}'s  &nbsp;    <span style={{ color: '#9023d9' }}> F</span>
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
      <h1 className="shoppingTitle">Recipe Finder</h1>
      <div className="recipeBox">
    
    <input
      className="enterIngredients"
      type="text"
      value={ingredients}
      onChange={handleInputChange}
      placeholder="Enter your ingredients"
    />
    <button className="enterIngredientsButton" onClick={searchRecipes}>Find Recipes</button>

    <h2 className="recipeTitle">Recipes</h2>
    <ul>
    {recipes.slice(0, 5).map((recipe) => (
        <li key={recipe.recipe.uri}>
          <div>
            <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">
              {recipe.recipe.label}
            </a>
          </div>
          <div>
            <button className="saveRecipeButton">
              <Link to={`/profile?url=${encodeURIComponent(recipe.recipe.url)}`}>
                Save Recipe
              </Link>
            </button>
          </div>
        </li>
      ))}
    </ul>
  </div>
    </div>
 
   

    <BottomNavbar />
 
    </div>

   

        </>
    
   ) }


export default RecipeFinder;