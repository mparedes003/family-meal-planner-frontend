import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import { Route, withRouter } from 'react-router-dom';
import './App.css';

import LandingPage from './components/LandingPage';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import UserDashboard from './components/UserDashboard';
import RecipeCard from './components/RecipeCard';
import NavBar from './components/NavBar';
import RecipeForm from './components/RecipeForm';
import { addRecipe } from './store/actions';

class App extends Component {
  // state = {
  //   title: '',
  //   ingredients: [],
  //   quantity: '',
  //   measurement: '',
  //   name: '',
  //   instructions: [],
  //   step_number: '',
  //   description: '',
  // };

  // // fetches recipe from server and passes it to store
  // componentDidMount() {
  //   this.props.getRecipe(this.id);
  // }

  handleSubmit = (values) => {
    const newRecipe = {
      title: values.title,
      ingredients: values.ingredients.map((ingredient) => ({ ...ingredient })),
      instructions: values.instructions.map((instruction) => ({
        ...instruction,
      })),
    };
    // // console.log('newRecipe data', this.props.history);
    console.log('newRecipe data', newRecipe);
    this.props.addRecipe(newRecipe);
    this.props.history.push('/dashboard');
  };

  render() {
    // let {
    //   title,
    //   quantity,
    //   measurement,
    //   name,
    //   ingredients,
    //   step_number,
    //   description,
    //   instructions,
    // } = this.state;
    return (
      <div className='App'>
        <NavBar />
        <Route exact path='/' component={LandingPage} />
        <Route path='/login' component={LoginForm} />
        <Route path='/register' component={SignUpForm} />
        <Route path='/dashboard' component={UserDashboard} />
        <Route
          path='/recipes/:id'
          render={(props) => <RecipeCard {...props} />}
        />
        <Route
          path='/recipe/add'
          render={(props) => <RecipeForm onSubmit={this.handleSubmit} />}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (state) => {
  return {
    // recipe: state.recipe,
    // fetchingRecipe: state.fetchingRecipe,
    addingRecipe: state.rootReducers.addingRecipe,
  };
};
export default withRouter(connect(mapDispatchToProps, { addRecipe })(App));
