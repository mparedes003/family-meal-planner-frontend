import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import UserDashboard from './components/UserDashboard';
import RecipeCard from './components/RecipeCard';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <div>
            <NavBar />
            <Route exact path='/' component={LoginForm} />
            <Route path='/register' component={SignUpForm} />
            <Route path='/dashboard' component={UserDashboard} />
            <Route path='/recipes/:id' component={RecipeCard} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
