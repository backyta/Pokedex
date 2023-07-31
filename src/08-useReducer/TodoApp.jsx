import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"
import { UseTodo } from "../hooks"


export const TodoApp = () => {

    const { todos, todosCount, penddingTodosCount, handleNewTodo, handleDeletoTodo, handleToggleTodo} = UseTodo();

    return (
        <>
            <h1>TodoApp:{todosCount}, <small>Pendientes: {penddingTodosCount}</small> </h1> 
            <hr />
        <div className="row">
            <div className="col-7">

                <TodoList 
                    todos={ todos } 
                    onDeleteTodo={ id => handleDeletoTodo (id)} 
                    onToggleTodo={ id => handleToggleTodo(id) }
                />

            </div>
            
            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                {/* TodoAdd onNewTodo(todo) */}
                
                <TodoAdd onNewTodo={ todo => handleNewTodo(todo) } />
                 {/* El todo que recibimos de onNewTodo en el otro archivo le pasamos a handle aqui */}
            </div>


        </div>
        </>

    )
}


//* !done.lenght muestra los que estan en false, osea los todos pendiente