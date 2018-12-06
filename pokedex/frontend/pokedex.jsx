import React from 'react';
import ReactDOM from 'react-dom';
//Test
import {fetchAllPokemon} from './util/api_util';
import { receiveAllPokemon } from './actions/pokemon_actions';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  //Test
  window.fetchAllPokemon = fetchAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;

  ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});