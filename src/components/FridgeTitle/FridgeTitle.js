import React from 'react';

const FridgeTitle = ({ username, onLogout }) => {
  return (
    <div className="fridgeTitle">
      {username}'s fridge&nbsp;
      <span style={{ color: '#31BFF3' }}> F</span>
      <span style={{ color: '#A484E9' }}> r</span>
      <span style={{ color: '#F4889A' }}> i</span>
      <span style={{ color: '#FFAF68' }}> d</span>
      <span style={{ color: '#F6E683' }}> g</span>
      <span style={{ color: '#79D45E' }}> e</span>
      <button className="logOutButton" onClick={onLogout}>
        <span style={{ color: '#FFAF68' }}> L</span>
        <span style={{ color: '#F6E683' }}> o</span>
        <span style={{ color: '#A484E9' }}> g</span>
        &nbsp;
        <span style={{ color: '#31BFF3' }}> O</span>
        <span style={{ color: '#79D45E' }}> u</span>
        <span style={{ color: '#F4889A' }}> t</span>
      </button>
    </div>
  );
};

export default FridgeTitle;
