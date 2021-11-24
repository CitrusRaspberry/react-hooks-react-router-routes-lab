import React from "react";
import { directors } from "../data";

function Directors() {

  const DirectorList = () => {
    return (
      <ul>
      {directors.map(director => <DirectorListItem key={director.name} director={director} />)}
      </ul>
    )
  }
  const DirectorListItem = ({ director }) => {
    return (
      <div>
        <p>{director.name}</p>
        {director.movies.map(movie => <li key={movie}>{movie}</li>)}
      </div>
    )
  }
  return (
    <div>
      <h1>Directors Page</h1>
      <DirectorList />
    </div>
  );
}

export default Directors;
