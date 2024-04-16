import './CartWidget.css'

const CartWidget = () => {
  const imgCarrito = "./assets/cafeLogo.png";

  return (
    <div>
        <img className='imgCarrito' src={imgCarrito} alt="Carrito de compras"/>
        <strong>3</strong>
    </div>
  )
}

export default CartWidget