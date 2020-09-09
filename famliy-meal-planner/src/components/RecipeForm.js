import React from 'react';
import { connect } from 'react-redux';
import { addRecipe } from '../store/actions';

class RecipeForm extends React.Component {
  state = {
    title: '',
    ingredients: [],
    quantity: null,
    measurement: '',
    name: '',
    instructions: [],
    step_number: null,
    description: '',
  };

  changeHandler = (event) => {
    event.persist();
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

  submitRecipeForm = (event) => {
    event.preventDefault();
    const newRecipe = {
      title: this.state.title,
      ingredients: [
        {
          quantity: +this.state.quantity,
          measurement: this.state.measurement,
          name: this.state.name,
        },
      ],
      instructions: [
        {
          step_number: +this.state.step_number,
          description: this.state.description,
        },
      ],
    };
    // console.log('newRecipe data', this.props.history);
    console.log('newRecipe data', newRecipe);
    this.props.addRecipe(newRecipe, this.props.history);
  };

  render() {
    return (
      <div>
        <h2>Add New Recipe</h2>
        <form onSubmit={this.submitRecipeForm}>
          <input
            placeholder='title'
            type='text'
            required
            name='title'
            onChange={this.changeHandler}
            value={this.state.title}
          />
          <div>
            <h3>Ingredients</h3>
            <input
              placeholder='quantity'
              type='text'
              required
              name='quantity'
              onChange={this.changeHandler}
              value={this.state.quantity}
            />
            <input
              placeholder='measurement'
              type='text'
              required
              name='measurement'
              onChange={this.changeHandler}
              value={this.state.measurement}
            />
            <input
              placeholder='Ingredient'
              type='text'
              required
              name='name'
              onChange={this.changeHandler}
              value={this.state.name}
            />
          </div>
          <div>
            <h3>Instructions</h3>
            <input
              placeholder='step number'
              type='text'
              required
              name='step_number'
              onChange={this.changeHandler}
              value={this.state.step_number}
            />
            <input
              placeholder='description'
              type='text'
              required
              name='description'
              onChange={this.changeHandler}
              value={this.state.description}
            />
          </div>
          <button type='submit'>Add Recipe</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (state) => ({
  addingRecipe: state.addingRecipe,
});

export default connect(mapDispatchToProps, { addRecipe })(RecipeForm);
