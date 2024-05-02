import axios from 'axios'
import React, { useState } from 'react'

const Upload = () => {
    let endpoint = ""
    const [myFile, setMyFile] = useState("")

    const handleFile = (e)=>{
        let file = e
        let reader = new FileReader()
        reader.onload = () => {
            console.log(reader.result);
            setMyFile(reader.result)
        }
        console.log(file);
    }
    const Uploadimage = async ()=>{
        console.log();
        axios.post(endpoint, { myFile })
    }
  return (
    <>
        <input type='file' className='mt-32' onChange={(e)=>handleFile(e)}/>
        <button onClick={Uploadimage} className='btn'>Upload</button>

    </>
  )
}

export default Upload