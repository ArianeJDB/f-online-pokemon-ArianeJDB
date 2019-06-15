import React from 'react';

class List extends React.Component {
  render() {
    return(
      <ul>
        <li>{this.props.pokemon.name}</li>
      </ul>
    );
  }
}

export default List;