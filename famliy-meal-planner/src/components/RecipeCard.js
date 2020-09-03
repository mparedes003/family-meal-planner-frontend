import React from 'react';
import { connect } from 'react-redux';
import { getRecipe } from '../store/actions';

class RecipeCard extends React.Component {
  // sets recipe id to this.id
  get id() {
    console.log('ID', this.props.match.params.id);

    return this.props.match.params.id;
  }

  // fetches recipe from server and passes it to store
  componentDidMount() {
    this.props.getRecipe(this.id);
  }

  render() {
    return (
      <div className='recipe-view-wrapper'>
        {console.log('this', this.props)}
        <h1>Recipe Card</h1>
        <h2>{this.props.recipe.title}</h2>
        <h3>Ingredients</h3>
        {this.props.recipe.ingredients &&
          this.props.recipe.ingredients.map((ingredient) => (
            <div>
              <li>{ingredient.quantity}</li>
              <li>{ingredient.measurement}</li>
              <li>{ingredient.name}</li>
              <br />
            </div>
          ))}

        <h3>Instructions</h3>
        {this.props.recipe.instructions &&
          this.props.recipe.instructions.map((instruction) => (
            <div>
              <li>Step {instruction.step_number}</li>
              <li>{instruction.description}</li>
              <br />
            </div>
          ))}
      </div>
    );
  }
}

const mapDispatchToProps = (state) => ({
  recipe: state.recipe,
  fetchingRecipe: state.fetchingRecipe,
});

export default connect(mapDispatchToProps, {
  getRecipe,
})(RecipeCard);