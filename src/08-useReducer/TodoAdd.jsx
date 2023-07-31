
import PropTypes from 'prop-types'
import { useForm } from '../hooks';

export const TodoAdd = ({ onNewTodo }) => {
    
  const  { onInputChange, description, onResetForm } = useForm({
        description:'',
        id: '',
        done: false
    });

    const onFormSubmit = (event) =>{
        event.preventDefault()
        if (description.length <=1) return;
            
        const newTodo = {
            done       : false,
            id         : new Date().getTime(),
            description: description
        }

        onNewTodo && onNewTodo( newTodo );
        onResetForm();
    }

    return (
        <>
        <form onSubmit={ onFormSubmit }>
            <input 
                type="text" 
                placeholder="Que hay que hacer?"
                className="form-control"
                name="description"
                value={ description }
                onChange={ onInputChange }  
            />
            <button
                type="submit"
                className="btn btn-outline-success mt-2"
            >
                Agregar
            </button>  
        </form>      
        </>
    )
}

TodoAdd.propTypes = {
    onNewTodo: PropTypes.func.isRequired
}

//* Primero con el onChange revisamos opor cambios en el input si hay cambios se dispara el state del useForm
//* ys e actualiza las demas pripiedades del objeto pasan igual, pero se modifica el que tiene el name
//* en este caso description, una vez acutalizado el estado en form, al lanza el submit
//* se pasa el el seteo completo del newTodo, mediante un evento que recibe el padre en una fuincion don
//* hace un console log del todo u objeto que se seteo en el estado.