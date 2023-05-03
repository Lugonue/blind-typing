import { configureStore } from '@reduxjs/toolkit';
import textReducer from  '../features/text-for-typing/innerTextSlice';
import InputTextReduser from '../features/InputText/InputTextSlice';
import timerReducer from '../components/StatisticBar/timer/TimerSlice.js';

export const store = configureStore({
  reducer: {
    startText: textReducer,
    inputText: InputTextReduser,
    timer: timerReducer,
  },
});
