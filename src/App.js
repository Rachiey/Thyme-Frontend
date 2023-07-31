import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import * as Pages from './pages';
import { PrivateRoute, LoggedOutRoute } from './components/index';
import Login from './components/LoginForm/LoginForm';


const App = () => {
  return (
    <div className="App">
      <Router>
      <Routes>
          {/* Public Routes */}
          <Route element={<Login />} path="/login" />
          <Route element={<Pages.Register />} path="/register" />
          <Route element={<LoggedOutRoute />} path="/logout" />

          {/* Private Routes */}
          <Route exact path='/' element={<PrivateRoute/>}>
            <Route exact path='/' element={<Pages.Home/>}/>
            </Route>
          <PrivateRoute path="/list" element={<Pages.List />} />
          <PrivateRoute path="/profile" element={<Pages.Profile />} />
          <PrivateRoute path="/savedrecipes" element={<Pages.SavedRecipes />} />
          <PrivateRoute path="/recipefinder" element={<Pages.RecipeFinder />} />
          <PrivateRoute path="/item-info" element={<Pages.ItemInfo />} />
          {/* Add other private routes */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;