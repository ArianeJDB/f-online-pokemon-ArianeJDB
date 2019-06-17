const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon?=25&limit=25';

const fetchPokemon = () => fetch(ENDPOINT)
  .then(res => res.json())

  export {fetchPokemon};