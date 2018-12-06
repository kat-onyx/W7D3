import { connect } from 'react-redux';
import selectAllPokemon from '../../reducers/selectors';
import PokemonIndex from './pokemon_index';
import { requestAllPokemon } from '../../actions/pokemon_actions';

const mStP = (state) => ({
  pokemon: selectAllPokemon(state),
});

const mDtP = dispatch => ({
    requestAllPokemon: () => dispatch(requestAllPokemon())
})



export default connect(mStP, mDtP)(PokemonIndex);