import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async credentials => {
    const response = await axios.post(
      'https://connections-api.herokuapp.com/users/login',
      credentials
    );
    return response.data;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUser(state, action) {
      return action.payload;
    },
    logout(state) {
      return null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        console.error('Login failed:', action.error.message);
      });
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
