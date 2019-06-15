import React from 'react';
import List from './List';
import './App.css';

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
    fetch('https://pokeapi.co/api/v2/pokemon?=25&limit=25')
      .then(res => res.json())
      .then(data => {
        data.results.map(item => {
          return (
            fetch(item.url)
              .then(res => res.json())
              .then(moreData => {
                const pokeState = this.state.pokemon;
                pokeState.push(moreData);
                pokeState.sort();
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
