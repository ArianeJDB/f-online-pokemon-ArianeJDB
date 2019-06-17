import React from 'react';
import List from './List';
import './App.css';
import {fetchPokemon} from './services/pokeFetch';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: []
    }
    this.getPokemon = this.getPokemon.bind(this);
  }
  componentDidMount(){
    this.getPokemon();
  }
  getPokemon() {
    fetchPokemon()
      .then(data => {
        data.results.map(item => {
          return (
            fetch(item.url)
              .then(res => res.json())
              .then(moreData => {
                const pokeState = this.state.pokemon;
                pokeState.push(moreData);
                // pokeState.sort();
                this.setState({
                  pokemon: pokeState
              })
            })
          )
        })
      })
  }
  render() {
    return (
     
      <List 
      pokemon={this.state.pokemon}
      />
      );
  }
}

export default App;
