import axios from 'axios'
import React, { useState } from 'react'

const Api = () => {
    const [users, setusers] = useState([])
    const [gitUser, setgitUser] = useState([])
    let endpoint = "https://jsonplaceholder.typicode.com/users"
    let git = "https://api.github.com/users"
    const callApi = ()=> {
        alert('hello world')
        axios.get(endpoint)
        .then((response)=>{
            console.log(response.data);
            setusers(response.data)
            console.log(users);
            
        })
        axios.get(git)
        .then((res)=>{
            setgitUser(res.data)
        })
    }
  return (
    <>
        <h1 className="mt-32">API</h1>
        <button className='btn' onClick={callApi}>Call API</button>
        <div>
            {
                users.map((user, index)=>(
                    <div key={index}>
                        <h1>{user.name}</h1>
                        <h1>{user.email}</h1>
                    </div>
                ))
            }
            {
                gitUser.map((each)=>(
                        <div>
                            <img src={each.avatar_url} alt="image" />
                            <h1>{each.login}</h1>
                        </div>
                ))
            } 
            <button></button>
        </div>

    </>
  )
}

export default Api