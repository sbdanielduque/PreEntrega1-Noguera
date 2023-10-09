import React, { useState } from 'react'
import { useCartContext } from '../../../Context/CartContext'
import SectionSinProd from './SectionSinProd'
import Form from './Form/Form'

const CartForm = () => {
    const { cartList } = useCartContext()
    const [dataForm, setDataForm] = useState({
        name: '',
        phone: '',
        email: ''
    })

    const [id, setId] = useState('')  

    const handleOnChange = (evt) => {
        setDataForm({
            ...dataForm,
            [evt.target.name] : evt.target.value
        })
    }

    return (
        <>
            {id !== '' && <h3 className='text-center text-white'>Thank you for you Purcharse: {id}</h3>}
            <br />
            {cartList.length > 0 ? 
                                    <Form 
                                        handleOnChange={handleOnChange} 
                                        setId={setId} 
                                        dataForm={dataForm}
                                        setDataForm={setDataForm}
                                    />
                                : <SectionSinProd />
            }
        </>
    )
}

export default CartForm