import { createSlice } from '@reduxjs/toolkit';

// slice 는 모두 store에 저장해야 한다.
const userSlice = createSlice({
   name: 'user', // slice 이름 지정
   initialState: {
      name: '',
      age: 0,
   }, // steate 초기 값
   reducers: {
      setName: (state, action) => {
         state.name = action.payload;
      },
      setAge: (state, action) => {
         state.age = action.payload;
      },
   },
});

export default userSlice.reducer;

export const { setName, setAge } = userSlice.actions;
