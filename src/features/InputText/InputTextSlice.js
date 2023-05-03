import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  text: '',
  typePerMinute: 0,
  misses: 0,
}


const slice = createSlice({
  name: 'InputText',
  initialState,
  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
    },
    setTypePerMinute: (state, action) => {
      state.typePerMinute = action.payload;
    },
    setMisses: (state) => {
      state.misses += 1;
    }
  }
})


export const { setText, setTypePerMinute, setMisses } = slice.actions;
export default slice.reducer;