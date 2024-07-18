import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function Contador() {
  const [contador,setContador] = useState(1);

  function AdicionarConsole() {
   setContador(contador + 1);
  }

  return (
   <>
   <div>{contador}</div>
   <button onClick={AdicionarConsole}>Adicionar</button>
   </>
  );
}


function Pagina() {
  return <Contador />
}

export default Contador





