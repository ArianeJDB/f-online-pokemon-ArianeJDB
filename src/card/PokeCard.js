import React from 'react';
import './pokecard.css'

class PokeCard extends React.Component {
  render() {
    return (
      <div className="card_container">
        <div className="grey_container">
          <img src={this.props.image} alt={`Imagen de ${this.props.name}`}  className="card_image" />
          <p className="id">{`ID: ${this.props.id}`}</p>
        </div>
        <div className="white_container">
          <h2 className="card_name">{this.props.name}</h2>
          <ul className="types_list">
            {this.props.types
                  .map(type => {
                    return (
                      <li className="type_item" key={type.type.name}>
                        <div className="tags">{type.type.name}</div>
                      </li>
                    );
                  })}
              </ul>
        </div>
      </div>
    );
  }
}

export default PokeCard;