import { Link } from "react-router-dom"
import './item.css' 
const Item = ({product}) => {
    return (
    <>
        <div className="card w-25 grid">
            <div className="card-body d-flex flex-column">
                <img className="w-100 card-img-top" src={product.image} alt={product.name} />
                <div className="card-content">
                <h2 className="card-title">{product.name}</h2>
                <p>Descrpition: {product.description}</p>
                <p>Price: ${product.price}</p>
                </div>
            </div>
            <div className="card-footer">
                <Link to={`/detail/${product.id}`}>
                <button className="btn btn-primary w-100">Detail</button>
                </Link>
            </div>
        </div>
    </>
    )
}

export default Item