import { TodoItem } from "./TodoItem"
import PropTypes from 'prop-types'

export const TodoList = ({todos = [], onDeleteTodo, onToggleTodo }) => {
    
    return (

        <ul className="list-group">
             { 
                todos.map( todo =>(
                    <TodoItem 
                        key={todo.id} 
                        todo={todo} 
                        onDeleteTodo={ id => onDeleteTodo(id) }
                        onToggleTodo={ id => onToggleTodo (id)}    
                    />
                ))
            } 
        </ul>
            
    )
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    onDeleteTodo: PropTypes.func.isRequired,
    onToggleTodo: PropTypes.func.isRequired,
}


//* En este caso pasamos propiedades que es una funcion que se le pasa al padre luego al hijo que llegaran a
//* un nieto.