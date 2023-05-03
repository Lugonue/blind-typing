import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentTime: {
    minutes: 0,
    seconds: 0
  },
  startTime: null,
  status: 'stop',
}

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    setTime: (state, action) => {
      state.currentTime = action.payload;
    },
    setStartTime: (state) => {
      state.startTime = Date.now();
      state.status = 'start';
    },
    setStopTimer: (state) => {
      state.status = 'finish';
    }
  },
})


export const { setTime, setStartTime, setStopTimer } = timerSlice.actions;
export default timerSlice.reducer;