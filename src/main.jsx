// import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { HookApp } from './HooksApp'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHooks'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'

createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <MultipleCustomHooks />
//  </React.StrictMode>
)
