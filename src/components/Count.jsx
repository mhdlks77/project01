import { useState } from 'react'

export default function Count(){
    const [count, setCount] = useState(0)

    const increaseCount = () => {
        setCount(count + 1);
    }

    const decreaseCount = () => {
        count > 0 ? setCount(count - 1) : setCount(count);
    }
    return (
        <>
            {count >= 0 ? <h2>Count: {count}</h2> : <h2>Count: -</h2>}
            <div className='buttons-container'>
                <button onClick={decreaseCount}>Decrease Count</button>
                <button onClick={increaseCount}>Increase Count</button>
            </div>
        </>
    )
}
