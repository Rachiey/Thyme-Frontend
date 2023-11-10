import React, { useState, useEffect } from 'react';
import './home.scss';
import { Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import profilepic from '../Home/images/profilepic.png';
import fridgemagnet from '../Home/images/fridgemagnet.png';
import note from '../Home/images/note.png';
import fridgehandle from '../Home/images/fridgehandle.png';
import thymesuplogo from '../Home/images/thymesup.png';
import recipeimage from '../Home/images/recipe.png';
import { useNavigate } from 'react-router';
import Tooltip from '@mui/material/Tooltip';


export const Home = () => {
  const [username, setUsername] = useState(localStorage.getItem('userName'));
  const navigate = useNavigate();

  useEffect(() => {
    // Update the username when it changes in localStorage
    setUsername(localStorage.getItem('userName'));
   
  }, []);

  const handleLogout = () => {
    // Reset the local storage session and navigate to the login page
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    setUsername(null); // Clear the username state
    navigate('/login');
  };

  const fridgeTitle = username ? `${username}'s` : "Thyme's Up";

  return (
    <>
      <div className="door">
        <div className="door-front">
          <div className="fridgeTitle">
            {fridgeTitle} &nbsp;{' '}
            <span style={{ color: '#9023d9' }}> F</span>
            <span style={{ color: '#ffe524' }}> r</span>
            <span style={{ color: '#ff0808' }}> i</span>
            <span style={{ color: '#0aa614' }}> d</span>
            <span style={{ color: '#9023d9' }}> g</span>
            <span style={{ color: '#ff0808' }}> e</span>
          </div>

          <div className="fridgeRow">
          <div className="logo">
              <img src={thymesuplogo} alt="thyme's up logo" style={{ height: '180px'}} />
            </div>
            <div className="fridgeHandle">
              {' '}
              <img src={fridgehandle} alt="fridge handle" style={{ height: '200px' }} />{' '}
            </div>
            <div className="fridgeMagnet">
              <img src={fridgemagnet} alt="fridge magnet" style={{ height: '150px', marginRight: '150px', marginTop: '20px' }} />
            </div>
           
          </div>

        </div>
        <div className="door-back">
         <div className="fridgeTitleBack">
            {fridgeTitle} &nbsp; <span style={{ color: '#9023d9' }}> F</span>
            <span style={{ color: '#ffe524' }}> r</span>
            <span style={{ color: '#ff0808' }}> i</span>
            <span style={{ color: '#0aa614' }}> d</span>
            <span style={{ color: '#9023d9' }}> g</span>
            <span style={{ color: '#ff0808' }}> e</span>
          </div>

          <button className="logOutButton" onClick={handleLogout}>
            {' '}
            <span style={{ color: '#FFAF68' }}> L</span>
            <span style={{ color: '#F6E683' }}> o</span>
            <span style={{ color: '#A484E9' }}> g</span>
            &nbsp;
            <span style={{ color: '#31BFF3' }}> O</span>
            <span style={{ color: '#79D45E' }}> u</span>
            <span style={{ color: '#F4889A' }}> t</span>{' '}
          </button>

          <div className="ingredientsTitle">  <span style={{ color: '#9023d9' }}> I</span>
            <span style={{ color: '#ffe524' }}> N</span>
            <span style={{ color: '#ff0808' }}> G</span>
            <span style={{ color: '#0aa614' }}> R</span>
            <span style={{ color: '#9023d9' }}> E</span>
            <span style={{ color: '#ff0808' }}> D</span>
            <span style={{ color: '#ffe524' }}> I</span>
            <span style={{ color: '#ff0808' }}> E</span>
            <span style={{ color: '#0aa614' }}> N</span>
            <span style={{ color: '#9023d9' }}> T</span>
            <span style={{ color: '#ff0808' }}> S</span></div>
          <div>
            {' '}
            <Link to="/ingredients">
              <div className="fridgeShelves">
                <div className="homeShelfOne">
                  <div className="carrot">
                    {' '}
                    <img style={{ objectFit: 'fill' }} src={require('../Ingredients/images/carrot.png')} alt="carrot" />{' '}
                  </div>
                  <div className="cheese">
                    {' '}
                    <img style={{ objectFit: 'fill' }} src={require('../Ingredients/images/cheese.png')} alt="cheese" />{' '}
                  </div>
                  <div className="milk">
                    {' '}
                    <img style={{ objectFit: 'fill' }} src={require('../Ingredients/images/milk.png')} alt="milk" />{' '}
                  </div>
                </div>
                <div className="homeShelfTwo">
                  <div className="broccoli">
                    {' '}
                    <img style={{ objectFit: 'fill' }} src={require('../Ingredients/images/broccoli.png')} alt="carrot" />{' '}
                  </div>
                  <div className="orangeJuice">
                    {' '}
                    <img style={{ objectFit: 'fill' }} src={require('../Ingredients/images/orange juice.png')} alt="cheese" />{' '}
                  </div>
                  <div className="tomato">
                    {' '}
                    <img style={{ objectFit: 'fill' }} src={require('../Ingredients/images/tomato.png')} alt="milk" />{' '}
                  </div>
                </div>
              </div>{' '}
            </Link>

            <div className="bottomFridge">
              <div className="note">
                {' '}
                <Link to="/list" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                <img className="notePic" src={note} alt="post it note" />{' '}</Link>
                <div className="noteWriting">
                  <div className="recipeEggs">
                    {' '}
                    <Link to="/list" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                      Eggs{' '}
                    </Link>
                  </div>
                  <div className="recipeMilk">
                    {' '}
                    <Link to="/list" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                      Milk{' '}
                    </Link>
                  </div>
                  <div className="recipeTextButton">
                    {' '}
                    <Link to="/list" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                      Shopping List
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="recipeimage">
                {' '}
                <Tooltip title="Recipes">
    
                <Link to="/recipefinder">
                  <img className="recipeimage" src={recipeimage} alt="recipe book" style={{ width: '120px' }}  />{' '}
                </Link>
                </Tooltip>
              </div>

              <div className="profilePic">
                {' '}
                <Link to="/profile">
                  <img src={profilepic} alt="polaroid photos" style={{ height: '150px' }} />{' '}
                </Link>
    <div className="profilePicButton"> <Link to="/profile" style={{ color: 'inherit', textDecoration: 'inherit'}}>Profile </Link></div></div></div></div>
    </div></div>

        </>
    
   ) }


export default Home;