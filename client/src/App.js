import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from './Components/Nav';

import SearchPage from './Pages/SearchPage';
import SavedPage from './Pages/SavedPage';


import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="root">
        
          <Nav />

          <div className="container">
          <Switch>
            <Route exact path="/" component={SearchPage} />
            <Route exact path="/saved" component={SavedPage} />
        
            {/* <Route component={NoMatch}/> */}

          </Switch>      
          
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
