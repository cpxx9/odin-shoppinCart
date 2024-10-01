import { NavLink } from 'react-router-dom';

const Nav = () => {
  const linkClass = ({ isActive }) => (isActive ? 'active-link' : '');

  return (
    <nav>
      <NavLink>
        <img src="" alt="" />
        <span>React PC&apos;s</span>
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
