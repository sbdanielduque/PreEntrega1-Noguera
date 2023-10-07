import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemContainer from "./ItemContainer/ItemContainer"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"


const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true) // carga de api
    const { cid } = useParams()

    useEffect(()=>{
        if(cid) {                                   //lista de objetos filtrados
            const db = getFirestore()
            const queryCollection = collection(db, 'products')
            const queryFilter = query(queryCollection, where('category', '==', cid))
            getDocs(queryFilter)
                .then(resp => setProducts(resp.docs.map(prod => ({id: prod.id, ...prod.data()})))) 
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        } else{                                     //lista de objetos completa
            const db = getFirestore()
            const queryCollection = collection(db, 'products')
            getDocs(queryCollection)
                .then(resp => setProducts(resp.docs.map(prod => ({id: prod.id, ...prod.data()})))) 
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }
    }, [cid]) //cid en las llaves para que llame al render
    return (
        <>
            <div className="row w-100 justify-content-around">
                {
                    loading ?
                    <div className="text-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    :
                    <ItemContainer products={products}/>
                }
            </div>
        </>
    )
}

export default ItemListContainer