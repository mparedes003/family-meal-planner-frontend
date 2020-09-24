import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
  // logs out a user by removing the token from localStorage
  const logout = () => {
    localStorage.removeItem('token');
  };

  return (
    <div>
      <NavLink to='/all-recipes'>All Recipes</NavLink>{' '}
      <NavLink to='/recipe/add'>Add Recipe</NavLink>
      <NavLink to='/login'>Log in</NavLink>
      <u onClick={logout}>Log out</u>
      <input
        type='text'
        name='search'
        maxLength='20'
        placeholder='search...'
        value={props.search}
        onChange={props.handleSearchChange}
      />
    </div>
  );
};

export default NavBar;
