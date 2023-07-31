/* eslint-disable no-undef */

import { render,screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe('Pruebas en <LoginPage/>', () => {

    const user = {
        id:2,
        name:'Kevin',
        email:'correo@correo.com'    
    }
    test('Debe de mostrar el coponente sin el usuario', () => {
        render(
            <UserContext.Provider value={{user: null}}>
                <LoginPage/>
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe('null');
        
    });

    test('Debe de mostrar el coponente con el usuario', () => {
        render(
            <UserContext.Provider value={{user: user}}>
                <LoginPage/>
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toContain(user.name);
        expect( preTag.innerHTML ).toContain(`${user.id}`);
        
        
    });

    
});