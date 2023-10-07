import React from 'react'
import { useCartContext } from '../../../Context/CartContext'

const ItemCart = () => {
    const {cartList, eliminarProducto} = useCartContext()

    return (
    <>
        {cartList.map(prod => <div className="container" key={prod.id}>
                    <div className="card d-flex ">
                        <div className="row">
                            <div className="col-6">
                                <img className="w-50" src={prod.image} />
                            </div>
                            <div className="col-6">
                                <h1>{prod.name}</h1>
                                <div>
                                    <h5>Description:</h5> {prod.description}
                                </div>
                                <div>
                                    <h5>Price:</h5> ${prod.price.toFixed(2)}
                                </div>
                                <div>
                                    <h5>Quantity:</h5> {prod.quantity}
                                </div>
                                <div>
                                    <button className='btn btn-outline-danger' onClick={()=>eliminarProducto(prod.id)}>❌</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)}
    </>
    )
}

export default ItemCart
