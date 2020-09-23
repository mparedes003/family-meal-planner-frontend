import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllRecipes } from '../store/actions';

class AllRecipes extends React.Component {
  componentDidMount() {
    this.props.getAllRecipes();
  }
  render() {
    return (
      <div>
        <h2>All Recipes</h2>
        {console.log('this', this.props)}
        {/* maps the existing recipes of a user and 
        lists them one after the other */}
        {this.props.currentRecipes.map((title) => {
          return (
            // links to display recipe card
            <div className='recipe-card'>
              <Link to={`/recipes/${title.id}`} key={title.id}>
                <h2>{title.title}</h2>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapDispatchToProps = (state) => {
  const { titles, fetchingTitles, currentRecipes } = state.rootReducers;
  return {
    titles: titles.recipes,
    fetchingTitles,
    currentRecipes,
  };
};

export default connect(mapDispatchToProps, {
  getAllRecipes,
})(AllRecipes);
