import { useCartContext } from '../../../Context/CartContext'
import './cartwidget.css'


const CartWidget = () => {
    const {productosEnCarrito} = useCartContext()
        return (
            <div>
                <img className="carrito" src="https://purepng.com/public/uploads/medium/purepng.com-shopping-cartshoppingcarttrolleycarriagebuggysupermarkets-1421526532379mew9h.png"
                alt="carrito" />
                <span className='carrito-count'>{productosEnCarrito() !== 0 && productosEnCarrito()}</span>
            </div>
        )
}

export default CartWidget