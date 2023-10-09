import { createContext, useContext, useState } from 'react'

export const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

    const addProduct = (newProduct) => {

        const indice = cartList.findIndex(prod => prod.id === newProduct.id)
        setCartList([...cartList])

        if (indice !== -1) {
            cartList[indice].quantity += newProduct.quantity 
        } else {
            setCartList([
            ...cartList,
            newProduct
        ])
        }
    }

    const productosEnCarrito = () => cartList.reduce((count, newQuantity)=> count += newQuantity.quantity, 0)

    const precioTotal = () => cartList.reduce((count, Total)=> count += (Total.quantity * Total.price), 0)

    const eliminarProducto = id => setCartList(cartList.filter(prod => prod.id !== id))
    

    const deleteProd = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addProduct,
            deleteProd,
            productosEnCarrito,
            eliminarProducto,
            precioTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}
