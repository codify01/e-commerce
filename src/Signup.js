import React, { useState } from 'react'
import {useFormik} from "formik"
const Signup = () => {
    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            password: ""
        },
        onSubmit: (values)=>{
            console.log(values);
        } 
    })
    // console.log(formik.values);
  return (
    <div className='mt-64 container w-[90%] lg:w-1/3 bg-neutral-200 p-8 rounded'>
            <h1 className='text-2xl text-center'>Sign Up Page</h1>
            <form action="" method="" onSubmit={formik.handleSubmit}>
                <input type="text" placeholder='First Name' name="firstname" className='w-full' onChange={formik.handleChange}/>
                <input type="text" placeholder='Last Name'name='lastname' className='w-full' onChange={formik.handleChange}/>
                <input type="text" placeholder='Email' name='email' className='w-full' onChange={formik.handleChange}/>
                <input type="text" placeholder='Password' name='password' className='w-full' onChange={formik.handleChange}/>
                <button className='btn w-full' type='submit'>Submit</button>
            </form>
    </div>
  )
}

export default Signup