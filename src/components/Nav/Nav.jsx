import { useState } from 'react';
import PropTypes from 'prop-types';
import Cart from '../Cart/Cart';
import { NavLink } from 'react-router-dom';
import StyledNav from './StyledNav';

const Nav = ({ cart = [], setCart = () => {} }) => {
  const linkClass = ({ isActive }) => (isActive ? 'active-link' : '');

  return (
    <StyledNav>
      <NavLink to={'/'}>
        <img src="" alt="" />
        <h2>Odin Storefront</h2>
      </NavLink>
      <div className={`link-wrapper`}>
        <NavLink to={'/'} className={linkClass}>
          Home
        </NavLink>
        <NavLink to={'/store'} className={linkClass}>
          Store
        </NavLink>
        <Cart className={`cart`} cart={cart} setCart={setCart} />
      </div>
    </StyledNav>
  );
};

Nav.propTypes = {
  items: PropTypes.array,
};

export default Nav;
