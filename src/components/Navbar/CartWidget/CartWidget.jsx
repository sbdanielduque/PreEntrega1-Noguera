import './cartwidget.css'

const CartWidget = () => {
    return (
        <div>
            <img className="carrito" src="https://purepng.com/public/uploads/medium/purepng.com-shopping-cartshoppingcarttrolleycarriagebuggysupermarkets-1421526532379mew9h.png"
            alt="carrito" />
            <span className='carrito-count'>2</span>
        </div>
    )
}

export default CartWidget