import React from 'react';
import PokeCard from './PokeCard';

class List extends React.Component {
  render() {
    return(
      <ul>
       {this.props.pokemon
        .map(item => {
          return (
            <li>
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
