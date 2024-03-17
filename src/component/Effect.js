import React, {useEffect, useState} from 'react'

const Effect = () => {
    const [number, setnumber] = useState(0)
    useEffect(()=>{
        console.log(number);
        return (
            alert("are you sure??")
        )
    },[])
  return (
    <div className='mt-32'>
        <button className='btn' onClick={()=>setnumber(number+1)}>change number {number}</button>
    </div>
  )
}

export default Effect