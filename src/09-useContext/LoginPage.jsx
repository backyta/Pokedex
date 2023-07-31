import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

    const { user } = useContext( UserContext ) 
    console.log( user );

    return (
        <>
            <h1>LoginPage</h1>
            <hr />

            <pre aria-label="pre">
                { JSON.stringify( user, null, 3 ) }
            </pre>
        </>
    )
}

//* Para indicar a que contexto apuntamos uindicamos la variable en donde creamos el contexto, en este caso
//* el createContext() es userContext
//* Si se tiene mas de 1 useContext el hook devolvera el resultado ams cercano de manera ascendente, si se
//* manda a llamar el contexto en un componente este busca el que esta arriba de el mas cercano.

