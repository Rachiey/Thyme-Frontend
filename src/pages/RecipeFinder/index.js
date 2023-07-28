import React, { useState } from 'react';
import axios from 'axios';
import './recipefinder.css';
import 'semantic-ui-css/semantic.min.css'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';




export const RecipeFinder = () => {

  

    const [user, setUser] = useState({username: "", email: ""});
    const username = localStorage.getItem("username")
    const navigate = useNavigate();
    
    const LoggedOut = () => {
        console.log("Log out")
        console.log(user)
        setUser({ username: "", email: ""});
        navigate('/logout')
    }

    const homeIcon = <FontAwesomeIcon icon={faHouse} />
    const profileIcon = <FontAwesomeIcon icon={faUser} />
    const ingredientsIcon = <FontAwesomeIcon icon={faUtensils} />

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
<div className="door-back">  
<div className="fridgeTitleBack"> {username}'s  &nbsp; <span style= {{color: "#31BFF3"}}> F</span>
                                            <span style= {{color: "#A484E9"}}> r</span>
                                            <span style= {{color: "#F4889A"}}> i</span>
                                            <span style= {{color: "#FFAF68"}}> d</span>
                                            <span style= {{color: "#F6E683"}}> g</span>
                                            <span style= {{color: "#79D45E"}}> e</span>
                                            </div>
                                            <div className ="logOutBox">
    <button className="logOutButton" onClick={LoggedOut}> <span style= {{color: "#FFAF68"}}> L</span>
                                            <span style= {{color: "#F6E683"}}> o</span>
                                            <span style= {{color: "#A484E9"}}> g</span>
                                            &nbsp; 
                                            <span style= {{color: "#31BFF3"}}> O</span>
                                            <span style= {{color: "#79D45E"}}> u</span>
                                            <span style= {{color: "#F4889A"}}> t</span> </button>
    </div>
    <div className="shoppingList">
      <h1 className="shoppingTitle">Recipe Finder</h1>
    </div>
    <div className="recipeBox">
    
      <input
        class="enterIngredients"
        type="text"
        value={ingredients}
        onChange={handleInputChange}
        placeholder="Enter your ingredients"
      />
      <button class="enterIngredientsButton" onClick={searchRecipes}>Find Recipes</button>

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
   


    <div className="bottomNavBar">  <Tooltip title='Home'>
      <IconButton style={{color: 'white', fontSize: '50px'}}>
      <Link to='/'>{homeIcon} </Link>
      </IconButton>
      </Tooltip>
      <Tooltip title='Profile'>
      <IconButton style={{color: 'white', fontSize: '50px'}}>
      <Link to='/profile'>{profileIcon} </Link>
      </IconButton>
    </Tooltip>  
    <Tooltip title='Ingredients'>
      <IconButton style={{color: 'white', fontSize: '50px'}}>
      <Link to='/item-info'>{ingredientsIcon} </Link>
      </IconButton>
    </Tooltip>  </div> 
 
    </div>

   

        </>
    
   ) }


export default RecipeFinder;