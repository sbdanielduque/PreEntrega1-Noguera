import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import ItemDetail from "./ItemDetail/ItemDetail"
import { list } from "../../utils/mockFetch"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const {pid} = useParams()

    useEffect(()=> {
        list(Number(pid))
        .then(resp => setProduct(resp))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [])
    return (
        <div>
            {
            loading ? 
            <div className="text-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            : 
            <ItemDetail product={product}/>}
        </div>
    )
}

export default ItemDetailContainer