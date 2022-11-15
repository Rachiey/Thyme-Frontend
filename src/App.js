import React from 'react';
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Home />} />

          <Route path='*' element={<p>nothing to see here</p>} />
      </Routes>
    </div>
  );
}

export default App;
