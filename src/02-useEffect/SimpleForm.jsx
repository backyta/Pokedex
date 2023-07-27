import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [ formState, setFormState] = useState({
        username: 'kevin',
        email: 'kevin@hotmail.com'
    })
    
    const { username, email } = formState;

    const onInputChange  = ( { target } ) =>{
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value 
        })
    }   

    useEffect(() => {
    //   console.log('useEffect called!');
    },[]);

    useEffect(() => {
    //   console.log('formState changed!');
    },[formState]);

    useEffect(() => {
    //   console.log('email changed!');
    },[email]);


    return ( 
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <input 
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }
                />

            <input 
                type="email"
                className="form-control mt-2"
                placeholder="ejemplo@google.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
             />

             {/* <Message /> */}
             { 
                (username === 'kevin') && <Message />
             }
        </>
     );
    }
    
//* El name es username o email, se crea una propiedad computada, y se le asisgna el valor de 
//* lo que se escribe en el input que es el value, todas las demas se mantienen pero se cambia el
//* el username o email segun sea el caso.

//? UseEffect 
//* Sirve para disparar efetos seundarios como cualquier hook, es una funcion, que internamente
//* tiene un callback, este callbakc se va ejecutar cada vez que el useEffect se dispare.

//* Si el useEffect no tiene ninguna dependencia [] se va a amandar a llmar cada vez que el SimpleForm se 
//* vuelva a renderizar por alguna razon, se vuelve a redibujar cada vez que el estado se actualiza.

//* Ya sea que cambie el userName o email o que tenga un counter cualquier otra cosa, va disparar ese useEffect

//* Las dependencias [] en el useEffect son las condiciones por las cuales queremos que el useEffect se vuelva
//* a disparar
//* Cuando se coloca una arreglo vacio significa que solo quieren que2 el useEffect se dispare una unica vez
//* y cuando el componente es montado la primera vez.

//? Se recomienda crear efectos especializados y especificos por cada accion que queramos ejecutar o por cada
//? efecto secundario que queremos quieren llamar. 





