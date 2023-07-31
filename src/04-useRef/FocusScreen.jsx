import { useRef } from "react";

export const FocusScreen = () => {

    const inputRef = useRef();
  
    

    const onClick = () => {
        // document.querySelector('input').select() //* select o focus
        console.log(inputRef);
        inputRef.current.select();
        
    }

    return ( 
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input 
                ref={ inputRef }
                type="text"
                placeholder = "Ingrese su Nombre" 
                className = "form-control"   
            />
           

            <button 
                className="btn btn-success mt-3"
                onClick={ onClick }
                >
                Set Focus
            </button>
        </>
     );
}
 

//? Use Ref

//* El useRef es un hook que srive para manejar el valor de una variable que podemos cambiar o trabjar con ella
//* pero no dispara rerenderizaciones cuando  hacemos un cambio, es como un useState que no dispara la
//* re-renderizacion.

//* El document query selector con el select no siempre garantiza que seleccionara lo que nosotros
//* deseamos, porque se debe usar el useRef

//* La idea del usRef es que nos permita mantener una referencia y que cuando esa referencia cambia, nosotros
//* no disparemos una rerenderizacion de nuestro componente, podemos establecer en el ref objetos 
//* booleans lo que necesitamos mantener en el componente.