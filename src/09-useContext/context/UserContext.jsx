import { createContext }  from "react";

export const UserContext = createContext()






//* Entiendase por context a un lugar centralizado para compartir la infomacion del usuario, usuario activo
//* autenticacion de los productos, carrito de compras, etc

//* Un context es un higher order component, se puede definir el estado inicial que el context va tener ()
//* a la hora de definirlo este va ser el valor que vamos a exponer a todos los componentes que quieran
//* tomar infomacion de este contexto.

//* Se crea el useContext para permitirnos saber como luce la infomacion que vamos a colocar ahi, y nos va
//* servir para que nuestro hook de react busque este contexto y tmb para definir el proveedor.