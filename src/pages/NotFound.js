import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='text-center'>
        <h1 className='text-3xl mt-40'>
            Have you lost your way??
        </h1>
        <button className='btn'><Link to="/">Go back home</Link></button>
    </div>
  )
}

export default NotFound