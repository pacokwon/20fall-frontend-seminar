import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
    return (
        <div id="counter-container">
            <div id='counter'>
                <button>-</button>
                <div>{0}</div>
                <button>+</button>
            </div>
        </div>
    )
}

export default Counter
