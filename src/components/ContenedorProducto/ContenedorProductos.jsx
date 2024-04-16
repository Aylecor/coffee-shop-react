import Producto from "../Producto/Producto"

const ContenedorProductos = () => {
  return (
    <div>
        <Producto nombre="Arroz" precio={100}/>
        <Producto nombre="Fideos" precio={180}/>
    </div>
  )
}

export default ContenedorProductos