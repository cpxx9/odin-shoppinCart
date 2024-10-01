import { NavLink } from 'react-router-dom';

const Nav = () => {
  const linkClass = ({ isActive }) => (isActive ? 'active-link' : '');

  return (
    <nav>
      <NavLink>
        <img src="" alt="" />
        <h2>React PC</h2>
      </NavLink>
      <NavLink to={'/'} className={linkClass}>
        Home
      </NavLink>
      <NavLink to={'/store'} className={linkClass}>
        Store
      </NavLink>
    </nav>
  );
};

export default Nav;
