import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import * as Pages from './pages';
import { PrivateRoute, LoggedOutRoute } from './components';
import Preferences from './components/Preferences/preferences';
import useToken from './components/App/useToken';




class App extends Component {

  state = {
    isLoggedIn: false,
    currentUser: {}
}


login = async (userData) => {
  try {
      const options = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(userData)
      }
      const r = await fetch(`http://localhost:3000/auth/login`, options)
      const data = await r.json();
      if (data.err){ throw Error(data.err) }
      this.setState({ isLoggedIn: true, currentUser: data })
      this.props.history.push('./profile')
  } catch (err) {
      console.warn(`Error: ${err}`);
  }
}

logout = () => {
  this.setState({ isLoggedIn: false })
  this.props.history.push('/')
}

render() {

  return (
  
  <div className="App">
    <Router>
      <Routes>
        <Route element={<PrivateRoute />}>
            <Route element={<Pages.Home/>} path="/" exact/>
            <Route path='/item-info' element={<Pages.ItemInfo />} ></Route>
            <Route element={<Pages.List/>} path="/list"/>
            <Route element={<Pages.Ingredients/>} path="/ingredients"/>
            <Route element={<Pages.Profile/> } path="/profile"  />
            <Route element={<Pages.SavedRecipes/>} path="/savedrecipes"/>
            <Route element={<Pages.RecipeFinder/>} path="/recipefinder" />
        </Route>
        <Route element={<LoggedOutRoute />}>
        <Route element={<Pages.Login/>} path="/login"/>
        <Route element={<Pages.Register/>} path="/register"/>
        </Route>
        
        <Route element={<Pages.LogOut/>} path="/logout"/>
      </Routes>
    </Router>
  </div>

    
 
    
  );
}
}

export default App;