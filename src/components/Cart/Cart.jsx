import { useCartContext } from "../../Context/CartContext"
import ItemCart from "./ItamCart/ItemCart"


const Cart = () => {
    const {deleteProd, precioTotal, cartList} = useCartContext()
    
    const handleComprar = () => {
        const orden = {}
        orden.comprador = {name: 'daniel', phone: '754-454-5599', email: 'd@gmail.com'}
        orden.productos = cartList.map(prod => {
            return {id: prod.id, name: prod.name, price: prod.price, quantity: prod.quantity}
        })
        orden.total = precioTotal().toFixed(2)
        console.log(orden)
    }

    return (
        <div>
            <ItemCart />
            <div className="text-center">
                    {precioTotal() !== 0 && <h3>precio total: {precioTotal().toFixed(2)}</h3>}
            </div>
            <div className="text-center">
                    <button className="btn btn-outline-danger" onClick={deleteProd}>Clear Cart</button>
            </div>
            <button className="btn btn-outline-success"
                    onClick={handleComprar}>
                Comprar
            </button>
        </div>
    )
}

export default Cart