import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <div id="counter-container">
            <div id='counter'>
                <button onClick={() => setCount(count => count - 1)}>-</button>
                <div>{count}</div>
                <button onClick={() => setCount(count => count + 1)}>+</button>
            </div>
        </div>
    )
}

export default Counter
