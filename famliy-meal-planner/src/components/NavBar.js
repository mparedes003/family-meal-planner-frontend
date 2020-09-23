import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  // logs out a user by removing the token from localStorage
  const logout = () => {
    localStorage.removeItem('token');
  };

  return (
    <div>
      <NavLink to='/dashboard'>Your Recipies</NavLink>{' '}
      <NavLink to='/recipe/add'>Add Recipe</NavLink>
      <NavLink to='/login'>Log in</NavLink>
      <u onClick={logout}>Log out</u>
    </div>
  );
};

export default NavBar;
