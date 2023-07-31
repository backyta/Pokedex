/* eslint-disable react/display-name */
import PropTypes from 'prop-types';
import React from 'react';

//* En React.Memo solo se ejecuta el componente cuando su props se ve afetcado o cambia, no cuando
//* otro componente o estado cambia, que pueda a fectar a este.

export const ShowIncrement = React.memo (({ increment }) => {

    console.log('me volvi a generar');

    return ( 
        <button
            className="btn btn-primary"
            onClick={ () =>{
                increment( 5 );
            }}
        >
            +1
        </button>
     );
})


ShowIncrement.propTypes = {
    increment: PropTypes.func.isRequired
}

//? Diferencia entre objetos funciones y valores primitivos
//? No se puden memorizar los objetos porque estan en posiciones de memoria diferente, los valores primitivos
//? si se pueden memorizar.

//* Cuando el componente se vuelve a renderizar, porque las funciones y los objetos siempre apuntan 
//* a espacios de memoria diferente, cada vez que el componente callbackhook se vuelve a dibujar la 
//* nfuncion de incrementeFather es diferente se ubica en una posicion doferente en memoria por lo cual
//* el objeto o la funcion es siempre diferente y no lo puede memorizar
//* porque literalmente cada valor que recibe el ShowIncrement es diferente, cuando cambia el estado
//* es una posicion diferente en memoria.




