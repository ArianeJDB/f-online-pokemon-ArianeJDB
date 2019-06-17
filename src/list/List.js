import React from 'react';
import PokeCard from '../card/PokeCard';
import './list.css'

class List extends React.Component {
  render() {
    return(
      <ul className="poke_list">
       {this.props.pokemon
        .map(item => {
          return (
            <li className="poke_item">
              <PokeCard 
                name={item.name}
                image={item.sprites.front_default}
                types={item.types}
                id={item.id}
                />
          </li>);
        })}
      </ul>
    );
  }
}

export default List;


// {this.props.pokemon 
//   .map(item => {
//     return (
//       <li>
//         <h2>{item.name}</h2>
//         <img src={item.sprites.front_default} alt={`Foto de ${item.name}`} />
//         <ul>
//           {item.types
//             .map(item => {
//               return(
//                 <li>{item}</li>
//               )
//         </ul>
//       </li>
//     )
//   })}
