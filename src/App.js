import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import * as Pages from './pages';
import { PrivateRoute, LoggedOutRoute } from './components/';
import Login from './components/LoginForm/LoginForm';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
{/*         
          <Route element={<PrivateRoute />}> */}
            <Route element={<Pages.Home />} path="/" />
            <Route element={<Pages.ItemInfo />} path="/item-info" />
            <Route element={<Pages.List />} path="/list" />
            <Route element={<Pages.Profile />} path="/profile" />
            <Route element={<Pages.SavedRecipes />} path="/savedrecipes" />
            <Route element={<Pages.RecipeFinder />} path="/recipefinder" />
          {/* </Route> */}
          <Route element={<LoggedOutRoute />}>
            <Route element={<Login />} path="/login" />
            <Route element={<Pages.Register />} path="/register" />
          </Route>
          <Route element={<Pages.LogOut />} path="/logout" />
        </Routes>
      </Router>
    </div>
  );
};

export default App;