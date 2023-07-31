import { NavLink } from "react-router-dom"

export const NavBar = () => {
    
    return (
     
        <nav className="d-flex navbar-dark bg-dark align-items-center gap-3 p-2 rounded-3 m-2">
            
                <NavLink className="navbar-brand fs-5" to="/">useContex</NavLink>

                    <ul className="navbar-nav d-flex flex-row gap-3 align-items-center ">

                        <NavLink 
                            className={ ({isActive}) =>  `nav-link ${ isActive ? 'active' : '' }` }
                            to="/">
                            Home
                        </NavLink>

                        <NavLink 
                            className={ ({isActive}) =>  `nav-link ${ isActive ? 'active' : '' }` }
                            to="/about/" end>
                            Features
                        </NavLink>

                        <NavLink 
                            className={ ({isActive}) =>  `nav-link ${ isActive ? 'active' : '' }` }
                            to="/login">
                            Login
                        </NavLink>
                    </ul>
        </nav>
    )
}

//* con el end solo coindice con el final de la ruta
//* Un contexto es toda la estructura que tenemos del router , se tiene varios higher order componentes.
