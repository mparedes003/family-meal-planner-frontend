import React from 'react';
import { connect } from 'react-redux';
import { getRecipe, deleteRecipe } from '../store/actions';
import Modal from 'react-modal';

class RecipeCard extends React.Component {
  state = {
    modalIsOpen: false,
    id: '',
  };
  // sets recipe id to this.id
  get id() {
    console.log('ID', this.props.match.params.id);

    return this.props.match.params.id;
  }

  // fetches recipe from server and passes it to store
  componentDidMount() {
    this.props.getRecipe(this.id);
  }

  // activates delete modal
  openModal = (event) => {
    event.preventDefault();
    this.setState({ modalIsOpen: true });
  };

  // deactivates delete modal
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  // sends delete request to server, redirects to user's dashboard
  handleDelete = (event) => {
    event.preventDefault();
    this.props.deleteRecipe(this.id);
    this.props.history.push('/dashboard');
  };

  render() {
    return (
      <div className='main-conatiner-recipe'>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          className='modal'
          overlayClassName='overlay'
        >
          <h3>Are you sure you want to delete this recipe?</h3>
          <div className='modal-buttons'>
            <button onClick={this.handleDelete}>Delete</button>
            <button onClick={this.closeModal}>No</button>
          </div>
        </Modal>
        <div className='recipe-body'>
          {console.log('this', this.props)}
          <h1>Recipe Card</h1>
          {/* displays title of the recipe */}
          <h2>{this.props.recipe.title}</h2>
          <h3>Ingredients</h3>
          {/* Ingredients is a nested array within a recipe object.
        Use a mapping function to pull each one out and 
        list them one after the other. */}
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
          {/* Instructions is a nested array within a recipe object.
        Use a mapping function to pull each one out and 
        list them one after the other. */}
          {this.props.recipe.instructions &&
            this.props.recipe.instructions.map((instruction) => (
              <div>
                <li>Step {instruction.step_number}</li>
                <li>{instruction.description}</li>
                <br />
              </div>
            ))}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (state) => ({
  recipe: state.rootReducers.recipe,
  fetchingRecipe: state.rootReducers.fetchingRecipe,
});

export default connect(mapDispatchToProps, {
  getRecipe,
  deleteRecipe,
})(RecipeCard);
