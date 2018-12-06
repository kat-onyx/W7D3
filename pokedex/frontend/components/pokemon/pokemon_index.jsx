import React from 'react';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);


  }
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.pokemon.map((poke, idx) => (
            <li key={idx}>
              {poke.name}
              <img key={idx} src={poke.image_url}></img>
            </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default PokemonIndex;