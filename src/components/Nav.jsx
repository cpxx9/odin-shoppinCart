import { NavLink } from 'react-router-dom';

const Nav = () => {
  const linkClass = ({ isActive }) => (isActive ? 'active' : '');

  return (
    <nav>
      <div>
        <div>
          <div>
            <NavLink>
              <img src="" alt="" />
              <span>React PC&apos;s</span>
            </NavLink>
            <div>
              <div>
                <NavLink to={'/'} className={linkClass}>
                  Home
                </NavLink>
                <NavLink to={'/store'} className={linkClass}>
                  Store
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
