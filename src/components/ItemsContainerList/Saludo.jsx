import './saludo.css'

const Saludo = (props) => {
    return (
    <>
        <div className='container-saludo d-flex justify-content-center'>
            <div className="saludoCss d-flex w-50">
                {props.saludo}
            </div>
        </div>
    </>
    )
}

export default Saludo