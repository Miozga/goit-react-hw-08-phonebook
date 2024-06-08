import {
  Alert,
  AlertIcon,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../slices/userSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async event => {
    event.preventDefault();
    setLoginError(null);
    try {
      console.log('Logging in with:', { email, password });
      const resultAction = await dispatch(
        loginUser({ email, password })
      ).unwrap();
      console.log('Login successful:', resultAction);
      navigate('/contacts');
    } catch (err) {
      console.error('Login failed:', err);
      setLoginError(err.message);
    }
  };

  return (
    <Box width="400px" margin="0 auto" mt="50px">
      {loginError && (
        <Alert status="error" mb="4">
          <AlertIcon />
          {loginError}
        </Alert>
      )}
      <form onSubmit={handleSubmit}>
        <FormControl id="email" mb="4">
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
        </FormControl>
        <FormControl id="password" mb="4">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
        </FormControl>
        <Button type="submit" colorScheme="blue" width="full">
          Login
        </Button>
      </form>
    </Box>
  );
};

export default Login;
