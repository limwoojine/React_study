import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import userSlice from './userSlice';

const store = configureStore({
   reducer: {
      counter: counterSlice, // counter Slice를 store에 저장
      user: userSlice,
   },
});

export default store;
