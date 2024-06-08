import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const response = await axios.get(
      'https://connections-api.herokuapp.com/contacts'
    );
    return response.data;
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const response = await axios.post(
      'https://connections-api.herokuapp.com/contacts',
      contact
    );
    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    await axios.delete(
      `https://connections-api.herokuapp.com/contacts/${contactId}`
    );
    return contactId;
  }
);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.data = state.data.filter(
          contact => contact.id !== action.payload
        );
      });
  },
});

export default contactsSlice.reducer;
