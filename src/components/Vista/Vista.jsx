import './Vista.css'
import { useState } from 'react'

const Vista = () => {
    const [modoOscuro, setModoOscuro] = useState(false);

    const cambiarModo = () => {
        setModoOscuro(!modoOscuro);
    }

    const estilo = modoOscuro ? "oscuro" : "claro";

  return (
    <div className={estilo}>
        <button onClick={cambiarModo} >  {modoOscuro ? "Claro" : "Oscuro"} </button>
        <h2>Componente Vista</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nemo 
        earum dignissimos error maiores culpa sapiente ea illo veritatis, vero non 
        repellendus sed aspernatur eligendi minus! Laudantium nobis unde quibusdam.</p>
    </div>
  )
}

export default Vista