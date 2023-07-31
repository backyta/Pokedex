/* eslint-disable react/display-name */
import PropTypes from 'prop-types';
import { memo } from 'react';



export const Small = memo (({ value }) => {

    console.log('Me volvi a dibujar :(');

    return ( 
        <small>{ value }</small>
     )
})
 
Small.propTypes = {
    value: PropTypes.number.isRequired
}

//* Se reocimienda memorizar los componentes cuando son muy grandes o ha un proceso pesado, y solos e quiere
//* hacer este proceso cuando las props cambien en el componente que no affecta directamente en este casi el 
//* el Small

//? El memo es una funcion o metodo que le dice a react que memorize esete componente, se debe encmarcar todo
//? el componente entre ()
//* el memo recibe como argumento al componente entero y lo va memorizar, solo cuando los props cambian
//* entonces se vuelve a ejcutar esto.

//* Estamos memorizando el componente que no se vera afectado en el cambio de otro, para que no sevuelva a 
//* ehjecutar solo cuando sus props cambien lo hara osea solo el contador

//* Normalmente se ve como React.meme, pero en vite no es necesario.