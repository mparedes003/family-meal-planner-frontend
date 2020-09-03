import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllRecipes } from '../store/actions';

class UserDashboard extends React.Component {
  componentDidMount() {
    this.props.getAllRecipes();
  }
  render() {
    return (
      <div>
        <h1>Welcome to Your Dashboard</h1>
        {console.log('this', this.props)}
        {this.props.currentRecipes.map((title) => {
          return (
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

const mapDispatchToProps = (state) => ({
  titles: state.titles.recipes,
  fetchingTitles: state.fetchingTitles,
  currentRecipes: state.currentRecipes,
});

export default connect(mapDispatchToProps, {
  getAllRecipes,
})(UserDashboard);
