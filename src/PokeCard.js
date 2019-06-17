import React from 'react';

class PokeCard extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
              <img src={this.props.image} alt={`Imagen de ${this.props.name}`} /> 
            <ul>
              {this.props.types
                .map(type => {
                  return (
                    <li>{type.type.name}</li>
                  );
                })}
            </ul>
            <p>{`ID: ${this.props.id}`}</p>
      </div>
    );
  }
}

export default PokeCard;