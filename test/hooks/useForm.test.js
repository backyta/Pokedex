/* eslint-disable no-undef */

import { renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";
import { act } from "react-dom/test-utils";

describe('Pruebasen useForm', () => {

    const initialForm = {
        name: 'Fernando',
        email: 'correo@correo.com'
    }


    test('debe de regresar los valores por defecto ', () => {
        
        const { result } = renderHook( () => useForm( initialForm ))
        console.log(result);
        expect(result.current).toEqual({
            name         : initialForm.name,
            email        : initialForm.email,
            formState    : initialForm,
            onInputChange: expect.any( Function ),
            onResetForm  : expect.any( Function ),
        });
    });

    test('debe de cambiar el nombre del formulario', () => {

        const newValue = 'Kevin';
        const { result } = renderHook( () => useForm( initialForm ))
        console.log(result);
        const { onInputChange } = result.current;

        act(() => {
            onInputChange({ target: { name: 'name', value: newValue }})
        })

        expect( result.current.name ).toBe( newValue )//* compara con la propiedad name del input el nuevo valor seteado
        expect( result.current.formState.name ).toBe( newValue)

    });

    test('debe de realizar el reset del formulario', () => {

        const newValue = 'Kevin';
        const { result } = renderHook( () => useForm( initialForm ))
        console.log(result);
        const { onInputChange, onResetForm } = result.current;

        act(() => {
            onInputChange({ target: { name: 'name', value: newValue }})
            onResetForm()
        })

        expect( result.current.name ).toBe( initialForm.name )//* compara con la propiedad name del input el nuevo valor seteado
        expect( result.current.formState.name ).toBe( initialForm.name )

    });

    

});