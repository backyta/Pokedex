import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);
    
    let incrementFather = useCallback((value) => {
        setCounter( (c) => c + value );
    }, [])


    //* Otro uso 
    // useEffect(() => {
    //     incrementFather()
    // }, [incrementFather])


    //* En ves de hacer esto que no puede memorizar por ser una funcion con el useMemo usamos useCallBack
    // const incrementFather = () =>{
    //     setCounter( counter + 1 );
    // }

    return ( 
        <>
            <h1>useCallback Hook: { counter }</h1>
            <hr />

            <ShowIncrement increment={ incrementFather }/>
            
        </>
     );
}

//* El useCllback sirve muy parecido al use memo, solo quesirve para memorizar funciones y objetos y lo que
//* regresa es una funcion que puedo ejecutar, pero esa funcion memorizada solo se va volver a procesar cuando 
//* algo cambie
 
//* Dentro del useCallback, el valor memorizado siempre dara el mismo resultado osea siempre sera
//* 11, repite el setCounter

//? Para dar solucion a esto usamos la otra manera de setear o actualizar el estado mediante el setCounter
//? ( con el value => value +1 )
//? en esta funcion el value es el valor actual del state y le suma 1 y le asigna al state counter,
//? No usamos el counter directo sino solo su referencia a este mediante la funcion de seteo.

//* El otro uso es usando un useEffect que cuando solo esta funcion cambie se dispare, si no estamos usando
//* el Memo o usecallBack para esete efecto esta funcion siempre seria diferente y cada que cambie el estado
//* cambiaria este efecto y haria un ciclo infinito, porque apuntan a espacio de memoria diferente

//* Tengamaos cuidado porque puede dar problemas, estas funciones como los objetos siempre apuntan a espacios
//* de momoria diferente.