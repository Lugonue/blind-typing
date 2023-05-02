import { configureStore } from '@reduxjs/toolkit';
import textReducer from  '../features/text-for-typing/innerTextSlice';
import InputTextReduser from '../features/InputText/InputTextSlice';

export const store = configureStore({
  reducer: {
    startText: textReducer,
    inputText: InputTextReduser,
  },
});
