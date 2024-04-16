import React, { useState } from 'react'
import {useFormik} from "formik"
import  * as yup from 'yup';
import axios from 'axios';
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
            axios.post("http://localhost:8000/user/register", values)
            .then((response)=>{
              console.log(response);
            })
        },
        validationSchema: yup.object({
            firstname : yup.string().required("This field is required").min(4, "Name should have at least 4 characters"),
            lastname : yup.string().required("This field is required"),
            email : yup.string().required("This field is required"),
            password : yup.string().required("This field is required"),
        }) 
    })
    console.log(formik.errors);
  return (
    <div className='mt-64 container w-[90%] lg:w-1/3 bg-neutral-200 p-8 rounded'>
            <h1 className='text-2xl text-center font-semibold'>Create an Account</h1>
            <form action="" method="" onSubmit={formik.handleSubmit}>
                <div className="text-red-600">{formik.touched.firstname && formik.errors.firstname}</div>
                <input type="text" 
                  placeholder='First Name' 
                  name="firstname" 
                  className={formik.touched.firstname&&formik.errors.firstname ? "w-full border-b-2 border-red-500" : "w-full"} 
                  onChange={formik.handleChange} 
                  value={formik.values.firstname}
                  onBlur={formik.handleBlur}
                />
                <div className="text-red-600">{formik.touched.lastname && formik.errors.lastname}</div>
                <input type="text" 
                  placeholder='Last Name'
                  name='lastname' 
                  className={formik.touched.lastname&&formik.errors.lastname ? "w-full border-b-2 border-red-500" : "w-full"} 
                  onChange={formik.handleChange}
                  value={formik.values.lastname}
                  onBlur={formik.handleBlur}
                  />
                <div className="text-red-600">{formik.touched.email && formik.errors.email}</div>
                <input type="text" 
                  placeholder='Email' 
                  name='email' 
                  className={formik.touched.lastname&&formik.errors.lastname ? "w-full border-b-2 border-red-500" : "w-full"} 
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />
                <div className="text-red-600">{formik.touched.password && formik.errors.password}</div>
                <input type="text" 
                  placeholder='Password' 
                  name='password' 
                  className={formik.touched.password&&formik.errors.password ? "w-full border-b-2 border-red-500" : "w-full"} 
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                />
                <button className='btn w-full' type='submit'>Submit</button>
            </form>
    </div>
  )
}

export default Signup