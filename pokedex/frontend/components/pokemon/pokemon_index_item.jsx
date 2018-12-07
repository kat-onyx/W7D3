import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({ poke }) => (
  <Link to={`/pokemon/${poke.id}`}>
    <li>
      {poke.name}
      <img src={poke.image_url} />
    </li>
  </Link>
)


export default PokemonIndexItem;