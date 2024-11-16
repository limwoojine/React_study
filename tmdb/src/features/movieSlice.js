import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getMovies } from '../api/tmdbApi';

// 비동기 Thunk액션: API를 호출 -> 호출된 결과를 extraReducers에게 전달
// createAsyncThunk(내가 지은 액션명, API를 호출하는 비동기 함수)
export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
   const response = await getMovies();
   return response.data.results; // extraReducers 에게 결과 전달
});

const moviesSlice = createSlice({
   name: 'moives',
   initialState: {
      loading: false,
      movies: [],
      error: null,
   },
   reducers: {},
   // 비동기에서는 extraReducers 를 사용함
   extraReducers: (builder) => {
      builder
         //데이터를 가져오는 동안
         .addCase(fetchMovies.pending, (state) => {
            state.loading = true;
         })

         //데이터를 성공적으로 가져오는 경우
         .addCase(fetchMovies.fulfilled, (state, action) => {
            state.loading = false;
            state.movies = action.payload; // response.data.results
         })

         //데이터를 가져오는 걸 실패하는 경우
         .addCase(fetchMovies.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message; // 에러메시지가 발생한 경우 에러메시지 저장
         });
   },
});

export default moviesSlice.reducer;
