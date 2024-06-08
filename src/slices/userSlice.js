import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../axios';

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/login', credentials);
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      return user;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const logoutUser = createAsyncThunk('user/logoutUser', async () => {
  await axios.post('/users/logout');
  localStorage.removeItem('token');
});

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => action.payload)
      .addCase(loginUser.fulfilled, (state, action) => action.payload)
      .addCase(logoutUser.fulfilled, () => null);
  },
});

export default userSlice.reducer;
