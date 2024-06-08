import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './slices/contactsSlice';
import filterReducer from './slices/filterSlice';
import userReducer from './slices/userSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    user: userReducer,
  },
});

export default store;
