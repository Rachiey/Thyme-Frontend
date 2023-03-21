import React from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import * as Pages from './pages';
import Dashboard from './components/Dashboard/dashboard';
import Login from './components/Login/Login';
import Preferences from './components/Preferences/preferences';
import useToken from './components/App/useToken';



function App() {

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }


  return (
    
    <div className="App">
   
      <Routes>
        <Route exact path='/' element={<Pages.Home />}></Route>
        <Route path='/ingredients' element={<Pages.Ingredients />} ></Route>
        <Route path='/shelf' element={<Pages.Shelf/>}></Route>
        <Route path='/login' element={<Pages.Login />} />
        <Route path='/register' element={<Pages.Register />} />
        <Route path='/logout' element={<Pages.LogOut />} />
        <Route path='/profile' element={<Pages.Profile />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/recipes' element={<Pages.Recipes />} />
        <Route path='/preferences' element={<Preferences/>} />

        {/* <Route path='*' element={<p>nothing to see here</p>} /> */}
        <Route path='*' element={<Pages.NotFoundPage />}/>
                   
      </Routes>
    </div>
    
  );
}

export default App;