import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useCartContext } from '../../../../Context/CartContext'

const Form = ({handleOnChange ,setId, dataForm, setDataForm}) => {
    const {deleteProd, precioTotal, cartList} = useCartContext()
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
    return (
        (<form onSubmit={handleComprar}>
            <input 
                type='text' 
                name='name' 
                placeholder='ingresar el nombre'
                value={dataForm.name}
                onChange={handleOnChange}
                required
            />
            <input
                type='text' 
                name='phone' 
                placeholder='ingresar el telefono' 
                value={dataForm.phone}
                onChange={handleOnChange}
                required
            />
            <input 
                type='email'
                name='email' 
                placeholder='ingresar el email' 
                value={dataForm.email}
                onChange={handleOnChange}
                required
            />
            <button className="btn btn-outline-success">
                Buy
            </button >
            <div className='text-center'>
                <button className='btn btn-outline-danger' onClick={deleteProd}>
                    Clear Cart
                </button>
            </div>
        </form>)
    )
}

export default Form