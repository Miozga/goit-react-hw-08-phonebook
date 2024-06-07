import { Alert, AlertIcon, Box } from '@chakra-ui/react';
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

    if (result.type === loginUser.fulfilled) {
      navigate('/contacts');
    } else if (result.type === loginUser.rejected) {
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
      <form onSubmit={handleSubmit}>{}</form>
    </Box>
  );
};

export default Login;
