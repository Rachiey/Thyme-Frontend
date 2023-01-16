import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import * as Pages from './pages';

function App() {
  return (
    
    <div className="App">
   
      <Routes>
        <Route exact path='/' element={<Pages.Home />}></Route>
        <Route path='/ingredients' element={<Pages.Ingredients/>}></Route>
        <Route path='/shelf' element={<Pages.Shelf/>}></Route>
        <Route path='/login' element={<Pages.Login />} />
        <Route path='/register' element={<Pages.Register />} />
        <Route path='/logout' element={<Pages.LogOut />} />
        <Route path='/profile' element={<Pages.Profile />} />

        {/* <Route path='*' element={<p>nothing to see here</p>} /> */}
        <Route path='*' element={<Pages.NotFoundPage />}/>
                   
      </Routes>
    </div>
    
  );
}

export default App;