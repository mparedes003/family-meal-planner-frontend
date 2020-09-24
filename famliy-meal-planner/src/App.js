import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import { Route, withRouter } from 'react-router-dom';
import './App.css';

import LandingPage from './components/LandingPage';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import AllRecipes from './components/AllRecipes';
import RecipeCard from './components/RecipeCard';
import NavBar from './components/NavBar';
import RecipeForm from './components/RecipeForm';
import { getAllRecipes, addRecipe } from './store/actions';

import { useHistory } from 'react-router-dom';

class App extends Component {
  state = {
    filteredRecipes: [],
    search: '',
    title: '',
    ingredients: [],
    quantity: '',
    measurement: '',
    name: '',
    instructions: [],
    step_number: '',
    description: '',
  };

  // fetches recipe from server and passes it to store
  componentDidMount() {
    this.props.getAllRecipes();
  }

  // handle the search change check if any of the data includes the search term
  handleSearchChange = (e) => {
    this.setState({ search: e.target.value });
    setTimeout(() => {
      const recipes = this.props.recipes.filter((recipe) => {
        return recipe.title
          .toLowerCase()
          .includes(this.state.search.toLowerCase());
      });
      this.setState({ filteredRecipes: recipes });
    }, 1);
  };

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
    this.props.history.push('/all-recipes'); // does not reload page
    // try moving handle submit to RecipeCard
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
        <NavBar
          search={this.state.search}
          handleSearchChange={this.handleSearchChange}
          recipes={
            this.state.filteredRecipes.length > 0
              ? this.state.filteredRecipes
              : this.props.recipes
          }
        />
        <Route exact path='/' component={LandingPage} />
        <Route path='/login' component={LoginForm} />
        <Route path='/register' component={SignUpForm} />
        <Route
          path='/all-recipes'
          render={(props) => (
            <AllRecipes
              recipes={
                this.state.filteredRecipes.length > 0
                  ? this.state.filteredRecipes
                  : this.props.recipes
              }
              fetchingRecipes={this.props.fetchingRecipes}
            />
          )}
        />
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
  const { titles, recipes, fetchingRecipes, addingRecipe } = state.rootReducers;
  return {
    titles: titles.recipes,
    recipes,
    fetchingRecipes: fetchingRecipes,
    addingRecipe: addingRecipe,
  };
};
export default withRouter(
  connect(mapDispatchToProps, { getAllRecipes, addRecipe })(App)
);
