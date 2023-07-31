/* eslint-disable no-undef */

import { renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";
import { act } from "react-dom/test-utils";

describe('Pruebas en el useCounter', () => {

    test('debe retornar los valores por defecto  ', () => {

        const { result } = renderHook( () => useCounter() )
        //  console.log(result);
        const { counter,decrement, increment, reset} = result.current
        expect( counter ).toBe(0);
        expect( decrement ).toEqual( expect.any( Function ) );
        expect( increment ).toEqual( expect.any( Function ) );
        expect( reset ).toEqual( expect.any( Function ) );
    });

    test('debe de generar el counter con el valor de 100', () => {

        const { result } = renderHook( () => useCounter(100) )
        expect( result.current.counter ).toBe(100)

    });

    test('debe de incrementar el contador', () => {

        const { result } = renderHook( () => useCounter(100) )
        const { increment} = result.current
        act( () =>{
            increment()
            increment(2)
        });

        expect( result.current.counter ).toBe(103)
        //* Siempre tomar el valor actual, porque el otro se setea y no es dinamico
        
    });

    test('debe de decrementar el contador', () => {

        const { result } = renderHook( () => useCounter(100) )
        const { decrement} = result.current
        act( () =>{
            decrement()
            decrement(2)
        });

        expect( result.current.counter ).toBe(97)
       
    });

    test('debe de resetear el contador al valor incial', () => {

        const { result } = renderHook( () => useCounter(100) )
        const { reset,decrement } = result.current
        act( () =>{
            decrement()
            reset()
        });

        expect( result.current.counter ).toBe( 100 )
       
    });

});

//* el renderHook simula el renderizado del hook perzonalizado que probamos como si estuviera en un componente
//* lo que retona es lo que exponemos dentro del hook personalizado
//* destructuramos lo que viene en el resultado actual, y nos asefuramos mediante aserciones que estas piezas
//* tenga el valor que yo espero.