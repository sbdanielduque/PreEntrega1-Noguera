import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc, getFirestore } from 'firebase/firestore'

import ItemDetail from "./ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const {pid} = useParams()

    useEffect(()=> {
        const db = getFirestore()
        const queryDoc = doc(db, 'products', pid)
        getDoc(queryDoc)
        .then(resp => ( {id: resp.id, ...resp.data()} ))
        .then(resp => setProduct(resp))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [])
    return (
        <div>
            {loading ? 
                        <div className="text-center">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    : 
                        <ItemDetail product={product}/>
            }
        </div>
    )
}

export default ItemDetailContainer