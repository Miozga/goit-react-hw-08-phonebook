import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import UserMenu from './UserMenu';

const Navigation = () => {
  const user = useSelector(state => state.user);

  return (
    <nav>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
      {user && <UserMenu />}
    </nav>
  );
};

export default Navigation;
