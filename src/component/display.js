import React from 'react'

const Display = ({items}) => {
  return (
    <>
       {
        items.map((each, index)=>{
            console.log(each);
           return (
            <div>
            <h1 key={index} className='bg-slate-300 mt-2 text-xl w-1/3'>{each}</h1>
            </div>
           )
        })
        }
    </>
  )
}

export default Display