import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { requestPokemon } from './actions/pokemon_actions';

//test
import { fetchPokemon } from './util/api_util';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();

  //test
  window.store = store;
  window.fetchPokemon = fetchPokemon;
  window.requestPokemon = requestPokemon;

  ReactDOM.render(<Root store={store} />, rootEl);
});