import React, { useState, useEffect } from 'react';
import { getMovies } from '../../api/tmdbApi';

function MovieList() {
   const [movies, setMovies] = useState([]); // 영화 데이터
   const [loading, setLoading] = useState(true); // 데이터 로딩중 여부
   const [error, setError] = useState(null); // API Call 시 에러가 발생한 경우 에러메시지를 저장하는 state

   useEffect(() => {
      const fetchMovies = async () => {
         try {
            setLoading(true); // 로딩 중
            const MovieList = await getMovies();
            console.log(MovieList);
            setMovies(MovieList.data.results);
         } catch (error) {
            setError(error.message);
         } finally {
            setLoading(false);
         }
      };
      fetchMovies();
   }, []);
   return (
      <div>
         <h1>인기영화 목록</h1>
         <ul>
            {movies.map((movie) => (
               <li key={movie.id}>{movie.title}</li>
            ))}
         </ul>
      </div>
   );
}

export default MovieList;
