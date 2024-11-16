// api request를 하는 소스코드

import axios from 'axios';

const params = '/movie/popular?language=ko-KR&page=1&region=KR';
const BASE_URL = 'https://api.themoviedb.org/3';

const AUTH_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZGU4NTAzMzIzZjY1YTlmNmUwMjY4MzMwZWM4NTg5YSIsIm5iZiI6MTczMTcxOTMwMS41NTY5MTcsInN1YiI6IjY3MmYwZjU0MTc3MGIwMzUxZGUzNzJmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WYfXah0BXokn4ShroLxUPNs51hv3PrrBCSTqY_aqcRI';

const tmdbApi = axios.create({
   baseURL: 'https://api.themoviedb.org/3',
   headers: {
      accept: 'application/json', // response 데이터를 json 객체로 달라고 요청
      Authorization: `Bearer ${AUTH_KEY}`,
   },
});

// API Call은 항상 비동기 함수를 사용해야 함. (비동기 = 순차적으로 실행하지 않는다는 뜻)
// API를 통해 영화목록을 가져오는 함수

export const getMovies = async (page = 1) => {
   // ?language=ko-KR&page=1&region=KR
   const response = await tmdbApi.get('/movie/popular', {
      params: {
         language: 'ko-KR',
         page, // page: page,
         region: 'KR',
      },
   });
   return response;
};

export default tmdbApi;
