import React, { Component } from 'react';

class Pokecard extends Component {
  render() {
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      this.props.id
    }.png`;

    return (
      <div className="card col-3">
        <h3>{this.props.name}</h3>
        <img src={imgUrl} alt="" className="align-self-center" />
        <p>Type: {this.props.type}</p>
        <p>EXP: {this.props.experience}</p>
      </div>
    );
  }
}

export default Pokecard;
