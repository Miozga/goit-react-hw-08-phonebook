import { Box, Button, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../slices/userSlice';

const UserMenu = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
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
