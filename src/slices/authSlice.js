import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isAuthenticated: false,
  email: null,
  status: 'idle',
  error: null,
};

export const register = createAsyncThunk('auth/register', async userData => {
  const response = await axios.post(
    'https://connections-api.herokuapp.com/users/signup',
    userData
  );
  return response.data;
});

export const login = createAsyncThunk('auth/login', async userData => {
  const response = await axios.post(
    'https://connections-api.herokuapp.com/users/login',
    userData
  );
  return response.data;
});

export const logout = createAsyncThunk('auth/logout', async () => {
  const response = await axios.post(
    'https://connections-api.herokuapp.com/users/logout'
  );
  return response.data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.email = action.payload.user.email;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.email = action.payload.user.email;
      })
      .addCase(logout.fulfilled, state => {
        state.isAuthenticated = false;
        state.email = null;
      });
  },
});

export default authSlice.reducer;
