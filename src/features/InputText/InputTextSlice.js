import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  text: '',
  typePerMinute: 0,
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
    }
  }
})


export const { setText, setTypePerMinute } = slice.actions;
export default slice.reducer;