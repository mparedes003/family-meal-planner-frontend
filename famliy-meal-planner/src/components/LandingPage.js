import React from 'react';
import LoginForm from './LoginForm';
import './LandingPage.css';
import logo from '../assets/LogoMakr-6kl52X.png';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { getAllRecipes } from '../store/actions';

class LandingPage extends React.Component {
  render() {
    return (
      <div className='landing-page'>
        <div className='landing-page-background'>
          <div className='landing-page-header'>
            <div className='landing-welcome'>
              <h2>Welcome to</h2>
            </div>
            <div className='landing-site-name'>
              <img className='landing-logo' src={logo} />
              {/* <h1>Mommy's Kitchen</h1> */}
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
