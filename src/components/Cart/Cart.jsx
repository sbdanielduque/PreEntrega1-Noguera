import { useCartContext } from "../../Context/CartContext"
import ItemCart from "./ItamCart/ItemCart"
import './cart.css'
import CartForm from "./ValidacionDeProductos/CartForm"

const Cart = () => {
    const { precioTotal } = useCartContext()
    
    return (
        <div>
            <ItemCart />
            <div className="text-center">
                    {precioTotal() !== 0 && <h3 className="text-white">precio total: {precioTotal().toFixed(2)}</h3>}
            </div>
            <CartForm />
        </div>
    )
}

export default Cart