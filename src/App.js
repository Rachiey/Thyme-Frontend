import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import * as Pages from './pages';

function App() {
  return (
    <>
    <Switch>
    <div className="App">
      <p>Hello world</p>
    </div>
    
    <Route exact path='/'>
            
            <Pages.Home />
          
          </Route>

    <Route path='/ingredients'>
          <Pages.Ingredients />
          <Header />
        </Route>
    </Switch>
    </>
  );
}

export default App;
