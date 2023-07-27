import { useEffect, useState } from "react";

export const Message = () => {

    const [coords, setCoords] = useState({x:0, y:0});

    useEffect(() => {
        
    //* Crear referencia a la funcion, espacio en momoria donde esta definida, para poder removerla despues.
        const onMouseMove = ({x,y}) =>{
        // const coords = { x, y };
        // console.log( coords );
        setCoords({ x,y });
       } 

      window.addEventListener('mousemove', onMouseMove)

        return () =>{   
            window.removeEventListener('mousemove', onMouseMove) //* si lo remuevo lanza error - en v.18 react
        }
    }, []);


    return ( 
        <>
            <h3>Uusario ya existe</h3>
            {JSON.stringify(coords)}
        </>
     );
}
 
//? El return del useEffect
//* Usualmente se usara cuando queramos limpiar, cancelar observables o cancelar algun tipo de suscripcion
//* en el callback cramos algun tipo de listener y en el return lo limpiamos, para evitar que siga consumiendo 
//* memoria

//* En este caso la condicion es que mientras que tenga el user name igual el componente se mostrara
//* o se monta, cuando se detruye o no deja de existir fidicamente se dispara el return de desmontar en useEffect

//? Precauciones, si no se coloca la limpieza cuando se desmomanta el componente, el listener
//? o accion que se ejecuta se estara ejecutando siempre, y esto lleva a una fuga de memoria.

//* En el ejjemplo usando useState, se revisa que si no hay una funcion de limpieza y el componente se 
//* destruye o se desmonta lanzara un error, pero en versiones superior a la 18, React lo previene 
//* verifican dentro mismo que el componente exista paraq evitar ahacerlo, pero no se debe mandar hacer 
//* cambios en els tate de un componente que no esta montado