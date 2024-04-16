import './App.css';
import ContenedorProductos from './components/ContenedorProducto/ContenedorProductos';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import Vista from './components/Vista/Vista';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Bienvenido a Coffe Limón"/>
      <ContenedorProductos/>
      <ItemCount/>
      <Vista/>
    </>
  );
}

export default App;
