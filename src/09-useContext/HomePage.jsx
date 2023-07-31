import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const HomePage = () => {
    
    const { user,setUser } = useContext( UserContext )

    return (
        <>
            <h1>HomePage <small>{ user?.name }</small> </h1>
            <hr />

            <pre aria-label="pre">
                { JSON.stringify( user, null, 3 ) }
            </pre>

            <button 
                className="btn btn-success"
                onClick={ () => setUser({ id: 123, name: 'Kevin', email:'correo@correo.com'}) }
                >

                Set User
            </button>
        </>
    )
}
