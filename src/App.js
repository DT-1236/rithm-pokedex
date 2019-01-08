import React, { Component } from 'react';
import Pokedex from './Pokedex';
import './App.css';

class App extends Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
      { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
      { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
      { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
      { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
      { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
      { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
      { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
    ]
  };

  render() {
    // get random pokemon and assign to two decks
    const [deck1, deck2] = getPokemon(this.props.pokemon);

    // calculate base experience for deck1
    const exp1 = deck1.reduce((tally, p) => {
      tally += p.base_experience;
      return tally;
    }, 0);

    // calculate base experience for deck1
    const exp2 = deck2.reduce((tally, p) => {
      tally += p.base_experience;
      return tally;
    }, 0);

    console.log(deck1, deck2, exp1, exp2);

    return (
      <div className="App">
        <Pokedex pokemon={deck1} isWinner={exp1 > exp2} />
        <Pokedex pokemon={deck2} isWinner={exp2 > exp1} />
      </div>
    );
  }
}

const getPokemon = pokemon => {
  // Fisher-Yates shuffle algorithm
  for (let i = pokemon.length - 1; i > 0; i -= 1) {
    let randomIndex = Math.floor(Math.random() * i);
    let placeholder = pokemon[i];
    pokemon[i] = pokemon[randomIndex];
    pokemon[randomIndex] = placeholder;
  }

  const deck1 = pokemon.slice(0, 4);
  const deck2 = pokemon.slice(4);

  return [deck1, deck2];
};

export default App;
