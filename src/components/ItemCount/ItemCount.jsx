import { useCounter } from "../hooks/useCounter"

const ItemCount = ({initial, stock, onAdd}) => {
    const {count, handleAdd, handleSubs} = useCounter(initial, stock)
    return (
        <>
            <h4>Quantity</h4>
            <label>
                <p>
                    <button onClick={handleSubs}> - 1</button>
                        {count}
                    <button onClick={handleAdd}> + 1</button>
                </p>
            </label>
            <button onClick={()=> onAdd(count)}>Add Cart</button>
            
        </>
    )
}

export default ItemCount