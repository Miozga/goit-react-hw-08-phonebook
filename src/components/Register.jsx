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
import { registerUser } from '../slices/userSlice';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registerError, setRegisterError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async event => {
    event.preventDefault();
    setRegisterError(null);
    try {
      console.log('Registering with:', { name, email, password });
      const resultAction = await dispatch(
        registerUser({ name, email, password })
      ).unwrap();
      console.log('Registration successful:', resultAction);
      navigate('/login');
    } catch (err) {
      console.error('Registration failed:', err);
      setRegisterError(err.message);
    }
  };

  return (
    <Box width="400px" margin="0 auto" mt="50px">
      {registerError && (
        <Alert status="error" mb="4">
          <AlertIcon />
          {registerError}
        </Alert>
      )}
      <form onSubmit={handleSubmit}>
        <FormControl id="name" mb="4">
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            autoComplete="name"
          />
        </FormControl>
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
            autoComplete="new-password"
          />
        </FormControl>
        <Button type="submit" colorScheme="blue" width="full">
          Register
        </Button>
      </form>
    </Box>
  );
};

export default Register;
