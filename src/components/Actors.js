import React from "react";
import { actors } from "../data";

function Actors() {
  const ActorListItem = ({ actor }) => {
    return (
      <div>
        {actor.name}
        <ul>
          {actor.movies.map(movie => <li key={actor.name + movie}>{movie}</li>)}
        </ul>
      </div>
    )
  }
  const ActorList = () => {
    return actors.map(actor => <ActorListItem key={actor.name} actor={actor} />)
  }
  return (
    <div>
      <h1>Actors Page</h1>
      <ActorList />
    </div>
  );
}

export default Actors;
