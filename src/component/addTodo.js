import React, { useState } from 'react'

const AddTodo = ({add}) => {
    const [todoItem, settodoItem] = useState('')
    
  return (
    <>
        <input type="text" placeholder='Add Todo...' onChange={(e)=>settodoItem(e.target.value)}/>
        <button className='btn' onClick={()=>add(todoItem)}>add</button>
    </>
  )
}

export default AddTodo