import ItemCount from "../../ItemCount/ItemCount";

const ItemDetail = ({product}) => {
    const onAdd = (count) => {
        console.log(`se agrego ${count} productos al carrito`)
    }
    return (
        <div className="card d-flex ">
            <div className="row">
                <div className="col-6">
                    <img src={product.image} />
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
                    <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail