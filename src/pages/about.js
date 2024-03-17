import React from 'react'
import Header from '../header'
import Deals from '../deals'
import { useNavigate } from 'react-router-dom'

const About = () => {
    let navigate = useNavigate()
    const transfer = () => {
        alert('Transfer sucessful')
        navigate("/")
    }
  return (
    <>
        <h1 className='mt-24'>About Us</h1>
        <h1 className='mt-8'>About Us</h1>
        <h1 className='mt-8'>About Us</h1>
        <h1 className='mt-8'>About Us</h1>
        <button className='btn' onClick={transfer}>Submit</button>
    </>
  )
}

export default About