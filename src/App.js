import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import * as Pages from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Pages.Home />}></Route>
        <Route path='/ingredients' element={<Pages.Ingredients/>}></Route>
        <Route path='/shelf' element={<Pages.Shelf/>}></Route>
      </Routes>
    </>
  );
}

export default App;
