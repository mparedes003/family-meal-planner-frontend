import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ({ history }) => {
  // logs out a user by removing the token from localStorage
  const logout = () => {
    localStorage.removeItem('token');
  };

  return (
    <div>
      <NavLink to='/dashboard'>Your Recipies</NavLink>{' '}
      <NavLink to='/'>Log in</NavLink>
      <p onClick={logout}>Log out</p>
    </div>
  );
};

export default NavBar;
