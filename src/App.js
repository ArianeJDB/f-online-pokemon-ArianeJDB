import React from 'react';
//import List from './List'
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
                const hola = this.state.pokemon;
                hola.push(moreData);
                console.log('hola', hola)
                this.setState({
                  pokemon: hola
              })
            })
          )
        })
      })
  }
  render() {
    return (
      <p>{this.state.pokemon
        .map(item => {
          return (
            <p>{item.name}</p>
          )
        })}</p>
      // <List 
      // pokemon={this.state.pokemon}
      // />
      );
  }
}

export default App;
