import Item from "./Item/Item"

const ItemContainer = ({products}) => {
    return (
        <>
            {products.map(product => <Item key={product.id} product={product}/>
                        )
            }
        </>    )
}

export default ItemContainer