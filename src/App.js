import React from 'react';
import * as Pages from './pages';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Pages.Home />} />
          <Route path='/login' element={<Pages.Login />} />
          <Route path='/register' element={<Pages.Register />} />

          <Route path='*' element={<p>nothing to see here</p>} />
      </Routes>
    </div>
  );
}

export default App;
