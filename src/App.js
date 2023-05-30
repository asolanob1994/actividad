import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formulario from './components/formulario'

function App() {
  const [count, setCount] = useState(0)
 



  return (
    <>
     <h1>hola mundo</h1>

     <Formulario/>

 
    </>
  )
}

export default App
