import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children, redirectTo = '/contacts' }) => {
  const user = useSelector(state => state.user);

  return user ? <Navigate to={redirectTo} /> : children;
};

export default PublicRoute;
