import React from 'react'
import { Link } from 'react-router-dom'
import './section.css'
const SectionSinProd = () => {
    return (
        <div className='sectionCard'>
            <div className="card ">
            <div className="card-body">
                <h5 className="card-title text-center">Cart Epty</h5>
                <p className="card-text">Your Cart is Epty, go back and pick some good things.</p>
                <Link to={'/'} className="card-link">Home</Link>
            </div>
        </div>
        </div>
        
    )
}

export default SectionSinProd