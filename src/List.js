import React from 'react';

class List extends React.Component {
  render() {
    return(
      <ul>
       {this.props.pokemon
        .map(item => {
          return (<li><h2>{item.name}</h2><img src={item.sprites.front_default} alt={item.name} /> 
          <ul>
            {item.types
              .map(type => {
                return (
                  <li>{type.type.name}</li>
                );
              })}
          </ul>
          
          
          
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
