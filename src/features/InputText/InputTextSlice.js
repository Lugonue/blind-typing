import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  text: null,
}


const slice = createSlice({
  name: 'InputText',
  initialState,
  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
    }
  }
})


export const { setText } = slice.actions;
export default slice.reducer;