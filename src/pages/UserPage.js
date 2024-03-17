import React from 'react'
import { useParams } from 'react-router-dom'

const UserPage = () => {
    let {username} = useParams()
    // console.log(useParams);
  return (
    <div>
        <h1>User Page</h1>
        <h1>User Page</h1>
        <h1>User Page</h1>
        <h1>User Page</h1>
        <h1>User Page</h1>
        <h1>User Page {username}</h1>
        <h1>User Page {username}</h1>
        <h1>User Page {username}</h1>
        <h1>User Page {username}</h1>
    </div>
  )
}

export default UserPage