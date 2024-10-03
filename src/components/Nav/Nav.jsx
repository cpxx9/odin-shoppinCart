import { useState } from 'react';
import PropTypes from 'prop-types';
import Cart from '../Cart/Cart';
import { NavLink } from 'react-router-dom';

const Nav = ({ cart = [], setCart = () => {} }) => {
  const linkClass = ({ isActive }) => (isActive ? 'active-link' : '');

  return (
    <nav>
      <NavLink to={'/'}>
        <img src="" alt="" />
        <h2>Odin Storefront</h2>
      </NavLink>
      <NavLink to={'/'} className={linkClass}>
        Home
      </NavLink>
      <NavLink to={'/store'} className={linkClass}>
        Store
      </NavLink>
      <Cart cart={cart} setCart={setCart} />
    </nav>
  );
};

Nav.propTypes = {
  items: PropTypes.array,
};

export default Nav;
