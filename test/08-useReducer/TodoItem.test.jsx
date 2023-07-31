/* eslint-disable no-undef */

import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Pruebas en <TodoItem />', () => {
    const todo = {
        id: 1,
        description: 'Piedra del Alma',
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn(); 

    beforeEach( () => jest.clearAllMocks() );

    test('debe de mostrar el Todo Pendiente de completar ', () => {
        
        render( <TodoItem 
            todo={ todo } 
            onToggleTodo={ onToggleTodoMock } 
            onDeleteTodo={ onDeleteTodoMock }
            />
        );

        const liElement = screen.getByRole('listitem'); //* busca el li o listitem
        console.log(liElement.innerHTML);

        expect( liElement.className ).toBe( 'list-group-item d-flex justify-content-between mt-1' )
        
        const spanElement = screen.getByLabelText('span');
        // console.log(spanElement.className);
        expect( spanElement.className ).toContain('align-self-center cursor-pointer')
        expect( spanElement.className ).not.toContain('text-decoration-line-through')

        // screen.debug();
        
    });  


    test('debe de mostrar el Todo Completado', () => {
        
        todo.done = true;

        render( <TodoItem 
            todo={ todo } 
            onToggleTodo={ onToggleTodoMock } 
            onDeleteTodo={ onDeleteTodoMock }
            />
        );

        
        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toContain('text-decoration-line-through')

        // screen.debug();
    });  

    test('El span debe de llamar el ToggleTodo cuando se hace click', () => {
        
        render( <TodoItem 
            todo={ todo } 
            onToggleTodo={ onToggleTodoMock } 
            onDeleteTodo={ onDeleteTodoMock }
            />
        );

        
        const spanElement = screen.getByLabelText('span');
       fireEvent.click( spanElement );

       expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id )
        
    });  

    test('El boton debe de llamar el ToggleTodoDelete cuando se hace click', () => {
        
        render( <TodoItem 
            todo={ todo } 
            onToggleTodo={ onToggleTodoMock } 
            onDeleteTodo={ onDeleteTodoMock }
            />
        );

        
        const buttonElement = screen.getByTestId('button');
       fireEvent.click( buttonElement );

       expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id )
        
    });  
});

//* Cuando queremos especificar algo podemos usar el testId o el ariaLabel, para poder encontrar una etiqueta
//* por el nombre o id en este caso span data-testid="span" / y en el test lo busco con const 
//* spanElement = screen.getByTestId('span');