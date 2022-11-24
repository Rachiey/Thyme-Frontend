import React from 'react';
import './Ingredients.css';
// import './Ingredients/fonts/AlphaFridgeMagnets.ttf';

//import { Link } from 'react-router-dom';





export const Ingredients = () => {

return (
    <>
    
    <div className="iphoneContainer"> 
    <div className="iphoneBackground"> 
    <div className="fridgeTitle"> Username's Fridge </div>
    <div className="shelfOne"></div>
    <div className="shelfTwo"></div>
    <div className="shelfThree"></div>
    <div className="shelfFour">
        <div className="addButton">+</div>
    </div>
    <div className="bottomMenu">
        <div className="homeButton"></div>
        <div className="recipeButton"></div>
        <div className="profileButton"></div>
    </div>
    </div>
    </div>
        </>
)
}

export default Ingredients;