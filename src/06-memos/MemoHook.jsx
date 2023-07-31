import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = ( iterationNumbers = 100 ) =>{
    for (let i = 0; i < iterationNumbers; i++) {
        console.log('Ahi vamos....');
    }

    return `${ iterationNumbers } iteraciones realizadas`
}

export const MemoHook = () => {

    const { counter, increment } = useCounter( 4000 );
    const [show, setShow] = useState(true);

    let memorizedValue = useMemo(() => heavyStuff(counter), [counter])

    return ( 
        <>
            <h1>Counter: <small>{counter}</small></h1>
            <hr />

            <h4>{ memorizedValue }</h4>

            <button 
                className="btn- btn-primary"
                onClick={ () => increment() }
            >
                +1
            </button>

            <button
                className="btn btn-primary"
                onClick={() => setShow( !show )}
            >
                Show/ Hide { JSON.stringify(show)}
            </button>
        </>
     );
}
 
//* Hook useMemo, de igual manera srve para memorizar el resultado del componente , para que cuando react 
//* vuelva a redibujar el componente no vuelva a reporcesar el proceso Pesado(heavy stuff)

//* El use Memo, memoriza un valor, va a memorizar lo qye sea que retorne y el valor (la constante) memorizado,
//* se va mantener asi a menos de que las dependencias del useName Cambien
//* El primer argumento que recibe es una funcion que debe de regresar algo, y si no regresa nada el valor
//* es undefined
//* En este caso lo que va devolver el heavyStuff es el valor valor memorizado del resultado de la fucnion

//* El roducto o el return del heavyStuff va caer memorizado en la constante memorizeValue, 
//* El segundo argumento indica que solo se va volver a reprocesar si las dependencias cambian, si se pone
//* un array vacio solo se memoriza la primera vez, pero en este caso se memoriza cada ves que el caounter cambie.

//? En el use memeo la dependencia no hay cambio osea, el counter, lo unico que cambio fue el button
//? de show y hide