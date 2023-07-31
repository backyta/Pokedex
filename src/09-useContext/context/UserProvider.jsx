import { useState } from "react"
import { UserContext } from "./UserContext"
import PropTypes from 'prop-types'

// const user = {
//     id:1234,
//     name: 'Kevin Baca',
//     email: 'correo@correo.com'
// }

export const UserProvider = ({ children }) => {
    
    const [user, setUser] = useState()


    return (
        <>
            {/* <UserContext.Provider value={{ hola: 'Mundo', user: user }}> */}
            <UserContext.Provider value={{ user, setUser }}>
                { children }
            </UserContext.Provider>
        </>
    )
}

UserProvider.propTypes = {
     children: PropTypes.array.isRequired
}

//* en exte componente tenemos el Usercontext Porvider donde se quiere proveer todas la informacion
//* que este useContext, va proporcionarle al arbol de nuestros componentes

//* Lo que se coloca en el value es loq ue cualquier hijo de este user Provider va a poder obtener de este
//* use Context, pueden poner funciones o propiedades, o solo valores, usualmente se regresa un objeto 
//* con toda la info que tiene relacion con el usuario.

//* Si se quiere tener acceso al objeto del context vamos a usar el hokk useContext
//* El value podria verse como lo que estamos retornando de un custom hooks, este value es lo que estamos 
//* exponiendole a las personas(componentes) que quierne usar nuestro contexto 