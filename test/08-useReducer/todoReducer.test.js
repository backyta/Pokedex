
import { todoReducer } from "../../src/08-useReducer/todoReduce";

/* eslint-disable no-undef */
describe('Pruebas en el todoReducer', () => {
    
    const initialState = [{
            id         : 1,
            description: 'Demo Todo',
            done       : false
        },
        {
            id         : 2,
            description: 'Demo Todo2',
            done       : false
        }
    ]

    test('debe de regresar el estado inicial', () => {
        
        const newState = todoReducer( initialState,{} )

        expect( newState ).toBe( initialState )
    });


    test('debe de agregar un todo', () => {

        const action = {
            type:'[TODO] Add Todo',
            payload: {
                id:3,
                description: 'Nuevo todo 3',
                done: false
            }
        };

        const newState = todoReducer( initialState, action )
        console.log(newState);
        expect( newState.length ).toBe( 3 )
        expect( newState ).toContain( action.payload )//* valida que el arreglo newState tenga el objeto.payload

    });

    test('debe de eliminar un todo', () => {

        const actionAdd = {
            type:'[TODO] Add Todo',
            payload: {
                id:3,
                description: 'Nuevo todo 3',
                done: false
            }
        };

        const newStateAdd = todoReducer( initialState, actionAdd )
        console.log(newStateAdd);

        const actionDelete = {
            type:'[TODO] Remove Todo',
            payload: 3
            
        };
        
        const newStateDelete = todoReducer( initialState, actionDelete )
        console.log(newStateDelete);

        expect( newStateDelete.length ).toBe( 2 )
        expect( newStateDelete ).toEqual( initialState )
    });
    

    test('debe realizar el cambio o toggle de todo', () => {
        
        
        const actionToggle = {
            type:'[TODO] Toggle Todo',
            payload: 2,
            
        };

        const newStateToggle = todoReducer( initialState, actionToggle )
        console.log(newStateToggle);

        expect( newStateToggl[1].done ).toBe( true )
        // expect( newStateDelete ).toEqual( initialState )
    });



});

//* El toBe compara que sean identicos que apunten al mismo espacio en memoria, mismo tipo o objeto.
//* Si se destructura de el todoReducer el obejro por default no apuntaria ala mismo espacio en memoria.

