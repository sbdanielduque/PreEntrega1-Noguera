import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React, { useState } from 'react'
import { useCartContext } from '../../../Context/CartContext'
import SectionSinProd from './SectionSinProd'

const CartForm = () => {
    const { cartList, precioTotal, deleteProd } = useCartContext()
    const [dataForm, setDataForm] = useState({
        name: '',
        phone: '',
        email: ''
    })

    const [id, setId] = useState('')  

    const handleComprar = (evt) => {
        evt.preventDefault()
        const orden = {}
        orden.comprador = dataForm
        orden.productos = cartList.map(prod => {
            return {id: prod.id, name: prod.name, price: prod.price, quantity: prod.quantity}
        })
        orden.total = precioTotal().toFixed(2)
        const queryDB = getFirestore()
        const ordenCollection = collection(queryDB,'orden')
        addDoc(ordenCollection, orden)
        .then(({id}) => setId(id))
        .catch(err => console.log(err))
        .finally(()=> {
            setDataForm({
                name: '',
                phone: '',
                email: ''
            })
            deleteProd()
        })
    }

    const handleOnChange = (evt) => {
        setDataForm({
            ...dataForm,
            [evt.target.name] : evt.target.value
        })
    }

    return (
        <>
            {id !== '' && <h3 className='text-center text-white'>Se ha generado su orden: {id}</h3>}
            <br />
            {cartList.length > 0 ? 
                                    (<form onSubmit={handleComprar}>
                                        <input 
                                            type='text' 
                                            name='name' 
                                            placeholder='ingresar el nombre'
                                            value={dataForm.name}
                                            onChange={handleOnChange}
                                        />
                                        <input
                                            type='text' 
                                            name='phone' 
                                            placeholder='ingresar el telefono' 
                                            value={dataForm.phone}
                                            onChange={handleOnChange}
                                        />
                                        <input 
                                            type='email'
                                            name='email' 
                                            placeholder='ingresar el email' 
                                            value={dataForm.email}
                                            onChange={handleOnChange}
                                        />
                                        <button className="btn btn-outline-success">
                                            Buy
                                        </button >
                                        <div className='text-center'>
                                            <button className='btn btn-outline-danger' onClick={deleteProd}>Clear Cart</button>
                                        </div>
                                    </form>)
                                    : <SectionSinProd />
            }
        </>
    )
}

export default CartForm