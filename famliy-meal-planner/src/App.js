import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import SignUpForm from './components/SignUpForm';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <div>
            <Route path='/sign-up' component={SignUpForm} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
