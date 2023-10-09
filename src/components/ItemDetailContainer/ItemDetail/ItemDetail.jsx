import { useState } from "react";

import { useCartContext } from "../../../Context/CartContext";
import { Link } from "react-router-dom";
import ItemCount from "../../ItemCount/ItemCount";

const ItemDetail = ({product}) => {
    const [contador, setContador] = useState(true)
    const { addProduct } = useCartContext()
    const onAdd = (count) => {
        addProduct({...product, quantity: count})
        setContador(false)
    }
    return (
        <div className="card d-flex ">
            <div className="row">
                <div className="col-6">
                    <img className="w-50" src={product.image} />
                </div>
                <div className="col-6">
                    <h1>{product.name}</h1>
                    <div>
                        <h5>Description:</h5> {product.description}
                    </div>
                    <div>
                        <h5>Price:</h5> ${product.price.toFixed(2)}
                    </div>
                    <div>
                        <h5>Stock:</h5> {product.stock}
                    </div>
                    <br />
                    <div>
                        {contador ? 
                                <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>
                                : <>
                                    <Link to={'/'}>
                                        <button>Select other item</button>
                                    </Link>
                                    <Link to={'/cart'}>
                                        <button>Your Cart</button>
                                    </Link>
                                </>
                        }
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ItemDetail