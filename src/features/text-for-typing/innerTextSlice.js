import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchText from './text-geathering-API';

const initialState = {
  text: null,
}

export const fetchTextAsync = createAsyncThunk('text/fetchText', async () => {
  const response = await fetchText();
  return response;
})

const textSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTextAsync.fulfilled, (state, action) => {
      state.text = action.payload;
    })
  }
})


export const { actions } = textSlice.actions;
export default textSlice.reducer;