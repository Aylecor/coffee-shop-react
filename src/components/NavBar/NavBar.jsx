import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'

const NavaBar = () => {
  return (
    <header>
        <h1>Coffe Limón</h1>
        <nav>
            <ul>
                <li>Café</li>
                <li>Té</li>
                <li>Hierbas Arómaticas</li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavaBar