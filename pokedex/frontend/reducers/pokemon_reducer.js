import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';

export const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};

  switch(action.type) {
    case RECEIVE_ALL_POKEMON: 
      return action.pokemon;
    
    case RECEIVE_POKEMON: 
      return Object.assign(newState, state, action.pokemon);

    default:
      return state;
  }
}