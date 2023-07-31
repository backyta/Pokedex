
const initialState = [{
    id  : 1,
    todo: 'Recolectar la piedra del alma',
    done: false

}];

//* Creacion del reducer function

const todoReducer = ( state = initialState, action ={} ) =>{
    //* Regresar un nuevo estado mediante el action

    if ( action.type === '[TODO] add todo' ) {
        return [ ...state, action.payload ]
    }

    return state;
}

//* asignacion del resultado o return del reducer(initial state  + action)
let todos = todoReducer();

//* Nuevo todo a agregar
const newTodo = {
    id  : 2,
    todo: 'Recolectar la piedra del Tiempo',
    done: false
}

//* Creacion de la accion que le dira como se modificara el reducer
const addTodoAction ={
    type: '[TODO] add todo',
    payload: newTodo
}

//* actualizando la asignacion de todos con el reducer y su accion
todos = todoReducer( todos, addTodoAction )

console.log({state: todos}); 





//* Un reducer todo loq ue tiene que hacer es producir un nuevo estado basado en la accion que recibio
//* useReduce es un hoook que se encarga de manejar el estado pero adicionalmente cuando el reducer
//* regresa un nuevo estado se va encarga de redibujar lo que tenga de nuevo.

//? Que es un Reducer?
//* El action que es el otro parametro le va decir al reducer como quiero que cambie el estado, y al final se
//* regresa un nuevo estado

//* Cuando se quiera hacer una madificacion al reducer, lo que se debe hacer es mandarle una accion
//* y esa accion va decir como modificarse.


//? Reducer y useReducer

//* Una funcion pura es aquella que todo lo que realize se debe resolver dentro de ella misma, de manera
//* interna, y esta funcionde Reducer debe de retornar un nuevo estado. 

//? Funcion Pura
//* No debe de tener efectos secundarios, osea debe resolverse todo internamente
//* No debe de realizar tareas asincronas, los reducer se deben de ejecutar de manera sincrona.
//* Debe de retornar siempre un nuevo estado, no se debe de mutar el estado actual.
//* No debe de lalmar el localStorage o sessionStorage de manera interna dentro del reducer
//* No debe de requerir mas de una accion que puede tener un argumento.