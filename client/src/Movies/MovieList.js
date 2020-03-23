import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Route, Link, NavLink} from 'react-router-dom'

import MovieCard from './MovieCard'

// Component MovieList
function MovieList(props) {
  const [movies, setMovies] = useState([])
  const MOVIE_DETAIL_PATH = 'movie'

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);
  
  return (
    <div className="movie-list">
      {movies.map(item => (
        <NavLink to={`/${MOVIE_DETAIL_PATH}/${item.id}`}>
          <MovieCard key={item.id} movie={item} />
        </NavLink>
      ))}
    </div>
  );
}

// component MovieDetails
// function MovieDetails({ movie }) {
//   const { title, director, metascore, stars } = movie;

//   return (
//     <div className="movie-card">
//       <h2>{title}</h2>
//       <div className="movie-director">
//         Director: <em>{director}</em>
//       </div>
//       <div className="movie-metascore">
//         Metascore: <strong>{metascore}</strong>
//       </div>
//       <h3>Actors</h3>

//       {stars.map(star => (
//         <div key={star} className="movie-star">
//           {star}
//         </div>
//       ))}
//     </div>
//   );
// }

export default MovieList;
