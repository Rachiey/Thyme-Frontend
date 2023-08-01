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
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Pages.Register />} />
          <Route path="/logout" element={<LoggedOutRoute />} />


          <Route
            path="/"
            element={
              <PrivateRoute>
                {/* Nested child routes */}
                <Route index element={<Pages.Home />} />
                <Route path="/list" element={<Pages.List />} />
                <Route path="/profile" element={<Pages.Profile />} />
                <Route path="/savedrecipes" element={<Pages.SavedRecipes />} />
                <Route path="/recipefinder" element={<Pages.RecipeFinder />} />
                <Route path="/item-info" element={<Pages.ItemInfo />} />
                {/* Add other private routes */}
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;