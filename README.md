Hola, esta es la primera prueba de la formación online de Adalab, que simula una prueba técnica.

Se nos ha pedido lo siguiente: 

[x] Debe tener un listado de pokemon, donde debe aparecer al menos su foto, nombre, número y tipo (o tipos).

[x] Deben aparecer los 25 primeros pokemon (para tener la info detallada de cada uno, tendremos que hacer una petición al servidor y recordad que hay un límite)

[x]Los pokemon deben poder filtrarse por nombre.


Se nos proporcionó la API https://pokeapi.co/ y el primer gran reto fue entenderme con ella, ya que es mucha información, varias peticiones (por lo que se tuvo que hacer para su desarrollo peticiones encadenadas) y costó encontrar, por ejemplo, la foto. Una vez entendida la API, ya procedí a hacer las peticiones, en la que en la primera no hubo necesidad de actualizarla en el estado, ya que sólo necesitaba la URL de cada item para hacer la segunda petición y, de acuerdo a esa nueva data proporcionada, es que he actualizado el estado y de ahí, fui sacando la información que necesitaba (nombre, foto, tipos e id).

## Arquitectura de componentes:

De la App sale un componente para el listado general (List.js) que recibe por props la información de la segunda petición y dentro de ese componente está uno que es el que se reutiliza para cada tarjeta de cada pokemon (PokeCard.js).
También hay un componente aparte para el filtro por nombre (FilterName.js) y el del Endpoint de la API (fetchPokemon.js) dentro de la carpeta 'services'.
Cada componente está en una carpeta la cual contiene el fichero js y su estilo correspondiente en CSS, de manera que cada componente tiene su propio fichero de estilos.

Se ha intentado seguir los estilos del modelo que nos han dado.

Espero haber cumplido los requisitos deseados.

Gracias, 

Ari