/* eslint-disable no-undef */

import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

//* Hacemos un mock completo de jest. para simular el useFetch, se recomienda hacer el mock de la 
//* ruta absoluta del hook.

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');



describe('Pruebas en <MultipleCustomHooks>', () => {
    //? Esto hace que en todas la pruebas se va colocar el moock Counter

    const mockIncrement = jest.fn()
        
        useCounter.mockReturnValue({
            counter: 1,
            increment: mockIncrement
        })
    
    beforeEach( () =>{
        jest.clearAllMocks();

    });
    //* Esta funcion indica que antes de cada una de las pruebas vamos a limpiar cada una de las pruebas en 
    //* caso hemos llamado la funcion de IncrementMock y queremos asegurarnos de que la prueba esta limpia


    test('debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data     : null,
            isLoading: true,
            hasError : null
        })
        
        render( <MultipleCustomHooks />)
        screen.debug()

        expect( screen.getByText('Loading...'))
        expect( screen.getByText('Pokedex Pokemon'))

        const nextButton = screen.getByRole('button', { name:'Next Pokemon' })
        expect( nextButton.disabled ).toBeTruthy()

    });

    test('debe de mostrar un Quote', () => {
        
        useFetch.mockReturnValue({
            data     : { name:'Charizard', types:[{slot:1, type:{ name:'grass'}},{ slot:2, type:{ name:'xd'}}], sprites:[{back_shiny:"xd"}], id:2},
            isLoading: false,
            hasError : null
        })

        render( <MultipleCustomHooks />)
        expect( screen.getByText('Charizard')).toBeTruthy
        expect( screen.getByText('grass & xd')).toBeTruthy

        const nextButton = screen.getByRole('button', { name:'Next Pokemon' })
        expect( nextButton.disabled ).toBeFalsy() //* como el isloading cambio se valida lo contario

    });
    //? Con esto ya hicimos la prueba de simuliar completamente el valor de retorno de un custom hook


    test('debe de llamar la funcion de incrementar(debemos usar counter)', () => {

        
        useFetch.mockReturnValue({
            data     : { name:'Charizard', types:[{slot:1, type:{ name:'grass'}},{ slot:2, type:{ name:'xd'}}], sprites:[{back_shiny:"xd"}], id:2},
            isLoading: false,
            hasError : null
        })
        

        render( <MultipleCustomHooks />)
        const nextButton = screen.getByRole('button', { name:'Next Pokemon' })
        fireEvent.click( nextButton )

        expect( mockIncrement ).toHaveBeenCalled()

    });

});

//* Probamos el componente que utiliza multiples hooks, que es el padre y recibe a otros componentes
//* para renderizarse junto con otros componentes y lanzar al main
//* Esta es una prueba que avalua el estado inical del componete.

//? Haciendo pruebas al useFetch en el MultipleCustomHokk
