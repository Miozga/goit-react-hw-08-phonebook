import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await axios.post('https://connections-api.herokuapp.com/users/signup', {
        email,
        password,
      });
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <Box width="400px" margin="0 auto" mt="50px">
      <form onSubmit={handleSubmit}>
        <FormControl id="email" mb="4">
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </FormControl>
        <FormControl id="password" mb="4">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
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
