import './book.css';
import './index.css';

import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import 'src/styles/index.css';
import AppRouter from './AppRouter';
import store from './store';

const App = () => (
  <Provider store={store}>
    <ChakraProvider>
      <AppRouter />
    </ChakraProvider>
  </Provider>
);

export default App;
