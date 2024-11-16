import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../../features/movieSlice';
import { useDispatch, useSelector } from 'react-redux';

function MovieList() {
   const dispatch = useDispatch();
   const { movies, loading, error } = useSelector((state) => {
      console.log(state);
      return state.movies;
   });

   /*
      state.movies = {
         loading: false,
         movies: [{...}, {...}, ...],
         error: null,
      }
   */

   useEffect(() => {
      dispatch(fetchMovies());
   }, [dispatch]);

   if (loading) return <p>loading...</p>;
   if (error) return <p>Error: {error}</p>;

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
