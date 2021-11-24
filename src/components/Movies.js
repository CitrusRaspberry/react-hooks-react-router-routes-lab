import React from "react";
import { movies } from "../data";

function Movies() {

  const MovieList = () => {

    return (
      <ul>
      {movies.map(movie => <MovieListItem key={movie.title} movie={movie} />)}
      </ul>
    )
  }
  const MovieListItem = ({ movie }) => {
    return (
      <div>
        <p>{movie.title}</p>
        <p>{movie.time}</p>
        {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
      </div>
    )
  }
  return (

    <div>
      <h1>Movies Page</h1>
      <MovieList />
    </div>

  );
}

export default Movies;
