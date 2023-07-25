import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import * as Pages from './pages';
import { PrivateRoute, LoggedOutRoute } from './components';




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

    
    
    // <div className="App">
    //   <Router>

    //   <Routes>
    //     <Route element={<PrivateRoute />}>
    //       <Route element={<Pages.Home/>} path ="/" exact/>
    //       <Route element={<Pages.Profile/>} path ="/profile" />
    //       <Route element={<Pages.Recipes/>} path ="/recipes" />
    //       <Route element={<Pages.Ingredients/>} path ="/ingredients" />
    //     </Route>
    //   {/* <Route exact path='/' component={()=> <Pages.Home login={this.login}/>} /> */}

    //     {/* <Route path='/ingredients' element={<Pages.Ingredients />} ></Route>
    //     <Route path='/shelf' element={<Pages.Shelf/>}></Route> */}
    //     {/* <LoggedOutRoute path='/login' isLoggedIn={this.state.isLoggedIn} component={()=> <Pages.Login login={this.login}/>} /> */}
    //     {/* <Route path='/login' element={<Pages.Login />} /> */}
    //     {/* <Route path='/register' element={<Pages.Register />} /> */}
    //     {/* <LoggedOutRoute path='/register' isLoggedIn={this.state.isLoggedIn} element={<Pages.Register/>} />  */}
    //     {/* <Route path='/logout' element={<Pages.LogOut />} /> */}
    //     {/* <PrivateRoute path='/profile' isLoggedIn={this.state.isLoggedIn} component={()=> <Pages.Profile user={this.state.currentUser}/>} /> */}
    //     {/* <Route path='/profile' element={<Pages.Profile />} /> */}
    //     {/* <Route path='/recipes' element={<Pages.Recipes />} /> */}
        

    //     {/* <Route path='*' element={<p>nothing to see here</p>} /> */}
    //     {/* <Route path='*' element={<Pages.NotFoundPage />}/> */}
                   
    //   </Routes>
    //   </Router>
    
    // </div>
    
  );
}
}

export default App;