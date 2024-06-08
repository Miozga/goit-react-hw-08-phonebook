import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Contacts from './components/Contacts';
import Login from './components/Login';
import Navigation from './components/Navigation';
import NotFound from './components/NotFound';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Register from './components/Register';

const AppRouter = () => (
  <Router>
    <Navigation />
    <Routes>
      <Route
        path="/login"
        element={
          <PublicRoute redirectTo="/contacts">
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PublicRoute redirectTo="/contacts">
            <Register />
          </PublicRoute>
        }
      />
      <Route
        path="/contacts"
        element={
          <PrivateRoute>
            <Contacts />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default AppRouter;
