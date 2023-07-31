/* eslint-disable no-undef */

import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { UseTodo } from "../../src/hooks/useTodo";

jest.mock('../../src/hooks/useTodo');

describe('Pruebas en TodoApp', () => {

    UseTodo.mockReturnValue({
        todos:[
            {id:1, description:'Todo 1', done: false},
            {id:2, description:'Todo 2', done: true},
        ],
        todosCount: 2, 
        penddingTodosCount: 1,
        handleNewTodo: jest.fn(),
        handleDeletoTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
    });
    
    test('debe de mostrar el componente correctamente', () => {
        
        render(<TodoApp />)
        screen.debug();

        expect( screen.getByText('Todo 1')).toBeTruthy()
        expect( screen.getByText('Todo 2')).toBeTruthy()
        expect( screen.getByRole('textbox')).toBeTruthy()

    });
});