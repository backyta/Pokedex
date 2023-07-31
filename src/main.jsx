// import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routesConfig } from './09-useContext/routesConfig';

// import { HookApp } from './HooksApp'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHooks'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Loyout'
// import { Memorize } from './06-memos/Memorize'
// import { MemoHook } from './06-memos/MemoHook'
// import { CallbackHook } from './06-memos/CallbackHook'
// import { Padre } from './07-tarea-memo/Padre'
// import './08-useReducer/intro-reducer'
// import { TodoApp } from './08-useReducer/TodoApp'


const router = createBrowserRouter(routesConfig);

createRoot(document.getElementById('root')).render(

    //  <React.StrictMode> 
      <RouterProvider router={ router } />
    //  </React.StrictMode> 

)

//* createBrowserRouter es un componente de alto nivel, no es ams que otro componente solo que la diferenci
//* es que recibe otros componentes dentro de el, al igual que el RouterProvier.

//* Este higer order component nos sirve o nos permite que todos los hijos que esten dentro de el
//* tengan cierto acceso a al infoamcion que provee el padre.