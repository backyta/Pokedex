import { fireEvent, render, screen } from "@testing-library/react";
import { HomePage } from "../../src/09-useContext/HomePage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

/* eslint-disable no-undef */
describe('Pruebas en <HomePage />', () => { 

    const user = {
        id: 1,
        name: 'Kevin'
    }
    
    test('debe de mostrar el componente sin el usuario', () => {
        
        render( 
            <UserContext.Provider value={{user:null}}>
                <HomePage/>
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre')
        expect( preTag.innerHTML ).toBe('null');
        
        // screen.debug()

    });

    test('debe de mostrar el componente con el usuario', () => {
        
        render( 
            <UserContext.Provider value={{user: user}}>
                <HomePage/>
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre')
        expect( preTag.innerHTML ).toContain(user.name);
        expect( preTag.innerHTML ).toContain(`${user.id}`);
        

        // screen.debug()

    });

    
    test('debe de llamar el setUser cuando se hace click en el boton', () => {

        const setUserMock = jest.fn()
        
        render(
            <UserContext.Provider value={{user: null, setUser:setUserMock }}>
                <HomePage/>
            </UserContext.Provider>
        );

        const button = screen.getByRole('button');
        fireEvent.click( button )

        expect( setUserMock ).toHaveBeenCalledWith({ id: 123, name: 'Kevin', email:'correo@correo.com'})
    });

});