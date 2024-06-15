import React, { useState } from 'react'
import Counter from './Counter';
import Buttons from './Buttons';

function Props() {
    const [counter, setCounter] = useState(0);
    const crease = () => {
        setCounter(counter + 1);
    }
    const decrease = () => {
        setCounter(counter - 1);
    }
    const reset = () => {
        setCounter(0);
    }
    return (
        <div >
            <Counter counter={counter} />
            <Buttons crease={crease} decrease={decrease} reset={reset} />
        </div>
    )
}

export default Props