import { Box, Button, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../slices/userSlice';

const UserMenu = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await dispatch(logoutUser());
    navigate('/login');
  };

  return (
    <Box display="flex" alignItems="center" gap="2">
      <Text>{user?.email}</Text>
      <Button onClick={handleLogout} colorScheme="blue">
        Logout
      </Button>
    </Box>
  );
};

export default UserMenu;
