import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../Redux/CounterSlice'

const Counter = () => {
    const count = useSelector((state)=>state)
    console.log(count);
    // const dispatch = useDispatch()
  return (
    <div>
        <button className='btn'>increment</button>
        <p>{count}</p>
    </div>
  )
}

export default Counter