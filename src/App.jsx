import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Formulario from './components/formulario';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>

  
       
      <h1>FORMULARIO</h1>
       <br>
       </br>
      <h1>instruciones</h1>

      <p>el boton registrar, registrara el nombre y apellido</p>
      <p>el boton eliminar, eliminara el nombre y apellido en la columna seleccionada</p>
      <p>el boton editar, editara el nombre y apellido en la columna seleccionada con los valores configurados en el textfield</p>
   
      <Formulario />
    </>
  );
}

export default App;
