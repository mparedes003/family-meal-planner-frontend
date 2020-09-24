import React from 'react';
import { Link } from 'react-router-dom';

class AllRecipes extends React.Component {
  render() {
    return (
      <div>
        <h2>All Recipes</h2>
        {console.log('this', this.props)}
        {this.props.recipes.map((recipe) => {
          return (
            // links to display recipe card
            <div className='recipe-card'>
              <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
                <h2>{recipe.title}</h2>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default AllRecipes;
