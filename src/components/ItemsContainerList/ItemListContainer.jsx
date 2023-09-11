import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { list } from "../../utils/mockFetch"
import ItemContainer from "./ItemContainer/ItemContainer"


const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true) // carga de api
    const { cid } = useParams()

    useEffect(()=>{
        if(cid) {
            list()
            .then(respuesta => setProducts(respuesta.filter(product => cid === product.category))) //lista de objetos filtrados
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        } else{
            list()
        .then(respuesta => setProducts(respuesta)) //lista de objetos completa
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