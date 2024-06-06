import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Contacts from './components/Contacts';
import Login from './components/Login';
import Navigation from './components/Navigation';
import PrivateRoute from './components/PrivateRoute';
import Register from './components/Register';

const AppRouter = () => (
  <Router>
    <Navigation />
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/contacts"
        element={
          <PrivateRoute>
            <Contacts />
          </PrivateRoute>
        }
      />
    </Routes>
  </Router>
);

export default AppRouter;
