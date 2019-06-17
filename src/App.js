import React from 'react';
import List from './list/List';
import FilterName from './filters/FilterName';
import './App.css';
import {fetchPokemon} from './services/pokeFetch';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: [],
      filterName: ''
    }
    this.getPokemon = this.getPokemon.bind(this);
    this.handleFilterName = this.handleFilterName.bind(this);
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
                pokeState.sort((a, b) => a.id - b.id);
                this.setState({
                  pokemon: pokeState
              })
            })
          )
        })
      })
  }

  handleFilterName(e) {
    const value = e.currentTarget.value;
    this.setState({
      filterName: value
    })
  }
  render() {
    return (
      <React.Fragment>
      <FilterName 
        handleFilterName={this.handleFilterName}
        filterName={this.state.filterName}
      />
      <List 
      pokemon={this.state.pokemon}
      handleFilterName={this.handleFilterName}
      filterName={this.state.filterName}

      />
      </React.Fragment>
      );
  }
}

export default App;
