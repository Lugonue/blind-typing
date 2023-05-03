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
    },
    setReset: (state) => {
      state.currentTime = {minutes: 0, seconds: 0};
      state.startTime = null;
      state.status = 'stop';
    }
  },
})


export const { setTime, setStartTime, setStopTimer, setReset } = timerSlice.actions;
export default timerSlice.reducer;