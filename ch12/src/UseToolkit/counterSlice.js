import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
   name: 'counterSlice', // slice 이름 지정(slice가 여러개 이므로 구분을 할 수 있어야 한다.)
   initialState: { value: 0 },
   reducers: {
      up: (state, action) => {
         state.value += action.payload;
         // redux에서는 state 값을 새로 만들어서 return한다.
         // toolkit은 state 값 자체를 바꿔준다.
         console.log('action:', action);
      },
      down: (state, action) => {
         state.value -= action.payload;
      },
   },
});

export default counterSlice.reducer; // reducer를 내보냄

export const { up, down } = counterSlice.actions;
