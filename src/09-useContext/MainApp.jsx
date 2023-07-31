import { Outlet } from "react-router-dom"
import { NavBar } from "./NavBar"
import { UserProvider } from "./context/UserProvider"

export const MainApp = () => {
    
    return (
        <>
        <UserProvider>
            {/* <h1>MainApp</h1> */}
            <NavBar />
            <hr />

            <Outlet />
        </UserProvider>
        </>
    )
}

//* Cualquier elemento que se encuente dentro del User Poriver y los elementos que se encuentren dentro
//* de estos elementos hijos como login, about o home van a poder ver el userProvider y ver el user Provider
//* y obtner esa informacion que estoy configurando.