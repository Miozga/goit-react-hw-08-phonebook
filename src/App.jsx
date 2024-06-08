import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import AppRouter from './AppRouter';
import store from './store';
import './styles/book.css';
import './styles/index.css';

const App = () => (
  <Provider store={store}>
    <ChakraProvider>
      <AppRouter />
    </ChakraProvider>
  </Provider>
);

export default App;
