import React, { Component } from 'react';

import Data from '../mock/valuesMock'

import '../styles/App.css'

import PokemonList from './pokemonList'



class PokemonApp extends Component {

  render() {

    return (

      <div className="App">

        <PokemonList Content={this.props.Content} />

      </div>

    );

  }

}

PokemonApp.defaultProps = { Content: Data }

export default PokemonApp;