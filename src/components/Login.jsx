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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginError, setLoginError] = useState(null);

  const handleSubmit = async event => {
    event.preventDefault();
    setLoginError(null);
    const result = await dispatch(loginUser({ email, password }));

    if (loginUser.fulfilled.match(result)) {
      navigate('/contacts');
    } else if (loginUser.rejected.match(result)) {
      setLoginError(result.error.message);
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
            autoComplete="email" // Dodanie atrybutu autocomplete
          />
        </FormControl>
        <FormControl id="password" mb="4">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            autoComplete="current-password" // Dodanie atrybutu autocomplete
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
